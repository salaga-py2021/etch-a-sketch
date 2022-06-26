function createGrid(numOfHorizontalBoxes, numOfVerticalBoxes, 
                    gridHeight, gridWidth){ 
    const gridContainer = document.querySelector('.gridContainer');
    gridContainer.style.height = `${gridHeight}px`;
    gridContainer.style.width = `${gridWidth}px`
    for (let i = 0; i<numOfVerticalBoxes; i++){
        const rowContainer = document.createElement('div');
        rowContainer.classList.add('rowContainer')
        for (let x = 0; x<numOfHorizontalBoxes; x++){
            const gridBox = document.createElement('div');
            gridBox.style.height = `${gridHeight/numOfVerticalBoxes}px`;
            gridBox.style.width = `${gridWidth/numOfHorizontalBoxes}px`;
            gridBox.classList.add('gridBox');
            rowContainer.appendChild(gridBox);
        }
        gridContainer.appendChild(rowContainer);
    }
}

function changeBackground(gridBox){
    if (rainbow){
        let randomColor = 'rgb(' + (Math.floor(Math.random() * 256)) 
                           + ',' + (Math.floor(Math.random() * 256)) 
                           + ',' + (Math.floor(Math.random() * 256)) + ')';
        this.style.backgroundColor = randomColor;
    }
    else if (eraser){
        this.style.backgroundColor = 'white';
    }
    else{
        const colorPicker = document.querySelector('.buttons > input');
        this.style.backgroundColor = colorPicker.value; 
    }
}

function clearGrid(){
    gridBoxes.forEach(box => box.style.backgroundColor = 'white')
}

function addHoverEventListener(){
    console.log('Here')
    const gridBoxes = document.querySelectorAll('.gridBox');
    gridBoxes.forEach(box => box.addEventListener('mouseover', changeBackground));
}

function removeHoverEventListener(){
    console.log('here')
    const gridBoxes = document.querySelectorAll('.gridBox');
    gridBoxes.forEach(box => box.removeEventListener('mouseover', changeBackground));
}

let rainbow = false; 
let shading = false;
let eraser = false;
const documentBody = document.querySelector('body')

// Create a grid 
createGrid(16,16,500,500);

// Check for mouseDown
documentBody.addEventListener('mousedown', addHoverEventListener)

//Check for mouseUp
documentBody.addEventListener('mouseout', removeHoverEventListener)

// Color Mode
const colorBtn = document.getElementById('colorButton');
colorBtn.addEventListener('click', () => {
    rainbow = false;
    shading = false;
    eraser = false;
})

// Rainbow Mode 
const rainbowBtn = document.getElementById('rainbowButton');
rainbowBtn.addEventListener('click', () => {
    rainbow = true;
})

// Eraser
const eraserBtn = document.getElementById('eraser');
eraserBtn.addEventListener('click', () => {
    eraser = true;
})

// Fing ClearBtn and Clear grid when pressed 
const clearBtn = document.getElementById('clear');
clearBtn.addEventListener('click',clearGrid)