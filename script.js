const menuBtn = document.querySelector('.menu-btn');
const navList = document.querySelector('.nav-list');

menuBtn.addEventListener('click',function(event){
    navList.classList.toggle('active');
})
