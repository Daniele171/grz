var tabella = document.getElementById("tabella");
var somma = 0;
var contatore = 0;

var contenutoTabella = "<table>";

for (var i = 1; i <= 10; i++) {
    contenutoTabella += "<tr>";
    for (var j = 1; j <= 10; j++) {
        var valore = i * j;
        if (i === 1 || i === 10 || j === 1 || j === 10) {
            contenutoTabella += "<td class='perimetro'>" + valore + "</td>";
            somma += valore;
            contatore++;
        } else {
            contenutoTabella += "<td>" + valore + "</td>";
        }
    }
    contenutoTabella += "</tr>";
}

contenutoTabella += "</table>";
contenutoTabella += "<p>La Somma e': " + somma + "</p>";
contenutoTabella += "<p>La Media e': " + (somma / contatore) + "</p>";

tabella.innerHTML = contenutoTabella;
