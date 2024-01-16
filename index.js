let hamburgerBtn = document.querySelector('.hamburgerBtn')
let mblMenu = document.querySelector('.mblMenu')


hamburgerBtn.addEventListener('click', ()=>{
    
    hamburgerBtn.classList.toggle('open')
    mblMenu.classList.toggle('mblMenuActive')
    
    
})

