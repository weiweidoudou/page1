$(function(){

	var count=$('.banner li').length;
    $('.banner ul').css({width:count*250});    
     
     //点击pre按钮时图片向右滑动
    $('.pre').click(function(){
        var g = parseInt($('.banner ul').css('left'));                
            if(g!=0 && count > 1){                        
                 
                $('.banner>ul:not(:animated)').animate({left:g+250},200);
            }                
                 
    });
     //点击next按钮时图片向左滑动
    $('.next').click(function(){                                            
        var g = parseInt($('.banner ul').css('left'));
                     
            var a=-(count-1)*250;
            var ga=parseInt($('.banner ul').css('left'));
            if(a<ga){            
                $('.banner>ul:not(:animated)').animate({left:g-250},200);
            }        
                     
    });    
                 
     
})
