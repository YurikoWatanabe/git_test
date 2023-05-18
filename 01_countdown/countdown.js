'use strict';

//本日の日付(表示用）
const today = new Date();
const month = today.getMonth();
const day = today.getDate();
const week = ['日', '月', '火', '水', '木', '金', '土'][today.getDay()];
document.getElementById('today').textContent = `${month + 1 }/${day} (${week})`;

//計算して結果を配列で返す関数
function countdown(due) {
    //本日の時刻
    const now = new Date();
    //未来-現在
    const rest = due.getTime() - now.getTime();
    //秒、分、時、日を計算
    const sec = Math.floor(rest / 1000) % 60;
    const min = Math.floor(rest / 1000 / 60) % 60;
    const hours = Math.floor(rest / 1000 / 60 / 60) % 24;
    const days = Math.floor(rest / 1000 / 60 / 60 / 24);
    //配列に格納
    const count = [days, hours, min, sec];
    return count;
}

//今日の終わりの時刻を設定
const goal = new Date();
goal.setHours(23);
goal.setMinutes(59);
goal.setSeconds(59);

//countdown()を呼び出して計算＆テンプレート文字列でカウントダウンを表示
//上記処理を繰り返し計算できるようにrecalc() {}で囲みrecalc()ファンクションにする
function recalc() {
const counter = countdown(goal);
const time = `${counter[1]}時間${counter[2]}分${String(counter[3]).padStart(2, '0')}秒`;
//カウントダウン表示用
document.getElementById('timer2').textContent = time;
document.getElementById('timer4').textContent = time;
refresh();
}

//1秒後に実行するファンクション
function refresh() {
    setTimeout(recalc, 1000);
}

//再計算用ファンクションの呼び出し
recalc();

//タイムスタンプの解説
$(document).ready(function(){
    $('.comme').hover(function(){
        $(this).next().toggleClass('hidden');
    });
})

//脳トレ問題・答え・引用//メソッド例　開閉コメント
$(document).ready(function(){
    $('.que, .setmethod, .getmethod').on('click', function(){
        $(this).next().toggleClass('hidden');

        if($('.settime').hasClass('hidden')) {
            $('.setmethod').html(`Dateオブジェクトから日時を設定できるset～()メソッド例<i class="fa-solid fa-computer-mouse"></i>クリックでOPEN`);
        } 
        if(!$('.settime').hasClass('hidden')) {
            $('.setmethod').html(`Dateオブジェクトから日時を設定できるset～()メソッド例<i class="fa-solid fa-computer-mouse"></i>クリックでCLOSE`);
        }
        if($('.gettime').hasClass('hidden')) {
            $('.getmethod').html(`Dateオブジェクトから日時を取得できるget～()メソッド例<i class="fa-solid fa-computer-mouse"></i>クリックでOPEN`);
        }
        if(!$('.gettime').hasClass('hidden')) {
            $('.getmethod').html(`Dateオブジェクトから日時を取得できるget～()メソッド例<i class="fa-solid fa-computer-mouse"></i>クリックでCLOSE`);
        }
    });});

//脳トレ本体・下から開閉//引用タイトル開閉コメント
$(document).ready(function(){
    $('.close-button, .thinking').on('click', function(){
        $('.text-container').toggleClass('hidden');

        if ($('.text-container').hasClass('hidden')) {
            $('.close-button, .thinking').html(`ちょっと脳トレ<i class="fa-solid fa-computer-mouse"></i>クリックでOPEN`);
        } else if (!$('.text-container').hasClass('hidden')) {
            $('.close-button, .thinking').html('ちょっと脳トレ<i class="fa-solid fa-computer-mouse"></i>クリックでCLOSE');
        }
    });
});

// ページ内リンクがクリックされた時の処理
$('a[href^="#set"], a[href^="#get"]').click(function() {
    // スクロール先の要素を取得
    let target = $($(this).attr('href'));
    if(target.length) {
      // スクロール先の位置を取得
      let windowHeight = $(window).height();
      let targetHeight = target.outerHeight();
      let targetTop = target.offset().top;
      let scrollTop = targetTop - (windowHeight - targetHeight) / 2;
      // スクロールアニメーション
      $('html, body').animate({scrollTop: scrollTop}, 500);
      return false;
    }
});

//途中経過の表示用（カウントを繰り返さない）
console.log(countdown(goal));
const counter = countdown(goal);
const middle = `${counter[1]}時間${counter[2]}分${counter[3]}秒`;
document.getElementById('timer').textContent = middle;

//途中経過の表示用（カウントを繰り返すが、padStart()無し）
function recalc2() {
    const counter = countdown(goal);
    const time = `${counter[1]}時間${counter[2]}分${String(counter[3])}秒`;
    //カウントダウン表示用
    document.getElementById('timer3').textContent = time;
    refresh2();
    }

function refresh2() {
    setTimeout(recalc2, 1000);
}

recalc2();
//////////////ここから応用編///////////////////////////////
//サンプル表示//setメソッドを使う方法
const thisyear = new Date();
thisyear.setFullYear(2023);
thisyear.setMonth(11);
thisyear.setDate(31);
thisyear.setHours(23);
thisyear.setMinutes(59);
thisyear.setSeconds(59);

const year = thisyear.getFullYear();
const lastmonth = thisyear.getMonth() + 1;
const lastday = thisyear.getDate();
const lasthour = thisyear.getHours();
const lastminute = thisyear.getMinutes();
const lastsecond = thisyear.getSeconds();

console.log(year);
const last = `${year}年${lastmonth}月${lastday}日 ${lasthour}：${lastminute}:${lastsecond}`;
document.getElementById('last').textContent = last;

//サンプル表示//引数に設定する方法
const thisyear2 = new Date(2023, 11, 31, 23, 59, 59);

document.getElementById('thisyear').textContent = thisyear2.getFullYear();
document.getElementById('thismonth').textContent = thisyear2.getMonth() + 1; 
document.getElementById('thisday').textContent = thisyear2.getDate();
document.getElementById('thishour').textContent = thisyear2.getHours();
document.getElementById('thisminute').textContent = thisyear2.getMinutes();
document.getElementById('thissecond').textContent = thisyear2.getSeconds();


//テストコード
//現在の日時を取得




