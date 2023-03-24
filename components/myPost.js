export default{
    post:[
        {
            article:"HISTORY",
            title:"How it all began",
            date:"Nov 12",
            paragraph:"The five members began performing under the name Mother, and in the fall of 2005, they independently released a self-titled album.",
            img:"img/mother-mother-mother.jpeg",
            btn: {
                name:"Continue reading",
                href:"https://en.wikipedia.org/wiki/Mother_Mother"
            }
        },
        {
          article:"ORIGIN",
          title:"Where it all began",
          date:"Nov 12",
          paragraph:"The band started in Heriot Bay, British Columbia in January 2005.",
          img: "img/heriot-bay.jpg",
          btn: {
              name:"Continue reading",
              href:"https://en.wikipedia.org/wiki/Mother_Mother"
          }
        },
        {
          article:"GENDERS",
          title:"What we rock with",
          date:"Nov 12",
          paragraph:"Mother Mother is a Canadian indie rock band.",
          img:"img/album1.jpg",
          btn: {
              name:"Continue reading",
              href:"https://en.wikipedia.org/wiki/Mother_Mother"
          }
        },
        {
          article:"MEMBERS",
          title:"Ryan Guldemond",
          date:"Nov 12",
          paragraph:"Is the lead vocalist, songwriter and guitarist of the Canadian indie rock band Mother Mother.",
          img:"img/Ryan-Guldemond.jpg",
          btn: {
              name:"Continue reading",
              href:"https://en.wikipedia.org/wiki/Ryan_Guldemond"
          }
        },
        {
          article:"MEMBERS",
          title:"Molly Guldemond",
          date:"Nov 12",
          paragraph:"Singer known for being a vocalist and keyboardist in Mother, Mother, a band formed by her brother Ryan, as well as several others.",
          img:"img/Molly-Guldemond.jpg",
          btn: {
              name:"Continue reading",
              href:"https://es.famousbirthdays.com/people/molly-guldemond.html"
          }
        },
        {
          article:"MEMBERS",
          title:"Ali Siadat",
          date:"Nov 12",
          paragraph:"Musician and drummer who rose to fame as a member of the Canadian indie rock outfit Mother Mother.",
          img:"img/Ali-Siadat.jpg",
          btn: {
              name:"Continue reading",
              href:"https://www.famousbirthdays.com/people/ali-siadat.html"
          }
        },
        {
          article:"MEMBERS",
          title:"Jasmin Parkin",
          date:"Nov 12",
          paragraph:"Singer and pianist known for her work with her band, Mother Mother.",
          img:"img/Jasmin-Parkin.jpg",
          btn: {
              name:"Continue reading",
              href:"https://www.famousbirthdays.com/people/jasmin-parkin.html"
          }
        },
        {
          article:"MEMBERS",
          title:"Mike Young",
          date:"Nov 12",
          paragraph:"Mike Young is the current bassist of the Canadian band Mother Mother and has been in the band since 2016.",
          img:"img/Mike-Young.jpg",
          btn: {
              name:"Continue reading",
              href:"https://genius.com/artists/Mike-young-mother-mother-bassist"
          }
        },
    ],

    showPost(){
        this.post.forEach((val,id) =>{
            document.querySelector("#post").insertAdjacentHTML("beforeend", `
            <div class="col-md-6">
        <div class="row g-0 rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative" id="cards">
          <div class="col p-4 d-flex flex-column position-static">
            <strong class="d-inline-block mb-2">${val.article}</strong>
            <h3 class="mb-0">${val.title}</h3>
            <div class="mb-1 dark-text">${val.date}</div>
            <p class="card-text mb-auto">${val.paragraph}</p>
            <a href="${val.btn.href}" class="stretched-link">${val.btn.name}</a>
          </div>
          <div class="col-auto d-none d-lg-block">
            <img src="${val.img}" class="responsiveImg">
          </div>
        </div>
      </div>
            `)
        })
    }
}