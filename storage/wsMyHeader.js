let wsMyHeader = {
    listTitle(p1){
       return `<a class="blog-header-logo text-dark" href="#"><h1>${p1}</h1></a>`;
    },

    listaralbums(p1){
        let plantilla = "";
        p1.forEach((val,id) => {
            plantilla += `<a class="p-2 link-secondary navA" href="${val.href}">${val.name}</a>` 
        });
        return plantilla
    }
}

self.addEventListener("message", (e)=>{
    postMessage(wsMyHeader[`${e.data.module}`](e.data.data));
})