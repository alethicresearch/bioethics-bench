const RESOURCE='../../resources/cases/full-200-cases.v1.json';
const SACRE='https://reflectiveequilibrium.ai/';

const TYPE_LABELS={public:'Public',expert:'Expert',framework:'Framework'};
const SOURCE_LABELS={direct:'Direct source',inferred:'Inferred from source',constructed:'Constructed'};
const state={cases:[],shown:[],category:'',q:'',types:new Set(),sourcing:new Set(),current:null,rep:'concise',categories:{}};
const $=id=>document.getElementById(id);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

function buildCases(raw){
  state.categories=raw.categories||{};
  return (raw.cases||[]).map(c=>{
    const types=new Set();
    const sourcing=new Set();
    for(const p of c.policies||[]){for(const t of p.types||[])types.add(t);sourcing.add(p.sourcing);}
    const hay=[c.id,c.title,state.categories[c.category],c.concise,c.detailed,...(c.policies||[]).flatMap(p=>[p.text,p.source_note,...(p.types||[])])].join(' ').toLowerCase();
    return {...c,types,sourcing,hay};
  }).sort((a,b)=>Number(a.id.slice(1))-Number(b.id.slice(1)));
}

function matches(c){
  if(state.category&&c.category!==state.category)return false;
  if(state.q&&!c.hay.includes(state.q))return false;
  for(const t of state.types)if(!c.types.has(t))return false;
  for(const s of state.sourcing)if(!c.sourcing.has(s))return false;
  return true;
}

function renderCategories(){
  const order=Object.keys(state.categories);
  $('categories').innerHTML=`<button class="pill-btn ${state.category?'':'on'}" data-cat="">All</button>`+
    order.map(k=>`<button class="pill-btn ${state.category===k?'on':''}" data-cat="${esc(k)}">${esc(state.categories[k])}</button>`).join('');
}

function renderIndex(){
  state.shown=state.cases.filter(matches);
  $('count').textContent=`${state.shown.length} of ${state.cases.length} cases`;
  const host=$('case-index');
  if(!state.shown.length){host.innerHTML='<p class="idx-empty">No cases match those filters.</p>';$('case-detail').innerHTML='<p class="loading">Change or clear a filter to see cases.</p>';return;}
  const groups=new Map();
  for(const c of state.shown){if(!groups.has(c.category))groups.set(c.category,[]);groups.get(c.category).push(c);}
  host.innerHTML=Object.keys(state.categories).filter(k=>groups.has(k)).map(k=>`<div class="idx-group"><div class="idx-group-title">${esc(state.categories[k])} · ${groups.get(k).length}</div>${groups.get(k).map(c=>`<a class="idx-item ${state.current===c.id?'on':''}" href="#${esc(c.id)}" data-id="${esc(c.id)}">${esc(c.title)}</a>`).join('')}</div>`).join('');
  if(!state.shown.some(c=>c.id===state.current))show(state.shown[0].id,false);else markCurrent();
}

function typeBadges(types){return (types||[]).map(t=>`<span class="ptype ${esc(t)}">${esc(TYPE_LABELS[t]||t)}</span>`).join('');}
function sourceBadge(s){return `<span class="prov ${esc(s)}">${esc(SOURCE_LABELS[s]||s)}</span>`;}
function sourceSummary(c){return Object.keys(SOURCE_LABELS).filter(k=>c.sourcing.has(k)).map(k=>sourceBadge(k)).join(' ');}
function typeSummary(c){return Object.keys(TYPE_LABELS).filter(k=>c.types.has(k)).map(k=>`<span class="ptype ${k}">${TYPE_LABELS[k]}</span>`).join(' ');}

function sacreUrl(c){const u=new URL(SACRE);u.searchParams.set('benchCase',c.id);u.searchParams.set('form',state.rep);return u.toString();}

function renderDetail(c){
  const policies=(c.policies||[]).map(p=>`<div class="policy"><p>${esc(p.text)}</p><div class="policy-meta">${typeBadges(p.types)}${sourceBadge(p.sourcing)}</div></div>`).join('');
  $('case-detail').innerHTML=`
    <div class="detail-top"><span class="case-id">${esc(c.id)}</span><span class="topic">${esc(state.categories[c.category]||c.category)}</span></div>
    <h2>${esc(c.title)}</h2>
    <div class="policy-count">${c.policies.length} policies</div>
    <div class="source-summary">${typeSummary(c)}${sourceSummary(c)}</div>
    <div class="scenario-tools"><span class="scenario-label">Case</span><div class="pills"><button class="pill-btn rep-btn ${state.rep==='concise'?'on':''}" data-rep="concise">Concise</button><button class="pill-btn rep-btn ${state.rep==='detailed'?'on':''}" data-rep="detailed">Detailed</button></div></div>
    <div id="scenario" class="scenario-box">${esc(c[state.rep])}</div>
    <div class="case-actions"><a id="load-sacre" class="sacre-btn" href="${esc(sacreUrl(c))}" target="_blank" rel="noopener">Load in SACRE ↗</a><span>Loads this case and its Public, Expert, and Framework policies into a new evaluation.</span></div>
    <div class="policies-head">Policies</div>
    <div class="policy-list">${policies}</div>
    <div class="detail-links"><a href="https://github.com/alethicresearch/bioethics-bench/blob/main/${esc(c.source_file)}" target="_blank" rel="noopener">Sources and further detail ↗</a></div>`;
}

function markCurrent(){document.querySelectorAll('.idx-item').forEach(a=>a.classList.toggle('on',a.dataset.id===state.current));}
function show(id,scroll=true){
  const c=state.cases.find(x=>x.id===id);if(!c)return;
  state.current=id;
  if(location.hash.slice(1)!==id)history.replaceState(null,'',`${location.pathname}${location.search}#${id}`);
  markCurrent();renderDetail(c);
  if(scroll&&window.matchMedia('(max-width:900px)').matches)$('case-detail').scrollIntoView({behavior:'smooth',block:'start'});
}

function applyUrlCategory(){const value=new URLSearchParams(location.search).get('category');if(value&&state.categories[value])state.category=value;}
function clearFilters(){
  state.q='';state.category='';state.types.clear();state.sourcing.clear();
  $('search').value='';document.querySelectorAll('.check input').forEach(x=>x.checked=false);
  history.replaceState(null,'',location.pathname+(state.current?`#${state.current}`:''));
  renderCategories();renderIndex();
}

async function boot(){
  try{
    const r=await fetch(RESOURCE);if(!r.ok)throw new Error('Could not load cases');
    const raw=await r.json();state.cases=buildCases(raw);applyUrlCategory();renderCategories();
    const opening=state.cases.find(c=>c.id===location.hash.slice(1));state.current=opening?.id||null;renderIndex();if(opening&&matches(opening))show(opening.id,false);
  }catch(e){$('count').textContent='Cases unavailable';$('case-index').innerHTML=`<p class="idx-empty">${esc(e.message)}</p>`;$('case-detail').innerHTML='<p class="loading">The case data could not be loaded.</p>';}
}

$('search').addEventListener('input',e=>{state.q=e.target.value.trim().toLowerCase();renderIndex();});
$('categories').addEventListener('click',e=>{const b=e.target.closest('[data-cat]');if(!b)return;state.category=b.dataset.cat;renderCategories();renderIndex();});
document.querySelectorAll('.type-public input,.type-expert input,.type-framework input').forEach(input=>input.addEventListener('change',e=>{if(e.target.checked)state.types.add(e.target.value);else state.types.delete(e.target.value);renderIndex();}));
document.querySelectorAll('.direct input,.inferred input,.constructed input').forEach(input=>input.addEventListener('change',e=>{if(e.target.checked)state.sourcing.add(e.target.value);else state.sourcing.delete(e.target.value);renderIndex();}));
$('clear').addEventListener('click',clearFilters);
$('case-index').addEventListener('click',e=>{const a=e.target.closest('.idx-item');if(!a)return;e.preventDefault();show(a.dataset.id);});
$('case-detail').addEventListener('click',e=>{const b=e.target.closest('.rep-btn');if(!b)return;state.rep=b.dataset.rep;const c=state.cases.find(x=>x.id===state.current);if(c)renderDetail(c);});
window.addEventListener('hashchange',()=>{const id=location.hash.slice(1);if(id&&id!==state.current)show(id,false);});
boot();