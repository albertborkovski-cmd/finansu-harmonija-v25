const s="finansu-harmonija:v12:organization-email-templates",c="finansu-harmonija:v12:organization-email-history",m="finansu-harmonija:v12:debt-reconciliation-previews",p=[{id:"debt-reconciliation-lt",name:"Skolų suderinimas",language:"LT",active:!0,subject:"Skolų suderinimas – {{sender}}",body:`Sveiki, {{recipient}},

{{sender}} prašo suderinti {{reconciliationDate}} dienos skolos likutį: {{debtBalance}}.

Dokumentą galite peržiūrėti ir patikslinti čia:
{{portalUrl}}

Dokumento numeris: {{documentReference}}

Pagarbiai
{{sender}}`},{id:"debt-reconciliation-en",name:"Debt reconciliation",language:"EN",active:!0,subject:"Debt reconciliation – {{sender}}",body:`Hello {{recipient}},

{{sender}} asks you to reconcile the outstanding balance of {{debtBalance}} as of {{reconciliationDate}}.

Open the reconciliation document to review or update it:
{{portalUrl}}

Document reference: {{documentReference}}

Kind regards
{{sender}}`}],g=[{id:"debt-reminder-lt",name:"Priminimas apie skolą",language:"LT",active:!0,purpose:"reminder",subject:"Priminimas apie mokėjimą – {{sender}}",body:`Sveiki, {{recipient}},

Primename apie neapmokėtų dokumentų likutį {{reconciliationDate}}: {{debtBalance}}.
Dokumentai: {{documentReference}}.

Prašome patikrinti ir apmokėti skolą arba informuoti mus, jei mokėjimas jau atliktas.

Pagarbiai
{{sender}}`},{id:"debt-reminder-en",name:"Payment reminder",language:"EN",active:!0,purpose:"reminder",subject:"Payment reminder – {{sender}}",body:`Hello {{recipient}},

This is a reminder of the outstanding balance as of {{reconciliationDate}}: {{debtBalance}}.
Documents: {{documentReference}}.

Please review and arrange payment, or let us know if payment has already been made.

Kind regards
{{sender}}`}];function y(n,e,i){const t=a=>a.purpose===e||!a.purpose&&(e==="reminder"?a.id.startsWith("debt-reminder-"):a.id.startsWith("debt-reconciliation-")),r=n.filter(a=>a.active),u=r.filter(t),f=e==="reminder"?g:p;return[...[...u.length?u:f.filter(a=>!n.some(d=>d.id===a.id))].sort((a,d)=>+(d.language.toLowerCase()===i.toLowerCase())-+(a.language.toLowerCase()===i.toLowerCase())),...r.filter(a=>!t(a)&&!a.purpose&&!a.id.startsWith("debt-reconciliation-")&&!a.id.startsWith("debt-reminder-"))]}function o(n){if(typeof window>"u")return null;try{const e=JSON.parse(window.localStorage.getItem(n)??"null");return Array.isArray(e)?e:null}catch{return null}}function E(n){const e=o(s)??p.map(r=>({...r}));if(!n)return e;const i=`${s}:company:${n}`,t=o(i);return t!==null?t:(typeof window<"u"&&window.localStorage.setItem(i,JSON.stringify(e)),e)}function h(n,e){const i=e?`${s}:company:${e}`:s;window.localStorage.setItem(i,JSON.stringify(n)),window.dispatchEvent(new CustomEvent("organization-email-settings-updated",{detail:{organizationId:e}}))}function l(){return o(c)??[]}function v(n,e){const i=e.trim().toLocaleLowerCase();return l().filter(t=>t.organizationId?t.organizationId===n:!!i&&t.sender.trim().toLocaleLowerCase()===i)}function k(n){const e=[n,...l()];window.localStorage.setItem(c,JSON.stringify(e)),window.dispatchEvent(new CustomEvent("organization-email-history-updated"))}function S(n){const e=new Set(n.map(t=>t.id));if(e.size!==n.length)throw new Error("Duplicate message IDs.");const i=[...n,...l().filter(t=>!e.has(t.id))];window.localStorage.setItem(c,JSON.stringify(i)),window.dispatchEvent(new CustomEvent("organization-email-history-updated"))}function D(n){const e=o(m)??[],i=[n,...e.filter(t=>t.portalUrl!==n.portalUrl)];window.localStorage.setItem(m,JSON.stringify(i))}function O(n){return(o(m)??[]).find(i=>{try{return new URL(i.portalUrl).pathname===n}catch{return!1}})}function P(n,e,i){const t=l().map(r=>r.id===n?{...r,responseReceivedAt:e,responseDecision:i}:r);window.localStorage.setItem(c,JSON.stringify(t)),window.dispatchEvent(new CustomEvent("organization-email-history-updated"))}function z(n,e){return Object.entries(e).reduce((i,[t,r])=>i.replaceAll(`{{${t}}}`,r||"—"),n)}function L(n){const e=n.trim().replace(/[^a-zA-Z0-9_-]+/g,"-")||crypto.randomUUID();return`${window.location.origin}/debt-reconciliation/${e}-${crypto.randomUUID().slice(0,8)}`}export{O as a,k as b,v as c,y as d,E as e,S as f,L as g,D as h,l,P as m,z as r,h as s};
