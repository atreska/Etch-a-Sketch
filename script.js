

let mainContainer = document.createElement('div');
mainContainer.classList.add('main-container');
document.body.appendChild(mainContainer);

let h1 = document.createElement('h1');
h1.textContent = 'Etch-A-Sketch';

let selectionContainer = document.createElement('div');
selectionContainer.classList.add('selection-container');
let selectionDiv = document.createElement('div');
selectionDiv.classList.add('selection');
selectionContainer.appendChild(selectionDiv);

let selectionButton = document.createElement('button');
selectionButton.textContent = 'Choose a Grid';
selectionDiv.appendChild(selectionButton);

function removeGrid() {
    while (sketchBoardContainer.hasChildNodes()) {
        sketchBoardContainer.removeChild(sketchBoardContainer.firstChild);
    }
}

function createNewGrid() {

    removeGrid();

    let usrSeleciton = parseInt(prompt('How many squares would you like for the grid?'));
    while (usrSeleciton < 1 || usrSeleciton > 100) {
        usrSeleciton = parseInt(prompt('Number must be from 1 - 100'));
    }
    createSquares(usrSeleciton);
}

selectionButton.addEventListener('click', createNewGrid);


let sketchContainer = document.createElement('div');
sketchContainer.classList.add('sketch-container');
let sketchBoardContainer = document.createElement('div');
sketchBoardContainer.className = 'sketch-board-container';
sketchContainer.appendChild(sketchBoardContainer);

mainContainer.append(h1, selectionContainer, sketchContainer);



function createSquares(enteredNumSquares) {
    for (let i = 0; i < enteredNumSquares; i++) {
        let squareContainer = document.createElement('div');
        squareContainer.className = 'square-container';
        for (let j = 0; j < enteredNumSquares; j++) {
            let square = document.createElement('div');
            square.className = 'squares';

            square.addEventListener('mouseover', () => {
                square.style.backgroundColor = 'black';
            })


            squareContainer.append(square);
        }
        sketchBoardContainer.append(squareContainer);
    }
}

createSquares(16);