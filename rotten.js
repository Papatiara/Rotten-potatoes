$(document).ready(function(e) {

    $("#indicators li:first-child").addClass("active");

    function slide(target) {
        $("#indicators li").removeClass("active").eq(target).addClass("active");
        $("#slider ul li").animate({
            'right': $("#slider ul li img").width() * target + 'px'
        }, 250);
    }

    $("#indicators li").click(function() {
        var target = $(this).index();
        slide(target);

        //Stopped auto slide when user clicked
        clearInterval(timer);
        //Then started auto slide again
        timer = setInterval(function() {
            $('#next').trigger('click');
        }, 2500);

    });

    $("#next").click(function() {
        console.log('hi')
        var target = $("#indicators li.active").index();
        console.log(target)

        if (target === $("#indicators li").length - 1) {
            target = -1;
        }
        target = target + 1
        slide(target);

        //Stopped auto slide when user clicked
        clearInterval(timer);
        //Then started auto slide again
        timer = setInterval(function() {
            $('#next').trigger('click');
        }, 2500);

    });

    $("#prev").click(function() {
        var target = $("#indicators li.active").index();
        if (target === 0) {
            target = $("#indicators li").length;
        }
        target = target - 1;
        slide(target);

        //Stopped auto slide when user clicked
        clearInterval(timer);
        //Then started auto slide again
        timer = setInterval(function() {
            $('#next').trigger('click');
        }, 2500);

    });

    //Auto slide
    var timer = null;
    timer = setInterval(function() {
        $('#next').trigger('click');
    }, 2500);
})