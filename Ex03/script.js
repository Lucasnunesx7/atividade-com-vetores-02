let vetor1 = [];
let vetor2 = [];
let resultadoIntersecao = [];
let posicaoResultado = 0;

// Leitura do Vetor 1
for (let i = 0; i < 5; i++) {
    let numero = parseInt(prompt(`Vetor 1 - Digite o ${i + 1}º número inteiro:`));
    vetor1[i] = numero;
}

// Leitura do Vetor 2
for (let i = 0; i < 5; i++) {
    let numero = parseInt(prompt(`Vetor 2 - Digite o ${i + 1}º número inteiro:`));
    vetor2[i] = numero;
}

// Processamento da interseção
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        // Se o elemento está em ambos os vetores
        if (vetor1[i] === vetor2[j]) {
           
            // Verifica se ele já foi adicionado ao resultado (para não repetir)
            let jaExiste = false;
            for (let k = 0; k < posicaoResultado; k++) {
                if (vetor1[i] === resultadoIntersecao[k]) {
                    jaExiste = true;
                }
            }
           
            // Se não for repetido no resultado, adiciona manualmente
            if (jaExiste === false) {
                resultadoIntersecao[posicaoResultado] = vetor1[i];
                posicaoResultado = posicaoResultado + 1;
            }
        }
    }
}

alert(`Vetor 1: [${vetor1}] | Vetor 2: [${vetor2}] | Interseção: [${resultadoIntersecao}]`);