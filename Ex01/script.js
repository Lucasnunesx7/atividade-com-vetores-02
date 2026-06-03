let numeros = [];
let soma = 0;

// Leitura e soma
for (let i = 0; i < 8; i++) {
    let numero = parseFloat(prompt(`Digite o ${i + 1}º número real:`));
    numeros[i] = numero;
    soma = soma + numero;
}

let media = soma / 8;

// Descobrir quais estão acima da média
let acimaDaMedia = "";
for (let i = 0; i < 8; i++) {
    if (numeros[i] > media) {
        acimaDaMedia = acimaDaMedia + numeros[i] + " ";
    }
}

alert(`Vetor digitado: [${numeros}]. Média calculada: ${media.toFixed(2)}. Valores acima da média: ${acimaDaMedia}`);