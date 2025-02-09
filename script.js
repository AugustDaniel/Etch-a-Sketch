function genGrid(size) {
    const newGrid = [];

    for(let i = 0; i < size; i++) {
        const rowDiv = document.createElement('div');
        rowDiv.classList.add("grid-row");
        newGrid.push(rowDiv);

        for(let j = 0; j < size; j++) {
            const gridBox = document.createElement('div');
            gridBox.classList.add("grid-box");
            gridBox.addEventListener('mouseover', () => setBlack(gridBox));
            gridBox.addEventListener('touchmove', (e) => {
                e.preventDefault();
                let touch = e.touches[0];
                let element = document.elementFromPoint(touch.clientX, touch.clientY);

                if (element && element.classList.contains('grid-box')) {
                    setBlack(element);
                }
            });

            rowDiv.appendChild(gridBox);
        }
    }

    gridSection.replaceChildren(...newGrid);
}

function setBlack(element) {
    element.classList.add('bg-black');
}

const gridSection = document.querySelector('.grid-section');
const form = document.querySelector(".generate-section form");
const input = document.getElementById("input-grid-size");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    genGrid(input.max- input.value + 1);
});

genGrid(50);