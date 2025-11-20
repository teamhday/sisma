$(function () {
    AddClassSelectToLink();
    $("#menuProject a").click(function () {
        var data = $(this).attr("data");
        var objData = $("#" + data);
        var pos = getRealPosition($("#" + data));
        var body = $("html, body");
        body.stop().animate({ scrollTop: pos.y }, 500, 'swing');
    })
})


$(window).load(function () {
    $(".project-home-item").each(function (i, e) {
        $("table", e).css("height", $(e).height());
    })
})