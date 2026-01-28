import {goods} from "./goods.js"

window.select_category = function(str){
    let element = document.querySelector("table")
    if (element){
        element.remove()
    }
    
    let table_header = ["id", "наименование", "категория", "цена"]
    let table = document.createElement("table");
    let tr = document.createElement("tr");
    table.appendChild(tr);
    table_header.forEach(el => {
    let th = document.createElement("th");
    th.textContent = el;
    tr.appendChild(th);
})

    goods.forEach(product => {
        if (str === undefined || str == "все" || str == product.category) {
            let tr = document.createElement("tr");
            table.appendChild(tr);

            let id = document.createElement("td");
            id.textContent = product.id;
            tr.appendChild(id);

            let name = document.createElement("td");
            name.textContent = product.name;
            tr.appendChild(name);

            let category = document.createElement("td");
            category.textContent = product.category;
            tr.appendChild(category);

            let price = document.createElement("td");
            price.textContent = product.price;
            tr.appendChild(price);
        }
    })
    let obj = document.querySelector(".container")
    obj.appendChild(table); 
}

select_category()