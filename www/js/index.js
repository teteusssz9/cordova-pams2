function getCep()
{
    var url = "https://viacep.com.br/ws/01001000/json/";
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.send();
    request.onload = function ()
    {   
        let dados = JSON.parse(request.response);

        console.log(dados.logradouro);
    }
}

var botao = document.querySelector("#cep");
botao.addEventListener("click",getCep);