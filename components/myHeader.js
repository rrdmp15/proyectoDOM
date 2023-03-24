export default {
    title:"Mother Mother",
    albums: [
        {
            name: "History",
            href: `https://es.wikipedia.org/wiki/Mother_Mother`,
        },
        {
            name: "Origin",
            href: `https://es.wikipedia.org/wiki/Mother_Mother`,
        },
        {
            name: "Genders",
            href: `https://es.wikipedia.org/wiki/Mother_Mother`,
        },
        {
            name: "Record Labels",
            href: `https://es.wikipedia.org/wiki/Mother_Mother`,
        },
        {
            name: "Period of Activity",
            href: `https://es.wikipedia.org/wiki/Mother_Mother`,
        },
        {
            name: "Former Members",
            href: `https://es.wikipedia.org/wiki/Mother_Mother`,
        },
        {
            name: "Time Line",
            href: `https://es.wikipedia.org/wiki/Mother_Mother`,
        },
        {
            name: "Members",
            href: `https://es.wikipedia.org/wiki/Mother_Mother`,
        }
    ],
    
    listTitle(){
        document.querySelector("#title").insertAdjacentHTML("beforeend", `<a class="blog-header-logo text-dark" href="#"><h1>${this.title}</h1></a>`)
    },

    listaralbums(){
        let plantilla = "";
        this.albums.forEach((val,id) => {
            plantilla += `<a class="p-2 link-secondary navA" href="${val.href}">${val.name}</a>` 
        });
        document.querySelector("#albums").insertAdjacentHTML("beforeend", plantilla);
    }
}
// ``