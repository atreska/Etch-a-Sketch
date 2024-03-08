

let mainContainer = document.createElement('div');
mainContainer.classList.add('main-container');
document.body.appendChild(mainContainer);

let h1 = document.createElement('h1');
h1.textContent = 'Etch-A-Sketch';

let selectionContainer = document.createElement('div');
selectionContainer.classList.add('selection-conainer');
let selectionDiv = document.createElement('div');
selectionDiv.classList.add('selection');
selectionContainer.appendChild(selectionDiv);

let sketchContainer = document.createElement('div');
sketchContainer.classList.add('sketch-container');
let squareContainer = document.createElement('div');
squareContainer.className = 'square-container';
sketchContainer.appendChild(squareContainer);

document.body.append(h1, selectionContainer, sketchContainer);

let numSquares = parseInt(prompt('How many squares?'));

function createSquares(enteredNumSquares) {
    for (let i = 0; i < enteredNumSquares; i++) {
        let cellContainer = document.createElement('div');
        cellContainer.className = 'cell-container';
        for (let j = 0; j < enteredNumSquares; j++) {
            let cell = document.createElement('div');
            cell.className = 'squares';
            cellContainer.append(cell);
        }
        squareContainer.append(cellContainer);
    }
}

createSquares(numSquares);