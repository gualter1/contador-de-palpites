const fs = require('fs')
const cartelaImport = fs.readFileSync('cartela.txt', 'utf-8')
const resultadoImport = fs.readFileSync('resultado.txt', 'utf-8')

const rgxCapturaClube = /clube.+|time.+/gmi
const rgxClube = /clube:|time:/gmi
const regexEmoji = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF]|[\r])|[~_+()]|⬜/g
const rgxPalpite = /(\dx\d)|(\d\s+x\s+\d)|(\d-\d)|(\d\s+-\s+\d)/gmi
const espaco = /\s{1,}/gmi
const rgxX = /x|-/gmi
const palpiteFake = '50X40'
const cravada = 3
const acerto = 1


function preparaJogos(palpites) {
    let palpite = []
    for (let i = 0; i < palpites.length; i++) {
        palpite.push(palpites[i] == undefined ? palpites[i] = palpiteFake.replace(rgxX, ',').split(',') : palpites[i].replace(rgxX, ',').split(','))
    }
    return palpite
}

//placar1 = p1 / placar2 = p2 / resultado1 = r1 / resultado2 = r2
function verificaAcerto(p1, p2, r1, r2) {

    let pontos = 0
    if (p1 == r1 && p2 == r2) { //casa ou fora ganha cravou
        pontos = pontos + cravada
    } else if (p1 == r1 && p1 > p2 && r1 > r2 || p1 != r1 && p1 > p2 && r1 > r2) {
        pontos = pontos + acerto //casa ganha
    } else if (p2 == r2 && p1 < p2 && r1 < r2 || p2 != r2 && p1 < p2 && r1 < r2) {
        pontos = pontos + acerto //fora ganha
    } else if (p1 == p2 && r1 == r2) {
        pontos = pontos + acerto // empate
        //   } else {
        //  pontos = pontos + '0' // errou
    }
    //console.log( +pontos)
    return +pontos
}

function acertosMensagem(palpites, resultados) {
    const acertos = []
    const msgAcerto = []
    for (let i = 0; i < palpites.length; i++) {
        acertos.push(verificaAcerto(palpites[i][0], palpites[i][1], resultados[i][0], resultados[i][1]))
        if (acertos[i] === cravada) {
            msgAcerto.push('Jogador cravou o jogo')
        } else if (acertos[i] === acerto) {
            msgAcerto.push('Jogador acertou mas não cravou')
        } else { msgAcerto.push('Errou') }
    }
    return {acertos, msgAcerto}
}

function soma(acerto) {
    let soma = 0;
    for (let i = 0; i < acerto.length; i++) {
        soma += acerto[i]
    }
    return soma
}

const palpiteJogadores = cartelaImport.replace(regexEmoji, '').match(rgxPalpite).toString().replace(espaco, '').split(',')
const resultadoCorreto = resultadoImport.replace(regexEmoji, '').match(rgxPalpite).toString().replace(espaco, '').split(',')
// parcial de jogo
while (resultadoCorreto.length < palpiteJogadores.length) {
    resultadoCorreto.push('10x30')
}

const palpitesPreparados = preparaJogos(palpiteJogadores)
const resultadosPreparados = preparaJogos(resultadoCorreto)

let teste = acertosMensagem(palpitesPreparados, resultadosPreparados)
// console.log(teste)
// console.log(teste.acertos);



let resultado = `${rgxClube}
O total foi ${soma(teste.acertos)} 

`
for (let i = 0; i < teste.msgAcerto.length; i++) {
    resultado += `${[i+1]} ${teste.msgAcerto[i]}\n`;
}

console.log(`${resultado}`)















// } else if (placar1 == resultado1 && placar2  < resultado2 && || placar1 == resultado1 &&  placar1 > placar2 && resultado1 > resultado2 ) {
//     console.log('Acertou o vencedor casa mas não cravou') //casa ganha
// }
// else if (placar1 == resultado1 && placar2  < resultado2 || placar1 > resultado1 && placar1 > placar2 || placar1 < resultado1 && placar1 > placar2) {
//     console.log('Acertou o vencedor casa mas não cravou') //casa ganha
// } else if (placar1 < resultado1 && placar2 == resultado2 || placar1 < resultado1 && placar1 < placar2 || placar1 > resultado1 && placar1 < placar2) {
//     console.log('Acertou o fora mas não cravou') // fora ganha

//|| placar1 < resultado1 && placar2  == resultado2

// Se o  placar1 == placar2 & resultado1 == resultado2 //(cravou)

// Se o placar1 == placar2 != resultado1 == resultado2 //(1 ponto )

// Se não for empate

// >Se o placar1 == resultado1 & placar2 == resultado2 //(Cravou)

// >Else o placar1 == resultado1 & placar2  < resultado2 //(1 ponto)
// -----------------
// >Else o placar1 < resultado1 & placar2  == resultado2 //(1 ponto)

// Else o placar1 != resultado1 & placar2 != resultado2

// placar1 > placar2 & resultado1 > resultado2 //(1 ponto)

// placar1 < placar2 & resultado1 < resultado2 //(1 ponto)




