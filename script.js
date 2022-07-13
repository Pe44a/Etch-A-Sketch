const container = document.querySelector('.container');
const square = document.querySelectorAll('.grid-item');
const button = document.querySelector('button');


function randomRgb() { //Generates random rgb value
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
        return `rgb(${x},${y},${z})`;
 }  
 
    
function grid(row,column) {

    document.documentElement.style.setProperty(`--rowNum`, row);
    document.documentElement.style.setProperty(`--colNum`, column);

    //This variable calculates square size so it is equally distributed across the .container
    let squareSize = Math.round(((container.clientHeight * container.clientWidth) / (row * column)) /4); 
    

    for(let i = 0; i < (row * column); i++) {
        const div = document.createElement('div');
            div.classList.add('grid-item');
            div.style.height = squareSize;
            div.style.width = squareSize;

                div.addEventListener('mouseover',changeColor = () => {
                    div.style.backgroundColor = randomRgb();// Generate random color         
            });
container.appendChild(div);
}
}

grid(16,16);


    button.addEventListener('click', changeGrid = () => {
        let input = prompt('Your input');
            if(input <= 100){
                container.innerHTML = '';// Deletes current grid, so you can put new grid
                    grid(input,input);
            } else {
                alert('Maximum size of grid is 100 x 100');
            }   
    })