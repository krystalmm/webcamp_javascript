API_KEY = "1b050291624880ebbb21dc9367546a32";

$(function (){
  $('#btn').on('click', function(){
    // 入力された都市名でwebAPIに天気情報をリクエスト
    $.ajax({
      // val()はHTMLのvalue属性を取得するメソッド！！
      url: "http://api.openweathermap.org/data/2.5/weather?q=" + $('#cityname').val() + "&units=metric&appid=" + API_KEY,
      // レスポンスとして取得したいデータの型（今回はJSON）を指定している！
      dataType: 'jsonp',
    }).done(function (data){  // dataは任意の変数名！
      // 通信成功
      // 位置
      $('#place').text(data.name);
      // 最高気温
      $('#temp_max').text(data.main.temp_max);
      // 最低気温
      $('#temp_min').text(data.main.temp_min);
      // 湿度
      $('#humidity').text(data.main.humidity);
      // 風速
      $('#speed').text(data.wind.speed);
      // 天気
      $('#weather').text(data.weather[0].main);
      // 天気アイコン
      $('img').attr("src", "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
      $('img').attr("alt", data.weather[0].main);
    }).fail(function (data){
      // 通信失敗
      alert('通信に失敗しました。');
    });
  });
});