$(document).ready(function () {
    //QUOTE ANIMATION
    var quotes = ['"The greatest thing to happen to me since my 3rd wife."', '"I\'ve been a groupie since the beginning!"', '"I never thought I\'d find a band I liked more than Nickleback."', '"Move over Bieber, there\'s new superstars in town!"', '"The best Canadian export since poutine."'];
    
    var i = 0;
    function quoteRotation() {
        $("#quote > h2").html(quotes[i]);
        $("#quote").animate({
            left: "0px"
        , }, 1000);
        setTimeout(function () {
            $("#quote").animate({
                left: "-2000px"
            , }, 1000);
        }, 6000);
        if (i === quotes.length - 1) {
            i = 0;
        }
        else {
            i++;
        }
    }
    setTimeout(function () {
        quoteRotation();
        setInterval(quoteRotation, 8000);
    }, 500);
    
    //BACKGROUND ANIMATION
    var j = 1;
    function backgroundRotation() {
        $(".backgroundImages li:nth-child(" + j + ")").animate({
            opacity: "1"
        , }, 1000);
        setTimeout(function () {
            $(".backgroundImages li:nth-child(" + j + ")").animate({
                opacity: "0"
            , }, 1000);
            if (j === 5) {
                j = 1;
            }
            else {
                j++;
            }
        }, 7000);
    }
    backgroundRotation();
    setInterval(backgroundRotation, 8000);

});