//Script para el menú fijo.
$(document).ready(function()
{
    $(window).scroll(function()
    {
        scroll = $(window).scrollTop();
        //Resoluciones mayores a 480px.
        if ($(window).width() > 480)
        {
           if (scroll > 100)
           {
              $(".menu").css({"background":"#313335"});
              $(".menu").css({"padding":"5px 0"});
              $(".menu").addClass("shadow");
              $("nav ul li a").css({"background":"transparent"});
              $(".logo").css({"color":"#fff"});
           } else
              {
                $(".menu").css({"background":"transparent"});
                $(".menu").css({"padding":"20px 0"});
                $(".menu").removeClass("shadow");
                $$("nav ul li a").css({"color":"#fff"});
                $(".logo").css({"color":"#fff"});
              }
        }
        //Resoluciones menores a 480px.
        if ($(window).width() < 480)
        {
           if (scroll > 100)
           {
              $(".menu").css({"background":"#313335"});
              $(".menu").css({"padding":"5px 0"});
              $(".menu").addClass("shadow");
              $("nav ul li a").css({"background":"transparent"});
              $(".logo").css({"color":"#fff"});
           } else
              {
                $(".menu").css({"background":"transparent"});
                $(".menu").css({"padding":"20px 0"});
                $(".menu").addClass("shadow");
                $$("nav ul li a").css({"color":"#fff"});
                $(".logo").css({"color":"#fff"});
              }
        }
    })
    //Menú Resposive
    if ($(window).width() < 500)
    {
        $('.menu-icon').on('click', function()
        {
            $('nav').slideToggle();
        })
    }
});