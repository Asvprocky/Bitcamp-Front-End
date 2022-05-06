$(".show1").hide();


$(document).ready(function () {
    $("#show1").click(function () {
        $(".show1").toggle(650);
    });
});

$(document).ready(function () {
    $(".show").click(function () {
        $(this).hide(1000);
    });
});

/*$(document).ready(function () {
    $(".show1").click(function () {
        $(this).hide(1000);
    });
});*/

$(document).ready(function () {
    $(".yes").click(function () {
        $(this).hide(1000);
    });
});

$(document).ready(function () {
    $("#show2").click(function () {
        $(this).show(1000);
    });
});

$(document).ready(function () {
    $("#show1").click(function () {
        $(".show1").slideDown("slow");
    });
});