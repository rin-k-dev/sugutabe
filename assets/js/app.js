$(".p-hamburger").click(function () {
  //ボタンがクリックされたら
  $(this).toggleClass("active"); //ボタン自身に activeクラスを付与し
  $(".l-nav").toggleClass("panelactive"); //ナビゲーションにpanelactiveクラスを付与
});

$(".p-nav a").click(function () {
  //ナビゲーションのリンクがクリックされたら
  $(".p-hamburger").removeClass("active"); //ボタンの activeクラスを除去し
  $(".l-nav").removeClass("panelactive"); //ナビゲーションのpanelactiveクラスも除去
});

var headerH = $(".p-header").outerHeight(true);//headerの高さを取得

//スクロール途中からヘッダーの高さを変化させるための設定を関数でまとめる
function FixedAnime() {
  //ヘッダーの高さを取得
  var scroll = $(window).scrollTop();
  if (scroll >= headerH){//ヘッダーの高さを超えたら
        $('.p-header').addClass('HeightMin');//#headerについているHeightMinというクラス名を付与
  }else{
        $('.p-header').removeClass('HeightMin');//HeightMinというクラス名を除去
  }    
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  FixedAnime();//スクロール途中からヘッダーの高さを変化させる関数を呼ぶ
});

//リンク先のidまでスムーススクロール
//※ページ内リンクを行わない場合は不必要なので削除してください
$('#g-navi li a').click(function () {
  var headerVal = $("#header").outerHeight(true); //現在のheaderの高さを取得    

  //ヘッダーが高さの状態を取得してスクロールする範囲を調整する
  var scroll = $(window).scrollTop(); //スクロール
  var adjust = 0            //調整の変数
  if(scroll <= headerVal ){     //スクロールとヘッダーの高さを取得
    adjust = 60;          //スクロール値がヘッダーの高さ以内であれば調整変数を入れる
  }
  
  var elmHash = $(this).attr('href'); //hrefを取得
  var pos = $(elmHash).offset().top-headerVal-adjust; //クリックしたheader分の高さと調整分を引いた高さまでスクロール
  
  $('body,html').animate({scrollTop: pos}, 1000);
  return false;
});

//リンク先のidまでスムーススクロール
//※ページ内リンクを行わない場合は不必要なので削除してください
$('#g-sp-navi li a').click(function () {
  var headerVal = $("#header").outerHeight(true); //現在のheaderの高さを取得    

  //ヘッダーが高さの状態を取得してスクロールする範囲を調整する
  var scroll = $(window).scrollTop(); //スクロール
  var adjust = 0            //調整の変数
  if(scroll <= headerVal ){     //スクロールとヘッダーの高さを取得
    adjust = 50;          //スクロール値がヘッダーの高さ以内であれば調整変数を入れる
  }
  
  var elmHash = $(this).attr('href'); //hrefを取得
  var pos = $(elmHash).offset().top-headerVal-adjust; //クリックしたheader分の高さと調整分を引いた高さまでスクロール
  
  $('body,html').animate({scrollTop: pos}, 1000);
  return false;
});