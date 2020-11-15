/*global $, alert, console*/

$(function () {
   
    'use strict';
    
    //adject header height
    // لما اصغر واكبر الشاشه الارتفاع يفضل قد الشاشه
    //والسليدر يفضل فى النص
    
    var myHeader = $('.header');
    
    myHeader.height($(window).height());
    
    $(window).resize(function () {
        
        myHeader.height($(window).height());
        
        $('.bxslider').each(function () {
         
            $(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2);
         
        });
        
        
    });
    
    // add links active class
    
    $('.links li a').click(function () {
        
        $(this).parent().addClass('active').siblings().removeClass('active');
        
    });
    
    //make slider center
    // هشوف طول اللسته واطرحه من طول الصفحه واقسمه على اتنين عشان فوقها يبقا نصالمسافه وتحتها نص المسافه وتيجى فى النص بالظبط 
    // هعمل منه نسخه واحطها فوق عشان لما اصغر الشاشه واكبره تفضل فى النص 
    //هحطها جوه resize
    $('.bxslider').each(function () {
         
        $(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2);
         
    });
    
    
    // bx slider run
    
    $('.bxslider').bxSlider({
        
        pager: false
    });
    
    /*
    //smooth scroll to div
    //بقوله لما اضط على اللينك يخلى ارتفاع الصفحه اد ارتفاع المكان الى عاوز اروحه
 
    $('.ser').click(function () {
        
        $('html, body').animate({
          
            scrollTop: $('#services').offset().top  
           
        }, 1000);             
                    
    }); */
    
    
    // date-value // date اسم الخاصيه value اسم من عندى بيرجع القيمه الى جو القوس
    //هستخدمها عشان اعمل على الينكات كلها بدل ماعد اكرر الكود الى فوق ده
    /*
    //'#' + $(this).data('value') بقوله الى تضغط عليه روح لل id  الى زيه
    // وبدى للمكان الى عاوز اروحه نفس Id 
    وشيلت ال margin من h2 عشان مينزلش تحته او اطرح ال margin من السطر الى تحت -18
    */
    
    
    $('.links li a').click(function () {
        
        $('html, body').animate({
          
            scrollTop: $('#' + $(this).data('value')).offset().top
           
        }, 1000);
                     
    });
    
    // our auto slider code  اعمل الصور تقلب لوحدها وممكن اعملها بذورار
    // هعمل self invoke عشان تشتغل من غير مانادى على الفنكشن
    
    //لو مش اخر ابن اخره تلت ثوانى واخفيه واعمل فانشكن شيل الكلاس من الاول وحطه على الى بعده
    //وبعدين انادى على الفنكشن تحت عشان تتكرار لحد اخر ابن
    //لو وصلت لاخر ابن اعمل else اشيل الكلاس منه واضيفه على اول ديفواظهره وبعدين انادى على الفنكشن عشان افضل اعيد ده كله تانى
    
    (function autoSlider() {
        
        $('.slider .active').each(function () {
            
            if (!$(this).is(':last-child')) {
                
                $(this).delay(3000).fadeOut(3000, function () {
                   
                    $(this).removeClass('active').next().addClass('active').fadeIn();
                   
                    autoSlider();
                    
                });
            } else {
                
                $(this).delay(3000).fadeOut(3000, function () {
                    
                    $(this).removeClass('active');
                    
                    $('.slider div').eq(0).addClass('active').fadeIn();
                    
                    autoSlider();
                    
                });
                  
            }

        });
        
    }());
    
    //trigger mixit up
    
    window.mixitup('#container');
    
    //adjust shuffle links
    
    $('.shuffle li').click(function () {
        
        $(this).addClass('selected').siblings().removeClass('selected');
        
    });
    
    //trigger nice scroll
    
    $("html").niceScroll({
        zindex: 99999999,
        
        cursorcolor: "#1abc9c",
        
        cursorwidth: "10px",
        
        cursorborder: "1px solid #1abc9c"
    });
    
});


    
    
    
  
