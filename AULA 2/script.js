function calcularSoma() {
    var numeroA = parsefloat(document.getElementById('numeroA').value);
    var numeroB = parseFloat(document.getElementById('numeroB').value);
    if (!isNaN(numeroA) && !isNaN(numeroB)) {
        var resultado = numeroA + numeroB;
        document.getElementById('resultado').innerHTML = "A soma de " + numeroA + " e " + numeroB + " é: " + resultado;
    } else {
        document.getElementById('resutado').innerHTML = "Por favor, digite números válidos";
    }
}