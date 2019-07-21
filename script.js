const navitem = document.querySelectorAll('.navitem');
const getprojectsdiv = document.querySelectorAll('.projectsdiv');





//Nav Bar Button and auto scroll to section
navitem.forEach(item=>{
    item.addEventListener('click',function(){
        document.querySelector(`.${item.getAttribute('data-scroll')}`).scrollIntoView({behavior: "smooth"});
    })
})


//Display the project detail
getprojectsdiv.forEach(function(div, i){
    div.addEventListener('click',function(){
        document.querySelectorAll('.projectdivExpand').forEach(div=>div.classList.add('hidden'));
        document.querySelector('.scrollprojectdivExpand').classList.add('hidden');
        document.querySelector('.scrollprojectdivExpand').classList.toggle('hidden');
        document.querySelector(`.${div.getAttribute('data-expand')}`).classList.toggle('hidden');
        document.querySelector('.scrollprojectdivExpand').scrollIntoView({behavior: "smooth"});
    })
})

//BacktoProjectDiv button
document.querySelectorAll('.backtoprojectdiv').forEach(function(backbtn, i){
    backbtn.addEventListener('click',function(){
        document.querySelector('.scrollprojectmain').scrollIntoView({behavior: "smooth"});
        setTimeout(function(){
        document.querySelectorAll('.projectdivExpand')[i].classList.add('hidden')
        document.querySelector('.scrollprojectdivExpand').classList.toggle('hidden');},500);
        
    })


})









// console.log(document.querySelector('.projectmain'))