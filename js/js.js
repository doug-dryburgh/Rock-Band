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
                left: "-200px",
            }, 500);
        }
    });
    //QUOTE ANIMATION
    var quotes = ['"The greatest thing to happen to me since my 3rd wife."', '"I\'ve been a groupie since the beginning"', '"I never thought I\'d find a band I liked more than Nickleback"'];
    var i = 0;

    function quoteRotation() {
        $("#quote > h2").html(quotes[i]);
        $("#quote").animate({
            right: "0px",
        }, 1000);
        setTimeout(function () {
            $("#quote").animate({
                right: "-2000px",
            }, 1000);
        }, 6000);
        if (i === quotes.length - 1) {
            i = 0;
        } else {
            i++;
        }
    }
   setTimeout(function () {
        quoteRotation();
        setTimeout(function () {
            setInterval(quoteRotation, 8000)
        })
    }, 500);

    //BACKGROUND ANIMATION
    var backgrounds = ["url(./images/image1.jpeg)", "url(./images/image2.jpeg)", "url(./images/image3.jpeg)", "url(./images/image4.jpeg)", "url(./images/image5.jpeg)"];
    var j = 0;

    function backgroundRotation() {
        $("#backgroundImage").css("background-image", backgrounds[j]);
        $("#backgroundImage").animate({
            opacity: "1",
        }, 1000);

        setTimeout(function () {
            $("#backgroundImage").animate({
                opacity: "0",
            }, 1000)
        }, 7000);
        if (j === backgrounds.length - 1) {
            j = 0;
        } else {
            j++;
        }
    }

    backgroundRotation();
setInterval(backgroundRotation, 8000);


});
