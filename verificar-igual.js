const { log } = require("console")
const fs = require("fs")
const { default: test } = require("node:test")
const tcartela = fs.readFileSync("cartela1.txt", "utf-8")
const tresultado = fs.readFileSync("resultado1.txt", "utf-8")

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
const palpiteFake2 = ['190', '190', '190', '190', '190', '190', '190', '190', '190', '190', '190', '190'];
const msgNulo = 'Achei um palpite anulado, verifique quem foi e se a contagem esta correta.'
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
    let jog3 = palpites[2].replace(rgxhifen, '').replace(rgxbarra, ',').split(',');
    let jog4 = palpites[3].replace(rgxhifen, '').replace(rgxbarra, ',').split(',');
    let jog5 = palpites[4].replace(rgxhifen, '').replace(rgxbarra, ',').split(',');
    let jog6 = palpites[5].replace(rgxhifen, '').replace(rgxbarra, ',').split(',');
    let jog7 = palpites[6] == undefined ? palpites.jog7 = palpiteFake2 : palpites[6].replace(rgxhifen, '').replace(rgxbarra, ',').split(',');
    let jog8 = palpites[7] == undefined ? palpites.jog8 = palpiteFake2 : palpites[7].replace(rgxhifen, '').replace(rgxbarra, ',').split(',');
    let jog9 = palpites[8] == undefined ? palpites.jog9 = palpiteFake2 : palpites[8].replace(rgxhifen, '').replace(rgxbarra, ',').split(',');
    let jog10 = palpites[9] == undefined ? palpites.jog10 = palpiteFake2 : palpites[9].replace(rgxhifen, '').replace(rgxbarra, ',').split(',');

    let jogadores = [jog1, jog2, jog3, jog4, jog5, jog6, jog7, jog8, jog9, jog10]
    //return {jog1, jog2, jog3, jog4, jog5, jog6, jog7, jog8, jog9, jog10}
    return jogadores
}

function comparacaoDeResultados(resultado, palpites) {
    let jogador1 = [resultado[0] == palpites[0][0], resultado[1] == palpites[0][1], resultado[2] == palpites[0][2], resultado[3] == palpites[0][3], resultado[4] == palpites[0][4], resultado[5] == palpites[0][5], resultado[6] == palpites[0][6], resultado[7] == palpites[0][7], resultado[8] == palpites[0][8], resultado[9] == palpites[0][9], resultado[10] == palpites[0][10], resultado[11] == palpites[0][11]]
    let jogador2 = [resultado[0] == palpites[1][0], resultado[1] == palpites[1][1], resultado[2] == palpites[1][2], resultado[3] == palpites[1][3], resultado[4] == palpites[1][4], resultado[5] == palpites[1][5], resultado[6] == palpites[1][6], resultado[7] == palpites[1][7], resultado[8] == palpites[1][8], resultado[9] == palpites[1][9], resultado[10] == palpites[1][10], resultado[11] == palpites[1][11]]
    let jogador3 = [resultado[0] == palpites[2][0], resultado[1] == palpites[2][1], resultado[2] == palpites[2][2], resultado[3] == palpites[2][3], resultado[4] == palpites[2][4], resultado[5] == palpites[2][5], resultado[6] == palpites[2][6], resultado[7] == palpites[2][7], resultado[8] == palpites[2][8], resultado[9] == palpites[2][9], resultado[10] == palpites[2][10], resultado[11] == palpites[2][11]]
    let jogador4 = [resultado[0] == palpites[3][0], resultado[1] == palpites[3][1], resultado[2] == palpites[3][2], resultado[3] == palpites[3][3], resultado[4] == palpites[3][4], resultado[5] == palpites[3][5], resultado[6] == palpites[3][6], resultado[7] == palpites[3][7], resultado[8] == palpites[3][8], resultado[9] == palpites[3][9], resultado[10] == palpites[3][10], resultado[11] == palpites[3][11]]
    let jogador5 = [resultado[0] == palpites[4][0], resultado[1] == palpites[4][1], resultado[2] == palpites[4][2], resultado[3] == palpites[4][3], resultado[4] == palpites[4][4], resultado[5] == palpites[4][5], resultado[6] == palpites[4][6], resultado[7] == palpites[4][7], resultado[8] == palpites[4][8], resultado[9] == palpites[4][9], resultado[10] == palpites[4][10], resultado[11] == palpites[4][11]]
    let jogador6 = [resultado[0] == palpites[5][0], resultado[1] == palpites[5][1], resultado[2] == palpites[5][2], resultado[3] == palpites[5][3], resultado[4] == palpites[5][4], resultado[5] == palpites[5][5], resultado[6] == palpites[5][6], resultado[7] == palpites[5][7], resultado[8] == palpites[5][8], resultado[9] == palpites[5][9], resultado[10] == palpites[5][10], resultado[11] == palpites[5][11]]
    let jogador7 = [resultado[0] == palpites[6][0], resultado[1] == palpites[6][1], resultado[2] == palpites[6][2], resultado[3] == palpites[6][3], resultado[4] == palpites[6][4], resultado[5] == palpites[6][5], resultado[6] == palpites[6][6], resultado[7] == palpites[6][7], resultado[8] == palpites[6][8], resultado[9] == palpites[6][9], resultado[10] == palpites[6][10], resultado[11] == palpites[6][11]]
    let jogador8 = [resultado[0] == palpites[7][0], resultado[1] == palpites[7][1], resultado[2] == palpites[7][2], resultado[3] == palpites[7][3], resultado[4] == palpites[7][4], resultado[5] == palpites[7][5], resultado[6] == palpites[7][6], resultado[7] == palpites[7][7], resultado[8] == palpites[7][8], resultado[9] == palpites[7][9], resultado[10] == palpites[7][10], resultado[11] == palpites[7][11]]
    let jogador9 = [resultado[0] == palpites[8][0], resultado[1] == palpites[8][1], resultado[2] == palpites[8][2], resultado[3] == palpites[8][3], resultado[4] == palpites[8][4], resultado[5] == palpites[8][5], resultado[6] == palpites[8][6], resultado[7] == palpites[8][7], resultado[8] == palpites[8][8], resultado[9] == palpites[8][9], resultado[10] == palpites[8][10], resultado[11] == palpites[8][11]]
    let jogador10 =[resultado[0] == palpites[9][0], resultado[1] == palpites[9][1], resultado[2] == palpites[9][2], resultado[3] == palpites[9][3], resultado[4] == palpites[9][4], resultado[5] == palpites[9][5], resultado[6] == palpites[9][6], resultado[7] == palpites[9][7], resultado[8] == palpites[9][8], resultado[9] == palpites[9][9], resultado[10] == palpites[9][10], resultado[11] == palpites[9][11]]
    let jogadores = [jogador1, jogador2, jogador3, jogador4, jogador5, jogador6, jogador7, jogador8, jogador9, jogador10]

    return jogadores
}

function soma(comparacao) {
    let soma = 0;
    for (let i = 0; i < comparacao.length; i++) {
        soma += comparacao[i] ? 1 : 0;
    }
    return soma
}

function calculaSoma(jogador) {
    let compara1 = soma(jogador[0])
    let compara2 = soma(jogador[1])
    let compara3 = soma(jogador[2])
    let compara4 = soma(jogador[3])
    let compara5 = soma(jogador[4])
    let compara6 = soma(jogador[5])
    let compara7 = soma(jogador[6])
    let compara8 = soma(jogador[7])
    let compara9 = soma(jogador[8])
    let compara10 = soma(jogador[9])
    let resultadoComparacao = [compara1, compara2, compara3, compara4, compara5, compara6, compara7, compara8, compara9, compara10]
    return resultadoComparacao
}


// recebe e prepara cartela
let cartela1 = preparaCartela(tcartela)
let cartela2 = preparaCartela(tresultado)
// prepara palpites para comparaçao
let palpites1 = recebePalpites(cartela1.palpites)
for (let i = 0; i < palpites1.length; i++) {
    while (palpites1[i].length < 12 ) {
        palpites1[i].push('199')
    }
}

let palpites2 = recebePalpites(cartela2.palpites)
for (let i = 0; i < palpites2.length; i++) {
    while (palpites2[i].length < 12 ) {
        palpites2[i].push('197')
    }
}


// armazena todas as comparaçoes
let jogadores = [
    comparacaoDeResultados(palpites1[0], palpites2),comparacaoDeResultados(palpites1[1], palpites2),
comparacaoDeResultados(palpites1[2], palpites2), comparacaoDeResultados(palpites1[3], palpites2),
comparacaoDeResultados(palpites1[4], palpites2), comparacaoDeResultados(palpites1[5], palpites2),
comparacaoDeResultados(palpites1[6], palpites2), comparacaoDeResultados(palpites1[7], palpites2),
comparacaoDeResultados(palpites1[8], palpites2), comparacaoDeResultados(palpites1[8], palpites2)
]
// console.log(jogadores);


let jogador1 = calculaSoma(jogadores[0]);
let jogador2 = calculaSoma(jogadores[1]);
let jogador3 = calculaSoma(jogadores[2]);
let jogador4 = calculaSoma(jogadores[3]);
let jogador5 = calculaSoma(jogadores[4]);
let jogador6 = calculaSoma(jogadores[5]);
let jogador7 = calculaSoma(jogadores[6]);
let jogador8 = calculaSoma(jogadores[7]);
let jogador9 = calculaSoma(jogadores[8]);
let jogador10 = calculaSoma(jogadores[9]);

//let teste = [jogador1, jogador2, jogador3, jogador4, jogador5, jogador6, jogador7, jogador8, jogador9, jogador10]

//console.log(jogador1);
for (let i = 0; i < jogador2.length; i++) {
// while (jogador1[i] < jogador1[i].length) {
//     console.log (`o jogador teve ${jogador1[i]}`)
// }


    if (jogador2[i] > 6) {
        console.log(`palpites em relaçao aos companheiros ${jogador2} `);

    }
    
}













