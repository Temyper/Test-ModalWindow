$(function () {
  const modalWindow = $("#modal-window");

  $("#open_modal-window").click(function (e) {
    modalWindow.fadeIn();

    e.preventDefault();
  });

  $("close-modal-window").click(function (e) {
    modalWindow.fadeOut();

    e.preventDefault();
  });
});
