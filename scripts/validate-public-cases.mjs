import fs from 'node:fs';

const FILE='resources/cases/full-200-cases.v1.json';
const resource=JSON.parse(fs.readFileSync(FILE,'utf8'));
const errors=[];
if(resource.case_count!==200||resource.cases?.length!==200)errors.push(`expected 200 cases, found ${resource.cases?.length ?? 0}`);
// 1298 researched policies, plus one written by the Bench for each of the 138 cases that
// recorded no policy of some type.
if(resource.policy_count!==1436)errors.push(`expected 1436 policies, found ${resource.policy_count}`);
const written=(resource.cases||[]).flatMap(c=>c.policies.filter(p=>p.written_by_bench));
if(written.length!==138)errors.push(`expected 138 Bench-written policies, found ${written.length}`);
if(written.some(p=>p.sourcing!=='constructed'))errors.push('a Bench-written policy is not marked constructed');
const ids=new Set();
const typeCoverage={public:0,expert:0,framework:0};
for(const c of resource.cases||[]){
  if(ids.has(c.id))errors.push(`duplicate case ${c.id}`);ids.add(c.id);
  if(!c.concise?.trim()||!c.detailed?.trim())errors.push(`${c.id}: missing concise/detailed case text`);
  if(!Array.isArray(c.policies)||c.policies.length===0)errors.push(`${c.id}: no policies`);
  const present=new Set();
  const policyIds=new Set();
  for(const p of c.policies||[]){
    if(policyIds.has(p.id))errors.push(`${c.id}: duplicate policy id ${p.id}`);policyIds.add(p.id);
    if(!p.text?.trim())errors.push(`${c.id}:${p.id}: empty policy`);
    if(!['direct','inferred','constructed'].includes(p.sourcing))errors.push(`${c.id}:${p.id}: invalid sourcing ${p.sourcing}`);
    if(!Array.isArray(p.types)||p.types.length===0)errors.push(`${c.id}:${p.id}: missing policy type`);
    for(const type of p.types||[]){
      if(!['public','expert','framework'].includes(type))errors.push(`${c.id}:${p.id}: invalid policy type ${type}`);
      else present.add(type);
    }
  }
  for(const type of ['public','expert','framework']){
    if(!present.has(type))errors.push(`${c.id}: no ${type} policy`);
    else typeCoverage[type]+=1;
  }
}
// A detailed policy states the same policy with its conditions; it should not be shorter than
// the concise form, and it should not be the concise text over again.
for(const c of resource.cases||[]){
  for(const p of c.policies||[]){
    if(!p.text_detailed)continue;
    if(p.text_detailed.trim()===p.text.trim())errors.push(`${c.id}:${p.id}: detailed text repeats the concise text`);
    else if(p.text_detailed.length<=p.text.length)errors.push(`${c.id}:${p.id}: detailed text is not longer than the concise text`);
  }
}

if(errors.length){
  console.error(`Public case validation failed (${errors.length} issue${errors.length===1?'':'s'}):`);
  for(const e of errors)console.error(`- ${e}`);
  process.exit(1);
}
console.log(`Public case validation passed: ${resource.case_count} cases / ${resource.policy_count} policies.`);
console.log(`Cases carrying each policy type: Public ${typeCoverage.public}/${resource.case_count}; Expert ${typeCoverage.expert}/${resource.case_count}; Framework ${typeCoverage.framework}/${resource.case_count}.`);
console.log(`Every case carries all three policy types; ${written.length} are policies the Bench wrote for a case that recorded none of that type, each marked constructed.`);
const missingDetail=resource.policy_count-resource.detailed_policy_count;
console.log(missingDetail
  ? `Detailed policy forms written: ${resource.detailed_policy_count} of ${resource.policy_count}; the rest fall back to their concise wording.`
  : `Every policy has a detailed form as well as a concise one (${resource.policy_count}).`);
console.log(`${(resource.cases||[]).filter(c=>c.case_file_objects_to_pool).length} of those cases record a case-file judgment that the evidence was too thin for such a pool, and say so on the case.`);
