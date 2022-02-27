const iconoMenu = document.querySelector('#icono-menu');
    menu = document.querySelector('#menu');

iconoMenu.addEventListener('click', (e) => {
    menu.classList.toggle('active');
    document.body.classList.toggle('opacity');

    const rutaActual =e.target.getAttribute('src');

    if(rutaActual == 'multimedia/list.svg'){
        e.target.setAttribute('src', 'multimedia/list.svg');
    }else{
        e.target.setAttribute('src', 'multimedia/list.svg');
    }
});