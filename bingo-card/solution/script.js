var i,
    j,
    row,
    col,
    totalCells = 0,
    section = document.getElementsByTagName('section')[0],
    imgURLs = [];

for (i=1; i<=75; i++) {
    imgURLs.push('http://www.moonhighway.com/class/assets/car-bingo/' + i + '.jpg');
}

function randomItem(arr) {
    var i = Math.floor(Math.random()*arr.length);
    return arr.splice(i, 1);
}

function toggleSelect() {
    if (this.innerHTML) {
        this.innerHTML = '';
    } else {
        this.innerHTML = '<span class="chip"></span>';
    }
}

for (i=0; i<5; i++) {
    row = document.createElement("div");
    for (j=0; j<5; j++) {
        col = document.createElement('div');
        if (totalCells === 12) {
            col.innerHTML = "<span>free space</span>";
        } else {
            col.style.backgroundImage = 'url(' + randomItem(imgURLs) + ')';
            col.onclick = toggleSelect;
        }
        row.appendChild(col);
        totalCells++;
    }
    section.appendChild(row);
}