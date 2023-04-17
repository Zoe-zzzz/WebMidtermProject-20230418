var min=0;
var money=1000;
function add(){
var y=(money/1000)*655;
$('.w').css('height', y+'px');
$('.w2').html(money);
}
function showmin(){
$('.w3').html(min);
}

$('.play').click(function () {
    $('.first').css('display', 'none');
    $('.second').fadeIn();
    $('.pfadein').fadeIn(3000);
    $('.img4').fadeIn(3000);
    
    setTimeout(img2, 8000);
    setTimeout(img3, 8400);
    setTimeout(img4, 8800);
    setTimeout(img5, 9200);
    setTimeout(img6, 11000);
});
$('.oo').click(function () {
    $('.first2').css('display', 'none');
    $('.mytable').fadeIn();
    $('.ot').fadeIn();
});
$('.mytable td').click(function () {
    
    if($(this).is('.hover')&&(min!=0))
    {
        if($(this).is('.choosenum'))
        {
            $(this).removeClass('choosenum');
            money+=min;//
            add();
            return;
        }
        else
        {
            $(this).addClass('choosenum');
        }
        if($(this).is('.th1'))
        {
            if($('.th2').is('.choosenum')||$('.th3').is('.choosenum'))
            {
            $('.th2').removeClass('choosenum');
            $('.th3').removeClass('choosenum');
            return;
            }
        }
        if($(this).is('.th2'))
        {
            if($('.th1').is('.choosenum')||$('.th3').is('.choosenum'))
            {
            $('.th1').removeClass('choosenum');
            $('.th3').removeClass('choosenum');
            return;
            }
        }
        if($(this).is('.th3'))
        {
            if($('.th1').is('.choosenum')||$('.th2').is('.choosenum'))
            {
            $('.th2').removeClass('choosenum');
            $('.th1').removeClass('choosenum');
            return;
            }
        }
        if($(this).is('.c1')&&$('.c2').is('.choosenum'))
        {
            $('.c2').removeClass('choosenum');
            return;
        }
        if($(this).is('.c2')&&$('.c1').is('.choosenum'))
        {
            $('.c1').removeClass('choosenum');
            return;
        }
        if($(this).is('.n1')&&$('.n2').is('.choosenum'))
        {
            $('.n2').removeClass('choosenum');
            return;
        }
        if($(this).is('.n2')&&$('n1').is('.choosenum'))
        {
            $('.n1').removeClass('choosenum');
            return;
        }
        if($(this).is('.nn1')&&$('.nn2').is('.choosenum'))
        {
            $('.nn2').removeClass('choosenum');
            return;
        }
        if($(this).is('.nn2')&&$('.nn1').is('.choosenum'))
        {
            $('.nn1').removeClass('choosenum');
            return;
        }
    }
    if(money<=0)
    {
    $(this).removeClass('choosenum');
    $('.w5').fadeIn();
    function ww(){
        $('.w5').fadeOut();
    }
    setTimeout(ww,2000);
    return;
    }
    money-=min;
    add();
});
$('.mon').click(function () {
    if($(this).is('.p1'))
    {
        if(min==100)
        {
        min=0;
        if(money>0)
        {
            $('.w4').fadeIn();
        }
        }
        else
        {
        min=100;
        $('.w4').fadeOut();
        }
        
    }
    else if($(this).is('.p2'))
    {
        if(min==50)
        {
            min=0;
            if(money>0)
        {
            $('.w4').fadeIn();
        }
        }
        else
        {
            min=50; 
            $('.w4').fadeOut();
        }
        
    }
    else if($(this).is('.p3'))
    {
        if(min==10)
        {
            min=0;
            if(money>0)
        {
            $('.w4').fadeIn();
        }
        }
        else
        {
            min=10;
            $('.w4').fadeOut();
        }
        
    }
    showmin();
    
});