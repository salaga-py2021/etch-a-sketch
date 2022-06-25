// Set Grid Height & Width



function createGrid(numOfHorizontalBoxes, numOfVerticalBoxes, 
                    gridHeight, gridWidth){ 
    const gridContainer = document.querySelector('.gridContainer');
    for (let i = 0; i<numOfVerticalBoxes; i++){
        const rowContainer = document.createElement('div');
        for (let x = 0; x<numOfHorizontalBoxes; x++){
            const gridBox = document.createElement('div');
            gridBox.style.height = `${gridHeight/numOfVerticalBoxes}px`;
            gridBox.style.width = `${gridWidth/numOfHorizontalBoxes}px`;
            gridBox.style.border = 'solid black';
            gridBox.classList.add('gridBox');
            rowContainer.appendChild(gridBox);
        }
        gridContainer.appendChild(rowContainer);
    }
}

createGrid(16,16,1000,1000)