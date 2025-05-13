let i = 0; // Declarando as variaveis para que seja efetuado os devidos cálculos
let somaNum = 0; 
let mediaNum = 0; 
let quantNum = 0 

let numNota = parseFloat(prompt("Digite uma determinada nota de 0 á 10")); // O usuário irá inserir uma determinada nota 
 
while (numNota >= 0){ // O usuário deverá inserir uma nota maior ou igual a zero para que seja válidada
    if( numNota <= 10){
        somaNum += numNota; // Soma das notas 
        quantNum ++;
    } else {
        alert("A nota que vc digitou não é válida tente novamente"); // Caso a nota do usuário não seja adequada de acordo com os requisitos ele será informado
    }
    numNota = parseFloat(prompt("Insira outra determinada nota")) // O usuário deverá inserir outra nota
}
if (quantNum > 0) { // Para que seja realizada a media a quantidade de notas que o usuário inserir deve ser acima de 0

    let mediaNum = somaNum / quantNum; // Será efetuada a media das notas, dividindo a soma pela quantidade de notas (media aritmetica)
    alert("A média das notas é: " + mediaNum.toFixed(2));
   } else {
    alert("Nenhuma nota válida foi digitada.");
}


