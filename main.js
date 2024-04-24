$(document).ready(function(){
    const endpoint = "https://api.github.com/users/LisboaDev23";
    fetch(endpoint)
    .then(function(respostaRequisicao){
        return respostaRequisicao.json();
    })
    .then(function(json){
        $(".profile-name").append(json.name);
        $(".profile-username").append(json.login);
        $("#qtd-repositorios").append(json.public_repos);
        $("#qtd-seguidores").append(json.followers);
        $("#qtd-seguindo").append(json.following);
    })
    .catch(function(){
        alert("Houve algum erro, tente novamente mais tarde!")
    })
    .finally(function(){
        //apenas para entender que o finally será um trecho de código que sempre será executado apesar de dar erro ou não
    });
})