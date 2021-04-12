$(function(){
    const $language = $('header .language>p');
    const $indicator =$('section>.slides>.slides-pagination>li>a');
    const $container =$('section>.slides>.slides-container>li');

    $language.on('click',function(){
        $('header .language>ol').css({
            'display':'block'
        });
    });


    $('header .language>ol').on('click',function(){
        $(this).css({
            'display':'none'
        });
    });
     
    $indicator.on('click',function(evt){
        evt.preventDefault();

        $(this).parent().addClass('on').siblings().removeClass('on');
        
        const nowIdx = $indicator.index(this)
        
        $('section>.slides>.slides-container>li').eq(nowIdx).addClass('sd_on').siblings().removeClass('sd_on');
    });

});