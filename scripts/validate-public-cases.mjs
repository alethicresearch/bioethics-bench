import fs from 'node:fs';

const FILE='resources/cases/full-200-cases.v1.json';
const resource=JSON.parse(fs.readFileSync(FILE,'utf8'));
const errors=[];
if(resource.case_count!==200||resource.cases?.length!==200)errors.push(`expected 200 cases, found ${resource.cases?.length ?? 0}`);
if(resource.policy_count!==1298)errors.push(`expected 1298 policies, found ${resource.policy_count}`);
const ids=new Set();
for(const c of resource.cases||[]){
  if(ids.has(c.id))errors.push(`duplicate case ${c.id}`);ids.add(c.id);
  if(!c.concise?.trim()||!c.detailed?.trim())errors.push(`${c.id}: missing concise/detailed case text`);
  const present=new Set();
  for(const p of c.policies||[]){
    if(!p.text?.trim())errors.push(`${c.id}:${p.id}: empty policy`);
    if(!['direct','inferred','constructed'].includes(p.sourcing))errors.push(`${c.id}:${p.id}: invalid sourcing ${p.sourcing}`);
    for(const type of p.types||[]){
      if(!['public','expert','framework'].includes(type))errors.push(`${c.id}:${p.id}: invalid policy type ${type}`);
      present.add(type);
    }
  }
  for(const type of ['public','expert','framework'])if(!present.has(type))errors.push(`${c.id}: no ${type} policy`);
}
if(errors.length){
  console.error(`Public case validation failed (${errors.length} issue${errors.length===1?'':'s'}):`);
  for(const e of errors)console.error(`- ${e}`);
  process.exit(1);
}
console.log(`Public case validation passed: ${resource.case_count} cases / ${resource.policy_count} policies; every case has Public, Expert, and Framework policies.`);
