

let toggle = document.querySelector('#header .toggle-button');
let collapse = document.querySelectorAll('#header .collapse');

toggle.addEventListener('click', function(){
    collapse.forEach(col=> col.classList.toggle("collapse-toggle"));
})



//with masonry


window.onload = () =>{
    const grid = document.querySelector('.grid');

    const masonry = new Masonry(grid,{
        itemSelector:'.grid-item',
        gutter:20,
        originLeft:false,
        origintop:false
    });

    masonry.on('LayoutComplete',() => console.log('Layout Complete'))
};

