// $(document).ready(function () {
//   $('body').html('<h1>Hello jQuery!!</h1>');
// });

// jQueryを読み込む時の省略形
// $(function() {
//   jQueryプログラムの内容
// });

// $(function () {
//   $('.box1').css({
//     'background-color': '#0000ff',
//     'height': '100px'
//   });
// });

// スライドで表示させる（cssはdispley: none にしておく！）
// $(function (){
//   $('.box1').slideDown();
// });

// スライドで隠す（cssのdispley: noneはしない！！）
// $(function (){
//   $('.box1').slideUp();
// });


// 要素を表示する！(cssはdispley: noneに！)
// $(function (){
//   $('.box1').show();
//   $('.box1').css({'background-color': '#0000ff'});
// });


// 要素を非表示にする！（cssのdispley: noneはしない！）
// $(function (){
//   $('.box1').hide();
// });


// 確認問題
// $(function (){
//   $('.box1').slideDown(function (){
//     $('.box1').css({
//       'background-color': '#0000ff',
//       'width': '200px',
//       'height': '100px'
//     }).slideUp();
//   });
// });


// マウスオーバーイベント・マウスアウトイベント
// $(function (){
//   $('.box1').mouseover(function(){
//     $('.box1').css({'background-color': '#0000ff'});
//   });
//   $('.box1').mouseout(function(){
//     $('.box1').css({'background-color': '#ff0000'});
//   });
// });

// cssを追加・解除する
// $(function (){
//   $('.box1').mouseover(function (){
//     $('.box1').addClass('box1-ext');
//   });
//   $('.box1').mouseout(function (){
//     $('.box1').removeClass('box1-ext');
//   });
// });


// マウスクリックイベント
// $(function () {
//   $('.box1').on('click', function () {
//     $('.box1').addClass('box1-ext');
//   });
//   $('.box1').mouseout(function (){
//     $('.box1').removeClass('box1-ext');
//   });
// });
