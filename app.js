addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('.btn_menu');
    const section = document.querySelector('.section');

    if (btn){
        btn.addEventListener('click', () => {
            const menu_items = document.querySelector('.menu_items');
            menu_items.classList.toggle('show');
        })
    }
    if(section){
        section.addEventListener('click', () =>{
            const menu_items = document.querySelector('.menu_items');
            menu_items.classList.toggle('ul.hide');
        })
    }
   
});

