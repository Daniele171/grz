var numeroInput = document.getElementById("numeroInput");
var decimaleBinario = document.getElementById("decimaleBinario");
var binarioDecimale = document.getElementById("binarioDecimale");
var convertiButton = document.getElementById("convertiButton");
var risultatoConversione = document.getElementById("risultatoConversione");

convertiButton.addEventListener("click", function() {
    var numero = numeroInput.value;
    
    if (decimaleBinario.checked) {
        var numeroDecimale = parseInt(numero);
        var numeroBinario = numeroDecimale.toString(2);
        risultatoConversione.textContent = "Risultato: " + numeroBinario;
    } else if (binarioDecimale.checked) {
        var numeroDecimale = parseInt(numero, 2);
        risultatoConversione.textContent = "Risultato: " + numeroDecimale;
    }
});
