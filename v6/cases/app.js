const RESOURCE='../../resources/case-families/full-200-rich-candidate-universes.v1.1.json';

const CATEGORIES={
  clinical:'Clinical care',
  children:'Children & families',
  'end-of-life':'End of life',
  reproduction:'Reproduction & genetics',
  research:'Research ethics',
  'public-health':'Public health & allocation',
  transplant:'Transplantation & donation',
  'global-health':'Global health',
  'mental-health':'Mental health & disability',
  neuro:'Neuroethics',
  'ai-data':'AI & health data',
  animals:'Animals & One Health',
  environment:'Climate & environment',
  everyday:'Everyday practice'
};
const CATEGORY_ORDER=Object.keys(CATEGORIES);
const SOURCE_LABELS={direct:'Direct source',inferred:'Inferred from source',constructed:'Constructed'};
const state={cases:[],shown:[],category:'',q:'',sourcing:new Set(),current:null,rep:'concise',markdown:new Map()};
const $=id=>document.getElementById(id);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

function categoryFor(inventoryId){
  const n=Number(String(inventoryId).replace(/\D/g,''));
  if(n<=20)return 'clinical';
  if(n<=25)return 'children';
  if(n<=40)return 'end-of-life';
  if(n<=70)return 'reproduction';
  if(n<=93)return 'research';
  if(n<=100)return 'public-health';
  if(n<=113)return 'transplant';
  if(n<=121)return 'global-health';
  if(n<=126)return 'public-health';
  if(n<=134)return 'mental-health';
  if(n<=138)return 'neuro';
  if(n<=151)return 'ai-data';
  if(n<=166)return 'animals';
  if(n<=175)return 'environment';
  return 'everyday';
}

// Public / Expert / Framework describe what kind of policy a position is.
// This function answers a different question: how was the policy sourced?
function sourceType(policy){
  const cls=String(policy.provenance_class||'').toLowerCase();
  const label=String(policy.audit_provenance_label||'').toLowerCase();
  if(cls==='direct-source'||label.includes('direct policy')||label.includes('direct professional')||label.includes('direct-source'))return 'direct';
  if(cls==='constructed-comparator'||label.includes('constructed')||label.includes('synthetic'))return 'constructed';
  return 'inferred';
}

function sourceTypes(c){return new Set((c.candidate_universe||[]).map(sourceType));}
function caseNumber(c){return String(c.inventory_id||'').replace(/^M/i,'');}

function buildCases(raw){
  return (raw.cases||[]).map(c=>{
    const category=categoryFor(c.inventory_id);
    const sources=sourceTypes(c);
    const policies=c.candidate_universe||[];
    const hay=[c.title,CATEGORIES[category],...policies.map(p=>p.text)].join(' ').toLowerCase();
    return {...c,category,sources,policies,hay};
  }).sort((a,b)=>Number(caseNumber(a))-Number(caseNumber(b)));
}

function matches(c){
  if(state.category&&c.category!==state.category)return false;
  if(state.q&&!c.hay.includes(state.q))return false;
  for(const s of state.sourcing)if(!c.sources.has(s))return false;
  return true;
}

function renderCategories(){
  $('categories').innerHTML=`<button class="pill-btn ${state.category?'':'on'}" data-cat="">All</button>`+
    CATEGORY_ORDER.map(k=>`<button class="pill-btn ${state.category===k?'on':''}" data-cat="${k}">${esc(CATEGORIES[k])}</button>`).join('');
}

function renderIndex(){
  state.shown=state.cases.filter(matches);
  $('count').textContent=`${state.shown.length} of ${state.cases.length} cases`;
  const host=$('case-index');
  if(!state.shown.length){host.innerHTML='<p class="idx-empty">No cases match those filters.</p>';$('case-detail').innerHTML='<p class="loading">Change or clear a filter to see cases.</p>';return;}
  const groups=new Map();
  for(const c of state.shown){if(!groups.has(c.category))groups.set(c.category,[]);groups.get(c.category).push(c);}
  host.innerHTML=CATEGORY_ORDER.filter(k=>groups.has(k)).map(k=>`<div class="idx-group"><div class="idx-group-title">${esc(CATEGORIES[k])} · ${groups.get(k).length}</div>${groups.get(k).map(c=>`<a class="idx-item ${state.current===c.inventory_id?'on':''}" href="#${esc(c.inventory_id)}" data-id="${esc(c.inventory_id)}">${esc(c.title)}</a>`).join('')}</div>`).join('');
  if(!state.shown.some(c=>c.inventory_id===state.current))show(state.shown[0].inventory_id,false);
  else markCurrent();
}

function sourceSummary(c){
  return Object.keys(SOURCE_LABELS).filter(k=>c.sources.has(k)).map(k=>`<span class="prov ${k}">${SOURCE_LABELS[k]}</span>`).join(' ');
}

function renderDetail(c){
  const policies=c.policies.map(p=>{
    const t=sourceType(p);
    return `<div class="policy"><p>${esc(p.text)}</p><span class="prov ${t}">${esc(SOURCE_LABELS[t])}</span></div>`;
  }).join('');
  $('case-detail').innerHTML=`
    <div class="detail-top"><span class="case-id">Case ${esc(caseNumber(c))}</span><span class="topic">${esc(CATEGORIES[c.category])}</span></div>
    <h2>${esc(c.title)}</h2>
    <div class="policy-count">${c.candidate_count} policy options</div>
    <div class="source-summary">${sourceSummary(c)}</div>
    <div class="scenario-tools"><span class="scenario-label">Case description</span><div class="pills"><button class="pill-btn rep-btn ${state.rep==='concise'?'on':''}" data-rep="concise">Concise</button><button class="pill-btn rep-btn ${state.rep==='detailed'?'on':''}" data-rep="detailed">Detailed</button></div></div>
    <div id="scenario" class="scenario-box"><span class="loading">Loading case description…</span></div>
    <div class="policies-head">Policy options</div>
    <div class="policy-list">${policies}</div>
    <div class="detail-links"><a href="https://github.com/alethicresearch/bioethics-bench/blob/main/${esc(c.deep_case_path)}" target="_blank" rel="noopener">Sources and further detail ↗</a></div>`;
  loadScenario(c);
}

function stripMarkdown(s){
  return String(s||'')
    .replace(/\[([^\]]+)\]\([^\)]+\)/g,'$1')
    .replace(/\*\*([^*]+)\*\*/g,'$1')
    .replace(/\*([^*]+)\*/g,'$1')
    .replace(/`([^`]+)`/g,'$1')
    .replace(/^>\s?/gm,'')
    .replace(/\s+/g,' ')
    .trim();
}

function extractSection(md,rep){
  const label=rep==='detailed'?'Detailed representation':'Concise representation';
  const re=new RegExp(`^##\\s+(?:\\d+[.)]?\\s+)?${label}\\s*$`,'im');
  const m=re.exec(md);
  if(!m)return '';
  const after=md.slice(m.index+m[0].length);
  const next=after.search(/^##\s+/m);
  const text=next>=0?after.slice(0,next):after;
  return stripMarkdown(text);
}

async function getMarkdown(c){
  if(state.markdown.has(c.inventory_id))return state.markdown.get(c.inventory_id);
  const url=`../../${c.deep_case_path}`;
  const r=await fetch(url);
  if(!r.ok)throw new Error('Case description unavailable');
  const md=await r.text();
  state.markdown.set(c.inventory_id,md);
  return md;
}

async function loadScenario(c){
  const host=$('scenario');
  if(!host)return;
  host.innerHTML='<span class="loading">Loading case description…</span>';
  try{
    const md=await getMarkdown(c);
    if(state.current!==c.inventory_id)return;
    const text=extractSection(md,state.rep);
    host.textContent=text||'Case description is available in the source file.';
  }catch{host.textContent='Case description is available in the source file.';}
}

function markCurrent(){document.querySelectorAll('.idx-item').forEach(a=>a.classList.toggle('on',a.dataset.id===state.current));}
function show(id,scroll=true){
  const c=state.cases.find(x=>x.inventory_id===id);
  if(!c)return;
  state.current=id;
  if(location.hash.slice(1)!==id)history.replaceState(null,'',`#${id}`);
  markCurrent();
  renderDetail(c);
  if(scroll&&window.matchMedia('(max-width:900px)').matches)$('case-detail').scrollIntoView({behavior:'smooth',block:'start'});
}

function applyUrlCategory(){
  const value=new URLSearchParams(location.search).get('category');
  if(value&&CATEGORIES[value])state.category=value;
}

function clearFilters(){
  state.q='';state.category='';state.sourcing.clear();
  $('search').value='';document.querySelectorAll('.check input').forEach(x=>x.checked=false);
  history.replaceState(null,'',location.pathname+(state.current?`#${state.current}`:''));
  renderCategories();renderIndex();
}

async function boot(){
  try{
    const r=await fetch(RESOURCE);if(!r.ok)throw new Error('Could not load cases');
    state.cases=buildCases(await r.json());
    applyUrlCategory();
    renderCategories();
    const opening=state.cases.find(c=>c.inventory_id===location.hash.slice(1));
    state.current=opening?.inventory_id||null;
    renderIndex();
    if(opening&&matches(opening))show(opening.inventory_id,false);
  }catch(e){$('count').textContent='Cases unavailable';$('case-index').innerHTML=`<p class="idx-empty">${esc(e.message)}</p>`;$('case-detail').innerHTML='<p class="loading">The case data could not be loaded.</p>';}
}

$('search').addEventListener('input',e=>{state.q=e.target.value.trim().toLowerCase();renderIndex();});
$('categories').addEventListener('click',e=>{const b=e.target.closest('[data-cat]');if(!b)return;state.category=b.dataset.cat;renderCategories();renderIndex();});
document.querySelectorAll('.check input').forEach(input=>input.addEventListener('change',e=>{if(e.target.checked)state.sourcing.add(e.target.value);else state.sourcing.delete(e.target.value);renderIndex();}));
$('clear').addEventListener('click',clearFilters);
$('case-index').addEventListener('click',e=>{const a=e.target.closest('.idx-item');if(!a)return;e.preventDefault();show(a.dataset.id);});
$('case-detail').addEventListener('click',e=>{const b=e.target.closest('.rep-btn');if(!b)return;state.rep=b.dataset.rep;document.querySelectorAll('.rep-btn').forEach(x=>x.classList.toggle('on',x.dataset.rep===state.rep));const c=state.cases.find(x=>x.inventory_id===state.current);if(c)loadScenario(c);});
window.addEventListener('hashchange',()=>{const id=location.hash.slice(1);if(id&&id!==state.current)show(id,false);});
boot();