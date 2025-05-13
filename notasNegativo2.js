let numNota = parseFloat(prompt("Digite uma determinada nota de 0 a 10")); // Pede para o usuário inserir uma determinada nota

if(isNaN(numNota)){
    alert ("Erro: O número que você digitou não é válido") // Verificará se o número inserido é válido ou não
}

while (numNota >= 0 || isNaN (numNota)){
    alert(" O número que você digitou é inválido, tente novamente");
}
