const fs = require('fs')
const cartelaImport = fs.readFileSync('cartela.txt', 'utf-8')
const resultadoImport = fs.readFileSync('resultado.txt', 'utf-8')

const rgxCapturaClube = /clube.+|time.+/gmi
const rgxClube = /clube:|time:/gmi
const regexEmoji = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF]|[\r])|[~_+()]|⬜/g
const rgxPalpite = /(\dx\d)|(\d\s+x\s+\d)/gmi
const rgxPalpite2 = /(\d-\d\/)+(\d-\d)|(\dx\d\/)+(\dx\d)/gmi
const espaco = /\s{1,}/gmi
const rgxX = /x|-/gmi
const palpiteFake = '50X40'

const palpiteJogadores = cartelaImport.replace(regexEmoji, '').match(rgxPalpite).toString().replace(espaco, '').split(',')
const resultadoCorreto = resultadoImport.replace(regexEmoji, '').match(rgxPalpite2).toString().replace(espaco, '').split('/')
//console.log(resultadoCorreto.length)
while (resultadoCorreto.length < 30) {
    resultadoCorreto.push('10x30') 
}

function preparaJogos(palpites) {
    let jog1 = palpites[0] == undefined ? palpites[0] = palpiteFake.replace(rgxX, ',').split(',') : palpites[0].replace(rgxX, ',').split(',');
    let jog2 = palpites[1] == undefined ? palpites[1] = palpiteFake.replace(rgxX, ',').split(',') : palpites[1].replace(rgxX, ',').split(',');
    let jog3 = palpites[2] == undefined ? palpites[2] = palpiteFake.replace(rgxX, ',').split(',') : palpites[2].replace(rgxX, ',').split(',');
    let jog4 = palpites[3] == undefined ? palpites[3] = palpiteFake.replace(rgxX, ',').split(',') : palpites[3].replace(rgxX, ',').split(',');
    let jog5 = palpites[4] == undefined ? palpites[4] = palpiteFake.replace(rgxX, ',').split(',') : palpites[4].replace(rgxX, ',').split(',');
    let jog6 = palpites[5] == undefined ? palpites[5] = palpiteFake.replace(rgxX, ',').split(',') : palpites[5].replace(rgxX, ',').split(',');
    let jog7 = palpites[6] == undefined ? palpites[6] = palpiteFake.replace(rgxX, ',').split(',') : palpites[6].replace(rgxX, ',').split(',');
    let jog8 = palpites[7] == undefined ? palpites[7] = palpiteFake.replace(rgxX, ',').split(',') : palpites[7].replace(rgxX, ',').split(',');
    let jog9 = palpites[8] == undefined ? palpites[8] = palpiteFake.replace(rgxX, ',').split(',') : palpites[8].replace(rgxX, ',').split(',');
    let jog10 = palpites[9] == undefined ? palpites[9] = palpiteFake.replace(rgxX, ',').split(',') : palpites[9].replace(rgxX, ',').split(',');
    let jog11 = palpites[10] == undefined ? palpites[10] = palpiteFake.replace(rgxX, ',').split(',') : palpites[10].replace(rgxX, ',').split(',');
    let jog12 = palpites[11] == undefined ? palpites[11] = palpiteFake.replace(rgxX, ',').split(',') : palpites[11].replace(rgxX, ',').split(',');
    let jog13 = palpites[12] == undefined ? palpites[12] = palpiteFake.replace(rgxX, ',').split(',') : palpites[12].replace(rgxX, ',').split(',');
    let jog14 = palpites[13] == undefined ? palpites[13] = palpiteFake.replace(rgxX, ',').split(',') : palpites[13].replace(rgxX, ',').split(',');
    let jog15 = palpites[14] == undefined ? palpites[14] = palpiteFake.replace(rgxX, ',').split(',') : palpites[14].replace(rgxX, ',').split(',');
    let jog16 = palpites[15] == undefined ? palpites[15] = palpiteFake.replace(rgxX, ',').split(',') : palpites[15].replace(rgxX, ',').split(',');
    let jog17 = palpites[16] == undefined ? palpites[16] = palpiteFake.replace(rgxX, ',').split(',') : palpites[16].replace(rgxX, ',').split(',');
    let jog18 = palpites[17] == undefined ? palpites[17] = palpiteFake.replace(rgxX, ',').split(',') : palpites[17].replace(rgxX, ',').split(',');
    let jog19 = palpites[18] == undefined ? palpites[18] = palpiteFake.replace(rgxX, ',').split(',') : palpites[18].replace(rgxX, ',').split(',');
    let jog20 = palpites[19] == undefined ? palpites[19] = palpiteFake.replace(rgxX, ',').split(',') : palpites[19].replace(rgxX, ',').split(',');
    let jog21 = palpites[20] == undefined ? palpites[20] = palpiteFake.replace(rgxX, ',').split(',') : palpites[20].replace(rgxX, ',').split(',');
    let jog22 = palpites[21] == undefined ? palpites[21] = palpiteFake.replace(rgxX, ',').split(',') : palpites[21].replace(rgxX, ',').split(',');
    let jog23 = palpites[22] == undefined ? palpites[22] = palpiteFake.replace(rgxX, ',').split(',') : palpites[22].replace(rgxX, ',').split(',');
    let jog24 = palpites[23] == undefined ? palpites[23] = palpiteFake.replace(rgxX, ',').split(',') : palpites[23].replace(rgxX, ',').split(',');
    let jog25 = palpites[24] == undefined ? palpites[24] = palpiteFake.replace(rgxX, ',').split(',') : palpites[24].replace(rgxX, ',').split(',');
    let jog26 = palpites[25] == undefined ? palpites[25] = palpiteFake.replace(rgxX, ',').split(',') : palpites[25].replace(rgxX, ',').split(',');
    let jog27 = palpites[26] == undefined ? palpites[26] = palpiteFake.replace(rgxX, ',').split(',') : palpites[26].replace(rgxX, ',').split(',');
    let jog28 = palpites[27] == undefined ? palpites[27] = palpiteFake.replace(rgxX, ',').split(',') : palpites[27].replace(rgxX, ',').split(',');
    let jog29 = palpites[28] == undefined ? palpites[28] = palpiteFake.replace(rgxX, ',').split(',') : palpites[28].replace(rgxX, ',').split(',');
    let jog30 = palpites[29] == undefined ? palpites[29] = palpiteFake.replace(rgxX, ',').split(',') : palpites[29].replace(rgxX, ',').split(',');


    return { jog1, jog2, jog3, jog4, jog5, jog6, jog7, jog8, jog9, jog10, jog11, jog12, jog13, jog14, jog15, jog16, jog17, jog18, jog19, jog20, 
        jog21, jog22, jog23, jog24, jog25, jog26, jog27, jog28, jog29, jog30}
}

//placar1 = p1 / placar2 = p2 / resultado1 = r1 / resultado2 = r2
function verificaAcerto(p1, p2, r1, r2) {

    let pontos = 0
    if (p1 == r1 && p2 == r2) { //casa ou fora ganha cravou
        pontos = pontos + '3'
    } else if (p1 == r1 && p1 > p2 && r1 > r2 || p1 != r1 && p1 > p2 && r1 > r2) {
        pontos = pontos + '1' //casa ganha
    } else if (p2 == r2 && p1 < p2 && r1 < r2 || p2 != r2 && p1 < p2 && r1 < r2) {
        pontos = pontos + '1' //fora ganha
    } else if (p1 == p2 && r1 == r2) {
        pontos = pontos + '1' // empate
        //   } else {
        //  pontos = pontos + '0' // errou
}
       console.log( +pontos)
}



const palpitesPreparados = preparaJogos(palpiteJogadores)
const resultadosPreparados = preparaJogos(resultadoCorreto)
//console.log(palpitesPreparados);
//console.log(resultadosPreparados)

// let jogo1 =
// let jogo2 = verificaAcerto(palpitesPreparados.jog2[0], palpitesPreparados.jog2[1], resultadosPreparados.jog2[0], resultadosPreparados.jog2[1]);
// let jogo3 =
// let jogo4 = verificaAcerto(palpitesPreparados.jog4[0], palpitesPreparados.jog4[1], resultadosPreparados.jog4[0], resultadosPreparados.jog4[1]);
// let jogo5 = verificaAcerto(palpitesPreparados.jog5[0], palpitesPreparados.jog5[1], resultadosPreparados.jog5[0], resultadosPreparados.jog5[1]);
// let resultadoComparacao =[jogo1 + jogo2, jogo3, jogo4, jogo5, jogo6, jogo7, jogo8, jogo9, jogo10]
// console.log(resultadoComparacao);


verificaAcerto(palpitesPreparados.jog1[0], palpitesPreparados.jog1[1], resultadosPreparados.jog1[0], resultadosPreparados.jog1[1])+
verificaAcerto(palpitesPreparados.jog2[0], palpitesPreparados.jog2[1], resultadosPreparados.jog2[0], resultadosPreparados.jog2[1])+
verificaAcerto(palpitesPreparados.jog3[0], palpitesPreparados.jog3[1], resultadosPreparados.jog3[0], resultadosPreparados.jog3[1])+
verificaAcerto(palpitesPreparados.jog4[0], palpitesPreparados.jog4[1], resultadosPreparados.jog4[0], resultadosPreparados.jog4[1])+
verificaAcerto(palpitesPreparados.jog5[0], palpitesPreparados.jog5[1], resultadosPreparados.jog5[0], resultadosPreparados.jog5[1])+
verificaAcerto(palpitesPreparados.jog6[0], palpitesPreparados.jog6[1], resultadosPreparados.jog6[0], resultadosPreparados.jog6[1])+
verificaAcerto(palpitesPreparados.jog7[0], palpitesPreparados.jog7[1], resultadosPreparados.jog7[0], resultadosPreparados.jog7[1])+
verificaAcerto(palpitesPreparados.jog8[0], palpitesPreparados.jog8[1], resultadosPreparados.jog8[0], resultadosPreparados.jog8[1])+
verificaAcerto(palpitesPreparados.jog9[0], palpitesPreparados.jog9[1], resultadosPreparados.jog9[0], resultadosPreparados.jog9[1])+
verificaAcerto(palpitesPreparados.jog10[0], palpitesPreparados.jog10[1], resultadosPreparados.jog10[0], resultadosPreparados.jog10[1])+
verificaAcerto(palpitesPreparados.jog11[0], palpitesPreparados.jog11[1], resultadosPreparados.jog11[0], resultadosPreparados.jog11[1])




verificaAcerto(palpitesPreparados.jog12[0], palpitesPreparados.jog12[1], resultadosPreparados.jog12[0], resultadosPreparados.jog12[1]);
verificaAcerto(palpitesPreparados.jog13[0], palpitesPreparados.jog13[1], resultadosPreparados.jog13[0], resultadosPreparados.jog13[1]);
verificaAcerto(palpitesPreparados.jog14[0], palpitesPreparados.jog14[1], resultadosPreparados.jog14[0], resultadosPreparados.jog14[1]);
verificaAcerto(palpitesPreparados.jog15[0], palpitesPreparados.jog15[1], resultadosPreparados.jog15[0], resultadosPreparados.jog15[1]);
verificaAcerto(palpitesPreparados.jog16[0], palpitesPreparados.jog16[1], resultadosPreparados.jog16[0], resultadosPreparados.jog16[1]);
verificaAcerto(palpitesPreparados.jog17[0], palpitesPreparados.jog17[1], resultadosPreparados.jog17[0], resultadosPreparados.jog17[1]);
verificaAcerto(palpitesPreparados.jog18[0], palpitesPreparados.jog18[1], resultadosPreparados.jog18[0], resultadosPreparados.jog18[1]);
verificaAcerto(palpitesPreparados.jog19[0], palpitesPreparados.jog19[1], resultadosPreparados.jog19[0], resultadosPreparados.jog19[1]);
verificaAcerto(palpitesPreparados.jog20[0], palpitesPreparados.jog20[1], resultadosPreparados.jog20[0], resultadosPreparados.jog20[1]);


//console.log(jogo1, jogo2, jogo3)
//let teste = verificaAcerto(placar1, placar2, resultado1, resultado2)


// let jog4 = palpite[3];
// let jog5 = palpite[4];
// let jog6 = palpite[5];
// let jog7 = palpite[6];
// let jog8 = palpite[7];
// let jog9 = palpite[8];
// let jog10 = palpite[9];
// let jog11 = palpite[10];
// let jog12 = palpite[11];
// let jog13 = palpite[12];
// let jog14 = palpite[13];
// let jog15 = palpite[14];
// let jog16 = palpite[15];
// let jog17 = palpite[16];
// let jog18 = palpite[17];
// let jog19 = palpite[18];
// let jog20 = palpite[19];
// let jog21 = palpite[20];
// let jog22 = palpite[21];
// let jog23 = palpite[22];
// let jog24 = palpite[23];
// let jog25 = palpite[24];
// let jog26 = palpite[25];
// let jog27 = palpite[26];
// let jog28 = palpite[27];
// let jog29 = palpite[28];
// let jog30 = palpite[29];

// let jog1 = result[0];
// let jog2 = result[1];
// let jog3 = result[2];
// let jog4 = result[3];
// let jog5 = result[4];
// let jog6 = result[5];
// let jog7 = result[6];
// let jog8 = result[7];
// let jog9 = result[8];
// let jog10 = result[9];
// let jog11 = result[10];
// let jog12 = result[11];
// let jog13 = result[12];
// let jog14 = result[13];
// let jog15 = result[14];
// let jog16 = result[15];
// let jog17 = result[16];
// let jog18 = result[17];
// let jog19 = result[18];
// let jog20 = result[19];
// let jog21 = result[20];
// let jog22 = result[21];
// let jog23 = result[22];
// let jog24 = result[23];
// let jog25 = result[24];
// let jog26 = result[25];
// let jog27 = result[26];
// let jog28 = result[27];
// let jog29 = result[28];
// let jog30 = result[29];



































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




