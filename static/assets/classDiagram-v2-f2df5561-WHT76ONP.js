import{a as P,b as _,c as q}from"./chunk-GWQSCWIA.js";import{a as z}from"./chunk-Y5SVFKCW.js";import"./chunk-7CWW3BG2.js";import"./chunk-CZRRIJZR.js";import"./chunk-BZUL2CAN.js";import"./chunk-EPEOXW2P.js";import{A as G}from"./chunk-E7EULSZ5.js";import{F as L,Ga as d,J as U,Oa as N,Ta as D,Ua as E,ab as F,b as K,c as Q,eb as H,h as w,nb as i}from"./chunk-CQLS3I4E.js";import{a as S,h as T}from"./chunk-QOEQAPME.js";var it=T(K(),1),rt=T(Q(),1),ct=T(U(),1);var A=s=>N.sanitizeText(s,i()),C={dividerMargin:10,padding:5,textHeight:10,curve:void 0},X=function(s,o,f,a){let t=Object.keys(s);d.info("keys:",t),d.info(s),t.forEach(function(r){var p;var l,c;let e=s[r],y={shape:"rect",id:e.id,domId:e.domId,labelText:A(e.id),labelStyle:"",style:"fill: none; stroke: black",padding:(p=(l=i().flowchart)==null?void 0:l.padding)!=null?p:(c=i().class)==null?void 0:c.padding};o.setNode(e.id,y),W(e.classes,o,f,a,e.id),d.info("setNode",y)})},W=function(s,o,f,a,t){let r=Object.keys(s);d.info("keys:",r),d.info(s),r.filter(l=>s[l].parent==t).forEach(function(l){var g,u;var c,e;let n=s[l],y=n.cssClasses.join(" "),p=E(n.styles),h=(g=n.label)!=null?g:n.id,m=0,b={labelStyle:p.labelStyle,shape:"class_box",labelText:A(h),classData:n,rx:m,ry:m,class:y,style:p.style,id:n.id,domId:n.domId,tooltip:a.db.getTooltip(n.id,t)||"",haveCallback:n.haveCallback,link:n.link,width:n.type==="group"?500:void 0,type:n.type,padding:(u=(c=i().flowchart)==null?void 0:c.padding)!=null?u:(e=i().class)==null?void 0:e.padding};o.setNode(n.id,b),t&&o.setParent(n.id,t),d.info("setNode",b)})},Y=function(s,o,f,a){d.info(s),s.forEach(function(t,r){var u;var l,c;let e=t,n="",y={labelStyle:"",style:""},p=e.text,h=0,v={labelStyle:y.labelStyle,shape:"note",labelText:A(p),noteData:e,rx:h,ry:h,class:n,style:y.style,id:e.id,domId:e.id,tooltip:"",type:"note",padding:(u=(l=i().flowchart)==null?void 0:l.padding)!=null?u:(c=i().class)==null?void 0:c.padding};if(o.setNode(e.id,v),d.info("setNode",v),!e.class||!(e.class in a))return;let b=f+r,g={id:`edgeNote${b}`,classes:"relation",pattern:"dotted",arrowhead:"none",startLabelRight:"",endLabelLeft:"",arrowTypeStart:"none",arrowTypeEnd:"none",style:"fill:none",labelStyle:"",curve:D(C.curve,L)};o.setEdge(e.id,e.class,g,b)})},Z=function(s,o){let f=i().flowchart,a=0;s.forEach(function(t){var c;var r;a++;let l={classes:"relation",pattern:t.relation.lineType==1?"dashed":"solid",id:`id_${t.id1}_${t.id2}_${a}`,arrowhead:t.type==="arrow_open"?"none":"normal",startLabelRight:t.relationTitle1==="none"?"":t.relationTitle1,endLabelLeft:t.relationTitle2==="none"?"":t.relationTitle2,arrowTypeStart:V(t.relation.type1),arrowTypeEnd:V(t.relation.type2),style:"fill:none",labelStyle:"",curve:D(f==null?void 0:f.curve,L)};if(d.info(l,t),t.style!==void 0){let e=E(t.style);l.style=e.style,l.labelStyle=e.labelStyle}t.text=t.title,t.text===void 0?t.style!==void 0&&(l.arrowheadStyle="fill: #333"):(l.arrowheadStyle="fill: #333",l.labelpos="c",((c=(r=i().flowchart)==null?void 0:r.htmlLabels)!=null?c:i().htmlLabels)?(l.labelType="html",l.label='<span class="edgeLabel">'+t.text+"</span>"):(l.labelType="text",l.label=t.text.replace(N.lineBreakRegex,`
`),t.style===void 0&&(l.style=l.style||"stroke: #333; stroke-width: 1.5px;fill:none"),l.labelStyle=l.labelStyle.replace("color:","fill:"))),o.setEdge(t.id1,t.id2,l,a)})},j=function(s){C=S(S({},C),s)},O=async function(s,o,f,a){var u,I,M,R;d.info("Drawing class - ",o);let t=(u=i().flowchart)!=null?u:i().class,r=i().securityLevel;d.info("config:",t);let l=(I=t==null?void 0:t.nodeSpacing)!=null?I:50,c=(M=t==null?void 0:t.rankSpacing)!=null?M:50,e=new G({multigraph:!0,compound:!0}).setGraph({rankdir:a.db.getDirection(),nodesep:l,ranksep:c,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}}),n=a.db.getNamespaces(),y=a.db.getClasses(),p=a.db.getRelations(),h=a.db.getNotes();d.info(p),X(n,e,o,a),W(y,e,o,a),Z(p,e),Y(h,e,p.length+1,y);let m;r==="sandbox"&&(m=w("#i"+o));let v=r==="sandbox"?w(m.nodes()[0].contentDocument.body):w("body"),b=v.select(`[id="${o}"]`),g=v.select("#"+o+" g");if(await z(g,e,["aggregation","extension","composition","dependency","lollipop"],"classDiagram",o),F.insertTitle(b,"classTitleText",(R=t==null?void 0:t.titleTopMargin)!=null?R:5,a.db.getDiagramTitle()),H(e,b,t==null?void 0:t.diagramPadding,t==null?void 0:t.useMaxWidth),!(t!=null&&t.htmlLabels)){let $=r==="sandbox"?m.nodes()[0].contentDocument:document,J=$.querySelectorAll('[id="'+o+'"] .edgeLabel .label');for(let k of J){let B=k.getBBox(),x=$.createElementNS("http://www.w3.org/2000/svg","rect");x.setAttribute("rx",0),x.setAttribute("ry",0),x.setAttribute("width",B.width),x.setAttribute("height",B.height),k.insertBefore(x,k.firstChild)}}};function V(s){let o;switch(s){case 0:o="aggregation";break;case 1:o="extension";break;case 2:o="composition";break;case 3:o="dependency";break;case 4:o="lollipop";break;default:o="none"}return o}var tt={setConf:j,draw:O},yt={parser:P,db:_,renderer:tt,styles:q,init:s=>{s.class||(s.class={}),s.class.arrowMarkerAbsolute=s.arrowMarkerAbsolute,_.clear()}};export{yt as diagram};