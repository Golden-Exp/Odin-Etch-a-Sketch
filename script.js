const container = document.querySelector("#container");
let number = 16;
const size = document.querySelector("#button");
function createGrid(size) {
    container.innerHTML = ""
    for (let i = 0; i < size*size; i++) {
        const square = document.createElement("div");
        square.classList.add("one");    
        square.style.width = `${550/size}px`
        square.style.height = `${550/size}px`
        let currop = 0.1;
        square.style.opacity = currop
        square.addEventListener("mouseover", () => {
            square.style.background = getRandomColor()
            currop += 0.1
            square.style.opacity = currop
        })
        container.appendChild(square);
    }
}
function getRandomColor(){
    let r = Math.random() * 256
    let g = Math.random() * 256
    let b = Math.random() * 256
    return `rgb(${r}, ${g}, ${b})`
}
size.addEventListener("click", () => {
    let number = prompt("Enter the size from 1 - 100");
    createGrid(number)
})

createGrid(16);