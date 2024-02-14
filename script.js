let sliderValue = document.querySelector('#slide'); 
let sliderValueDisplay = document.querySelector('.sliderValue');
let gameGrid = document.querySelector('.container');
let blackMode = document.querySelector('#blackMode');
let rgbMode = document.querySelector('#rgbMode');

sliderValue.addEventListener('input', function () {
    sliderValueDisplay.textContent = `${sliderValue.value} x ${sliderValue.value}`;
    createGrid();
});

blackMode.addEventListener('change', function () {
    createGrid();
});

rgbMode.addEventListener('change', function () {
    createGrid();
});

function getRandomColor () {
    let red = Math.floor(Math.random() * 255 + 1);
    let green = Math.floor(Math.random() * 255 + 1);
    let blue = Math.floor(Math.random() * 255 + 1);
    return rgb = `rgb(${red}, ${green}, ${blue})`
}

function createGrid() {
    let gridSize = sliderValue.value;
    let containerWidth = gameGrid.clientWidth; 
    let cellWidth = containerWidth / gridSize; 
    gameGrid.innerHTML = '';
    for (let i = 0; i < gridSize * gridSize; i++) {
        let newCell = document.createElement('div');
        newCell.className = 'gridCell';
        newCell.style.width = `${cellWidth}px`; 
        newCell.style.height = `${cellWidth}px`; 
        gameGrid.appendChild(newCell);
    }
    let cells = document.querySelectorAll('.gridCell');
    if (blackMode
    .checked) {
        cells.forEach(function (div) {
            div.addEventListener('mouseover', function () {
                div.style.backgroundColor = "black"; 
            });
        });
    } else {
        cells.forEach(function (div) {
            div.addEventListener('mouseover', function () {
                div.style.backgroundColor = getRandomColor();
            });
        });
    } 
}

createGrid();