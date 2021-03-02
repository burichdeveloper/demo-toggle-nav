// Step 1: query the document to select the element the user will click to show and hide the nav

window.addEventListener('load', function(e){
    const button = document.querySelector('.hamburguer-btn')

    button.addEventListener('click', function(e){
        const nav = document.querySelector('nav')
        nav.classList.toggle('show-nav')
    })
})