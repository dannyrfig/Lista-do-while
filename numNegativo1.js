let i = 1 
numPositivo = parseFloat(prompt(`Digite um determinado número positivo`)); // O usuário irá digitar um determinado número positivo
 
if (isNaN(numPositivo)){ //Irá verificar se o número que o usuário inseriu é realmente um número
    alert("Erro o número que você digitou não é um número válido")
}

while(numPositivo < 0 || isNaN(numPositivo)) { // Verificará se o número é maior que zero
    numPositivo = parseFloat(prompt("Número inválido. Digite um número positivo:")); // Caso não seja irá aparcer a seguinte mensagem 
}

alert("Você digitou um número positivo");

