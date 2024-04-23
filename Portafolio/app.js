//quiero que se ejecute el codigo de app.js para el menú desplegable en la versión móvil
// Path: Personal/portafolio.github.io/Portafolio/app.js
//quiero que se ejecute el codigo de app.js para el menú desplegable en la versión móvil


addEventListener('DOMContentLoaded', () => {
    const btn_menu = document.querySelector('.btn_menu')
    if (btn_menu) {
        btn_menu.addEventListener('click', () => {
            const menu_items = document.querySelector('.menu_items')
            menu_items.classList.toggle('show')
        })
    }
})

// Path: Personal/portafolio.github.io/Portafolio/app.js
