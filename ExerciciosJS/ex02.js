/*
Solicite o usuário a inserção de notas via prompt e calcule a
média de diversas notas digitadas em um input, separados por
vírgula, pelo usuário
 */

function calcularMedia(notas_string){
    let soma = 0;
    // Usando o Split para separar os numeros
    let notas = notas_string.split(',');

    for(let i=0;i<notas.length; i++){

        soma = soma + Number(notas[i]);
        
    }
    let media = soma/notas.length;
    return media;
}

let notas = prompt('Digite as notas separando por virgula: ',0);
console.log(calcularMedia(notas));