import config from "../storage/config.js";
export default{
   
    
    show(){
        config.dataMyBanner();
        Object.assign(this, JSON.parse(localStorage.getItem("myBanner")))

        const ws = new Worker("storage/wsMyBanner.js", {type: "module"})

        let id = [];
        let count = 0;

        ws.postMessage({module: "bannerSection", data: this.banner});

        id = ["#banner", "#imgStyle"];

        ws.addEventListener("message", (e)=>{
            let doc = new DOMParser().parseFromString(e.data,"text/html");

            document.querySelector(id[count]).append(...doc.body.children);

            (id.length-1==count) ? ws.terminate(): count++;
        })
    },
    
    showImage(){
        document.querySelector("#imgStyle").style.backgroundImage = `url(${this.image})`
    }
}
// <h1 id="titleBanner"class="display-4 fst-italic"></h1>
//<p id ="paragraphBanner"class="lead my-3"></p>