const info_animations = document.querySelectorAll('.character-info');
const img_animations = document.querySelectorAll('.character-img');

function animationsInfo(){
    info_animations.forEach((el)=>{
        const pos = el.getBoundingClientRect().top;

        if(pos < window.innerHeight * 1){
            el.classList.add('animate__animated', 'animate__fadeInLeft');
        } else {
            el.classList.remove('animate__animated', 'animate__fadeInLeft');
        }
    });
}

function animationsImg(){
    img_animations.forEach((el)=>{
        const pos = el.getBoundingClientRect().top;

        if(pos < window.innerHeight * 1){
            el.classList.add('animate__animated', 'animate__fadeInRight');
        } else {
            el.classList.remove('animate__animated', 'animate__fadeInRight');
        }
    });
}

window.addEventListener('scroll', animationsInfo);
window.addEventListener('scroll', animationsImg);
