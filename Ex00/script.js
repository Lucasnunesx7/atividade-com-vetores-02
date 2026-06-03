let nomes = [];

for (let i = 0; i < 7; i++) {
    let nomeInjetado = prompt(`Digite o ${i + 1}º nome de pessoa:`);
    nomes[i] = nomeInjetado;
}

let resultadoInverso = "";
for (let i = 6; i >= 0; i--) {
    if (i === 0) {
        resultadoInverso = resultadoInverso + nomes[i];
    } else {
        resultadoInverso = resultadoInverso + nomes[i] + " - ";
    }
}

alert(`Lista de nomes na ordem inversa: ${resultadoInverso}`);