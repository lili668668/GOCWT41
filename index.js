$(document).ready(function(){
    $("a#titindex").hide();
    $("a#titpublication").hide();
    $("a#titmembers").hide();
    $("img#ptindex").hover(function(){
        $(this).hide(50);
        $("a#titindex").show(50);
    });
    $("a#titindex").hover(function(){
    }, function(){
        $(this).hide(50);
        $("img#ptindex").show(50);
    });
    $("img#ptpublication").hover(function(){
        $(this).hide(50);
        $("a#titpublication").show(50);
    });
    $("a#titpublication").hover(function(){
    }, function(){
        $(this).hide(50);
        $("img#ptpublication").show(50);
    });
    $("img#ptmembers").hover(function(){
        $(this).hide(50);
        $("a#titmembers").show(50);
    });
    $("a#titmembers").hover(function(){
    }, function(){
        $(this).hide(50);
        $("img#ptmembers").show(50);
    });
    $("a#titindex").click(function(){
        $("html,body").animate({
            scrollTop: $("#index").offset().top
        },900);
    });
    $("a#titpublication").click(function(){
        $("html,body").animate({
            scrollTop: $("#publication").offset().top
        },900);
    });
    $("a#titmembers").click(function(){
        $("html,body").animate({
            scrollTop: $("#members").offset().top
        },900);
    });

    $(".con").hide();
    $("#newPub").click(function(){
        $("#oldPubCon .con").hide();
        $("#newPubCon .con").show(200);
    });
    $("#oldPub").click(function(){
        $("#newPubCon .con").hide();
        $("#oldPubCon .con").show(200);
    });

    $("#preview").click(function(){
        Avgrund.show("#try-read");
    });
	$("#close-img").hover(function(){
		$(this).attr("src","picture/close402.png");
	},function(){
		$(this).attr("src","picture/close40.png");
	});
	
	$("#close").click(function(){
		Avgrund.hide();
	});

});

