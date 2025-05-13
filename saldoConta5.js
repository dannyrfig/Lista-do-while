let saldoConta = 1000; //Saldo inicial que o usuário possui 
let saqueConta = parseFloat(prompt("O saldo que tem na sua conta é de :" + saldoConta + "Digite o valor que você deseja sacar:"));// O usuário deverá inserir o valor que deseja sacar

while (saldoConta > 0) {
    if (saqueConta <= 0 || isNaN(saqueConta)) { // Irá verificar se o número que o usuário digitou é realmente um número
        saque = parseFloat(prompt("Valor inválido. Digite um valor maior que zero:"));
    } else if (saqueConta > saldoConta) {
        saqueConta = parseFloat(prompt("Saldo insuficiente. Digite um valor menor que R$ " + saldoConta + ":"));
    } else {
        saldoConta = saqueConta;
        alert("Seu saque foi realizado.O Saldo restante: R$ " + saldoConta); // Informará quanto o usuário ficou após o saque
        if (saldoConta > 0) {
        }
    }
}

