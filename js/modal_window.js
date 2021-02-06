// TODO:20210205入力フォームとその反映（ttps://daib-log.com/modalwindow/）
$(function () {
  $("#button-modal-window").click(function (e) {
    $("#modal-window").fadeIn();
    e.preventDefault();
  });

  $("#modal-window__button-answer").click(function (e) {
    let answer = $("#modal-window__textbox").val();
    $("#answer").text(answer);
    console.log("write");
    // 20210205別々に付与されたイベントは妨げられない
    e.preventDefault();
  });

  $("#modal-window__changing-items").click(function (e) {
    let text = $("#modal-window__textbox-for-changing-items").val();

    let madeButtonID = "made-button";

    let madeButtonString = $(`<button id=\"${madeButtonID}\">${text}</button>`);

    $("#wrap-for-changing-items").html(madeButtonString);

    $(`#${madeButtonID}`).click(SaysHello);

    e.preventDefault();
  });

  $(
    "#modal-window__close, #modal-window__wrapper, #modal-window__button-answer, #modal-window__changing-items"
  ).click(function (e) {
    $("#modal-window").fadeOut();
    e.preventDefault();
  });

  function SaysHello() {
    alert("Hello");
  }
});
