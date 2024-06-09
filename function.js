const drawingSpace = document.querySelector(".drawing");
const color = document.querySelector("#color");
const sizeChoice = document.querySelector('#size');

let drawingColor = "#000000";
let sizeSquart = 16;

let sizeDrawingSpace;
(window.innerWidth > 600)?sizeDrawingSpace = 600 : (window.innerWidth >320)? sizeDrawingSpace = 320 : sizeDrawingSpace = 300;

function setGrid(sizeSquart){
    drawingSpace.innerHTML = "";
    let sizeDiv = sizeDrawingSpace / sizeSquart;

    for (let i = 0; i < sizeSquart; i++) {
        let column = document.createElement('div');
        column.className = 'column'
        
        for (let j = 0; j < sizeSquart; j++) {
            let cases = document.createElement('div');
            cases.id = 'case';
            cases.style.height = sizeDiv + "px";
            cases.style.width = sizeDiv + "px";
            column.appendChild(cases);
        }
        drawingSpace.appendChild(column);
    }
    let cases = document.querySelectorAll("#case"); 
     cases.forEach((squart) => {
        squart.addEventListener("mousemove", ()=>{
            squart.style.backgroundColor = drawingColor;
        })
    })
}

setGrid(sizeSquart);

sizeChoice.addEventListener("change",()=>{
    sizeSquart = sizeChoice.value;
    document.querySelector('#value').innerHTML = sizeSquart +"x"+ sizeSquart;
    setGrid(sizeSquart);
})

document.querySelector("#reset").addEventListener("click", ()=>{ setGrid(sizeSquart)});

color.addEventListener("input" , ()=> {
    drawingColor = color.value;
    setGrid(sizeSquart);
})

