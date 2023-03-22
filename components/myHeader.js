export default {
    title:"Mother Mother",
    albums: [
        {
            name: "Touch Up",
            href: "#",
        },
        {
            name: "O my Heart",
            href: "#",
        },
        {
            name: "Eureka",
            href: "#",
        },
        {
            name: "Very Good Bad Thing",
            href: "#",
        },
        {
            name: "No Culture",
            href: "#",
        },
        {
            name: "Dance and Cry",
            href: "#",
        },
        {
            name: "Inside",
            href: "#",
        }
    ],
    
    listTitle(){
        document.querySelector("#title").insertAdjacentHTML("beforeend", `<a class="blog-header-logo text-dark" href="#">${this.title}</a>`)
    },

    listaralbums(){
        let plantilla = "";
        this.albums.forEach((val,id) => {
           plantilla += `<a class="p-2 link-secondary" href="$id="albums"${val.href}">${val.name}</a>` 
        });
        document.querySelector("#albums").insertAdjacentHTML("beforeend", plantilla);
    }
}
// ``