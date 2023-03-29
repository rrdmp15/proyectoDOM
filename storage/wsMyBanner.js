let wsMyBanner = {
    bannerSection(p1){
        let plantilla = "";
        p1.forEach((val, id)=> {
            plantilla += `
        <h1 class="display-4 fst-italic">${val.title}</h1>
        <p class="lead my-3">${val.paragraph}</p>
        <p class="lead mb-0"><a href="${val.btn.href}" class="text-white fw-bold">${val.btn.name}</a></p>
        `
        });
        return plantilla
    },
    image(p1){
    return `url(${p1.image})`
    }
}

self.addEventListener("message", (e)=>{
    postMessage(wsMyBanner[`${e.data.module}`](e.data.data));
})