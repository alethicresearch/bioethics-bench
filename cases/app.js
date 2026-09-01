const RESOURCE='../resources/cases/full-200-cases.v1.json';
const SOURCES='../resources/cases/case-sources.v1.json';
const SACRE='https://reflectiveequilibrium.ai/load-bench.html';

const TYPE_LABELS={public:'Public',expert:'Expert',framework:'Framework'};
const SOURCE_LABELS={direct:'Direct source',inferred:'Inferred from source',constructed:'Constructed'};
const state={cases:[],sources:{},shown:[],category:'',q:'',sourcing:new Set(),current:null,rep:'concise',categories:{},wide:false};
const $=id=>document.getElementById(id);
/* Policy texts are recorded as short phrases, often starting lower case. Capitalise the first
   letter for display; the recorded text is unchanged. */
const sentence=s=>{const t=String(s??'').trim();return t?t[0].toUpperCase()+t.slice(1):t;};
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

function buildCases(raw){
  state.categories=raw.categories||{};
  return (raw.cases||[]).map(c=>{
    const types=new Set();
    const sourcing=new Set();
    for(const p of c.policies||[]){for(const t of p.types||[])types.add(t);sourcing.add(p.sourcing);}
    // types is kept for the badges on a case; it is no longer a filter, because every case
    // carries all three and a selection could only return all 200 cases or none.
    const hay=[c.id,c.title,state.categories[c.category],c.concise,c.detailed,...(c.policies||[]).flatMap(p=>[p.text,...(p.types||[])])].join(' ').toLowerCase();
    return {...c,types,sourcing,hay};
  }).sort((a,b)=>Number(a.id.slice(1))-Number(b.id.slice(1)));
}

/* The type and sourcing selectors describe the case exactly: ticking Public and Framework asks
   for cases whose policies are Public and Framework and nothing else. Containment ("has a Public
   policy somewhere") returned almost everything and told a reader nothing about the case. */
function sameSet(selected,present){
  if(!selected.size)return true;
  if(selected.size!==present.size)return false;
  for(const v of selected)if(!present.has(v))return false;
  return true;
}

function matches(c){
  if(state.category&&c.category!==state.category)return false;
  if(state.q&&!c.hay.includes(state.q))return false;
  if(!sameSet(state.sourcing,c.sourcing))return false;
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
  const indexCount=$('index-count');
  if(indexCount)indexCount.textContent=state.shown.length===state.cases.length?`all ${state.cases.length}`:`${state.shown.length} of ${state.cases.length}`;
  const host=$('case-index');
  if(!state.shown.length){host.innerHTML='<p class="idx-empty">No cases match those filters.</p>';$('case-detail').innerHTML='<p class="loading">Change or clear a filter to see cases.</p>';return;}
  const groups=new Map();
  for(const c of state.shown){if(!groups.has(c.category))groups.set(c.category,[]);groups.get(c.category).push(c);}
  host.innerHTML=Object.keys(state.categories).filter(k=>groups.has(k)).map(k=>`<div class="idx-group"><div class="idx-group-title">${esc(state.categories[k])} <span class="idx-group-count">${groups.get(k).length} ${groups.get(k).length===1?'case':'cases'}</span></div>${groups.get(k).map(c=>`<a class="idx-item ${state.current===c.id?'on':''}" href="#${esc(c.id)}" data-id="${esc(c.id)}">${esc(c.title)}</a>`).join('')}</div>`).join('');
  if(!state.shown.some(c=>c.id===state.current))show(state.shown[0].id,false);else markCurrent();
}

function shortCite(t){const c=String(t||'').trim();const cut=c.split(/(?<=\.)\s(?=[A-Z])/).slice(0,2).join(' ');return cut.length>170?cut.slice(0,167)+'…':cut||c;}
function sourceList(list){
  if(!list||!list.length)return '';
  return '<ul class="srclist">'+list.map(s=>{
    const label=esc(shortCite(s.citation));
    const body=s.url?`<a href="${esc(s.url)}" target="_blank" rel="noopener">${label}</a>${s.resolved?'':' <span class="searchmark">search</span>'}`:label;
    return `<li>${body}</li>`;
  }).join('')+'</ul>';
}
function sourceBlock(list,label){
  if(!list||!list.length)return '';
  return `<details class="srcs"><summary>${esc(label)} · ${list.length}</summary>${sourceList(list)}</details>`;
}
// What each sourcing label means, said once where the label is opened rather than in a legend
// the reader has to go back to.
const SOURCE_NOTES={
  direct:'A source states substantially this policy.',
  inferred:'The Bench states this policy as an inference from what the source supports.',
  constructed:'Written by the Bench as a comparison policy. No source states it; the material below is what the case was built from.'
};
/* The sourcing label opens the sources.
   Only 22 of the 200 cases record sources per policy. Everywhere else the label used to sit
   beside nothing, so a reader had no way from a policy to the material behind it. The label is
   now the control: it opens the policy's own citations where they exist, and otherwise the
   case's, said plainly to be the case's. */
function policyProvenance(p,src){
  const own=(src.policies||{})[p.id]||[];
  // Where the case file grouped its references by evidence layer, a policy shows the group for
  // its own type before falling back to the case's whole reading list.
  const layers=src.layers||{};
  const layer=[...new Map((p.types||[]).flatMap(t=>layers[t]||[]).map(x=>[x.citation,x])).values()];
  const list=own.length?own:(layer.length?layer:(src.sources||[]));
  // Most case files record two citations and several sentences about the evidence behind each
  // kind of position. The sentences say more than the list does, so they open with it.
  const notes=(p.types||[]).map(t=>(src.layer_notes||{})[t]).filter(Boolean);
  const badge=sourceBadge(p.sourcing);
  if(!list.length&&!notes.length)return badge;
  const note=SOURCE_NOTES[p.sourcing];
  const lead=own.length?''
    :`<p class="src-lead">${layer.length
      ? 'The Bench records these sources for the case, under the kind of position this policy represents:'
      : 'The Bench records sources for this case rather than for each of its policies. What the case was built from:'}</p>`;
  const notesHtml=own.length?'':notes.map(n=>`<div class="src-note">${esc(n).replace(/\n{2,}/g,'</p><p>').replace(/\n/g,'<br>').replace(/^/,'<p>').replace(/$/,'</p>')}</div>`).join('');
  return `<details class="srcs prov-srcs"><summary>${badge}${own.length?`<span class="src-count">· ${own.length}</span>`:''}</summary>${note?`<p class="src-lead">${esc(note)}</p>`:''}${notesHtml?`<p class="src-lead">What the case records about the evidence behind this kind of position:</p>${notesHtml}`:''}${list.length?`${lead}${sourceList(list)}`:''}</details>`;
}
function typeBadges(types){return (types||[]).map(t=>`<span class="ptype ${esc(t)}">${esc(TYPE_LABELS[t]||t)}</span>`).join('');}
function sourceBadge(s){return `<span class="prov ${esc(s)}">${esc(SOURCE_LABELS[s]||s)}</span>`;}

function sacreUrl(c){const u=new URL(SACRE);u.searchParams.set('case',c.id);u.searchParams.set('form',state.rep);return u.toString();}

function renderDetail(c){
  const src=state.sources[c.id]||{sources:[],policies:{}};
  const unreviewed=(c.policies||[]).some(p=>!p.type_reviewed);
  const policies=(c.policies||[]).map(p=>`<div class="rec-policy">
      <div class="rec-policy-text">${esc(sentence(state.rep==='detailed'&&p.text_detailed?p.text_detailed:p.text))}</div>
      <div class="rec-policy-meta">${typeBadges(p.types)}${p.written_by_bench?'<span class="bench-written" title="Written by Bioethics Bench for this case">written by the Bench</span>':''}${p.type_reviewed?'<span class="reviewed" title="This policy type has been reviewed">reviewed</span>':''}</div>
      ${policyProvenance(p,src)}
    </div>`).join('');
  $('case-detail').innerHTML=`
    <div class="record">
      <button id="pop-out" class="pop-out" type="button" aria-pressed="${state.wide}" title="${state.wide?'Show the case list again':'Widen the record to the full page'}" aria-label="${state.wide?'Show the case list again':'Widen the record to the full page'}">${state.wide?'\u21f2':'\u21f1'}</button>
      <div class="record-row">
        <div class="record-key">Case</div>
        <div class="record-val">${esc(c.title)} <span class="chip">${esc(state.categories[c.category]||c.category)}</span> <span class="chip chip-id">${esc(c.id)}</span></div>
      </div>
      <div class="record-row">
        <div class="record-key">Decision</div>
        <div class="record-val">
          <div class="rec-tools"><div class="pills"><button class="pill-btn rep-btn ${state.rep==='concise'?'on':''}" data-rep="concise">Concise</button><button class="pill-btn rep-btn ${state.rep==='detailed'?'on':''}" data-rep="detailed">Detailed</button></div></div>
          <p id="scenario" class="rec-scenario">${esc(c[state.rep])}</p>
        </div>
      </div>
      <div class="record-row">
        <div class="record-key">Policies</div>
        <div class="record-val">${c.policies.length} recorded, each with its type and how it was sourced. ${sourceBlock(src.sources,'Sources for this case')}</div>
      </div>
      <div class="record-policies">${policies}</div>
      <div class="record-row">
        <div class="record-key">Also recorded</div>
        <div class="record-val">Concise and detailed versions of the case and of every policy · the sources behind the case, and behind a policy where the Bench records them · whether each policy type has been reviewed
          ${unreviewed?'<p class="rec-note">Policy types marked <span class="reviewed">reviewed</span> have been checked against the sources. The rest are a first pass and may change.</p>':''}
          ${c.case_file_objects_to_pool?`<p class="rec-note">No ${esc(TYPE_LABELS[c.case_file_objects_to_pool]||'')} policy here comes from a source: this case's file judged the available evidence too thin to support one, so the ${esc((TYPE_LABELS[c.case_file_objects_to_pool]||'').toLowerCase())} policy was written by the Bench as a comparison.</p>`:''}
        </div>
      </div>
    </div>
    <div class="case-actions"><a id="load-sacre" class="sacre-btn" href="${esc(sacreUrl(c))}" target="_blank" rel="noopener">Load in SACRE \u2197</a><span>Loads this case and its Public, Expert, and Framework policies into a new evaluation.</span></div>
    <div class="detail-links"><a href="https://github.com/alethicresearch/bioethics-bench/blob/main/${esc(c.source_file)}" target="_blank" rel="noopener">Sources and further detail \u2197</a></div>`;
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
  state.q='';state.category='';state.sourcing.clear();
  $('search').value='';document.querySelectorAll('.check input').forEach(x=>x.checked=false);
  history.replaceState(null,'',location.pathname+(state.current?`#${state.current}`:''));
  renderCategories();renderIndex();
}

async function boot(){
  try{
    const r=await fetch(RESOURCE);if(!r.ok)throw new Error('Could not load cases');
    const raw=await r.json();
    // Sources are a separate file: the case list should still render if it cannot be read.
    try{const sr=await fetch(SOURCES);if(sr.ok)state.sources=(await sr.json()).cases||{};}catch{}state.cases=buildCases(raw);applyUrlCategory();renderCategories();
    const opening=state.cases.find(c=>c.id===location.hash.slice(1));state.current=opening?.id||null;renderIndex();if(opening&&matches(opening))show(opening.id,false);
  }catch(e){$('count').textContent='Cases unavailable';$('case-index').innerHTML=`<p class="idx-empty">${esc(e.message)}</p>`;$('case-detail').innerHTML='<p class="loading">The case data could not be loaded.</p>';}
}

$('search').addEventListener('input',e=>{state.q=e.target.value.trim().toLowerCase();renderIndex();});
$('categories').addEventListener('click',e=>{const b=e.target.closest('[data-cat]');if(!b)return;state.category=b.dataset.cat;renderCategories();renderIndex();});
document.querySelectorAll('.direct input,.inferred input,.constructed input').forEach(input=>input.addEventListener('change',e=>{if(e.target.checked)state.sourcing.add(e.target.value);else state.sourcing.delete(e.target.value);renderIndex();}));
$('clear').addEventListener('click',clearFilters);

/* The filter panel is sticky and tall; on a laptop it took most of the screen before a case
   appeared. It folds away, and the choice is remembered, so a reader who has filtered once can
   put the controls out of the way and keep the result. */
(function filterPanel(){
  const body=$('filter-body'), btn=$('toggle-filters');
  if(!body||!btn)return;
  const apply=(open)=>{
    body.hidden=!open;
    btn.textContent=open?'Hide filters':'Show filters';
    btn.setAttribute('aria-expanded',String(open));
  };
  let open=true;
  try{open=localStorage.getItem('bench-filters-open')!=='0';}catch{}
  apply(open);
  btn.addEventListener('click',()=>{
    open=!open;
    apply(open);
    try{localStorage.setItem('bench-filters-open',open?'1':'0');}catch{}
  });
})();

/* The list sticks below the filter bar, so its offset is the bar's actual height: with the
   filters folded away the bar is short, and a fixed offset left the list floating below the case. */
(function stickyOffset(){
  const bar=document.querySelector('.filters');
  if(!bar||!window.ResizeObserver)return;
  const set=()=>{
    const navHeight=58;
    document.documentElement.style.setProperty('--index-top',`${Math.round(navHeight + bar.offsetHeight + 18)}px`);
  };
  set();
  new ResizeObserver(set).observe(bar);
  window.addEventListener('resize',set);
})();

/* The split between the list and the case is a reading preference, not a layout constant: a long
   case title needs a wider list, a long policy needs a wider record. Drag the divider, or use the
   arrow keys on it; double-click returns to the default. */
(function columnResize(){
  const browser=$('browser'), handle=$('col-handle');
  if(!browser||!handle)return;
  const MIN=200, MAX=560, DEFAULT=260;
  const set=(w,save=true)=>{
    const width=Math.round(Math.min(MAX,Math.max(MIN,w)));
    browser.style.setProperty('--index-w',`${width}px`);
    if(save){try{localStorage.setItem('bench-index-width',String(width));}catch{}}
    return width;
  };
  let stored=null;
  try{stored=Number(localStorage.getItem('bench-index-width'))||null;}catch{}
  if(stored)set(stored,false);

  const current=()=>browser.querySelector('.case-index').getBoundingClientRect().width;
  const onMove=(e)=>set(e.clientX-browser.getBoundingClientRect().left);
  const stop=()=>{
    handle.classList.remove('dragging');
    document.body.classList.remove('resizing');
    window.removeEventListener('pointermove',onMove);
    window.removeEventListener('pointerup',stop);
  };
  handle.addEventListener('pointerdown',(e)=>{
    e.preventDefault();
    handle.classList.add('dragging');
    document.body.classList.add('resizing');
    window.addEventListener('pointermove',onMove);
    window.addEventListener('pointerup',stop);
  });
  handle.addEventListener('dblclick',()=>set(DEFAULT));
  handle.addEventListener('keydown',(e)=>{
    if(e.key==='ArrowLeft')set(current()-20);
    else if(e.key==='ArrowRight')set(current()+20);
    else if(e.key==='Home')set(DEFAULT);
    else return;
    e.preventDefault();
  });
})();
$('case-index').addEventListener('click',e=>{const a=e.target.closest('.idx-item');if(!a)return;e.preventDefault();show(a.dataset.id);});
$('case-detail').addEventListener('click',e=>{const b=e.target.closest('.rep-btn');if(!b)return;state.rep=b.dataset.rep;const c=state.cases.find(x=>x.id===state.current);if(c)renderDetail(c);});
/* Popping the record out gives it the whole page: the case list and the drag handle step aside
   until it is put back. The choice is remembered, the way the column width is. */
$('case-detail').addEventListener('click',e=>{
  if(!e.target.closest('#pop-out'))return;
  state.wide=!state.wide;
  document.getElementById('browser').classList.toggle('wide',state.wide);
  try{localStorage.setItem('bench-record-wide',state.wide?'1':'0');}catch{}
  const c=state.cases.find(x=>x.id===state.current);if(c)renderDetail(c);
});
try{if(localStorage.getItem('bench-record-wide')==='1'){state.wide=true;document.getElementById('browser').classList.add('wide');}}catch{}
window.addEventListener('hashchange',()=>{const id=location.hash.slice(1);if(id&&id!==state.current)show(id,false);});
boot();