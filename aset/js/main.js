let menuopen = document.querySelector('.menu-toggle')
let menuWrapper = document.querySelector('.menu-wrapper');
menuopen.addEventListener('click' , function(){
   menuopen.classList.toggle('bxs-x-circle');
   menuWrapper.classList.toggle('aktif')
})