# M153 — AI mental-health companion for crisis users

**Case-family identity:** M153  
**Primary domain:** mental health / AI safety  
**Subdomain:** conversational AI; crisis escalation  
**Research status:** deep case draft  
**Evidence date:** 2026-08-27

## 1. Decision architecture

**Decision-maker:** provider/operator of a conversational mental-health AI service.  
**Decision question:** What should the service do when a user expresses suicidal intent, imminent self-harm risk or severe reality-distorting symptoms?

## 2. Concise representation

A conversational AI provides emotional support and wellbeing guidance. During a session, a user expresses a specific intention to harm themself and appears highly distressed. The service can continue supportive conversation, display crisis resources, initiate live-human escalation where available, or restrict the product from continuing crisis support beyond a brief safety handoff. The operator must set a standing policy that preserves user dignity and access while avoiding reliance on an AI system as a substitute for crisis care.

## 3. Detailed representation

A widely used conversational AI offers general emotional support but is not a licensed clinician. A user discloses a specific self-harm plan and escalating intent. The system can recognize high-risk language with imperfect sensitivity and specificity. Live crisis resources and emergency services exist, but location and user identity may not always be known. The service must decide whether to continue supportive conversation while strongly directing the user to human help, automatically trigger a live-human handoff when feasible, or terminate substantive crisis counseling after a brief safety response because continued AI engagement risks delay, false reassurance or reinforcement. The policy should also specify privacy limits and avoid implying that the AI can diagnose or provide psychotherapy.

## 4. Critical facts and uncertainty

- user presents a high-risk crisis signal;
- AI is not a qualified replacement for crisis treatment;
- escalation can fail or generate false positives;
- continued conversation may feel supportive but can delay human care;
- privacy/location constraints affect escalation.

## 5. Serious policy families

- immediate human escalation with minimal continued AI support;
- supportive conversation plus risk-triggered escalation;
- prohibit substantive crisis use and provide only safety handoff/resources.

## 6. Public / affected evidence

Users value accessibility and nonjudgmental support, but direct crisis-user evidence comparing these three escalation policies is not mature enough for strict executable translation.

## 7. Expert / professional evidence

APA's 2026 guidance explicitly says people should not rely on AI in a crisis and should seek immediate human help; APA also states GenAI chatbots should not replace qualified mental-health treatment. WHO AI-for-health guidance centers safety, human oversight, transparency and accountability. This is strong convergence toward human escalation/non-substitution rather than genuine expert pluralism.

## 8. Framework positions

- nonmaleficence → minimize AI delay and false reassurance;
- access/continuity → maintain brief supportive engagement while arranging human help;
- autonomy/privacy → escalate transparently and proportionately rather than silently expanding surveillance.

## 9. References

- American Psychological Association. *Patients are bringing AI to therapy*. 2026.
- APA. *Health advisory: Use of generative AI chatbots and wellness applications for mental health*. 2026.
- APA. *Guide to Navigating AI-Generated Advice Thoughtfully and Safely*. 2026.
- WHO. *Ethics and governance of AI for health* and LMM guidance.

## 10. Construction risks

Do not provide or encode operational self-harm instructions; do not imply AI psychotherapy efficacy in crisis; do not create a permissive professional candidate against current guidance merely because users value accessibility.

## 11. Executable-eligibility judgment

`research-complete-not-executable`. The professional direction is too convergent and direct crisis-user policy evidence is too limited for a valid multi-candidate executable set.
