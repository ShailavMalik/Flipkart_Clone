let imgStatus = 1;

let width=document.body.clientWidth;

function myFunction() {
        width = document.body.clientWidth;
    }

addEventListener('change', myFunction);

function rotateBanner() {
    if (imgStatus === 1) {
        document.querySelector(".bannerImg1").style.zIndex = "1";
        document.querySelector(".bannerImg2").style.zIndex = "-1";
        document.querySelector(".bannerImg3").style.zIndex = "-1";
        document.querySelector(".bannerImg4").style.zIndex = "-1";
        document.querySelector(".bannerImg5").style.zIndex = "1";

        /* Image which is going to come from last position to first position 
          should have least index as it have to cross other two images and  it  should 
          not be visible to user while going from last position to first position 
        */

        this.setTimeout(function () {
            document.querySelector(".bannerImg1").style.right = "0";
            document.querySelector(".bannerImg2").style.right = '-' + width + "px";
            document.querySelector(".bannerImg3").style.right = '-' + width + "px";
            document.querySelector(".bannerImg4").style.right = '-' + width + "px";
            document.querySelector(".bannerImg5").style.right = width + "px";
            imgStatus = 2;
        }, 1000);
    }

    else if (imgStatus === 2) {
        document.querySelector(".bannerImg1").style.zIndex = "1";
        document.querySelector(".bannerImg2").style.zIndex = "1";
        document.querySelector(".bannerImg3").style.zIndex = "-1";
        document.querySelector(".bannerImg4").style.zIndex = "-1";
        document.querySelector(".bannerImg5").style.zIndex = "-1";

        this.setTimeout(function () {
            document.querySelector(".bannerImg1").style.right = width + "px";
            document.querySelector(".bannerImg2").style.right = "0";
            document.querySelector(".bannerImg3").style.right = '-' + width + "px";
            document.querySelector(".bannerImg4").style.right = '-' + width + "px";
            document.querySelector(".bannerImg5").style.right = '-' + width + "px";
            imgStatus = 3;
        }, 1000);
    }

    else if (imgStatus === 3) {
        document.querySelector(".bannerImg1").style.zIndex = "-1";
        document.querySelector(".bannerImg2").style.zIndex = "1";
        document.querySelector(".bannerImg3").style.zIndex = "1";
        document.querySelector(".bannerImg4").style.zIndex = "-1";
        document.querySelector(".bannerImg5").style.zIndex = "-1";

        this.setTimeout(function () {
            document.querySelector(".bannerImg1").style.right = '-' + width + "px";
            document.querySelector(".bannerImg2").style.right = width + "px";
            document.querySelector(".bannerImg3").style.right = 0;
            document.querySelector(".bannerImg4").style.right = '-' + width + "px";
            document.querySelector(".bannerImg5").style.right = '-' + width + "px";
            imgStatus = 4;
        }, 1000);
    }

    else if (imgStatus === 4) {
        document.querySelector(".bannerImg1").style.zIndex = "-1";
        document.querySelector(".bannerImg2").style.zIndex = "-1";
        document.querySelector(".bannerImg3").style.zIndex = "1";
        document.querySelector(".bannerImg4").style.zIndex = "1";
        document.querySelector(".bannerImg5").style.zIndex = "-1";

        this.setTimeout(function () {
            document.querySelector(".bannerImg1").style.right = '-' + width + "px";
            document.querySelector(".bannerImg2").style.right = '-' + width + "px";
            document.querySelector(".bannerImg3").style.right = width + "px";
            document.querySelector(".bannerImg4").style.right = 0;
            document.querySelector(".bannerImg5").style.right = '-' + width + "px";
            imgStatus = 5;
        }, 1000);
    }

    else if (imgStatus === 5) {
        document.querySelector(".bannerImg1").style.zIndex = "-1";
        document.querySelector(".bannerImg2").style.zIndex = "-1";
        document.querySelector(".bannerImg3").style.zIndex = "-1";
        document.querySelector(".bannerImg4").style.zIndex = "1";
        document.querySelector(".bannerImg5").style.zIndex = "1";

        this.setTimeout(function () {
            document.querySelector(".bannerImg1").style.right = '-' + width + "px";
            document.querySelector(".bannerImg2").style.right = '-' + width + "px";
            document.querySelector(".bannerImg3").style.right = '-' + width + "px";
            document.querySelector(".bannerImg4").style.right = width + "px";
            document.querySelector(".bannerImg5").style.right = "0";
            imgStatus = 1;
        }, 1000);
    }
}

setInterval(rotateBanner, 4000);

