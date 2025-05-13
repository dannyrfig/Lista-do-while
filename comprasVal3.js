let somaComp = 0
let valorComp = 0

 do{ let valorComp = parseFloat (prompt("Insira os valores que foram gastos em sua compra "))
    if (valorComp > 0); {
        somaComp += valorComp
    }
} while (valorComp > 0);
alert (`O valor de sua compra deu um total de ${somaComp}`)
