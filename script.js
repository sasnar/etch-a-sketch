let sliderValue = document.querySelector('#slide'); 
let sliderValueDisplay = document.querySelector('.sliderValue');
sliderValue.addEventListener('input', function () {
    sliderValueDisplay.textContent = `${sliderValue.value} x ${sliderValue.value}`;
});

let gameGrid = document.querySelector('.container');
sliderValue.addEventListener('input', function () {
    if (gameGrid.hasChildNodes) {
        gameGrid.replaceChildren();
    }
    let gridSize = sliderValue.value;
    for (let i = 0; i < gridSize*gridSize; i++) {
        let newCell = document.createElement('div');
        newCell.className = 'gridCell';
        gameGrid.appendChild(newCell);

    }
    newCell.style.flex = "1 0 auto";
});
