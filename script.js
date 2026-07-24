// AniStream Hauptscript


// ==========================
// STARTSEITE
// ==========================


const grid = document.getElementById("animeGrid");


if(grid){


    let shown = 0;


    function loadAnime(){


        if(typeof animeList === "undefined"){
            return;
        }



        animeList.slice(shown, shown + 15).forEach((anime,index)=>{


            let card = document.createElement("div");


            card.className="card";


            card.innerHTML = `

            <img src="${anime.cover}">

            <h3>${anime.name}</h3>

            `;



            card.onclick=function(){


                localStorage.setItem(
                    "selectedAnime",
                    index
                );


                window.location.href="anime.html";


            };


            grid.appendChild(card);


        });



        shown +=15;


    }



    loadAnime();



    const more =
    document.getElementById("more");



    if(more){


        more.onclick=function(){

            loadAnime();

        };


    }



}





// ==========================
// ANIME SEITE
// ==========================


const title =
document.getElementById("title");



if(title){



    let id =
    localStorage.getItem("selectedAnime");



    if(typeof animeList !== "undefined"
    && animeList[id]){


        let anime =
        animeList[id];



        document.getElementById("cover").src =
        anime.cover;



        document.getElementById("title").innerText =
        anime.name;



        document.getElementById("description").innerText =
        anime.description || "";



        const seasons =
        document.getElementById("seasons");



        seasons.innerHTML =
        "<h2>Staffeln</h2>";




        anime.seasons.forEach(season=>{


            let box =
            document.createElement("div");


            box.className="season";



            box.innerHTML =
            `<h3>Staffel ${season.number}</h3>`;




            season.episodes.forEach(ep=>{


                let btn =
                document.createElement("button");


                btn.innerText =
                "Folge " + ep.number;



                btn.onclick=function(){


                    localStorage.setItem(
                    "stream",
                    ep.streamtape
                    );


                    localStorage.setItem(
                    "episode",
                    anime.name +
                    " - Folge " +
                    ep.number
                    );


                    window.location.href =
                    "watch.html";


                };



                box.appendChild(btn);



            });



            seasons.appendChild(box);



        });



    }


}





// ==========================
// WATCH SEITE
// ==========================



const player =
document.getElementById("stream");



if(player){



    let stream =
    localStorage.getItem("stream");



    let episode =
    localStorage.getItem("episode");



    document.getElementById("episode-title")
    .innerText =
    episode;



    player.src =
    stream;



}
