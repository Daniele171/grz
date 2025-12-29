// Creo la tabella
var contenutoTabella = "<table>";
var numRighe = 5;
var numColonne = 5;

var sommaPari = 0;
var sommaDispari = 0;
var countPari = 0;
var countDispari = 0;

for (var i = 0; i < numRighe; i++) {
    contenutoTabella += "<tr>";
    for (var j = 0; j < numColonne; j++) {
        var numero = Math.floor(Math.random() * 100) + 1;
        if (numero % 2 === 0) {
            contenutoTabella += "<td class='pari'>" + numero + "</td>";
            sommaPari += numero;
            countPari++;
        } else {
            contenutoTabella += "<td>" + numero + "</td>";
            sommaDispari += numero;
            countDispari++;
        }
    }
    contenutoTabella += "</tr>";
}
contenutoTabella += "</table>";

// Inserisco la tabella nel div con id 'tabella'
var elTabella = document.getElementById("tabella");
elTabella.innerHTML = contenutoTabella;

// Calcolo le medie
var mediaPari = sommaPari / countPari;
var mediaDispari = sommaDispari / countDispari;
var mediaTotale = (sommaPari + sommaDispari) / (countPari + countDispari);

// Stampo i risultati nel div con id 'risultato'
var elRisultato = document.getElementById("risultato");
var contenutoRisultato = "";
contenutoRisultato += "<p>La media dei numeri pari è: " + mediaPari.toFixed(2) + "</p>";
contenutoRisultato += "<p>La media dei numeri dispari è: " + mediaDispari.toFixed(2) + "</p>";
contenutoRisultato += "<p>La media totale è: " + mediaTotale.toFixed(2) + "</p>";

elRisultato.innerHTML = contenutoRisultato;
