const caixaPrincipal = document.querySelector(".caixa-principal");

const caixaPerguntas = document.querySelector(".caixa-perguntas");

const caixaAlternativas = document.querySelector(".caixa-alternativas");

const caixaResultado = document.querySelector(".caixa-resultado");

const caixaResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
     enunciado: "1.Quais são os principais materiais que podem ser reciclados e como devem ser preparados antes da coleta?",
      alternativas: [
           "A reciclagem, possibilita desempenhar um papel fundamental na detecção e prevenção de ameaças à saude.",
           "Também pode ser uma ferramenta para a reduçao de novos transmissores de doenças."
       ]
   },
    
    {
     enunciado: "Quais são os desafios mais comuns enfrentados pelos sistemas de reciclagem em áreas urbanas e rurais?",
      alternativas: [
           "falta de saneamento basico.",
            "problema na coleta do lixo sendo ele reciclado ou nao."
       ]
    },
    {
        enunciado: "Como a reciclagem contribui para a preservação ambiental e a redução da pegada de carbono?",
      alternativas: [
               "diminuindo a puluicao, e reduzindo o gás carbonico na atmosfera.",
               "poluindo menos e causando menos erozao."
       ]
    }
     ];

     let atual = 0;
     let perguntaAtual;

function mostraPergunta(){
     perguntaAtual = perguntas[atual];
     caixaPerguntas.textContent = perguntaAtual.enunciado;
     caixaAlternativas.textContent= "";
     mostraAlternativas();
    
    }
function mostraAlternativas(){
   for(const alternativa of perguntaAtual.alternativas){
    const botaoAlternativas= document.creatElement("button");
    botaoAlternativas.textContent = alternativa;
    caixaAlternativas.appendChild(botaoAlternativas);

   }
}

     mostraPergunta();