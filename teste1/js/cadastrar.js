var botaoCadastrar = document.querySelector('#cadastrar')

botaoCadastrar.addEventListener('click', function(e) {

var dados = {
    nome: document.querySelector('#nome').value,
    contato: document.querySelector('#contato').value,
    data: document.querySelector('#data').value,
    hora: document.querySelector('#hora').value
}

    fetch('https://api-aluno.meuapp.net.br/api/eventos', {
        method: 'POST',
        body: JSON.stringify(dados),
        headers: {'Content-type': 'application/json; charset=UTF-8'}
    })
    .then(function(resposta) {
        window.location.href = 'listar.html';
    })
    .catch(function(error) {
        alert('Algo de errado não está certo')
        console.log(error)
    })
})