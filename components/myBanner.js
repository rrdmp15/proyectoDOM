export default{
    image: "../img/mother.jpg",
    title:"Mother Mother's musical moves",
    paragraph:"When they first came on the scene in 2005 as Mother (before a necessitated 2007 name change), their syncopated boy/girl harmonies made them an indie-rock fusion between Scissor Sisters and The Pixies, with big swelling choruses that shifted between funk and twangy New Pornographers' power pop. That sound made them a buzz band, one now popular enough to headline Wednesday's Canadian Music Week show at the Phoenix — yet on this year's Eureka, out March 15, they sound like Cake and The Beta Band thrown in a blender, teetering on the dark edge of industrial goth rock. ",
    btn:{
            href: `https://www.thestar.com/entertainment/music/2011/03/08/mother_mothers_musical_moves.html`,
            name:"Continuar Leyendo...",
        },
    showBannerSection(){
        document.querySelector("#banner").insertAdjacentHTML("beforeend",`
        <h1 class="display-4 fst-italic">${this.title}</h1>
        <p class="lead my-3">${this.paragraph}</p>
        <p class="lead mb-0"><a href="${this.btn.href}" class="text-white fw-bold">${this.btn.name}</a></p>
        `)
    },
    showImage(){
    document.querySelector(".imgStyle").style.backgroundImage = `url(${this.image})`
    }
    
}
// <h1 id="titleBanner"class="display-4 fst-italic"></h1>
//<p id ="paragraphBanner"class="lead my-3"></p>