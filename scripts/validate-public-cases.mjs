import fs from 'node:fs';

const FILE='resources/cases/full-200-cases.v1.json';
const resource=JSON.parse(fs.readFileSync(FILE,'utf8'));
const errors=[];
if(resource.case_count!==200||resource.cases?.length!==200)errors.push(`expected 200 cases, found ${resource.cases?.length ?? 0}`);
if(resource.policy_count!==1298)errors.push(`expected 1298 policies, found ${resource.policy_count}`);
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
  for(const type of present)typeCoverage[type]+=1;
}
if(errors.length){
  console.error(`Public case validation failed (${errors.length} issue${errors.length===1?'':'s'}):`);
  for(const e of errors)console.error(`- ${e}`);
  process.exit(1);
}
console.log(`Public case validation passed: ${resource.case_count} cases / ${resource.policy_count} policies.`);
console.log(`Cases containing reviewed policy types: Public ${typeCoverage.public}/${resource.case_count}; Expert ${typeCoverage.expert}/${resource.case_count}; Framework ${typeCoverage.framework}/${resource.case_count}.`);
console.log('Policy type coverage is allowed to vary by case; types are not manufactured to fill missing categories.');
