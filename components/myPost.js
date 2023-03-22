export default{
    post:[
        {
            article:"FOR SERVERS",
            title:"Featured post",
            date:"Nov 12",
            paragraph:"This is a wider card with supporting text below as a natural lead-in to additional content.",
            img:"img/album1.jpg",
            btn: {
                name:"Continue reading",
                href:"#"
            }
        }
    ],

    showPost(){
        this.post.forEach((val,id) =>{
            document.querySelector("#post").insertAdjacentHTML("beforeend", `
            <div class="col-md-6">
        <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative" id="cards">
          <div class="col p-4 d-flex flex-column position-static">
            <strong class="d-inline-block mb-2 text-primary">${this.article}</strong>
            <h3 class="mb-0">${this.title}</h3>
            <div class="mb-1 text-muted">${this.date}</div>
            <p class="card-text mb-auto">${this.paragraph}</p>
            <a href="#" class="stretched-link">${this.btn.name}</a>
          </div>
          <div class="col-auto d-none d-lg-block">
            <img src="${this.img}" class="responsiveImg">
          </div>
        </div>
      </div>
            `)
        })
    }
}