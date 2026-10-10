const progressFill = document.getElementById("progressFill");
const landing = document.getElementById("landing");
const memory = document.getElementById("memory");
const ending = document.getElementById("ending");
const lastPage = document.getElementById("lastPage");
const finalMusic = document.getElementById("finalMusic");

const openBtn = document.getElementById("openBtn");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = null;
const openLast = document.getElementById("openLast");

const chapter = document.getElementById("chapter");
const title = document.getElementById("title");
const message = document.getElementById("message");
const memoryImage = document.getElementById("memoryImage");
const counter = document.getElementById("count");

const playBtn = document.getElementById("playMusic");
const audio = document.getElementById("bgMusic");

const scenes = [

{
chapter:"🗣️ Echoes & Endless Yaps",
title:"The Yapper",
text:"Some people listen to podcasts\n\nI have you\n\nYou could yap about the most random things...\n\nAnd somehow,\n\nI'd end up smiling through every second of it 🌸",
image:"images/1.jpg",
song:"music/1.mp3"
},

{
chapter:"🤦 Beautifully Clueless",
title:"The Bhondu",
text:"Being bhondu isn't just a habit..\n\nIt's a part of your charm\n\nAnd honestly...\n\nI wouldn't trade my bhondu buddy for anyone🌸",
image:"images/2.jpg",
song:"music/2.mp3"
},

{
chapter:"🥹 Too Cute to Convict",
title:"The Cutie Patootie",
text:"This page was supposed to roast you.\n\nBut then I remembered...\n\nYou're just a cutie patootie pretending to be dangerous.\n\nNice try though. 😤🌸",
image:"images/3.jpg",
song:"music/3.mp3"
},

{
chapter:"👹 A Certified Menace",
title:"The Darindiii",
text:"Behind that sweet smile....\n\nLived\n\nA tiny darindiii 😭\n\nOn a mission\n\nTo keep life interesting",
image:"images/4.jpg",
song:"music/4.mp3"
},

{
chapter:"😂 Shared Braincells ",
title:"The Stupidooo !!",
text:"We shared some of the smartest conversations...\n\nAnd some of the absolute dumbest ones.\n\nThe dumb ones were my favourite. 😂",
image:"images/5.jpg",
song:"music/5.mp3"
},

{
chapter:"😭 Victim's Statement",
title:"Stop Bullying Me",
text:"I kept asking,\n\nWhy you bully me?\n\nYou answered...\n\nBy bullying me even more 😭",
image:"images/6.jpg",
song:"music/6.mp3"
},

{
chapter:"An Accidental Classic 😭",
title:"The Ketchup Chronicles ",
text:"Your takes ? A little questionable\n\nYour logic ? A little concerning\n\nBut conversations like these......\n\nSomehow, are my favourite part of you💛",
image:"images/7.jpg",
song:"music/7.mp3"
},

{
chapter:"Art of Being Unhinged ✨",
title:"The Tishism Effect 😭 ",
text:"Normal conversations? Never heard of them \n\nOur humour needs therapy 💀\n\nJust us being us\n\nAnd that's the lore 😭 ",
image:"images/8.jpg",
song:"music/8.mp3"
},

{
chapter:"😡 Chota Packet,Bada Dhamaka",
title:"Bauni Ka Gussa",
text:"I still don't understand how someone so tiny could carry that much gussa.\n\nTruly impressive. 😭",
image:"images/9.jpg",
song:"music/9.mp3"
},

{
chapter:"🤨 Shabdon Ki Jung",
title:"Aji Koi Gaali De Raha Hai",
text:"We'd be having\n\nThe most normal conversation...\n\nAnd out of nowhere...\n\nAji koi gaali de raha hai 😭",
image:"images/10.jpg",
song:"music/10.mp3"
},

{
chapter:"😤 Queen's Reign",
title:"The Donnn",
text:"Democracy was never on the table.\n\nIt was her regime,\n\nand I was just a very compliant citizen. 😭",
image:"images/11.jpg",
song:"music/11.mp3"
},

{
chapter:"Say That Againnn🧿",
title:"The Happiest Hour✨",
text:"BREAKING NEWS 🚨\n\nTisha says THANK YOU !!\n\nA fellow Tishist is still floating on Cloud Nine 😭",
image:"images/12.jpg",
song:"music/12.mp3"
},

{
chapter:"💛 The Plot Twist",
title:"Not So Gandi Afterall",
text:"For someone I love calling 'gandi insaan'...\n\nYou turned out to be one of the kindest people I've ever known.\n\nNot so gandi after all hehe. 🌸",
image:"images/13.jpg",
song:"music/13.mp3"
},

{
chapter:"Our European Adventure Awaits ✨",
title:"My Favourite Chapter",
text:"Every story has a few chapters you never really forget.\n\nYou'll always be one of mine 💛",
image:"images/14.jpg",
song:"music/14.mp3"
}

];

let current = 0;

function showPage(page){

landing.classList.remove("active");
memory.classList.remove("active");
ending.classList.remove("active");
lastPage.classList.remove("active");

page.classList.add("active");

}

function showScene(){

const scene = scenes[current];

chapter.textContent = scene.chapter;
title.textContent = scene.title;
message.textContent = scene.text;

memoryImage.style.opacity = "0";

setTimeout(()=>{

memoryImage.src = scene.image;
memoryImage.style.opacity = "1";

},200);

counter.textContent = `${current + 1} / ${scenes.length}`;

progressFill.style.width =
((current+1)/scenes.length)*100 + "%";

audio.pause();
audio.currentTime = 0;
audio.src = scene.song;

playBtn.textContent="🎵 Play Memory";

}

openBtn.onclick = ()=>{

showPage(memory);

current = 0;

showScene();

};

nextBtn.onclick = ()=>{

current++;

if(current >= scenes.length){

showPage(ending);

audio.pause();

return;

}

showScene();

};



playBtn.onclick = ()=>{

if(audio.paused){

audio.play();

playBtn.textContent = "⏸ Pause";

}else{

audio.pause();

playBtn.textContent = "🎵 Play Memory";

}

};
const glow=document.querySelector(".cursor-glow");

if(window.innerWidth>768){

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";
glow.style.top=e.clientY+"px";

});

}else{

glow.style.display="none";

}
openLast.onclick = ()=>{

showPage(lastPage);

audio.pause();

if(finalMusic){

finalMusic.currentTime=0;
finalMusic.play();

}

};