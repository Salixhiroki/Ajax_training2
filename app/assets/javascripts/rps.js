(function($) {
  // alert("OK");
  function setajax() {
    // console.log(shape)
    $("#ajax-btn").on("ajax:success",function(e){
      // alert("OK");
      var data=e.detail[0];
      // 詳しくはconsoleを見て
      console.log(data);
      
      $("#shape").text(data["shape"]);
      // data={shape:"TYOKI"}の形になっている
      // これを取り出すためにはdata["shape"]とする
    });
    
    $("#ajax-btn").on("ajax-error",function(e){
     alert("エラーです!");
    });
  }
  // turbolinksについて
  // documentはWebページを構成する全てのHTML要素を取得できる
  // 画面遷移を高速化するライブラリ
  // リンクのクリックイベントを一時的に保管し、Ajax リクエストに変換する
  // レスポンス（新しいページの HTML）を受け取ると、現在のページの <title> と <body> を新しい HTML の <title> と <body> に交換する
  $(document).on("turbolinks:load",setajax);
  
})(window.jQuery);



// JqueryでAjaxを使う上でのお約束4つ

// 1つ目 jsが読み込まれない！とき・・・
// jsファイルを使用する時はcoffeeが最初に読み込まれてしまうので、coffeeの名前を変更しておく


// ２つ目 jsは以下のように書く
// begin

  // (function($) {
    // 処理
  // })(window.jQuery);

// end

// 3つ目 gemとapplication.jsには何を追加すればいいのか？

  // gem には以下を追加する
    // gem 'rails-ujs'
    // gem 'jquery-rails'
  
  
  //application.js には以下を追加する
    //\= require jquery
    //\= require rails-ujs
    //\= require activestorage
    //\= require turbolinks
    //\= require_tree .
  
    // おそらくデフォルトでは//\= require jquery と //\= require rails-ujsは入っていないので
  
// 4つ目 もしログにCannot render console from IPアドレス allowed networks : 127.0.0.0/127.255.255.255, ::1
// 上記のメッセージが出てきた場合、127.0.0.0/127.255.255.255から受け付けていないよ！このIPアドレスは受け付けられないよ！
// つまりは怪しいものと思われているので、以下に許可を与える

  // config/application.rbに追加
    // config.web_console.whitelisted_ips =  '弾かれたIPアドレス'
    
// 以上の4つを守る