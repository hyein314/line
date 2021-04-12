$(document).ready(function(){
    const $btnLang = $('.line-header-container>form');
    const $lang = $('.line-header-container>form .langList>li>a');
    const $bnr = $('section>.line-section-visual>.line-section-visual-bnr>li');
    const $indicator = $('section>.line-section-visual>.line-section-visual-pagination>li>a');
    
    let nowIdx = 0;
    let oldIdx = 0;
    let intervalKey = null;
    
    const slidesFade = function(){
        $indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
        $bnr.eq(oldIdx).stop().fadeOut(1000);
        $bnr.eq(nowIdx).stop().fadeIn(1000);
    };
    
    const bnrInterval = function(){
        oldIdx = nowIdx;
        if(nowIdx<3){
            nowIdx++;
            slidesFade();
        }else{
            nowIdx = 0;
            slidesFade();
        }
    };
        

    $(window).on('load',function(){
        intervalKey = setInterval(bnrInterval,3000);
    });

    /*
    $btnLang.on('click',function(){
        $('.line-header-container>form .langList').toggle();
    });
    
    $btnLang.on('mouseleave',function(){
        $('.line-header-container>form .langList').hide();
    });
    */
   $btnLang.on({
       'click' : function(){
           $('.line-header-container>form .langList').toggle();
        },
        'mouseleave' : function(){
            $('.line-header-container>form .langList').hide();
        }
    });
    
    $lang.on('click',function(evt){
        evt.preventDefault();
        $btnLang.find('input').val($(this).text());
        $(this).parent().addClass('on').siblings().removeClass('on');
    });
    
    
    $indicator.on('click',function(evt){
        evt.preventDefault();
        clearInterval(intervalKey);
        
        oldIdx = nowIdx;
        nowIdx = $indicator.index(this);
        slidesFade();
        
        intervalKey = setInterval(bnrInterval,3000);
    });
    

});