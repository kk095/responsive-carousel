let slider=document.querySelector('.slider');
let img=document.querySelectorAll('img');
let left=document.querySelector('.left');
let right=document.querySelector('.right');
var counter=1;
let size=slider.clientWidth;
slider.style.transform='translateX(' + (-size*counter) +'px)';
right.addEventListener('click',()=>{
    if(counter>=img.length-1) return;
    slider.style.transition='transform 1s ease-in-out'
    counter++;
    slider.style.transform='translateX(' + (-size*counter) +'px)';
 
})
left.addEventListener('click',()=>{
    if(counter <= 0) return;
    slider.style.transition='transform 1s ease-in-out'
    counter--;
    slider.style.transform='translateX(' + (-size*counter) +'px)';
 
})
slider.addEventListener('transitionend',()=>{
    if(img[counter].id=='first'){
        slider.style.transition='none'
        counter=1;
        slider.style.transform='translateX(' + (-size*counter) +'px)';
    }
})
slider.addEventListener('transitionend',()=>{
    if(img[counter].id=='last'){
        slider.style.transition='none'
        counter=img.length-2
        slider.style.transform='translateX(' + (-size*counter) +'px)';
    }
})
