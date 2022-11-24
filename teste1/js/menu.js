var menus = [
    {
        titulo : 'Dashboard',
        url: 'imdex.html',
        icone: 'fas fa-home'
    },
    {
        titulo: 'Listar',
        url: 'listar.html',
        icone: 'fas fa-list'
    },
    {
        titulo: 'Cadastrar',
        url: 'cadastrar.html',
        icone: 'fas fa-plus'
    }
]

menus.forEach(function(item) {
    document.querySelector('#nosso-menu').innerHTML += ` 
     <li class="nav-item">
    <a class="nav-link" aria-current="page" href="${item.url}">
        <i class="${item.icone}"></i>
        ${item.titulo}
    </a>
</li>`;
})




{/* <li class="nav-item">
<a class="nav-link active" aria-current="page" href="#">
    <i class="fas fa-home"></i>
    Dashboard
</a>
</li> */}







