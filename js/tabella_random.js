document.getElementById("crea-tabella").addEventListener("click", creaTabella);
document.getElementById("calcola-media").addEventListener("click", calcolaMedia);

function creaTabella() {
    var righe = parseInt(document.getElementById("righe").value);
    var colonne = parseInt(document.getElementById("colonne").value);
    var tabellaHTML = '<tr>';

    // Controllo degli input
    if (isNaN(righe) || isNaN(colonne) || righe <= 0 || colonne <= 0) {
        alert("Inserire valori validi per righe e colonne.");
        return;
    }

    // Genera la tabella con valori casuali
    for (var i = 0; i < righe; i++) {
        for (var j = 0; j < colonne; j++) {
            tabellaHTML += '<td>' + (Math.floor(Math.random() * 100) + 1) + '</td>';
        }
        tabellaHTML += '</tr>';
        if (i < righe - 1) {
            tabellaHTML += '<tr>';
        }
    }

    document.getElementById("tabella").innerHTML = tabellaHTML;
}

function calcolaMedia() {
    var celle = document.getElementById("tabella").getElementsByTagName("td");
    var somma = 0;
    var conteggio = 0;

    for (var i = 0; i < celle.length; i++) {
        somma += parseInt(celle[i].textContent);
        conteggio++;
    }

    var media = somma / conteggio;
    document.getElementById("media").textContent = "Media: " + media.toFixed(2);
}