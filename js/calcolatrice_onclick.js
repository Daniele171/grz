document.addEventListener('click', function () {
    document.getElementById('calcolaButton').addEventListener('click', calcola);
});

function calcola() {
    var operando1 = parseFloat(document.getElementById('operando1').value);
    var operando2 = parseFloat(document.getElementById('operando2').value);
    var operazione = document.getElementById('operazione').value;

    var risultato;

    switch (operazione) {
        case 'addizione':
            risultato = operando1 + operando2;
            break;
        case 'sottrazione':
            risultato = operando1 - operando2;
            break;
        case 'moltiplicazione':
            risultato = operando1 * operando2;
            break;
        case 'divisione':
            if (operando2 !== 0) {
                risultato = operando1 / operando2;
            } else {
                risultato = 'Errore: divisione per zero';
            }
            break;
        default:
            risultato = 'Operazione non valida';
    }

    document.getElementById('risultato').innerHTML = 'Risultato: ' + risultato;
}
