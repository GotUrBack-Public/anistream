// ===============================
// AniStream Script
// ===============================


// ===============================
// STARTSEITE
// ===============================


const animeGrid = document.getElementById("animeGrid");


if(animeGrid){


    let displayed = 0;

    const amount = 15;



    function showAnime(){


        if(typeof animeList === "undefined"){

            console.log("anime.js wurde nicht geladen");

            return;

        }




        const items = animeList.slice(
            displayed,
            displayed + amount
        );




        items.forEach((anime,index)=>{


            const card = document.createElement("div");


            card.className="card";



            card.innerHTML = `

                <img src="${anime.cover}" alt="${anime.name}">

                <h3>${anime.name}</h3>

            `;




            card.addEventListener("click",()=>{


                localStorage.setItem(
                    "selectedAnime",
                    displayed + index
                );



                window.location.href="anime.html";


            });




            animeGrid.appendChild(card);



        });




        displayed += items.length;



    }





    showAnime();





    const moreButton =
    document.getElementById("more");



    if(moreButton){



        moreButton.onclick=function(){


            showAnime();


        };


    }





    const search =
    document.getElementById("search");




    if(search){



        search.addEventListener(
        "input",
        function(){



            const value =
            this.value.toLowerCase();




            document
            .querySelectorAll(".card")
            .forEach(card=>{



                const name =
                card.innerText.toLowerCase();



                if(name.includes(value)){


                    card.style.display="block";


                }

                else{


                    card.style.display="none";


                }



            });



        });



    }



}






// ===============================
// ANIME SEITE
// ===============================



const animeTitle =
document.getElementById("title");




if(animeTitle){



    const id =
    localStorage.getItem("selectedAnime");




    if(
        typeof animeList !== "undefined"
        &&
        animeList[id]
    ){



        const anime =
        animeList[id];




        document.getElementById("cover").src =
        anime.cover;




        document.getElementById("title").innerText =
        anime.name;




        document.getElementById("description").innerText =
        anime.description || "Keine Beschreibung vorhanden";





        const seasonBox =
        document.getElementById("seasons");



        seasonBox.innerHTML =
        `
        <h2 class="section-title">
        Staffeln
        </h2>
        `;





        anime.seasons.forEach(season=>{



            const seasonDiv =
            document.createElement("div");



            seasonDiv.className="season";




            seasonDiv.innerHTML =

            `
            <h3>
            Staffel ${season.number}
            </h3>
            `;






            season.episodes.forEach(ep=>{



                const button =
                document.createElement("button");



                button.innerText =
                "Folge " + ep.number;




                button.onclick=function(){



                    localStorage.setItem(
                        "stream",
                        ep.streamtape
                    );



                    localStorage.setItem(
                        "episode",
                        anime.name +
                        " - Staffel " +
                        season.number +
                        " Folge " +
                        ep.number
                    );




                    window.location.href =
                    "watch.html";



                };




                seasonDiv.appendChild(button);



            });




            seasonBox.appendChild(seasonDiv);



        });




    }



}







// ===============================
// WATCH SEITE
// ===============================



const player =
document.getElementById("stream");




if(player){



    const stream =
    localStorage.getItem("stream");



    const episode =
    localStorage.getItem("episode");





    const title =
    document.getElementById("episode-title");



    if(title){


        title.innerText =
        episode || "Folge";


    }




    if(stream){


        player.src = stream;


    }




}
