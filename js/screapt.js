const btnPrev = document.querySelector('.btn-prev')
const btnNext = document.querySelector('.btn-next')
const slideImg =  document.querySelector('.slider-img')

btnPrev.addEventListener('click', clickBtnPrev)
btnNext.addEventListener('click', clickBtnNext)

const imgUrls = [];
imgUrls.push('data:image/jpeg;base64,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')
imgUrls.push('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuwGyd30Y1_PIs3ze-3oX8g39NOIbWb9hUhUN8mCQYujG9z2z1-iza31bBAHhnI7QyRTw&usqp=CAU')
imgUrls.push('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfiiyyhfUaopfum0kEvuBtDwxfTLJQ-KzMBbStP0daIXKhjtCjGStbYcJizvndC0-3VcY&usqp=CAU')
imgUrls.push('data:image/jpeg;base64,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')

let currentIndex = 0;
slideImg.src = imgUrls[currentIndex]

function clickBtnPrev() {
    currentIndex--;
    if(currentIndex === -1){
        currentIndex = imgUrls.length -1;
    }
    slideImg.src = imgUrls[currentIndex];

}
function clickBtnNext() {
    currentIndex++;
    if(currentIndex === (imgUrls.length -1)){
        currentIndex = 0;
    }
    slideImg.src = imgUrls[currentIndex];
}