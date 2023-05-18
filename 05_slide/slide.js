'use strict';

const images = ['../02_pulldown/img/monkey_doup.jpg', '../02_pulldown/img/monkey_mirror.jpg', '../02_pulldown/img/monkey_zzz.jpg', '../02_pulldown/img/rabbit_front.jpg', '../02_pulldown/img/rabbit_left.jpg', '../02_pulldown/img/rabbit_right.jpg'];
let current = 0;
console.log(images);

function changeImage(num) {
    if(current + num >= 0 && current + num < images.length) {
        current += num;
        document.getElementById('main_image').src = images[current];
    }
};

document.querySelector('.prev-button').onclick = function() {
    changeImage(-1);
};
document.querySelector('.next-button').onclick = function() {
    changeImage(1);
}