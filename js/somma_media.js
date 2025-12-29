var listaNumeri = "";
var n = 4;
var minimo = 1;
var massimo = 100;

for (var i = 0; i < n; i++) {
    var numero = Math.floor(Math.random() * (massimo - minimo + 1) + minimo);
    listaNumeri += "<li>" + numero + "</li>";
}

var elLista = document.getElementById("lista");
elLista.innerHTML = listaNumeri;

var somma = 0;
var media = 0;
var numElementi = document.getElementsByTagName("li");

for (var i = 0; i < numElementi.length; i++) {
    var valore = parseInt(numElementi[i].innerHTML);
    somma += valore;
}

media = somma / numElementi.length;

var risultato = document.getElementById("risultato");
risultato.innerHTML = "La somma e': " + somma + "<br>La media e': " + media.toFixed(2);