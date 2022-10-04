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