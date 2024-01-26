$(function(){
    $(window).scroll(function(){
        sct=$(window).scrollTop()
        
        if(sct>=600){
            $('header').css({position:'fixed',top:0});
            $('.logo').css({opacity:1});
            $('#wrap').css({marginTop:110});
        }else if(sct<600){
            $('header').css({position:'relative',top:0});
            $('.logo').css({opacity:0});
            $('#wrap').css({marginTop:0});
        }
        
        if(sct>=650&&sct<2200){
            $('.pop1').stop().animate({opacity:1},200);
        }else{
            $('.pop1').stop().animate({opacity:0},200);
        }
        if(sct>=2200&&sct<3800){
            $('.pop2').stop().animate({opacity:1},200);
        }else{
            $('.pop2').stop().animate({opacity:0},200);
        }
        if(sct>=4000){
            $('.pop3').stop().animate({opacity:1},200);
        }else{
            $('.pop3').stop().animate({opacity:0},200);
        }
    })
})