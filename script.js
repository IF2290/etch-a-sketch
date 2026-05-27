//This code is subject to changes
const container = document.querySelector("#container");
const button = document.querySelector("button");
for (let i = 0; i < 16; i++){
    let columns = document.createElement("div");
    columns.classList.add("columns");
    for (let j = 0; j < 16; j++){
        let column = document.createElement("div");
        column.classList.add("column");
                    if (randomColor() < 0.2){
                        column.addEventListener("mouseover", (e) => {
                        column.style.backgroundColor = "red";
                     });   
                    } else if (randomColor() > 0.2 && randomColor() < 0.4){
                        column.addEventListener("mouseover", (e) => {
                        column.style.backgroundColor = "blue";
                        });  
                    } else if (randomColor() > 0.4 && randomColor() < 0.6){
                        column.addEventListener("mouseover", (e) => {
                        column.style.backgroundColor = "green";    
                        });            
                    } else if (randomColor() > 0.6 && randomColor() < 0.8){
                        column.addEventListener("mouseover", (e) => {
                        column.style.backgroundColor = "prange";
                        });           
                    } else if (randomColor() > 0.8 && randomColor() < 1){
                        column.addEventListener("mouseover", (e) => {
                        column.style.backgroundColor = "grey";  
                        });           
                    };
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
function randomColor(){
    let random = Math.random();
    return random;
};
/*
if (randomColor() < 0.2){
     column.addEventListener("mouseover", (e) => {
        column.style.backgroundColor = "";
        });   
    } else if (randomColor() > 0.2 && randomColor() < 0.4){
         column.addEventListener("mouseover", (e) => {
            column.style.backgroundColor = "";
        });  
    } else if (randomColor() > 0.4 && randomColor() < 0.6){
            column.addEventListener("mouseover", (e) => {
                column.style.backgroundColor = "";    
        });            
    } else if (randomColor() > 0.6 && randomColor() < 0.8){
            column.addEventListener("mouseover", (e) => {
                column.style.backgroundColor = "";
        });           
    } else if (randomColor() > 0.8 && randomColor() < 1){
            column.addEventListener("mouseover", (e) => {
                column.style.backgroundColor = "";  
        });           
};
*/