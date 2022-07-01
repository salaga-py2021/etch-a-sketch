function createGrid(numOfHorizontalBoxes, numOfVerticalBoxes){ 
    const gridContainer = document.querySelector('.gridContainer');
    const gridContainerStyle = window.getComputedStyle(gridContainer, null);
    let gridHeight = Number(gridContainerStyle.getPropertyValue('height').slice(0,-2));
    let gridWidth = Number(gridContainerStyle.getPropertyValue('width').slice(0,-2));
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
    else if (shading){
        let currentColor = this.style.backgroundColor.slice(4,-1).split(',');
        currentColor = currentColor.map(Number);
        if (currentColor.length == 1){
            currentColor = [255,255,255];
        }
        console.log('currentColor',currentColor);
        let setColor = [];
        for (let color of currentColor){
            setColor.push(Math.floor(Number(color)*0.90));
        }
        console.log('toSet', setColor);
        this.style.backgroundColor = 'rgb(' + setColor.join(',') + ')';
    }
    else{
        const colorPicker = document.querySelector('#buttonsContainer > input');
        this.style.backgroundColor = colorPicker.value; 
    }
}

function clearGrid(){
    const gridBoxes = document.querySelectorAll('.gridBox');
    gridBoxes.forEach(box => box.style.backgroundColor = 'white')
}

function addHoverEventListener(){
    const gridBoxes = document.querySelectorAll('.gridBox');
    gridBoxes.forEach(box => box.addEventListener('mouseover', changeBackground));
}

function removeHoverEventListener(){
    const gridBoxes = document.querySelectorAll('.gridBox');
    gridBoxes.forEach(box => box.removeEventListener('mouseover', changeBackground));
}

function highlightBtns(eraser, shading, rainbow){
    if (eraser){
        eraserBtn.classList.add('clicked');
        colorBtn.classList.remove('clicked');
        shadingBtn.classList.remove('clicked');
        rainbowBtn.classList.remove('clicked');
    }
    else if (shading){
        eraserBtn.classList.remove('clicked');
        colorBtn.classList.remove('clicked');
        shadingBtn.classList.add('clicked');
        rainbowBtn.classList.remove('clicked');
    }
    else if (rainbow){
        eraserBtn.classList.remove('clicked');
        colorBtn.classList.remove('clicked');
        shadingBtn.classList.remove('clicked');
        rainbowBtn.classList.add('clicked');
    }
    else {
        eraserBtn.classList.remove('clicked');
        colorBtn.classList.add('clicked');
        shadingBtn.classList.remove('clicked');
        rainbowBtn.classList.remove('clicked');
    }
}


let rainbow = false; 
let shading = false;
let eraser = false;
const documentBody = document.querySelector('body')


// Create a grid 
createGrid(16,16);

//Event Listener for Slider
const myRange = document.getElementById('myRange');
const displayRange = document.getElementById('rangeDisplay');
myRange.oninput = function () {
    document.querySelector('.gridContainer').innerHTML = ''
    createGrid(myRange.value, myRange.value);
    displayRange.innerHTML = `${myRange.value} x ${myRange.value}`
}

// Start hover listener on mousedown
documentBody.addEventListener('mousedown', addHoverEventListener);

// Stop hover listener on mouseup
documentBody.addEventListener('mouseup', removeHoverEventListener);

// Color Mode
const colorBtn = document.getElementById('colorButton');
colorBtn.addEventListener('click', () => {
    rainbow = false;
    shading = false;
    eraser = false;
    highlightBtns(eraser, shading, rainbow)
});

// Rainbow Mode 
const rainbowBtn = document.getElementById('rainbowButton');
rainbowBtn.addEventListener('click', () => {
    rainbow = true;
    shading = false;
    eraser = false;
    highlightBtns(eraser, shading, rainbow)
});

// Shading
const shadingBtn = document.getElementById('shadingButton');
shadingBtn.addEventListener('click', () => {
    shading = true;
    rainbow = false;
    eraser = false;
    highlightBtns(eraser, shading, rainbow)
});

// Eraser
const eraserBtn = document.getElementById('eraser');
eraserBtn.addEventListener('click', () => {
    eraser = true;
    shading = false;
    rainbow = false;
    highlightBtns(eraser, shading, rainbow)
});

highlightBtns(eraser, shading, rainbow);
// Fing ClearBtn and Clear grid when pressed 
const clearBtn = document.getElementById('clear');
clearBtn.addEventListener('click',clearGrid);