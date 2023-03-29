import config from "../storage/config.js";
export default{
    

    show(){
        config.dataMyAside();
        Object.assign(this, JSON.parse(localStorage.getItem("myAside")))

        const ws = new Worker("storage/wsMyAside.js", { type: "module" });

        let id = [];
        let count = 0;

        ws.postMessage({ module: "showCards", data: this.cards });
        ws.postMessage({ module: "showList", data: this.list });
        id = ["#nav", "#nav"];

        ws.addEventListener("message", (e) => {
            let doc = new DOMParser().parseFromString(e.data, "text/html");
            document.querySelector(id[count]).append(...doc.body.children);
            (id, length - 1 === count) ? ws.terminate() : count++;
        })
    }
        
}
