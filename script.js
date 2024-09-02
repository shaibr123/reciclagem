const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "A reciclagem, possibilita desempenhar um papel fundamental na detecção e prevenção de ameaças à saude.",
        alternativas: [
            {
                texto: "Também pode ser uma ferramenta para a reduçao de novos transmissores de doenças.",
                afirmacao: "isso e um fato bem revelante"
            },
            {
                texto: "Quais são os desafios mais comuns enfrentados pelos sistemas de reciclagem em áreas urbanas e rurais?",
                afirmacao: "falta de saneamento basico"
            }
          ]
    },
    {
        enunciado: "Como a reciclagem contribui para a preservação ambiental e a redução da pegada de carbono?",
        alternativas: [
            {
                texto: "diminuindo a puluicao, e reduzindo o gás carbonico na atmosfera.",
                afirmacao: "voce tem uma visao bem ampla e inovadora"
            },
            {
                texto: "trabalhando a influência das tradições e culturas em nosso cotidiano",
                afirmacao: "diminuindo a puluicao, e reduzindo o gás carbonico na atmosfera.",
            }
        ]
    },
    {
        enunciado: "como os cidadoes podem se envover mais ativamente em progrmas de reciclagem",
        alternativas: [
            {
                texto: "Buscando informação na legislação da saúde",
                afirmacao: "reclicando corretamente os lixos"
            },
            {
                texto: "de que forma a reciclagem pode reduzir o impacto do lixo nos oceanos",
                afirmacao: "diminuindo o numero de plasticos jogados nas praias"
            }
        ]
    }
   
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacao = opcaoSelecionada.afirmacoes;
    historiaFinal = afirmacao;
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();