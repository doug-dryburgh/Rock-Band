$(document).ready(function() {
   
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
    
     //MENU SELECTION
    $(".menu > a").click(function (event) {
        event.preventDefault();
        var newPage = this.href;

        //fade current page
        $(".backgroundImages, h1, #quote, .content, .menu").animate({
            opacity: "0",
        }, 500);

        //load new page after fade
        setTimeout(function () {
            window.location = newPage;
        }, 500);
    });
});