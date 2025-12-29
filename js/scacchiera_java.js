var scacchiera = document.getElementById("scacchiera");
for (var i = 0; i < 8; i++){
    var row = scacchiera.insertRow(i)
    for (var j = 0; j < 8; j++){
        var cell = row.insertCell(j);
        if ((i + j) %2 == 0){
            cell.classList.add("black");
        }
        else{
            cell.classList.add("white");
        }
    }
}