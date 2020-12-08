$(document).ready(function(){
    $(".preloader").fadeOut(3000,function(){
        $("body").css("overflow","auto");
        $(this).fadeOut();
	});
    $("#remove-1").click(function(){
        if($(".our-gallery .image-filter .row").text("")){
            $(".image-filter .row").append("<div class='col-sm-3 col-xs-6'><img src='image/sedia-furniture/item-8.jpg'></div>");
            $(".image-filter .row").append("<div class='col-sm-3 col-xs-6'><img src='image/sedia-furniture/item-7.jpg'></div>");
            $(".image-filter .row").append("<div class='col-sm-3 col-xs-6'><img src='image/sedia-furniture/item-6.jpg'></div>");
            $(".image-filter .row").append("<div class='col-sm-3 col-xs-6'><img src='image/sedia-furniture/item-5.jpg'></div>");
            $(".image-filter .row").append("<div class='col-sm-3 col-xs-6'><img src='image/sedia-furniture/item-4.jpg'></div>");
            $(".image-filter .row").append("<div class='col-sm-3 col-xs-6'><img src='image/sedia-furniture/item-3.jpg'></div>");
            $(".image-filter .row").append("<div class='col-sm-3 col-xs-6'><img src='image/sedia-furniture/item-2.jpg'></div>");
            $(".image-filter .row").append("<div class='col-sm-3 col-xs-6'><img src='image/sedia-furniture/item-1.jpg'></div>");
        }
    })
    $("#remove-2").click(function(){
        $(".our-gallery .image-filter .image").remove();
        if($(".our-gallery .image-filter .row").text("")){
            $(".image-filter .row").append("<div class='col-sm-3 col-xs-6'><img src='image/sedia-furniture/item-5.jpg'></div>");
            $(".image-filter .row").append("<div class='col-sm-3 col-xs-6'><img src='image/sedia-furniture/item-3.jpg'></div>");
            $(".image-filter .row").append("<div class='col-sm-3 col-xs-6'><img src='image/sedia-furniture/item-1.jpg'></div>");
        }
    })
    $("#remove-3").click(function(){
        $(".our-gallery .image-filter .image").remove();
        if($(".our-gallery .image-filter .row").text("")){
            $(".image-filter .row").append("<div class='col-sm-3 col-xs-6'><img src='image/sedia-furniture/item-4.jpg'></div>");
            $(".image-filter .row").append("<div class='col-sm-3 col-xs-6'><img src='image/sedia-furniture/item-2.jpg'></div>");
        }
    })
    $("#remove-4").click(function(){
        $(".our-gallery .image-filter .image").remove();
        if($(".our-gallery .image-filter .row").text("")){
            $(".image-filter .row").append("<div class='col-sm-3 col-xs-6'><img src='image/sedia-furniture/item-8.jpg'></div>");
            $(".image-filter .row").append("<div class='col-sm-3 col-xs-6'><img src='image/sedia-furniture/item-6.jpg'></div>");
        }
    })
    $("#remove-5").click(function(){
        $(".our-gallery .image-filter .image").remove();
        if($(".our-gallery .image-filter .row").text("")){
            $(".image-filter .row").append("<div class='col-sm-3 col-xs-6'><img src='image/sedia-furniture/item-7.jpg'></div>");
        }
    })
    /*
    $(window).scroll(function(){
        console.log($(this).scrollTop())
    })
    */
    $(window).scroll(function(){
		if($(this).scrollTop()>= 762){
            $(".navbar").css({"background-color":"#8B0110"})
		}
		else{
            $(".navbar").css({"background-color":"rgba(16, 22, 54, 0.2)"})
		}
	})
    $("#scroll-1").click(function(){
		$("html,body").animate({
            scrollTop: 0,
		},600);
    })
    $("#scroll-2").click(function(){
		$("html,body").animate({
			scrollTop: 762
		},600);
    })
    $("#scroll-3").click(function(){
		$("html,body").animate({
			scrollTop: 1078
		},600);
    })
    $("#scroll-4").click(function(){
		$("html,body").animate({
			scrollTop: 1999
		},600);
    })
    $("#scroll-5").click(function(){
		$("html,body").animate({
			scrollTop: 3182
		},600);
    })
    var scrollbotton = $("#scroll-top");
	$(window).scroll(function(){
		if($(this).scrollTop()>= 700){
			scrollbotton.show(1000)
		}
		else{
			scrollbotton.hide(1000)	
		}
	})
	scrollbotton.click(function(){
		$("html,body").animate({
			scrollTop: 0
        },1000)
    })
})