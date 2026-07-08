(() => {
    let gridSize = 16;

    const container = AddGrid(gridSize);
    container.addEventListener('mouseover', (event) => {
        event.target.classList.add('fill');
    });

})();


function AddGrid(gridSize) {
    const container = document.querySelector(".container");

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




