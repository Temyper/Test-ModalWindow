$(function () {
  $("#button-modal-window").click(function (e) {
    $("#modal-window").fadeIn();
    e.preventDefault();
  });

  $("#modal-window__close, #modal-window__wrapper").click(function (e) {
    $("#modal-window").fadeOut();

    e.preventDefault();
  });
});
