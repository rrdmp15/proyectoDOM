export default{
    nav:[
        {
            title:"About",
            paragraph:"It is a Canadian indie rock band created in Quadra Island, British Columbia. The band consists of Ryan Guldemond as guitarist and lead vocals, Molly Guldemond and Jasmin Parkin as vocalists and keyboardists, Ali Siadat as drummer, and Mike Young as bassist."
        },
        {
            title:"Albums",
            link: [
                {
                    name:"Touch Up",
                    href:"https://en.wikipedia.org/wiki/Touch_Up",
                },
                {
                    name:"O my Heart",
                    href:"https://en.wikipedia.org/wiki/O_My_Heart",
                },
                {
                    name:"Eureka",
                    href:"https://en.wikipedia.org/wiki/Eureka_(Mother_Mother_album)",
                },
                {
                    name:"The Sticks",
                    href:"https://en.wikipedia.org/wiki/The_Sticks_(album)",
                },
                {
                    name:"Very Good Bad Thing",
                    href:"https://en.wikipedia.org/wiki/Very_Good_Bad_Thing",
                },
                {
                    name:"No Culture",
                    href:"https://en.wikipedia.org/wiki/No_Culture",
                },
                {
                    name:"Dance and Cry",
                    href:"https://en.wikipedia.org/wiki/Dance_and_Cry",
                },
                {
                    name:"Inside",
                    href:"https://en.wikipedia.org/wiki/Inside_(Mother_Mother_album)",
                }
            ],
        },
        {
            title: "Social Media",
            link: [
                {
                    name: "Instagram",
                    href: "https://www.instagram.com/mothermothermusic/?hl=es",
                },
                {
                    name: "Facebook",
                    href: "https://www.facebook.com/MotherMotherBook/",
                },{
                    name: "Twitter",
                    href: "https://twitter.com/mothermother?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
                },{
                    name: "Website",
                    href: "https://www.mothermothersite.com/",
                },{
                    name: "Youtube",
                    href: "https://www.youtube.com/channel/UCDRSqDdkk3tVNHaxyfOqALg",
                },
                {
                    name: "Spotify",
                    href:"https://open.spotify.com/artist/0e86yPdC41PGRkLp2Q1Bph"
                }
            ]
        }
    ],

    showAside(){
        const data = this.nav.map((val, id) =>{
            return (
                (val.link)
                ? this.list(val)
                : this.cards(val)
            );
        });
        document.querySelector("#nav").insertAdjacentHTML("beforeend", data.join(""))
        
    },



    cards(p1){
        return `
        <div class="p-4 mb-3 rounded bg-about">
        <h4 class="fst-italic">${p1.title}</h4>
        <p class="mb-0">${p1.paragraph}</p>
        </div>
        `;
    },

    list(p1){
        return `
        <div class="p-4">
        <h4 class="fst-italic">${p1.title}</h4>
        <ol class="list-unstyled mb-0">
        ${p1.link.map((val, id) => `<li><a href="${val.href}">${val.name}</a></li>`).join("")}
        </ol>
        </div>
        `;
    }
        
}
