addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('.btn_menu');
    if (btn){
        btn.addEventListener('click', () => {
            const menu_items = document.querySelector('.menu_items');
            menu_items.classList.toggle('show');
        } )
    }
})