//PRIMEIRAMENTE VAMOS DEFINIR A CONSTANTE NA QUAL VAMOS CAPTURAR A SEÇÃO DE FORMULÁRIO ONDE ESTÁ COM O ID 'formulario'
const formulario = document.getElementById('formulario');//pegar a seção de formulário

formulario.addEventListener('submit', function(evento){//vamos adicionar o evento de quando apertar o botão de enviar, aparecer as mensagens de erro ou sucesso!
    evento.preventDefault();//desligar ação default caso o botão seja apertado    
//---------SEÇÃO-CAPTURANDO OS ELEMENTOS HTML E CONVERTENDO OS VALORES PARA CONTROLE DE TIPOS----------------//

    const campoA = document.getElementById('campoA');//pegando o <input> do campo A
    const campoB = document.getElementById('campoB');//pegando o <input> do campo B
    const valorIntA = Number.parseInt(campoA.value);//convertendo o valor do campoA para inteiro
    const valorIntB = Number.parseInt(campoB.value);//convertendo o valor do campoB para inteiro

//----------CRIANDO OS CONTAINERS RESPONSÁVEIS POR EMITIR A MENSAGEM DE VALIDAÇÃO--------------------------//

    const containerMensagemSucesso = document.getElementById('success-message');//pegando o <p> da mensagem de sucesso
    const mensagemSucesso = `<b>Sucesso!</b>`;//criando a mensagem de sucesso
    const containerMensagemErro = document.getElementById('error-message');//pegando o <p> da mensagem de erro
    const mensagemErro = `<b>Erro!</b>`;//criando a mensagem de erro
    const containerMensagemIgual = document.getElementById('equal-message');//pegando o <p> da mensagem de igualidade
    const mensagemIgual = `<b>Igual!</b>`;//criando a mensagem de igualidade

//----------FAZENDO AS CONDICIONAIS PARA VALIDAÇÃO DOS VALORES---------------------------------------------------

    if(valorIntA==valorIntB){//SE OS VALORES FOREM OS MESMOS
        containerMensagemIgual.innerHTML = mensagemIgual;//PRECISO INSERIR A MENSAGEM DE IGUALIDADE CASO SEJA IGUAL, PARA ISSO DEVO CHAMAR UMA FUNÇÃO ONDE VAI INSERIR NO CORPO HTML A MENSAGEM DE IGUALIDADE
        containerMensagemIgual.style.display='block';//DEFININDO COMO DEVE SER A FORMA QUE A MENSAGEM IRÁ APARECER
    }
    if(valorIntA<valorIntB){
        containerMensagemSucesso.innerHTML = mensagemSucesso;//PRECISO INSERIR A MENSAGEM DE SUCESSO CASO O VALOR DO CAMPO B SEJA MAIOR, PARA ISSO DEVO CHAMAR UMA FUNÇÃO ONDE VAI INSERIR NO CORPO HTML A MENSAGEM DE SUCESSO
        containerMensagemSucesso.style.display='block';//DEFININDO COMO DEVE SER A FORMA QUE A MENSAGEM IRÁ APARECER
    }
    if(valorIntA>valorIntB){
        containerMensagemErro.innerHTML = mensagemErro;//PRECISO INSERIR A MENSAGEM DE ERRO CASO O VALOR DO CAMPO A SEJA MAIOR, PARA ISSO DEVO CHAMAR UMA FUNÇÃO ONDE VAI INSERIR NO CORPO HTML A MENSAGEM DE ERRO
        containerMensagemErro.style.display='block';//DEFININDO COMO DEVE SER A FORMA QUE A MENSAGEM IRÁ APARECER
    }

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

    formulario.addEventListener('keyup', function(){//DENTRO DO PRÓPRIO EVENTO DE ENVIAR QUANDO O BOTÃO FOR APERTADO, VAMOS CRIAR OUTRO EVENTO DENTRO DO NOSSO FORMULÁRIO PARA QUE ENQUANTO O USUÁRIO ESTIVER TECLANDO NO CAMPO DE INPUT, A MENSAGEM DE VALIDAÇÃO DESAPAREÇA, POIS O USUÁRIO CONSEQUENTEMENTE QUER FAZER OUTRA VALIDAÇÃO 
            containerMensagemErro.style.display='none';
            containerMensagemSucesso.style.display='none';      //TODOS OS CONTAINERS DE MENSAGENS DE VALIDAÇÃO DEVERÃO TER DISPLAY:NONE QUANDO ESTIVEREM TECLANDO NO CAMPO DE INPUTA
            containerMensagemIgual.style.display='none';
    })
})















