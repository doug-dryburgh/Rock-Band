$(document).ready(function () {
    //MENU ANIMATION
    var showMenu = false;
    $(".fa-bars").click(function () {
        if (!showMenu) {
            showMenu = true;
            $(".menu").animate({
                left: "20px",
            }, 500);
        } else {
            showMenu = false;
            $(".menu").animate({
                left: "-250px",
            }, 500);
        }
    });

    //QUOTE ANIMATION
    var quotes = ['"The greatest thing to happen to me since my 3rd wife."', '"I\'ve been a groupie since the beginning!"', '"I never thought I\'d find a band I liked more than Nickleback."', '"Move over Bieber, there\'s new superstars in town!"', '"The best Canadian export since poutine."'];
    var i = 0;

    function quoteRotation() {
        $("#quote > h2").html(quotes[i]);
        $("#quote").animate({
            left: "0px",
        }, 1000);
        setTimeout(function () {
            $("#quote").animate({
                left: "-2000px",
            }, 1000);
        }, 6000);
        if (i === quotes.length - 1) {
            i = 0;
        } else {
            i++;
        }
    }
    var quoteInterval;
    setTimeout(function () {
        quoteRotation();
        quoteInterval = setInterval(quoteRotation, 8000);

    }, 500);


    //BACKGROUND ANIMATION
    var backgrounds = ["url(./images/image1.jpeg)", "url(./images/image2.jpeg)", "url(./images/image3.jpeg)", "url(./images/image4.jpeg)", "url(./images/image5.jpeg)"];
    var j = 0;

    function backgroundRotation() {
        $("#mainBackgroundImage").css("background-image", backgrounds[j]);
        $("#mainBackgroundImage").animate({
            opacity: "1",
        }, 1000);

        setTimeout(function () {
            $("#mainBackgroundImage").animate({
                opacity: "0",
            }, 1000);
        }, 7000);
        if (j === backgrounds.length - 1) {
            j = 0;
        } else {
            j++;
        }
    }

    backgroundRotation();
    var backgroundInterval = setInterval(backgroundRotation, 8000);


    //MENU SELECTION
    $(".menu > h4").click(function () {

        var home = true;
        var menuChoice = $(this).text();


        if (home) {
            fadeHome();
            home = false;
        }

        switch (menuChoice) {
            case "About":
                newBackground(6);
                loadContent("about");
                break;
            case "Music":
                newBackground(7);
                loadContent("music");

                break;
            case "Shows":
                newBackground(8);
                loadContent("shows");

                break;
            case "Photos":
                newBackground(9);
                loadContent("photos");

                break;
            case "Connect":
                newBackground(10);
                loadContent("connect");
        }
    });

    //LOAD CONTENT
    function loadContent(type) {
        $(".content").css("display", "block");
        $(".content").animate({
            opacity: "0",
        }, 1000);
        setTimeout(function () {
            $("#" + type).animate({
                opacity: "1",
            }, 1000);
        }, 1250);
    }


    //FADE HOMEPAGE
    function fadeHome() {
        $("#mainBackgroundImage").animate({
            opacity: "0",
        }, 1000);
        $("h1").animate({
            opacity: "0",
        }, 1000);
        $("#quote").animate({
            opacity: "0",
        }, 1000);
        clearInterval(backgroundInterval);
        clearInterval(quoteInterval);
        setTimeout(function () {
            $("#mainBackgroundImage").css("display", "none");
            $("h1").css("display", "none");
            $("#quote").css("display", "none");
        }, 1000);
    }

    //TRANSITION SUBPAGE
    function newBackground(value) {
        $("#subBackgroundImage").animate({
            opacity: "0",
        }, 1000);
        setTimeout(function () {
            $("#subBackgroundImage").css({
                "background-image": "url(./images/image" + value + ".jpeg)",
                "height": "100%",
                "width": "100%"
            });
            $("#subBackgroundImage").animate({
                opacity: "1",
            }, 1000);
        }, 1000);
    }


});
