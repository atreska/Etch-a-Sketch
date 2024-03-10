

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
let sketchBoardContainer = document.createElement('div');
sketchBoardContainer.className = 'sketch-board-container';
sketchContainer.appendChild(sketchBoardContainer);

document.body.append(h1, selectionContainer, sketchContainer);

let numSquares = parseInt(prompt('How many squares?'));

function createSquares(enteredNumSquares) {
    for (let i = 0; i < enteredNumSquares; i++) {
        let cellContainer = document.createElement('div');
        cellContainer.className = 'cell-container';
        for (let j = 0; j < enteredNumSquares; j++) {
            let cell = document.createElement('div');
            cell.className = 'squares';

            cell.addEventListener('mouseover', () => {
                cell.style.backgroundColor = 'red';
            })


            cellContainer.append(cell);
        }
        sketchBoardContainer.append(cellContainer);
    }
}

createSquares(numSquares);