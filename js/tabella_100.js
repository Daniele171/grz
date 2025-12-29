function isPrimo(num) {
    for(var i = 2; i < num; i++)
        if(num % i === 0) return false;
    return num > 1;
}

// Generazione della tabella
var tabella = "";
for (var i = 0; i < 10; i++) {
    tabella += "<tr>";
    for (var j = 1; j <= 10; j++) {
        var numero = i * 10 + j;
        tabella += "<td id='cella" + numero + "'>" + numero + "</td>";
    }
    tabella += "</tr>";
}

var elTabella = document.getElementById("tabella");
elTabella.innerHTML = tabella;

// Evidenziare i numeri primi
for (var i = 1; i <= 100; i++) {
    if (isPrimo(i)) {
        var cella = document.getElementById("cella" + i);
        cella.classList.add("primo");
    }
}
