const regexEmoji = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF]|[\r])|[~_+()]|⬜/g
const rgxNumDp = /\d{2,3}/g
const rgxCapturaClube = /clube.+|time.+/gmi
const rgxClube = /clube:|time:/gmi
const rgxNomeEPalpite = /[A-Za-zÀ-ÿ]+.+\s+(\d-\d\/)+(\d-\d)/g
const rgxNome = /([A-Za-zÀ-ÿ.]+\s{1,2}){1,5}[A-Za-zÀ-ÿ]+|[A-Za-zÀ-ÿ]+/gmi
const rgxPalpite = /(\d-\d\/)+(\d-\d)/g
const rgxhifen = /-/g
const rgxbarra = /\//g
const rgxPalpite2 = /\d|-|\r?\n(.+)(\d-\d\/)+(\d-\d)|:|\*/g
const palpiteFake = ['199', '199', '199', '199', '199', '199', '199', '199', '199', '199', '199', '199'];
const msgNulo = 'Achei um palpite anulado, verifique onde esta o erro.'
const msgNormal = 'palpites corretos'
const rgxAsterisco = /_|\*|\s/gmi

function preparaCartela(cartela) {
    const nomePalpite = cartela.replace(regexEmoji, '').replace(rgxNumDp, ' ').match(rgxNomeEPalpite).toString();
    let clube = cartela.match(rgxCapturaClube) == undefined ? 'Nome do Time ' : cartela.match(rgxCapturaClube).toString().replace(rgxClube, '').replace(rgxAsterisco, '')

    const palpites = nomePalpite.match(rgxPalpite);
    let nomes = nomePalpite.match(rgxNome);
    if (nomes.length > palpites.length) {
        nomes = nomePalpite.toString().replace(rgxPalpite2, '').split(',')
    }
    return { clube, nomes, palpites };
}

function recebePalpites(palpites) {
    let jog1 = palpites[0].replace(rgxhifen, '').replace(rgxbarra, ',').split(',');
    let jog2 = palpites[1].replace(rgxhifen, '').replace(rgxbarra, ',').split(',');
    let jog3 = palpites[2] == undefined ? palpites.jog3 = palpiteFake2 : palpites[2].replace(rgxhifen, '').replace(rgxbarra, ',').split(',');
    let jog4 = palpites[3] == undefined ? palpites.jog4 = palpiteFake2 : palpites[3].replace(rgxhifen, '').replace(rgxbarra, ',').split(',');
    let jog5 = palpites[4] == undefined ? palpites.jog5 = palpiteFake2 : palpites[4].replace(rgxhifen, '').replace(rgxbarra, ',').split(',');
    let jog6 = palpites[5] == undefined ? palpites.jog7 = palpiteFake2 : palpites[5].replace(rgxhifen, '').replace(rgxbarra, ',').split(',');
    let jog7 = palpites[6] == undefined ? palpites.jog7 = palpiteFake2 : palpites[6].replace(rgxhifen, '').replace(rgxbarra, ',').split(',');
    let jog8 = palpites[7] == undefined ? palpites.jog8 = palpiteFake2 : palpites[7].replace(rgxhifen, '').replace(rgxbarra, ',').split(',');
    let jog9 = palpites[8] == undefined ? palpites.jog9 = palpiteFake2 : palpites[8].replace(rgxhifen, '').replace(rgxbarra, ',').split(',');
    let jog10 = palpites[9] == undefined ? palpites.jog10 = palpiteFake2 : palpites[9].replace(rgxhifen, '').replace(rgxbarra, ',').split(',');
    
    let jogadores = [jog1, jog2, jog3, jog4, jog5, jog6, jog7, jog8, jog9, jog10]
    return jogadores
}

function verificaPalpiteNulo(palpites, valor) {
    let jog1 = valor != palpites[0].length ? palpiteFake : palpites[0]
    let jog2 = valor != palpites[1].length ? palpiteFake : palpites[1]
    let jog3 = valor != palpites[2].length ? palpiteFake : palpites[2]
    let jog4 = valor != palpites[3].length ? palpiteFake : palpites[3]
    let jog5 = valor != palpites[4].length ? palpiteFake : palpites[4]
    let jog6 = valor != palpites[5].length ? palpiteFake : palpites[5]
    let jog7 = valor != palpites[6].length ? palpiteFake : palpites[6]
    let jog8 = valor != palpites[7].length ? palpiteFake : palpites[7]
    let jog9 = valor != palpites[8].length ? palpiteFake : palpites[8]
    let jog10 = valor != palpites[9].length ? palpiteFake : palpites[9]

    let jogadores = [jog1, jog2, jog3, jog4, jog5, jog6, jog7, jog8, jog9, jog10]
    
    return jogadores
}

function acusaNulo(jogadores) {
    let msgfinal = []
    for (let i = 0; i < jogadores.length; i++) {
        if (jogadores[i] === palpiteFake) {
            msgfinal.push(msgNulo)
        } else if (jogadores[i] != palpiteFake2) {
            msgfinal.push(msgNormal)
        }
    }
    return msgfinal
}

function numeroComparacao(valor) {
   let numero = valor
   if (numero == '') {
        numero = 10
    } 
    console.log(numero)
    return numero
} 

const palpiteFake2 = [];
while (palpiteFake2.length < numeroComparacao()) 
    { palpiteFake2.push('190') }
console.log(palpiteFake2)

function final(tcartela) {
    const valorNumero = document.getElementById('caixa-valor').value
    const valorCaixa = numeroComparacao(valorNumero)
    const cartelaPreparada = preparaCartela(tcartela); // Processa a cartela
    const nomeClube = cartelaPreparada.clube; // Nome do clube
    let nomesPalpite = cartelaPreparada.nomes; // Nomes dos jogadores
    const palpitesGrupo = cartelaPreparada.palpites; // Palpites dos jogadores
    const palpitesindividual = recebePalpites(palpitesGrupo); // Palpites individuais
    const verificaNulo = verificaPalpiteNulo(palpitesindividual, valorCaixa);
    const resultadoFinal = acusaNulo(verificaNulo);

    let msg = []
    for (let i = 0; i < resultadoFinal.length; i++) {
        msg.push(`${resultadoFinal[i]}`)
    }

    let resultado = ''
    for (let i = 0; i < msg.length; i++) {
        resultado += `${nomesPalpite[i]} --- ${msg[i]}\n`;
    }
    return resultado
    
}


function verificaIgual() {
    //const tresultado = document.getElementById('resultados').value;
    const tcartela = document.getElementById('sua-cartela').value;

    const resultados = final(tcartela);

    document.getElementById('resultado-final').innerText = resultados;
}



























// function comparacaoDeResultados(resultado, palpites) {
//     let jogador1 = [resultado[0] == palpites.jog1[0], resultado[1] == palpites.jog1[1], resultado[2] == palpites.jog1[2], resultado[3] == palpites.jog1[3], resultado[4] == palpites.jog1[4], resultado[5] == palpites.jog1[5], resultado[6] == palpites.jog1[6], resultado[7] == palpites.jog1[7], resultado[8] == palpites.jog1[8], resultado[9] == palpites.jog1[9], resultado[10] == palpites.jog1[10], resultado[11] == palpites.jog1[11]]
//     let jogador2 = [resultado[0] == palpites.jog2[0], resultado[1] == palpites.jog2[1], resultado[2] == palpites.jog2[2], resultado[3] == palpites.jog2[3], resultado[4] == palpites.jog2[4], resultado[5] == palpites.jog2[5], resultado[6] == palpites.jog2[6], resultado[7] == palpites.jog2[7], resultado[8] == palpites.jog2[8], resultado[9] == palpites.jog2[9], resultado[10] == palpites.jog2[10], resultado[11] == palpites.jog2[11]]
//     let jogador3 = [resultado[0] == palpites.jog3[0], resultado[1] == palpites.jog3[1], resultado[2] == palpites.jog3[2], resultado[3] == palpites.jog3[3], resultado[4] == palpites.jog3[4], resultado[5] == palpites.jog3[5], resultado[6] == palpites.jog3[6], resultado[7] == palpites.jog3[7], resultado[8] == palpites.jog3[8], resultado[9] == palpites.jog3[9], resultado[10] == palpites.jog3[10], resultado[11] == palpites.jog3[11]]
//     let jogador4 = [resultado[0] == palpites.jog4[0], resultado[1] == palpites.jog4[1], resultado[2] == palpites.jog4[2], resultado[3] == palpites.jog4[3], resultado[4] == palpites.jog4[4], resultado[5] == palpites.jog4[5], resultado[6] == palpites.jog4[6], resultado[7] == palpites.jog4[7], resultado[8] == palpites.jog4[8], resultado[9] == palpites.jog4[9], resultado[10] == palpites.jog4[10], resultado[11] == palpites.jog4[11]]
//     let jogador5 = [resultado[0] == palpites.jog5[0], resultado[1] == palpites.jog5[1], resultado[2] == palpites.jog5[2], resultado[3] == palpites.jog5[3], resultado[4] == palpites.jog5[4], resultado[5] == palpites.jog5[5], resultado[6] == palpites.jog5[6], resultado[7] == palpites.jog5[7], resultado[8] == palpites.jog5[8], resultado[9] == palpites.jog5[9], resultado[10] == palpites.jog5[10], resultado[11] == palpites.jog5[11]]
//     let jogador6 = [resultado[0] == palpites.jog6[0], resultado[1] == palpites.jog6[1], resultado[2] == palpites.jog6[2], resultado[3] == palpites.jog6[3], resultado[4] == palpites.jog6[4], resultado[5] == palpites.jog6[5], resultado[6] == palpites.jog6[6], resultado[7] == palpites.jog6[7], resultado[8] == palpites.jog6[8], resultado[9] == palpites.jog6[9], resultado[10] == palpites.jog6[10], resultado[11] == palpites.jog6[11]]
//     let jogador7 = [resultado[0] == palpites.jog7[0], resultado[1] == palpites.jog7[1], resultado[2] == palpites.jog7[2], resultado[3] == palpites.jog7[3], resultado[4] == palpites.jog7[4], resultado[5] == palpites.jog7[5], resultado[6] == palpites.jog7[6], resultado[7] == palpites.jog7[7], resultado[8] == palpites.jog7[8], resultado[9] == palpites.jog7[9], resultado[10] == palpites.jog7[10], resultado[11] == palpites.jog7[11]]
//     let jogador8 = [resultado[0] == palpites.jog8[0], resultado[1] == palpites.jog8[1], resultado[2] == palpites.jog8[2], resultado[3] == palpites.jog8[3], resultado[4] == palpites.jog8[4], resultado[5] == palpites.jog8[5], resultado[6] == palpites.jog8[6], resultado[7] == palpites.jog8[7], resultado[8] == palpites.jog8[8], resultado[9] == palpites.jog8[9], resultado[10] == palpites.jog8[10], resultado[11] == palpites.jog8[11]]
//     let jogador9 = [resultado[0] == palpites.jog9[0], resultado[1] == palpites.jog9[1], resultado[2] == palpites.jog9[2], resultado[3] == palpites.jog9[3], resultado[4] == palpites.jog9[4], resultado[5] == palpites.jog9[5], resultado[6] == palpites.jog9[6], resultado[7] == palpites.jog9[7], resultado[8] == palpites.jog9[8], resultado[9] == palpites.jog9[9], resultado[10] == palpites.jog9[10], resultado[11] == palpites.jog9[11]]
//     let jogador10 = [resultado[0] == palpites.jog10[0], resultado[1] == palpites.jog10[1], resultado[2] == palpites.jog10[2], resultado[3] == palpites.jog10[3], resultado[4] == palpites.jog10[4], resultado[5] == palpites.jog10[5], resultado[6] == palpites.jog10[6], resultado[7] == palpites.jog10[7], resultado[8] == palpites.jog10[8], resultado[9] == palpites.jog10[9], resultado[10] == palpites.jog10[10], resultado[11] == palpites.jog10[11]]

//     return { jogador1, jogador2, jogador3, jogador4, jogador5, jogador6, jogador7, jogador8, jogador9, jogador10 }
// }

// function soma(comparacao) {
//     let soma = 0;
//     for (let i = 0; i < comparacao.length; i++) {
//         soma += comparacao[i] ? 1 : 0;
//     }
//     return soma
// }


// function botaoCalcular(resultado, cartela) {
//     for (let i = 0; i < 10; i++) {
//     nomesPalpite[i];
//     if (nomesPalpite[i] == undefined)
//         nomesPalpite[i] = 'Jogador fake'
//     }

//     //acusaNulo(verificaNulo)

//     const comparacao = comparacaoDeResultados(resultadoJgs, verificaNulo); // Compara resultados

//     let somaJogadores = soma(comparacao.jogador1) + soma(comparacao.jogador2) +
//         soma(comparacao.jogador3) + soma(comparacao.jogador4) +
//         soma(comparacao.jogador5) + soma(comparacao.jogador6) +
//         soma(comparacao.jogador7) + soma(comparacao.jogador8) +
//         soma(comparacao.jogador9) + soma(comparacao.jogador10)

//     let jogadores = [
//         soma(comparacao.jogador1), soma(comparacao.jogador2),
//         soma(comparacao.jogador3), soma(comparacao.jogador4),
//         soma(comparacao.jogador5), soma(comparacao.jogador6),
//         soma(comparacao.jogador7), soma(comparacao.jogador8),
//         soma(comparacao.jogador9), soma(comparacao.jogador10),
//     ];

//     let resultadoFinal = (`${resultadosDosJgs}
//         *${nomeClube.toString()} = ${somaJogadores}*
//         1 ${nomesPalpite[0]} = ${jogadores[0]}
//             2 ${nomesPalpite[1]} = ${jogadores[1]}
//             3 ${nomesPalpite[2]} = ${jogadores[2]}
//             4 ${nomesPalpite[3]} = ${jogadores[3]}
//             5 ${nomesPalpite[4]} = ${jogadores[4]}
//             6 ${nomesPalpite[5]} = ${jogadores[5]}
//             7 ${nomesPalpite[6]} = ${jogadores[6]}
//             8 ${nomesPalpite[7]} = ${jogadores[7]}
//             9 ${nomesPalpite[8]} = ${jogadores[8]}
//             10 ${nomesPalpite[9]} = ${jogadores[9]}`)


//     return resultadoFinal
// }

// console.log(botaoCalcular(tresultado, tcartela))









