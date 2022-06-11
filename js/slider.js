let slider1 = {
    imgArray: [],
    imgIndex: 0,
    img: document.querySelector('.image'),
    btnPrev: document.querySelector('.btn-prev'),
    btnNext: document.querySelector('.btn-next'),
    start: function () {
        let thet = this;
        this.imgArray.push('http://bm.img.com.ua/img/prikol/images/large/8/2/227728.jpg')
        this.imgArray.push('https://offshoreview.eu/wp-content/uploads/2019/01/Lamborghini-Huracan-1024x682.jpg')
        this.imgArray.push('https://zakagioboi.ru/assets/images/products/car/07.09.14/CAR-51791946.jpg')
        this.imgArray.push('http://smotor.kiev.ua/engine/modules/timthumb/image.php?width=300&image=http://smotor.kiev.ua/uploads/posts/2013-04/1365842726_1259010852_yelitnye-avto.jpg')

        this.btnPrev.addEventListener("click", function (e) {
            thet.onClickPrevBtn();
        });
        this.btnNext.addEventListener("click",function (e) {
            thet.onClickNextBtn();
        });
        this.img.src = this.imgArray[this.imgIndex];
    },
    onClickPrevBtn: function (e) {
        if (this.imgIndex <= 0) {
            this.imgIndex = (this.imgArray.length - 1);
            this.img.src = this.imgArray[this.imgIndex];
            console.log(this.imgIndex)
        } else {
            this.imgIndex--;
            this.img.src = this.imgArray[this.imgIndex];
            console.log(this.imgIndex)
        }
    },
    onClickNextBtn: function (e) {
        if (this.imgIndex === (this.imgArray.length - 1)) {
            this.imgIndex = 0;
            this.img.src = this.imgArray[this.imgIndex];
        } else {
            this.imgIndex++;
            this.img.src = this.imgArray[this.imgIndex];
        }
    }
}