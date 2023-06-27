const menuprincipal = document.querySelectorAll('.menu')

menuprincipal.forEach(function(item){
    item.addEventListener('click', function(e){
        const actualitem = document.querySelector('.active');
        actualitem.classList.remove('active');
        e.target.classList.add('active');
    });
});