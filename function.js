const drawingSpace = document.querySelector(".drawing")
const color = document.querySelector("#couleur")
const sizeChoice = document.querySelectorAll('input')
let tailleEcran = window.innerWidth
let sizeSpace;
(tailleEcran > 600)?sizeSpace = 600 : sizeSpace = 320;

console.log(tailleEcran)

function setGrid(value){
    drawingSpace.innerHTML = "";
    let sizeDiv = sizeSpace / value;

    for (let i = 0; i < value; i++) {
        let column = document.createElement('div')
        column.className = 'column'
        
        for (let j = 0; j < value; j++) {
            let cases = document.createElement('div');
            cases.id = 'case';
            cases.style.height = sizeDiv + "px"
            cases.style.width = sizeDiv + "px"
            column.appendChild(cases)
        }
        drawingSpace.appendChild(column)
    }
    let cases = document.querySelectorAll("#case") 
     cases.forEach((squart) => {
        squart.addEventListener("mousemove", ()=>{
            squart.style.backgroundColor = 'green'
        })
    })
}

setGrid(16)
sizeChoice.forEach((input)=> {
    input.addEventListener("click" , ()=> {
        setGrid(parseInt(input.id))
    })
})



// color.addEventListener("input" ,() => {
//     console.log(color.value)
// })



// drawingSpace.addEventListener("mousemove" ,() => {
//    document.querySelector(".drawing").style.backgroundColor = 'grey' ;
// })

