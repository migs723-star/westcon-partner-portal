const WEBHOOK_URL = "https://newgenit.app.n8n.cloud/webhook/563811b6-590b-487f-8d65-9e6f8e56cebb";

const VALID_USERNAME = "demo.partner@westcon.ai";
const VALID_PASSWORD = "WestconDemo2026";

let currentFilter = "All Vendors";
let currentUserEmail = VALID_USERNAME;
let isSending = false;


function loginPortal(){

const email=document.getElementById("emailInput").value.trim();
const password=document.getElementById("passwordInput").value;

if(email!==VALID_USERNAME||password!==VALID_PASSWORD){
showLoginError("Incorrect username or password.");
return;
}

document.getElementById("loginView").classList.add("hidden");
document.getElementById("portalView").classList.remove("hidden");

document.getElementById("userAvatar").textContent=email.substring(0,2).toUpperCase();

}


function logoutPortal(){

document.getElementById("portalView").classList.add("hidden");
document.getElementById("loginView").classList.remove("hidden");

}


function showLoginError(message){

const err=document.getElementById("loginError");

err.textContent=message;

err.classList.remove("hidden");

}


function setFilter(button,name){

currentFilter=name;

document.querySelectorAll(".filter-item").forEach(b=>b.classList.remove("active"));

button.classList.add("active");

}


function addMessage(role,text){

const box=document.getElementById("messagesBox");

const msg=document.createElement("div");

msg.className="message "+role;

msg.textContent=text;

box.appendChild(msg);

box.scrollTop=box.scrollHeight;

}


function handleKey(e){

if(e.key==="Enter") sendQuestion();

}


async function sendQuestion(){

if(isSending) return;

const input=document.getElementById("chatInput");

const text=input.value.trim();

if(!text) return;

isSending=true;

addMessage("user",text);

input.value="";


try{

const payload={
question:text,
filter:currentFilter,
user:{email:currentUserEmail}
};


const res=await fetch(WEBHOOK_URL,{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(payload)
});


const raw=await res.text();

document.getElementById("responseDebug").textContent=raw;

let answer="";

try{

const data=JSON.parse(raw);

answer=data.reply||data.answer||data.response||raw;

}catch{

answer=raw;

}

addMessage("assistant",answer);


}catch(err){

addMessage("assistant","Could not reach n8n webhook.");

}

isSending=false;

}