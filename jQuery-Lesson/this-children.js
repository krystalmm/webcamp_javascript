// $(function () {
//   $('.bg1').on('click', function (){
//     $('.bg1').slideUp();
//   });

//   $('.bg2').on('click', function (){
//     $('.bg2').slideUp();
//   });

//   $('.bg3').on('click', function (){
//     $('.bg3').slideUp();
//   });

//   $('.bg4').on('click', function (){
//     $('.bg4').slideUp();
//   });
// });


// 上記をthisを使って書き換える！！
// $(function (){
//   $('.box1').on('click', function (){
//     $(this).slideUp();
//   });
// });



// children
$(function () {
  $('button').on('click', function (){
    $('ul').children().css('color', 'red');
  });
});



