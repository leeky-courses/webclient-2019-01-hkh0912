$(document).ready(function() {

    var $banner = $(".banner").find("ul");

    var $bannerWidth = $banner.children().outerWidth();
    var $bannerHeight = $banner.children().outerHeight();
    var $bannerLength = $banner.children().length;
    var rollingId;


    rollingId = setInterval(function() { rollingStart(); }, 7000);

    function rollingStart() {
        $banner.css("width", $bannerWidth * $bannerLength + "px");
        $banner.css("height", $bannerHeight + "px");

        $banner.animate({left: - $bannerWidth + "px"}, 5000, function() {
            $(this).append("<li>" + $(this).find("li:first").html() + "</li>");
            $(this).find("li:first").remove();
            $(this).css("left", 0);
        });
    }
});

