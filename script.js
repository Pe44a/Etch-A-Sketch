const container = document.querySelector('.container');
const square = document.querySelectorAll('.grid-item');

    
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
                div.style.backgroundColor = 'black';
                    
            });

container.appendChild(div);
}
}

grid(16,16);

