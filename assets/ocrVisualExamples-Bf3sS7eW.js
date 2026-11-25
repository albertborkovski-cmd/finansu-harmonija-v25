import{createOcrRegisterExamples as x}from"./ocrRegisterExamples-CB44T-kx.js";const h="v24-ocr-visual-documents-1",f=t=>String(t??"").replace(/[&<>"']/g,$=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&apos;"})[$]);function _(t,$){const o=t.document_purpose==="Sale",u=o?$:t.client_counterparty,m=o?t.client_counterparty:$,i=t.currency||"EUR",e=(r,l,a,d=13,p=!1,g="#23364B",A="start")=>`<text x="${r}" y="${l}" font-size="${d}" font-weight="${p?700:400}" fill="${g}" text-anchor="${A}">${f(a)}</text>`,n=t.line_items||[],s=420+n.length*54,c=`<svg xmlns="http://www.w3.org/2000/svg" width="794" height="1123" viewBox="0 0 794 1123">
    <rect width="794" height="1123" fill="white"/><g font-family="Arial, sans-serif">
    <rect x="44" y="44" width="48" height="48" rx="12" fill="#007EA7"/>${e(68,75,"FH",21,!0,"white","middle")}
    ${e(108,65,u,20,!0)}${e(108,86,"Verslo paslaugos ir prekės",12,!1,"#71839A")}
    <line x1="44" x2="750" y1="116" y2="116" stroke="#D3E1EC"/>
    ${e(44,158,"PVM SĄSKAITA FAKTŪRA",25,!0)}${e(44,188,t.number,18,!0,"#007EA7")}
    ${e(750,155,"Išrašymo data",12,!1,"#71839A","end")}${e(750,177,t.document_date,15,!0,"#23364B","end")}
    ${e(44,237,"PARDAVĖJAS",11,!0,"#71839A")}${e(414,237,"PIRKĖJAS",11,!0,"#71839A")}
    ${e(44,263,u,17,!0)}${e(414,263,m,17,!0)}
    ${e(44,287,"Įmonės kodas: DEMO-1001")}${e(414,287,"Įmonės kodas: DEMO-2001")}
    ${e(44,308,"PVM kodas: LT-DEMO-1001")}${e(414,308,"PVM kodas: LT-DEMO-2001")}
    ${e(44,329,"Pavyzdžio g. 12, Vilnius, Lietuva")}${e(414,329,"Verslo g. 8, Kaunas, Lietuva")}
    <rect x="44" y="360" width="706" height="40" rx="5" fill="#EAF3F8"/>
    ${e(58,385,"Kodas / prekė arba paslauga",12,!0)}${e(505,385,"Kiekis",12,!0,"#23364B","end")}
    ${e(615,385,"Kaina",12,!0,"#23364B","end")}${e(735,385,`Suma, ${i}`,12,!0,"#23364B","end")}
    ${n.map((r,l)=>{const a=429+l*54;return`${e(58,a,r.description||r.product,13,!0)}${e(58,a+18,r.code,10,!1,"#71839A")}${e(505,a,r.qty,13,!1,"#23364B","end")}${e(615,a,r.price,13,!1,"#23364B","end")}${e(735,a,r.subtotal,13,!1,"#23364B","end")}<line x1="44" x2="750" y1="${a+28}" y2="${a+28}" stroke="#E7EEF4"/>`}).join("")}
    ${e(460,s+35,"Suma be PVM")}${e(735,s+35,`${t.amount_without_vat} ${i}`,14,!0,"#23364B","end")}
    ${e(460,s+63,`PVM (${t.vat_percent})`)}${e(735,s+63,`${t.vat} ${i}`,14,!1,"#23364B","end")}
    <rect x="442" y="${s+80}" width="308" height="52" rx="6" fill="#EAF3F8"/>
    ${e(460,s+112,"Iš viso",16,!0)}${e(735,s+112,`${t.total_amount} ${i}`,19,!0,"#007EA7","end")}
    ${e(44,s+166,`Apmokėti iki: ${t.due_end_date}`,13,!0)}${e(44,s+190,`Užsakymo numeris: ${t.order_no}`)}
    ${t.with_receipt?`<rect x="44" y="${s+220}" width="320" height="95" rx="6" fill="#F6FAFC" stroke="#D3E1EC"/>${e(62,s+248,"PRIDĖTAS MOKĖJIMO KVITAS",12,!0)}${e(62,s+274,`Apmokėta: ${t.total_amount} ${i}`,14,!0)}${e(62,s+295,"Mokėjimo būdas: kortele",12)}`:""}
    <line x1="44" x2="750" y1="1040" y2="1040" stroke="#D3E1EC"/>${e(44,1065,"Pavyzdinis dokumentas sąsajos peržiūrai. Ne mokėjimui.",11,!1,"#71839A")}${e(750,1065,"1 / 1",11,!1,"#71839A","end")}
    </g></svg>`;return`data:image/svg+xml;charset=utf-8,${encodeURIComponent(c)}`}function E(t,$,o=new Date().toISOString()){const u=x(t,o);return[0,1,4,6,2].map((m,i)=>{const e=u[m],n=`${t}:${h}:${i+1}`,s=`OCR-VIS-00${i+1}`,c=(l,a)=>l.map((d,p)=>({...d,id:`${n}:${a}:${p}`})),r={...e,id:n,number:s,file_case:`${s}.svg`,status:"Processed",line_items:c(e.line_items||[],"line"),summary_line_items:c(e.summary_line_items||[],"allocation"),notes:`${e.notes} · Visual example`,image_url:null};return{...r,image_url:_(r,$)}})}export{h as OCR_VISUAL_EXAMPLE_BATCH,E as createOcrVisualExamples,_ as exampleInvoiceImage};
