alert('Boas vindas');
let numeroMinimo=10
let numeroMaximo=20
let numeroSecreto = parseInt(Math.random()*numeroMaximo)+numeroMinimo;
console.log(numeroSecreto)
let chute;
let tentativas=1;

//enquanto chute nao for igual ao n.s
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre ${numeroMinimo} e ${numeroMaximo}`);
    if (numeroSecreto == chute) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`o numero é menor que ${chute} `);
        } else {
            alert(`o numero é maior que ${chute} `);
        }
        //tentativa=tentavas+1
        tentativas++
    }
}

let palavraTentativa= tentativas>1? 'tentativas': 'tentativa';

// if (tentativas>1){
//     alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`)
// }else{
//     alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa`)
// }


alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`)


// O operador de comparação é o ==,
//e o = é de atribuição
//não é igual:  !=

//&& é e
//|| é ou

