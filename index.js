const btnLeft = document.querySelector('.fa-angle-double-left');
const btnRight = document.querySelector('.fa-angle-double-right');
const img1 = document.querySelector('.slide1');
const img2 = document.querySelector('.slide2');
const img3 = document.querySelector('.slide3');
const img4 = document.querySelector('.slide4');
const slider = document.querySelector('.slider');

let img = [img1, img2, img3, img4];

function leftClick() {
    let first = img.shift();
    img.push(first);
    slider.innerHTML = '';
    img.forEach(el => {
        slider.appendChild(el);
    });
}

function rightClick() {
    let last = img.pop();
    img.unshift(last);
    slider.innerHTML = '';
    img.forEach(el => {
        slider.appendChild(el);
    });
}

btnLeft.addEventListener('click', function() {
    leftClick();
});

btnRight.addEventListener('click', function() {
    rightClick();
});