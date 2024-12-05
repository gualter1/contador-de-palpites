//Numeros que nao podem ser usados 99, 190, 196, 198, 199

const regexEmoji = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF]|[\r])|[~_+()]|⬜/g
const rgxNumDp = /\d{2,3}/g
const regexClube = /clube.+/gmi
const rgxNomeEPalpite = /[A-Za-zÀ-ÿ]+.+\s+(\d-\d\/)+(\d-\d)/g
const rgxNome = /([A-Za-zÀ-ÿ.]+\s{1,2}){1,5}[A-Za-zÀ-ÿ]+|[A-Za-zÀ-ÿ]+/gmi
const rgxPalpite = /(\d-\d\/)+(\d-\d)/g
const rgxhifen = /-/g
const rgxbarra = /\//g
const rgxPalpite2 = /\d|-|\r?\n(.+)(\d-\d\/)+(\d-\d)|:|\*/g
const palpiteFake = ['199', '199', '199', '199', '199', '199', '199', '199', '199', '199', '199', '199'];
const palpiteFake2 = ['190', '190', '190', '190', '190', '190', '190', '190', '190', '190', '190', '190'];
const msgNulo = 'Achei um palpite anulado, verifique quem foi e se a contagem esta correta.'

function preparaResultado(resultado) {
    const resultados = resultado.match(rgxPalpite).toString().replace(rgxhifen, '').replace(rgxbarra, ',').split(',');
    const valorResultados = resultados.length
    resultados[0] == 99 ? resultados[0] = '196' : resultados[0]
    resultados[1] == 99 ? resultados[1] = '196' : resultados[1]
    resultados[2] == 99 ? resultados[2] = '196' : resultados[2]
    resultados[3] == 99 ? resultados[3] = '196' : resultados[3]
    resultados[4] == 99 ? resultados[4] = '196' : resultados[4]
    resultados[5] == 99 ? resultados[5] = '196' : resultados[5]
    resultados[6] == 99 ? resultados[6] = '196' : resultados[6]
    resultados[7] == 99 ? resultados[7] = '196' : resultados[7]
    resultados[8] == 99 ? resultados[8] = '196' : resultados[8]
    resultados[9] == 99 ? resultados[9] = '196' : resultados[9]
    resultados[10] == 99 ? resultados[10] = '196' : resultados[10]
    resultados[11] == 99 ? resultados[11] = '196' : resultados[11]
    while (resultados.length < 12) {
        resultados.push('198')
    }
    return { resultados, valorResultados };
}

function preparaCartela(cartela) {
    const nomePalpite = cartela.replace(regexEmoji, '').replace(rgxNumDp, ' ').match(rgxNomeEPalpite).toString();
    let clube = cartela.match(regexClube) == undefined ? 'Time' : cartela.match(regexClube);
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
    
    let jogadores = [jog1, jog2, jog3, jog4, jog5]

    return jogadores
}

function verificaPalpiteNulo(palpites, resultadosLength) {
    let jog1 = resultadosLength > palpites[0].length ? palpiteFake : palpites[0]
    let jog2 = resultadosLength > palpites[1].length ? palpiteFake : palpites[1]
    let jog3 = resultadosLength > palpites[2].length ? palpiteFake : palpites[2]
    let jog4 = resultadosLength > palpites[3].length ? palpiteFake : palpites[3]
    let jog5 = resultadosLength > palpites[4].length ? palpiteFake : palpites[4]
    let jogadores = [jog1, jog2, jog3, jog4, jog5]

    return { jog1, jog2, jog3, jog4, jog5, jogadores }
}

function comparacaoDeResultados(resultado, palpites) {
    let jogador1 = [resultado[0] == palpites.jog1[0], resultado[1] == palpites.jog1[1], resultado[2] == palpites.jog1[2], resultado[3] == palpites.jog1[3], resultado[4] == palpites.jog1[4], resultado[5] == palpites.jog1[5], resultado[6] == palpites.jog1[6], resultado[7] == palpites.jog1[7], resultado[8] == palpites.jog1[8], resultado[9] == palpites.jog1[9], resultado[10] == palpites.jog1[10], resultado[11] == palpites.jog1[11]]
    let jogador2 = [resultado[0] == palpites.jog2[0], resultado[1] == palpites.jog2[1], resultado[2] == palpites.jog2[2], resultado[3] == palpites.jog2[3], resultado[4] == palpites.jog2[4], resultado[5] == palpites.jog2[5], resultado[6] == palpites.jog2[6], resultado[7] == palpites.jog2[7], resultado[8] == palpites.jog2[8], resultado[9] == palpites.jog2[9], resultado[10] == palpites.jog2[10], resultado[11] == palpites.jog2[11]]
    let jogador3 = [resultado[0] == palpites.jog3[0], resultado[1] == palpites.jog3[1], resultado[2] == palpites.jog3[2], resultado[3] == palpites.jog3[3], resultado[4] == palpites.jog3[4], resultado[5] == palpites.jog3[5], resultado[6] == palpites.jog3[6], resultado[7] == palpites.jog3[7], resultado[8] == palpites.jog3[8], resultado[9] == palpites.jog3[9], resultado[10] == palpites.jog3[10], resultado[11] == palpites.jog3[11]]
    let jogador4 = [resultado[0] == palpites.jog4[0], resultado[1] == palpites.jog4[1], resultado[2] == palpites.jog4[2], resultado[3] == palpites.jog4[3], resultado[4] == palpites.jog4[4], resultado[5] == palpites.jog4[5], resultado[6] == palpites.jog4[6], resultado[7] == palpites.jog4[7], resultado[8] == palpites.jog4[8], resultado[9] == palpites.jog4[9], resultado[10] == palpites.jog4[10], resultado[11] == palpites.jog4[11]]
    let jogador5 = [resultado[0] == palpites.jog5[0], resultado[1] == palpites.jog5[1], resultado[2] == palpites.jog5[2], resultado[3] == palpites.jog5[3], resultado[4] == palpites.jog5[4], resultado[5] == palpites.jog5[5], resultado[6] == palpites.jog5[6], resultado[7] == palpites.jog5[7], resultado[8] == palpites.jog5[8], resultado[9] == palpites.jog5[9], resultado[10] == palpites.jog5[10], resultado[11] == palpites.jog5[11]]
    
    return { jogador1, jogador2, jogador3, jogador4, jogador5}
}

function soma(comparacao) {
    let soma = 0;
    for (let i = 0; i < comparacao.length; i++) {
        soma += comparacao[i] ? 1 : 0;
    }
    return soma
}

function acusaNulo(palpites) {
    let msg = ''
    for (let i = 0; i < palpites.jogadores.length; i++) {
        if (palpites.jogadores[i] == palpiteFake) {
            msg = alert(msgNulo)
            break
        }
    }
    return msg
}

function botaoCalcular(resultado, cartela) {
    const resultadosProcessados = preparaResultado(resultado)
    const resultadosDosJgs = resultado.match(rgxPalpite).toString()
    const resultadoJgs = resultadosProcessados.resultados
    const resultadosLength = resultadosProcessados.valorResultados
    const cartelaPreparada = preparaCartela(cartela); // Processa a cartela
    const nomeClube = cartelaPreparada.clube; // Nome do clube
    const nomesPalpite = cartelaPreparada.nomes; // Nomes dos jogadores
    const palpitesGrupo = cartelaPreparada.palpites; // Palpites dos jogadores
    const palpitesindividual = recebePalpites(palpitesGrupo); // Palpites individuais
    const verificaNulo = verificaPalpiteNulo(palpitesindividual, resultadosLength);
    acusaNulo(verificaNulo)

    const comparacao = comparacaoDeResultados(resultadoJgs, verificaNulo); // Compara resultados

    let somaJogadores = soma(comparacao.jogador1) + soma(comparacao.jogador2) +
        soma(comparacao.jogador3) + soma(comparacao.jogador4) + soma(comparacao.jogador5) 

    let jogadores = [
        soma(comparacao.jogador1), soma(comparacao.jogador2),
        soma(comparacao.jogador3), soma(comparacao.jogador4),
        soma(comparacao.jogador5)
    ];

    let resultadoFinal = (`${resultadosDosJgs}
        ${nomeClube.toString()} = ${somaJogadores} 
        1 ${nomesPalpite[0]} = ${jogadores[0]} 
            2 ${nomesPalpite[1]} = ${jogadores[1]}
            3 ${nomesPalpite[2]} = ${jogadores[2]}
            4 ${nomesPalpite[3]} = ${jogadores[3]}
            5 ${nomesPalpite[4]} = ${jogadores[4]}`)


    return resultadoFinal
}

function calcularSumula() {
    const tresultado = document.getElementById('resultados').value;
    const tcartela = document.getElementById('sua-cartela').value;

    const resultados = botaoCalcular(tresultado, tcartela);


    document.getElementById('resultado-final').innerText = resultados;
}

document.getElementById('copiar-btn').addEventListener('click', function() {
    const resultadoText = document.getElementById('resultado-final').innerText;
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = resultadoText; // Define o texto a ser copiado
    document.body.appendChild(tempTextArea); // Adiciona o campo ao corpo da página
    tempTextArea.select();
    tempTextArea.setSelectionRange(0, 99999); // Para dispositivos móveis
    document.execCommand('copy');
    document.body.removeChild(tempTextArea);
});
