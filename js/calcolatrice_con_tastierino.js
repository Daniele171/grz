document.getElementById('7').addEventListener('click', function() { aggiungiNumero('7'); });
document.getElementById('8').addEventListener('click', function() { aggiungiNumero('8'); });
document.getElementById('9').addEventListener('click', function() { aggiungiNumero('9'); });
document.getElementById('dividi').addEventListener('click', function() { aggiungiOperatore(':'); });
document.getElementById('4').addEventListener('click', function() { aggiungiNumero('4'); });
document.getElementById('5').addEventListener('click', function() { aggiungiNumero('5'); });
document.getElementById('6').addEventListener('click', function() { aggiungiNumero('6'); });
document.getElementById('moltiplica').addEventListener('click', function() { aggiungiOperatore('*'); });
document.getElementById('1').addEventListener('click', function() { aggiungiNumero('1'); });
document.getElementById('2').addEventListener('click', function() { aggiungiNumero('2'); });
document.getElementById('3').addEventListener('click', function() { aggiungiNumero('3'); });
document.getElementById('sottrai').addEventListener('click', function() { aggiungiOperatore('-'); });
document.getElementById('0').addEventListener('click', function() { aggiungiNumero('0'); });
document.getElementById('cancella').addEventListener('click', cancella);
document.getElementById('uguale').addEventListener('click', calcola);
document.getElementById('somma').addEventListener('click', function() { aggiungiOperatore('+'); });

var schermo = document.getElementById('schermo');
var inputCorrente = '';
var operatore = '';
var primoOperando = null;

// Funzioni per gestire i clic sui pulsanti numerici
function aggiungiNumero(numero) {
    inputCorrente += numero;
    schermo.innerText = inputCorrente;
}

// Funzioni per gestire i clic sui pulsanti degli operatori
function aggiungiOperatore(op) {
    if (inputCorrente !== '') {
        if (primoOperando === null) {
            primoOperando = parseFloat(inputCorrente);
        } else {
            // Nel caso di operazioni concatenate
            var secondoOperando = parseFloat(inputCorrente);
            switch (operatore) {
                case '+':
                    primoOperando += secondoOperando;
                    break;
                case '-':
                    primoOperando -= secondoOperando;
                    break;
                case '*':
                    primoOperando *= secondoOperando;
                    break;
                case ':':
                    if (secondoOperando !== 0) {
                        primoOperando /= secondoOperando;
                    } else {
                        primoOperando = 'Errore';
                    }
                    break;
            }
        }
        operatore = op;
        inputCorrente = '';
    }
}

// Funzione per cancellare l'input corrente
function cancella() {
    inputCorrente = '';
    operatore = '';
    primoOperando = null;
    schermo.innerText = '';
}

// Funzione per eseguire il calcolo
function calcola() {
    if (primoOperando !== null && operatore !== '' && inputCorrente !== '') {
        var secondoOperando = parseFloat(inputCorrente);
        var risultato;
        switch (operatore) {
            case '+':
                risultato = primoOperando + secondoOperando;
                break;
            case '-':
                risultato = primoOperando - secondoOperando;
                break;
            case '*':
                risultato = primoOperando * secondoOperando;
                break;
            case ':':
                if (secondoOperando !== 0) {
                    risultato = primoOperando / secondoOperando;
                } else {
                    risultato = 'Errore';
                }
                break;
            default:
                risultato = 'Errore';
        }
        schermo.innerText = risultato;
        inputCorrente = '';
        primoOperando = null;
        operatore = '';
    }
}