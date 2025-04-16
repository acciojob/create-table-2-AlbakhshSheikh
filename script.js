function createTable() {
    let rows = prompt("Input number of rows");
    let cols = prompt("Input number of columns");

    rows = parseInt(rows);
    cols = parseInt(cols);

    if (isNaN(rows) || isNaN(cols)) {
        return;
    }

    if (rows <= 0 || cols <= 0) {
        alert("Number of rows and columns must be positive.");
        return;
    }

    const table = document.getElementById("myTable");

    table.innerHTML = "";

    for (let i = 0; i < rows; i++) {
        const tr = document.createElement("tr");
        for (let j = 0; j < cols; j++) {
            const td = document.createElement("td");
            td.textContent = `Row-${i} Column-${j}`;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}
