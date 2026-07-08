(() => {
    let gridSize = 16;  
    

    const container = AddGrid(gridSize);

    //Adds a css class on mouse hover to the target element/s of the container div through the Event Bubbling mechanism
    container.addEventListener('mouseover', (event) => {
        event.target.classList.add('fill');
    });

    const btnGridSize = document.querySelector("#btn-grid-size");

    btnGridSize.addEventListener("click", () => {
        let userInput = parseInt(prompt("Enter a value between 0-100:"));
        
        //Validate userInput and alert the user if it is not valid
        if (!(Number.isInteger(userInput)) || userInput > 100)   
            alert("Error: This is not a valid number.");
        else
            AddGrid(userInput);
    });

})();

//Creates a grid of variable size with gridSize num of rows and gridSize num of columns within each row and returns the container
function AddGrid(gridSize) {
    const container = document.querySelector(".container");
    console.log(gridSize);
    if (container.childElementCount !== 0){
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
    }

    gridSize = gridSize > 100 ? 100 : gridSize;

    for (i = 0; i <= gridSize; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        container.append(row);

        for (n = 0; n <= gridSize; n++) {
            const col = document.createElement("div");
            col.classList.add('col');
            row.appendChild(col);
        }
    }
    return container;
}




