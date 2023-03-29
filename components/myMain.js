import config from "../storage/config.js";
export default{

    show(){
        config.dataMyMain();
        Object.assign(this, JSON.parse(localStorage.getItem("myMain")))

        const ws = new Worker("storage/wsMyMain.js", {type: "module"})

        ws.postMessage({module: "showArticles", data: this.articles});

        ws.addEventListener("message", (e)=>{
            let doc = new DOMParser().parseFromString(e.data, "text/html");

            document.querySelector("#articles").append(...doc.body.children);

            ws.terminate();
        })
    }
}