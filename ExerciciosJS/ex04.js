/*
Peça ao usuário para digitar 5 números em uma caixa de texto,
separados por vírgula, Verifique qual é o maior número e exiba-o.
 */

function verificaMNumero(numeroString){
    let mNum = 0;
    let numero = numeroString.split(',');
    
    for (let i=0;i<numero.length;i++){
    if (Number(numero[i]) > mNum){
        mNum = numero[i];
    }  
}

return mNum;
}

let numero = prompt("Digite os numeros separados por virgula: ",0);
console.log('O maior numero e: ' + verificaMNumero(numero));