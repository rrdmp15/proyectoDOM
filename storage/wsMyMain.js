let wsMyMain = {
    showArticles(p1){
        let plantilla = "";
        p1.forEach((val,id)=>{
            plantilla += `
            <article class="blog-post">
                <h2 class="blog-post-title">${val.name}</h2>
                <p class="dark-text">${val.date} by <a href="#">${val.author.name}</a></p>

                <p>${val.paragraph}</p>

                <h3>${val.subtitleTable}</h3>
                
                <table class="table">
                    <thead>
                        <tr>
                        ${val.thead.map((val,id)=> `<th>${val.name}</th>`).join("")}
                        </tr>
                    </thead>
                    <tbody>
                        ${val.tbody.map((val,id)=>`<tr><td>${val.no}</td><td>${val.song}</td><td>${val.lenght}</td></tr>`).join("")}</tbody>
                    <tfoot>
                        <tr>
                            <td>${val.tfoot.name}</td>
                            <td>${val.tfoot.value}</td>
                        </tr>
                    </tfoot>
                </table>
                <h3>${val.subtitleList}</h3>
                ${val.Personel.map((val,id)=> `<h4>${val.subtitle}</h4>${val.list.map((val,id)=> `<ul><li>${val.name}-${val.charge}</li></ul>`).join("")}`).join("")}
                    
            </article>
            `
        })
        return plantilla
    }
}

self.addEventListener("message", (e)=>{
    postMessage(wsMyMain[`${e.data.module}`](e.data.data));
})