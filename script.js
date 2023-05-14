let heading=document.createElement("h1");
heading.innerHTML="Covid-19 Tracker";
heading.setAttribute("class","text-center")
heading.style.marginTop="40px"
document.body.append(heading);


let div=document.createElement("div");
div.setAttribute("class","text-center");

let input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","country");
input.setAttribute("placeholder","Enter Country");
input.style.width="500px";


let br=document.createElement("br")

let button=document.createElement("button");
button.setAttribute("type","button");
button.classList.add("btn","btn-primary","m-3")
button.innerHTML="Search"
button.addEventListener("click",foo);

let div1=document.createElement("div");

div.append(input,br,button,div1);
document.body.append(div);


async function foo(){
    let value=document.getElementById("country").value;
let url=`https://api.covid19api.com/dayone/country/${value}`
let fet=await fetch(url);
let res=await fet.json();

let last=res.length-1;
let active=res[last].Active;
let death=res[last].Deaths;
let recover=res[last].Recovered;

div1.innerHTML=`No.of Actives: ${active}
<br>
No.of Deaths: ${death}
<br>
No.of recovered: ${recover}`

}
