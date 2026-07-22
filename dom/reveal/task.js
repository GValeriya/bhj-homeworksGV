function checkReveal (){
    const blocks = document.querySelectorAll('.reveal');
    for(let block of blocks){
        const {top, bottom} = block.getBoundingClientRect();
        if(top < window.innerHeight && bottom > 0){
            block.classList.add('reveal_active');
        }
    }
}
window.addEventListener('scroll', checkReveal);
checkReveal();