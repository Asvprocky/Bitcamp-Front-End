$(document).ready(function () {
    $("#btn1").click(function () {
        $("p").append(" <b>D.M.B.</b>.");
    });

    $("#btn2").click(function () {
        $("ol").append("<li>I DO</li>");
    });
});
$(document).ready(function () {
    $("#btn3").click(function () {
        $("ol,p,#btn1,#btn2").remove();
    });
});