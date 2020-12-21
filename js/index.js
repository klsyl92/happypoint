$(function(){
//메인 li에 마우스 호버하면 자식 .sub가 보이게    
    /*$('.main>li').hover(function(){
        $(this).find('.sub').stop().slideDown();
    }, function(){
        $('.sub').stop().slideUp();
    });*/
    
    
    $('.main>li').hover(function(){
        $(this).find('.sub').slideDown(); //자식은 children, 자손은 find로 써준다
        //$(this).find('.sub').siblings('.bg').slideDown();
        if($(this).find('sub').length !=0){
            $('.bg').slideDown();
        }
    }, function(){
        $('.sub').hide(); //hide를 주면 그냥 안보이게 해주는거이기 때문에 stop필요없다.
        $('.bg').hide();
    });
    
//검색창에서 탭메뉴 1
    /*$('.box>ul>li').click(function(){
        
        var i = $(this).index();
        
        $('.tabcon>div').hide();
        $('.tabcon>div').eq(i).show();
        
        $('.box>ul>li>a').removeClass('on');
        $(this).children('a').addClass('on');      
    });*/
    
//검색창에서 탭메뉴 2
    /*$('.box ul li').click(function(){
        //$('.box ul li a').removeClass('on');
        $(this).siblings().find('a').removeClass('on');
        $(this).find('a').addClass('on'); // .children자식만, .find자손까지
        
        var i = $(this).index();
        //console.log(i);
        $('.tabcon>div').hide();
        $('.tabcon>div').eq(i).show();
    });*/
    
//탭메뉴 닫기 1
    /*$('.top2>button>').click(function(){
        $('#popup').show();
    });
    $('.box>.close').click(function(){
        $('#popup').hide();
    });*/

//검색창 닫기
    $('.close').click(function(){
        $('#popup').hide();
    });

//검색창 열기    
    $('.open').click(function(){
        $('#popup').show();
    });
});





