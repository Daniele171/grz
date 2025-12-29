document.addEventListener('click', function() {
    var checkbox = document.getElementById('checkbox');

    var redDiv = document.getElementById('rosso');
    var greenDiv = document.getElementById('verde');
    var blueDiv = document.getElementById('blu');
    var yellowDiv = document.getElementById('giallo');

    redDiv.addEventListener('click', function() {
        if (checkbox.checked) {
            document.body.style.backgroundColor = 'red';
        }
    });

    greenDiv.addEventListener('click', function() {
        if (checkbox.checked) {
            document.body.style.backgroundColor = 'green';
        }
    });

    blueDiv.addEventListener('click', function() {
        if (checkbox.checked) {
            document.body.style.backgroundColor = 'blue';
        }
    });

    yellowDiv.addEventListener('click', function() {
        if (checkbox.checked) {
            document.body.style.backgroundColor = 'yellow';
        }
    });

    var hexInput = document.getElementById('hexColor');
    var applyColorButton = document.getElementById('applyColor');

    applyColorButton.addEventListener('click', function() {
        var hex = hexInput.value;
        if (/^([0-9A-Fa-f]{3}){1,2}$/.test(hex) && checkbox.checked) {
            document.body.style.backgroundColor = `#${hex}`;
        }
    });
});