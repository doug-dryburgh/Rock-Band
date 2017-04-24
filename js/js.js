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
    var quotes = ["The greatest thing to happen to me since my 3rd wife.", "this is quote 2", "this is the last quote homie"];

    var i = 0;

    function quoteRotation() {
        console.log("running");
        console.log(i);

        $("#quote > h2").html(quotes[i]);

        $("#quote").animate({
            right: "0px",
        }, 1000);

        setTimeout(function () {
            $("#quote").animate({
                right: "-1100px",
            }, 1000);
        }, 5000);

        if (i === 2) {
            i = 0;
        } else {
            i++;
        }
    

    }

    setInterval(quoteRotation, 7000);



    /*    if (i <= quotes.length-1) {
            i++;
        }
        else {
            i = 0;
        }
*/
});
