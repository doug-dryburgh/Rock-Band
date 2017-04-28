$(document).ready(function () {

    var page = window.location.pathname
/*
    console.log(window.location.pathname);
*/

    switch (page) {
        case "/about.html":
            loadBackground(6);
            break;
        case "/music.html":
            loadBackground(7);
            break;
        case "/shows.html":
            loadBackground(8);
            break;
        case "/photos.html":
            loadBackground(9);
            break;
        case "/connect.html":
            loadBackground(10);
    }

    function loadBackground(value) {
        $("#backgroundImage").css("background-image", "url(./images/image" + value + ".jpeg)");
        $("#backgroundImage").animate({
            opacity: "1",
        }, 1000);
    }

    $(".content").animate({
        opacity: "1",
    }, 1000);




});
