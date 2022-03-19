$(document).ready(function () {
  $(".toggle").click(function () {
    $("#smallImgToggle").toggle();
    $("#HiddenParagraph").toggle();
  });
  $("#secontoggle").click(function () {
    $("#secondToggle-img").toggle();
    $("#Paragraphhidden").toggle();
  });
  $(".thirdToggle").click(function(){
      $("#thirdImageToggle").toggle();
      $("#hiddenThirdParagraph").toggle();
  });
});
