export default{
    articles:[
        {
            name:"",
            paragraph:"",
            date:"",
            author:{
                name:"",
                href:""
            },
            thead:[
                {
                    name:"",
                }
            ],
            tbody:[
                {
                    no:[
                        {
                            name:"",
                        }
                    ],
                    song:[
                        {
                            name:"",
                        }
                    ],
                    lenght:[
                        {
                            name:"",
                        }
                    ]
                }
            ],
            tfoot:{
                name:"",
                value:"",
            },
            Personel:[
                {
                    subtitle:"",
                    list:[
                        {
                            name:"",
                            charge:"",
                            href:"",
                        }
                    ]
                }
            ]

        }
    ],

    showArticles(){
        let plantilla = "";
        this.articles.forEach((val,id)=>{
            plantilla += `
            <h2 class="blog-post-title">${val.name}</h2>
            <p class="blog-post-meta">January 1, 2021 by <a href="#">Mark</a></p>

            <p>This blog post shows a few different types of content that’s supported and styled with Bootstrap. Basic typography, lists, tables, images, code, and more are all supported as expected.</p>

            <h3>Example table</h3>
            
            <table class="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Upvotes</th>
                        <th>Downvotes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Alice</td>
                        <td>10</td>
                        <td>11</td>
                    </tr>
                    <tr>
                        <td>Bob</td>
                        <td>4</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>Charlie</td>
                        <td>7</td>
                        <td>9</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td>Totals</td>
                        <td>21</td>
                        <td>23</td>
                    </tr>
                </tfoot>
            </table>
            <h3>Example lists</h3>
                <h4>subtitle</h4>
                    <p>This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly
                        repetitive body text used throughout. This is an example unordered list:</p>
                    <ul>
                        <li>First list item</li>
                        <li>Second list item with a longer description</li>
                        <li>Third list item to close it out</li>
                    </ul>
                <h4>subtitle</h4>
                    <p>This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly
                        repetitive body text used throughout. This is an example unordered list:</p>
                    <ul>
                        <li>First list item</li>
                        <li>Second list item with a longer description</li>
                        <li>Third list item to close it out</li>
                    </ul>
                <h4>subtitle</h4>
                    <p>This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly
                        repetitive body text used throughout. This is an example unordered list:</p>
                    <ul>
                        <li>First list item</li>
                        <li>Second list item with a longer description</li>
                        <li>Third list item to close it out</li>
                    </ul>
            `
        })
        document.querySelector("#articles").insertAdjacentHTML("beforeend", plantilla)
    }
}