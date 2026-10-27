import snippets from "../data/snippets.json" with { type: "json" };
const topic = document.querySelector("#topic");
const title = document.querySelector("#title");
const context = document.querySelector("#context");
const code = document.querySelector("#snippet");
const feedback = document.querySelector("#feedback");
const score = document.querySelector("#score");
let current = 0, selected = null;
const solved = new Set();
for (const t of [...new Set(snippets.map(s=>s.topic))]) { const o=document.createElement("option"); o.value=t; o.textContent=t; topic.append(o); }
function visible() { return snippets.filter(s=>topic.value==="all" || s.topic===topic.value); }
function render() {
  const list=visible(); if (!list.length) return;
  current=current%list.length; const item=list[current]; selected=null;
  title.textContent=item.title; context.textContent=`${item.id} / ${item.topic}. ${item.context}`;
  code.replaceChildren(); feedback.hidden=true; feedback.replaceChildren();
  item.code.forEach((line,i)=>{const b=document.createElement("button");b.type="button";b.className="line";b.dataset.number=String(i+1).padStart(2,"0");b.textContent=line;b.setAttribute("aria-pressed","false");b.addEventListener("click",()=>{selected=i;code.querySelectorAll(".line").forEach(x=>{x.classList.toggle("selected",x===b);x.setAttribute("aria-pressed",String(x===b));});});code.append(b);});
  score.textContent=`Solved: ${solved.size} / ${snippets.length}`;
}
document.querySelector("#check").addEventListener("click",()=>{
  const item=visible()[current]; feedback.hidden=false; feedback.replaceChildren();
  const heading=document.createElement("strong"), explanation=document.createElement("p"), fix=document.createElement("p"), test=document.createElement("p");
  if(selected===item.bad){heading.textContent="Correct line.";solved.add(item.id);}else{heading.textContent=selected===null?"Select a line first.":"Not that line. Read the explanation and try another example.";}
  explanation.textContent=item.explanation;fix.textContent=`Fix: ${item.fix}`;test.textContent=`Test: ${item.test}`;
  feedback.append(heading,explanation,fix,test);score.textContent=`Solved: ${solved.size} / ${snippets.length}`;
});
document.querySelector("#next").addEventListener("click",()=>{current=(current+1)%visible().length;render();});
topic.addEventListener("change",()=>{current=0;render();});
render();
