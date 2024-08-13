/*
OBJETIVO - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente
    
passo 1 - dar um jeito de pegar o elemento HTML dos botões
passo 2 - dar um jeito de identificar o clique do usuário no botão
passo 3 - desmarcar o botão selecionado anterior
passo 4 - marcar o botão clicado como se estivesse selecionado
passo 5 - esconder a imagem anteriormente selecionada
passo 6 - fazer aparecer a imagem correspondente ao botão clicado
passo 7 - esconder a informação do dragão anteriormente selecionado
passo 8 - mostrar a informação do dragão referente ao botão clicado

*/

const { botoesCarrossel, imagens, informacoes } = BuscandoValoresHtml();

botoesCarrossel.forEach((botao, indice) => {
    
    botao.addEventListener("click", () => {

        desmarcarBotao();

        marcarBotaoSelecionado(botao);

        esconderImagemAnterior();

        mostrarImagemIndice(indice);

        esconderInformacaoAnterio();
        
        mostrarInformacoesIndice(indice);

        
        

    })
})

function marcarBotaoSelecionado(botao) {
    botao.classList.add("selecionado");
}

function mostrarInformacoesIndice(indice) {
    informacoes[indice].classList.add("ativa");
}

function mostrarImagemIndice(indice) {
    imagens[indice].classList.add("ativa");
}

function esconderInformacaoAnterio() {
    const informacoesAtiva = document.querySelector(".informacoes.ativa");
    informacoesAtiva.classList.remove("ativa");
}

function esconderImagemAnterior() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove("ativa");
}

function desmarcarBotao() {
    const botaoSelecionado = document.querySelector(".selecionado");

    botaoSelecionado.classList.remove("selecionado");
}

function BuscandoValoresHtml() {
    const botoesCarrossel = document.querySelectorAll(".botao");
    const imagens = document.querySelectorAll(".imagem");
    const informacoes = document.querySelectorAll(".informacoes");
    return { botoesCarrossel, imagens, informacoes };
}

