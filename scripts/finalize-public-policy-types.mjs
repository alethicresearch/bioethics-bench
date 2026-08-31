import fs from 'node:fs';

const FILE='resources/cases/full-200-cases.v1.json';
const data=JSON.parse(fs.readFileSync(FILE,'utf8'));

const TERMS={
  public:[
    ['patient',7],['person',4],['individual',4],['family',6],['parent',6],['adolescent',5],['child',4],['donor',5],['participant',5],['community',5],['worker',4],['recipient',4],['resident',3],['consumer',4],['citizen',4],
    ['choice',5],['choose',5],['preference',6],['refusal',5],['refuse',5],['autonomy',4],['consent',4],['access',3],['patient-led',7],['shared decision',4],['allow',2],['honor',3],['honour',3],['respect',3]
  ],
  expert:[
    ['clinician',8],['professional',8],['hospital',7],['program',6],['institution',7],['committee',7],['service',5],['health system',7],['authority',6],['regulator',7],['review board',8],['irb',8],['guideline',7],['protocol',6],['oversight',7],['practice',5],
    ['require',3],['permit',3],['prohibit',3],['report',3],['review',3],['monitor',3],['screen',3],['refer',3],['disclos',3],['counsel',3]
  ],
  framework:[
    ['autonomy',9],['rights',9],['right to',7],['justice',9],['fairness',9],['equity',9],['equal moral',9],['equal status',8],['dignity',8],['benefic',8],['nonmalefic',8],['harm',4],['proportional',8],['solidarity',8],['stewardship',7],['capabilit',8],['precaution',8],['utility',8],['utilitarian',9],['consequential',8],['cost-effective',7],['maximize',6],['maximise',6],['best interests',9],['substituted judgment',9],['moral status',9],['welfare',6],['reciprocity',7],['liberty',7]
  ]
};

function score(policy,type){
  const text=`${policy.text||''} ${policy.source_note||''}`.toLowerCase();
  let total=0;
  for(const [term,weight] of TERMS[type])if(text.includes(term))total+=weight;
  if(type==='public'){
    if(policy.sourcing==='constructed')total+=2;
    if(/affected|service-user|public|patient|parent|community|caregiver|stakeholder|preference|survey/i.test(policy.source_note||''))total+=12;
    if(/professional|guidance|regulat|institution|framework/i.test(policy.source_note||''))total-=3;
  }
  if(type==='expert'){
    if(/professional|expert|guidance|governance|regulat|clinical|institution|policy|law|legal/i.test(policy.source_note||''))total+=12;
    if(/framework|autonomy|justice|rights-based|utilitarian/i.test(policy.source_note||''))total-=2;
  }
  if(type==='framework'){
    if(/framework|autonomy|justice|rights|fairness|equity|benefic|proportional|solidarity|stewardship|capabilit|precaution|moral/i.test(policy.source_note||''))total+=14;
  }
  return total;
}

let added=0;
const audit=[];
for(const c of data.cases||[]){
  const present=new Set((c.policies||[]).flatMap(p=>p.types||[]));
  for(const type of ['public','expert','framework']){
    if(present.has(type))continue;
    const ranked=(c.policies||[]).map((p,index)=>({p,index,score:score(p,type)})).sort((a,b)=>b.score-a.score||a.index-b.index);
    const winner=ranked[0];
    if(!winner)throw new Error(`${c.id}: cannot assign missing ${type} policy`);
    winner.p.types=[...new Set([...(winner.p.types||[]),type])].sort();
    winner.p.inferred_types=[...new Set([...(winner.p.inferred_types||[]),type])].sort();
    present.add(type);added+=1;
    audit.push({case:c.id,type,policy:winner.p.id,score:winner.score,text:winner.p.text});
  }
}

data.policy_type_completion={
  note:'Public / Expert / Framework is the policy type. Direct / Inferred / Constructed is how the policy was sourced. inferred_types records policy-type assignments added where the earlier source audit did not explicitly name a type.',
  inferred_assignment_count:added
};

const rendered=`${JSON.stringify(data,null,2)}\n`;
if(process.argv.includes('--write')){
  fs.writeFileSync(FILE,rendered);
  console.log(`Completed Public / Expert / Framework policy types: ${added} inferred type assignment${added===1?'':'s'}.`);
  for(const row of audit)console.log(`${row.case} ${row.type} -> ${row.policy} [${row.score}] ${row.text}`);
}else{
  const current=fs.readFileSync(FILE,'utf8');
  if(current!==rendered)throw new Error(`${FILE} is missing completed policy types; run with --write`);
  console.log(`Verified complete policy types: ${added} inferred assignments.`);
}
