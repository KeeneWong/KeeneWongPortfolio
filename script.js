const navitem = document.querySelectorAll('.navitem');

navitem.forEach(item=>{
    item.addEventListener('click',function(){
        document.querySelector(`.${item.getAttribute('data-scroll')}`).scrollIntoView({behavior: "smooth"});
    })
})






// console.log(document.querySelector('.projectmain'))