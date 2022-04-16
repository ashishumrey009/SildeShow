const track = document.querySelector('.carousal_track')

//when I click left move->>left ,right->>right,nav--> move to that slide
const slides = Array.from(track.children)
const nextButton =  document.querySelector('.carousal_button--right')
const prevButton = document.querySelector('.carousal_button--left')
const dotsNav = document.querySelector('.carousal_nav')
const dots = Array.from(dotsNav.children)
const slideSize = slides[0].getBoundingClientRect()
const slideWidth = slideSize.width;

//arrage next to each other

// slides[0].style.left =0;
// slides[1].style.left=slideWidth*1+'px'
// slides[2].style.left=slideWidth*2+'px'

const moveToSlide =(track,currentSlide,targetSlide) =>{
    track.style.transform = 'translateX(-'+ targetSlide.style.left + ')' ;
    currentSlide.classList.remove('current-slide')
    targetSlide.classList.add('current-slide')
}

const setSlidePosition =( slide,index)=>{
    slide.style.left = slideWidth *index + 'px'
}
slides.forEach(setSlidePosition)

//left 
nextButton.addEventListener('click',e=>{
    const currentSlide = track.querySelector('.current-slide')
    const nextSlide = (currentSlide.nextElementSibling)
    const currentDot = dotsNav.querySelector('.current-slide')
    const nextDot = currentDot.nextElementSibling
    const nextIndex = slides.findIndex(slide=>slide===nextSlide)
    moveToSlide(track,currentSlide,nextSlide)
    updateDots(currentDot,nextDot)
    hideShowArrows(slides,prevButton,nextButton,nextIndex)
    // const amountToMove = nextSlide.style.left;
    // //move to  the next slide
    // track.style.transform = 'translateX(-'+amountToMove+ ')' ;
    // currentSlide.classList.remove('current-slide')
    // nextSlide.classList.add('current-slide')


})
const updateDots=(currentDot,targetDot)=>{
    currentDot.classList.remove('current-slide')
    targetDot.classList.add('current-slide')
}
const hideShowArrows =(slides,prevButton,nextButton,targetIndex) =>{
if(targetIndex===0){
        prevButton.classList.add('is-hidden')
        nextButton.classList.remove('is-hidden')
    }else if(targetIndex===slides.length-1){
        prevButton.classList.remove('is-hidden')
        nextButton.classList.add('is-hidden')
    }else{
        prevButton.classList.remove('is-hidden')
        nextButton.classList.remove('is-hidden')
    }
}
prevButton.addEventListener('click',e=>{
    const currentSlide = track.querySelector('.current-slide')
    const pervSlide = (currentSlide.previousElementSibling)
    const currentDot = dotsNav.querySelector('.current-slide')
    const prevDot = currentDot.previousElementSibling
    const prevIndex = slides.findIndex(slide=>slide===pervSlide)
    moveToSlide(track,currentSlide,pervSlide)
    updateDots(currentDot,prevDot)
    hideShowArrows(slides,prevButton,nextButton,prevIndex)
})

dotsNav.addEventListener('click',e=>{
    const targetDot =e.target.closest('button');
    if(!targetDot) return;
    const currentSlide = track.querySelector('.current-slide')
    const currentDot = dotsNav.querySelector('.current-slide')
    const targetIndex = dots.findIndex(dot=>dot===targetDot)
    const targetSlide = slides[targetIndex]
    moveToSlide(track,currentSlide,targetSlide)
    updateDots(currentDot,targetDot)
    hideShowArrows(slides,prevButton,nextButton,targetIndex)
    console.log(targetIndex)
    
   // console.log(dots)
    console.log(currentDot)
})
//console.log(nextButton,prevButton,dots,slideWidth)