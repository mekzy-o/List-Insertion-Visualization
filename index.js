$(document).ready(function() {
  $("#addBtn").click(function() {
    let text = $("#inputTxt").val();
    if (text) {
      let listSize = $("#list").children().length;
      listSize = listSize + 1;
      if (listSize % 3 === 0) {
        $("#list").append("<li class='red'>" + text + "</li>");
      } else {
        $("#list").append("<li>" + text + "</li>");
      }
    }
  });
});
