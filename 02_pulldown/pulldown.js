'use strict';

//プルダウン選択イベント
document.getElementById('form').select.onchange = function() {
    location.href = document.getElementById('form').select.value;
}

//選択されたページにselected
const pull = document.querySelector('body').className;

if(pull === 'pull_top') {
    document.querySelector('option[value="pulldown.html"]').selected = true;
} else if (pull === 'pull_saru') {
    document.querySelector('option[value="pulldown_saru.html"]').selected = true;
} else if (pull === 'pull_usa') {
    document.querySelector('option[value="pulldown_usa.html"]').selected = true;
}

//プロフィール画像
const thumbs = document.querySelectorAll('.thumb');
thumbs.forEach(function(item) {
    item.onclick = function() {
        document.getElementById('bigimg').src = this.dataset.prof;
    }
});

//value・下から開閉//引用タイトル開閉コメント
$(document).ready(function(){
    $('.close-button, .thinking').on('click', function(){
        $('.text-container').toggleClass('hidden');

        if ($('.text-container').hasClass('hidden')) {
            $('.close-button, .thinking').html(`valueプロパティとvalue属性<i class="fa-solid fa-computer-mouse"></i>クリックでOPEN`);
        } else if (!$('.text-container').hasClass('hidden')) {
            $('.close-button, .thinking').html('valueプロパティとvalue属性<i class="fa-solid fa-computer-mouse"></i>クリックでCLOSE');
        }
    });
});