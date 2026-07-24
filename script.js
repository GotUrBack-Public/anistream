let shown = 0;

const grid=document.getElementById("animeGrid");

function loadAnime(){

let amount=15;


animeList.slice(shown,shown+amount).forEach(anime=>{


let card=document.createElement("div");

card.className="card";


card.innerHTML=`

<img src="${anime.image}">

<h3>${anime.name}</h3>

`;


card.onclick=()=>{

window.location.href=anime.link;

};


grid.appendChild(card);


});


shown+=amount;

}



loadAnime();



document.getElementById("more").onclick=()=>{

loadAnime();

};



document.getElementById("search").oninput=function(){


let value=this.value.toLowerCase();


document.querySelectorAll(".card").forEach(card=>{


card.style.display=

card.innerText.toLowerCase().includes(value)

?"block":"none";


});


};
