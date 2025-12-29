var tris = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];
var turno = 'X';

function draw() {
    var tabella = '<table>';
    for (var i = 0; i < 3; i++) {
        tabella += '<tr>';
        for (var j = 0; j < 3; j++) {
            tabella += "<td id='cella" + i + j + "' onclick='clickCella(" + i + ", " + j + ")'>" + tris[i][j] + "</td>";
        }
        tabella += '</tr>';
    }
    tabella += '</table>';
    document.getElementById('tris').innerHTML = tabella;
}

function clickCella(i, j) {
    if (tris[i][j] == '') {
        tris[i][j] = turno;
        if (turno == 'X') {
            turno = 'O';
        } else {
            turno = 'X';
        }
        draw();
    }
    checkWinner();
}

function reset() {
    tris = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];
    turno = 'X';
    draw();
}

draw();

function checkWinner() {
    // Controlla righe
    for (var i = 0; i < 3; i++) {
        if (tris[i][0] !== '' && tris[i][0] === tris[i][1] && tris[i][0] === tris[i][2]) {
            alert(tris[i][0] + ' ha vinto!');
            reset();
            return;
        }
    }

    // Controlla colonne
    for (var j = 0; j < 3; j++) {
        if (tris[0][j] !== '' && tris[0][j] === tris[1][j] && tris[0][j] === tris[2][j]) {
            alert(tris[0][j] + ' ha vinto!');
            reset();
            return;
        }
    }

    // Controlla diagonali
    if (tris[0][0] !== '' && tris[0][0] === tris[1][1] && tris[0][0] === tris[2][2]) {
        alert(tris[0][0] + ' ha vinto!');
        reset();
        return;
    }

    if (tris[0][2] !== '' && tris[0][2] === tris[1][1] && tris[0][2] === tris[2][0]) {
        alert(tris[0][2] + ' ha vinto!');
        reset();
        return;
    }

    // Controlla pareggio
    var full = true;
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            if (tris[i][j] === '') {
                full = false;
            }
        }
    }

    if (full) {
        alert('Pareggio!');
        reset();
        return;
    }
}
