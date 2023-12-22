$(document).ready(function(){
    const listTarefas = [];


    $('#button-cadastrar').click(function(){
        $('form').slideDown();
    })

    $('#cancel-button').click(function(){
        $('form').slideUp();
    });

    $('#add-button').click(function(){//quando o botão de cadastrar a tarefa for acionado
        var valorInputNome = $('#input-nome').val();//pegando a variavel que captura o input
            if(!listTarefas.includes(valorInputNome)){//se o input já não estiver na lista
                $(listTarefas.push(valorInputNome));//adicione o input a lista
                const liAdicionado = `<li style = "list-style: none"><b style ="cursor:pointer">${valorInputNome}</b></li>`;//declarando o item da lista <li> onde não terá estilização de listam e dentro dela tera a tag b para ficar em negrito e dentro é o valor do input
                $(liAdicionado).appendTo('.tarefas-adicionadas ul');//adicionando o li na lista ul que est[a dentro da div que tem o class=tarefas-adicionadas
            } else{//caso esteja incluso na lista
                alert('Atividade já inserida! Insira novamente!')
            }
            $('#qtd-tarefas').slideUp();
        $('#input-nome').val('');//definindo o valor do input como vazio para resetar o campo
    });

    //estamos colocando essa função no ul diretamente pq o elemento ul é o único existente no nosso escopo html
    $('.tarefas-adicionadas ul').on('click','b',function(){//usando outra função jQuery onde eu direciono onde vai acontecer o evento, nesse caso utilizo .on('ação','onde será efetivada a ação', função(){execução de código})
        $(this).css({textDecoration:'line-through'});
    })

//    $('.tarefas-adicionadas ul li').click(function(){//quando os itens <li> da lista <u> que está dentro da div tarefas-adicionadas forem clicados...
//        $('.tarefas-adicionadas ul li').css({textDecoration:'line-through'});//eles terão uma decoração de texto do tipo line-through;
//    })

    $('#mostrar').click(function(){
        if(listTarefas.length==0){
            $('#qtd-tarefas').slideDown();
        } else{
            $('.tarefas-adicionadas').slideDown();
            $('#close-button').slideDown();
        }
    })

    $('#close-button').click(function(){
        $('#qtd-tarefas').slideUp();
        $('.tarefas-adicionadas').slideUp();
        $('#close-button').slideUp();
    })

    $('form').submit(function(evento){
        evento.preventDefault();
    });
})