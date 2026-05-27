//This code is subject to changes
const container = document.querySelector("#container");
const button = document.querySelector("button");
for (let i = 0; i < 16; i++){
    let columns = document.createElement("div");
    columns.classList.add("columns");
    for (let j = 0; j < 16; j++){
        let column = document.createElement("div");
        column.classList.add("column");
        column.addEventListener("mouseover", (e) => {
            column.setAttribute("style", "background-color: red;");
        });
        columns.appendChild(column);
    };
    container.appendChild(columns);
};

button.addEventListener("click", (e) => {
    let NumOfSquares = prompt("enter number of rows and columns (eg: 16 means 16x16 grid)");
    if (Number.isInteger(Number(NumOfSquares)) && NumOfSquares <= 100){
        container.replaceChildren();
            for (let i = 0; i < NumOfSquares; i++){
                let columns = document.createElement("div");
                columns.classList.add("columns");
                for (let j = 0; j < NumOfSquares; j++){
                    let column = document.createElement("div");
                    column.classList.add("column");
                    column.addEventListener("mouseover", (e) => {
                    column.setAttribute("style", "background-color: red;");
                });
            columns.appendChild(column);
        };
        container.appendChild(columns);
        };
    } else if (NumOfSquares > 100){
        alert("chill bro! the max is 100");
    } else {
        alert("Enter an integer only");
    };
});