$(function(){
	var wid=parseInt($('.banner').css('width'));
	var $lists=$('.banner .lists');
	var len=$('.banner .lists li').length;
	$lists.css('width',len*wid+'px');
	$ins=$('.banner .ins');
	$ins.css('width',len*wid+'px');
	$('.pre').click(function(){
		if(!$lists.is(':animated')){
			if(parseInt($lists.css('left'))=='-'+wid){
				$ins.css('left',-(len-1)*wid+'px');
				$lists.animate({left:'+='+wid},'slow',function(){
					$lists.css('left',-(len-1)*wid+'px');
				});
			}else if(parseInt($lists.css('left'))==0){
				$lists.css('left',-(len-1)*wid+'px');
				$ins.css('left',-wid*(len-2)+'px');
				$lists.animate({left:'+='+wid},'slow');
			}
			else{
				$ins.css('left','+='+wid);
				$lists.animate({left:'+='+wid},'slow');
			}
		}
	})

	$('.next').click(function(){
		if(!$lists.is(':animated')){
			if(parseInt($lists.css('left'))==-(len-2)*wid){
				$ins.css('left','0px');
				$lists.animate({left:'-='+wid},'slow',function(){
					$lists.css('left','0px');
				});
			}else if(parseInt($lists.css('left'))==-(len-1)*wid){
				$lists.css('left','0');
				$ins.css('left','-'+wid+'px');
				$lists.animate({left:'-='+wid},'slow');
			}
			else{
				$ins.css('left','-='+wid);
				$lists.animate({left:'-='+wid},'slow');
			}
		}
	})

	$('.banner').mouseover(function(){
		clearInterval(timer);
		$('.banner button').show()
	}).mouseout(function(){
		timer=setInterval(function(){
					$('.next').click()
				},3000)
		$('.banner button').hide()
	})


	var timer=setInterval(function(){
				$('.next').click()
			},3000);
})