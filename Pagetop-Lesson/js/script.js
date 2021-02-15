$(function () {
  $('#back a').on('click', function(event){
    $('body, html').animate({
      // スクロール位置を取得できるscrollTopメソッドで、0、つまり最上部を指定している！
      scrollTop:0
    }, 800);
    // aタグの機能を無効にするメソッド！（aタグは画面遷移をする機能を持つが、今回は必要ないため無効にしている！）
    event.preventDefault();
  });
});