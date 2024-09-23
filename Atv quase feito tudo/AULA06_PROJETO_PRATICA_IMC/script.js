//IMC
/*ABAIXO DE 17 - MUITO ABAIXO DO PESO
ENTRE 17 E 18,49 - ABAIXO DO PESO
ENTERE 18,50 E 24,99 - PESO NORMAL
ENTRE 25 E 29,99 - ACIMA DO PESO
A PARTIR DE 30 - OBESIDADE

IMC = PESO/(ALTURA*ALTURA)
*/

var peso;
var altura;
var imc;
var resultado;

function calcular(event) {
    event.preventDefault();

    // Obter os valores
    peso = parseFloat(document.getElementById('peso').value);
    altura = parseFloat(document.getElementById('altura').value);

    // Verificar se os valores são válidos
    if (isNaN(peso) || isNaN(altura)) {
        alert('Por favor, insira valores numéricos válidos.');
        return;
    }

    // Cálculo de IMC
    imc = peso / (altura * altura);
    imc = imc.toFixed(2); // Deixar com 2 casas decimais

    resultado = document.getElementById('resultado');

    // Verificar as faixas de IMC
    if (imc < 17) {
        resultado.innerHTML = "<br>Seu resultado foi: " + imc + "<br>Cuidado, você está muito abaixo do peso.";
    } else if (imc >= 17 && imc < 18.5) {
        resultado.innerHTML = "<br>Seu resultado foi: " + imc + "<br>Cuidado, você está abaixo do peso.";
    } else if (imc >= 18.5 && imc < 25) {
        resultado.innerHTML = "<br>Seu resultado foi: " + imc + "<br>Você está com o peso normal.";
    } else if (imc >= 25 && imc < 30) {
        resultado.innerHTML = "<br>Seu resultado foi: " + imc + "<br>Você está acima do peso.";
    } else if (imc >= 30) {
        resultado.innerHTML = "<br>Seu resultado foi: " + imc + "<br>Cuidado, você está com obesidade.";
    }
}
