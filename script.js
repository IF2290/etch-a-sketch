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
                if (randomColor() < 0.2){
                       
                        column.style.backgroundColor = "white";
                        column.style.backgroundColor = "red";
   
                    } else if (randomColor() > 0.2 && randomColor() < 0.4){
                       
                        column.style.backgroundColor = "white";
                        column.style.backgroundColor = "blue";
      
                    } else if (randomColor() > 0.4 && randomColor() < 0.6){
                       
                        column.style.backgroundColor = "white";
                        column.style.backgroundColor = "green";    
                
                    } else if (randomColor() > 0.6 && randomColor() < 0.8){
                       
                        column.style.backgroundColor = "white";
                        column.style.backgroundColor = "orange";
               
                    } else if (randomColor() > 0.8 && randomColor() < 1){

                        column.style.backgroundColor = "white";
                        column.style.backgroundColor = "grey";      

                    } else { 

                        column.style.backgroundColor = "white";
                        column.style.backgroundColor = "pink";  

                    };
               });
        columns.appendChild(column);
    };
    container.appendChild(columns);
};

button.addEventListener("click", (e) => {
    let NumOfSquares = prompt("enter number of rows and columns (eg: 16 means 16x16 grid)");
    if (Number.isInteger(Number(NumOfSquares)) && NumOfSquares <= 100 && NumOfSquares > 0){
        container.replaceChildren();
            for (let i = 0; i < NumOfSquares; i++){
                let columns = document.createElement("div");
                columns.classList.add("columns");
                for (let j = 0; j < NumOfSquares; j++){
                    let column = document.createElement("div");
                    column.classList.add("column");
                        column.addEventListener("mouseover", (e) => {
                    if (randomColor() < 0.2){
                       
                        column.style.backgroundColor = "white";
                        column.style.backgroundColor = "red";
   
                    } else if (randomColor() > 0.2 && randomColor() < 0.4){
                       
                        column.style.backgroundColor = "white";
                        column.style.backgroundColor = "blue";
      
                    } else if (randomColor() > 0.4 && randomColor() < 0.6){
                       
                        column.style.backgroundColor = "white";
                        column.style.backgroundColor = "green";    
                
                    } else if (randomColor() > 0.6 && randomColor() < 0.8){
                       
                        column.style.backgroundColor = "white";
                        column.style.backgroundColor = "orange";
               
                    } else if (randomColor() > 0.8 && randomColor() < 1){

                        column.style.backgroundColor = "white";
                        column.style.backgroundColor = "grey";      

                    } else { 

                        column.style.backgroundColor = "white";
                        column.style.backgroundColor = "pink";  

                    };
               });
                    columns.appendChild(column);
                };
        container.appendChild(columns);
        };
    } else if (NumOfSquares > 100 || NumOfSquares <= 0){
        alert("chill bro! you can can only write 1-100 here");
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
    
        column.style.backgroundColor = "   
    } else if (randomColor() > 0.2 && randomColor() < 0.4){
        
            column.style.backgroundColor = "  
    } else if (randomColor() > 0.4 && randomColor() < 0.6){
           
                column.style.backgroundColor = "";              
    } else if (randomColor() > 0.6 && randomColor() < 0.8){
           
                column.style.backgroundColor = "           
    } else if (randomColor() > 0.8 && randomColor() < 1){
           
                column.style.backgroundColor = "";           
};
*/