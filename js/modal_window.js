$(function () {
  const modalWindow = $("#modal-window");

  $("#button-modal-window").click(function (e) {
    modalWindow.fadeIn();
    e.preventDefault();
  });

  $("#modal-window__close").click(function (e) {
    modalWindow.fadeOut();

    e.preventDefault();
  });
});
