const cell = document.getElementsByClassName("cell");

function makeGrid() {
  function makeColumns() {
    let columns = "";
    for (let i = 0; i < 100; i++) {
      columns += '<div class="column"></div>';
    }
    return columns;
  }
  function makeCells() {
    let cells = "";
    for (let i = 0; i < 50; i++) {
      cells += '<div class="cell"></div>';
    }
    return cells;
  }
  document.getElementById("grid-container").innerHTML = makeColumns();
  for (let i = 0; i < 100; i++) {
    document.getElementsByClassName("column")[i].innerHTML = makeCells();
  }

  // Initial figure ("glider");

  init = 2423;
  cell[init].style.backgroundColor = "red";
  cell[init - 50].style.backgroundColor = "red";
  cell[init + 50].style.backgroundColor = "red";
  cell[init + 49].style.backgroundColor = "red";
  cell[init - 2].style.backgroundColor = "red";

  for (let i = 0; i < 5000; i++) {
    cell[i].setAttribute("onclick", "toggleFill(this)");
  }
}

makeGrid();

function toggleFill(color) {
  if (color.style.backgroundColor === "") {
    color.style.backgroundColor = "red";
  } else {
    color.style.backgroundColor = "";
  }
}

// Movement when pressing button;

function change() {
  let snapshot = [];
  for (let i = 0; i < 5000; i++) {
    snapshot.push(cell[i].style.getPropertyValue("background-color"));
  }

  for (let i = 0; i < 5000; i++) {
    let count = 0;
    let around = [];
    around.push(snapshot[i - 1]);
    around.push(snapshot[i + 49]);
    around.push(snapshot[i + 50]);
    around.push(snapshot[i + 51]);
    around.push(snapshot[i + 1]);
    around.push(snapshot[i - 49]);
    around.push(snapshot[i - 50]);
    around.push(snapshot[i - 51]);
    for (let i = 0; i < 8; i++) {
      if (around[i] === "red") {
        count++;
      }
    }
    if (cell[i].style.backgroundColor === "red") {
      if (count <= 1 || count >= 4) {
        cell[i].style.backgroundColor = "";
      }
    } else if (cell[i].style.backgroundColor === "") {
      if (count === 3) {
        cell[i].style.backgroundColor = "red";
      }
    }
  }
}

// Buttons

document.getElementById("cycle").onclick = function() {
  change();
};
document.getElementById("start").onclick = function() {
  loop = setInterval(change, 100);
};
document.getElementById("reset").onclick = function() {
  clearInterval(loop);
  makeGrid();
};
