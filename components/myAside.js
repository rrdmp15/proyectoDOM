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
                    href:"#",
                },
                {
                    name:"O my Heart",
                    href:"#",
                },
                {
                    name:"Eureka",
                    href:"#",
                },
                {
                    name:"The Sticks",
                    href:"#",
                },
                {
                    name:"Very Good Bad Thing",
                    href:"#",
                },
                {
                    name:"No Culture",
                    href:"#",
                },
                {
                    name:"Dance and Cry",
                    href:"#",
                },
                {
                    name:"Inside",
                    href:"#",
                }
            ],
        },
        {
            title: "Social Media",
            link: [
                {
                    name: "Instagram",
                    href: "#",
                },
                {
                    name: "Facebook",
                    href: "#",
                },{
                    name: "Twitter",
                    href: "#",
                },{
                    name: "Website",
                    href: "#",
                },{
                    name: "Youtube",
                    href: "#",
                },
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
        <div class="p-4 mb-3 bg-light rounded">
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
