let nomesPessoas = [];
let idadesPessoas = [];

// Leitura dos dados das 9 pessoas
for (let i = 0; i < 9; i++) {
    let nome = prompt(`Digite o nome da ${i + 1}ª pessoa:`);
    let idade = parseInt(prompt(`Digite a idade da ${i + 1}ª pessoa:`));
   
    nomesPessoas[i] = nome;
    idadesPessoas[i] = idade;
}

// Filtragem de menores de idade (menor que 18)
let listagemMenores = "";
for (let i = 0; i < 9; i++) {
    if (idadesPessoas[i] < 18) {
        listagemMenores = listagemMenores + nomesPessoas[i] + " (" + idadesPessoas[i] + " anos) ";
    }
}

alert(`Lista de pessoas menores de idade encontradas: ${listagemMenores}`)