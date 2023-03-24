export default {
    title:"Mother Mother",
    albums: [
        {
            name: "History",
            href: "#",
        },
        {
            name: "Origin",
            href: "#",
        },
        {
            name: "Genders",
            href: "#",
        },
        {
            name: "Record Labels",
            href: "#",
        },
        {
            name: "Period of Activity",
            href: "#",
        },
        {
            name: "Former Members",
            href: "#",
        },
        {
            name: "Time Line",
            href: "#",
        },
        {
            name: "Members",
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