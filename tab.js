(function(w,$){
  $(function() {
    // 最初の要素以外は非表示
    $(".tabBody li").not(":first").hide();

    $(".tabHead a").click(function(){

      // 表示するコンテンツのIDを取得
      var target = $(this).attr("href").replace("#", "");

      // コンテンツ部分を全部隠す
      $(".tabBody li").hide('show');

      // クリックしたタブのhretと同じIDを持つ箇所だけを表示する
      $(".tabBody").find('#' + target).show('show');
    });
  });
}(window, jQuery));
