document.querySelector('header .menu').addEventListener('click', ()=>{
   document.querySelector('header nav').classList.add('show')
})

document.querySelector('header nav .close_icon').addEventListener('click', ()=>{
   document.querySelector('header nav').classList.remove('show')
})
