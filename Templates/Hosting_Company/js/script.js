/*
    jQuery Version: 3.4.1
    ---------------------
    Popup!
    Tabs Menu
*/
$(document).ready(function()
{
    //Popup!
    $('.popup').delay(5000).fadeIn(500); //Muestra a la clase class:popup en 5 segundos.
    $('.popup .cerrar').click(function()
    {
        $('.popup').fadeOut();
    });

    //Tabs Menu
    $('#tab-uno').addClass("active"); //Agrega una clase class:active al CSS del id:tab-uno.
    $('#hosting-dos').fadeOut(); //Oculta al id:hosting-dos.
    $('#hosting-tres').fadeOut(); //Oculta al id:hosting-tres.
    //----------------------------------------
    $('#tab-dos').click(function()
    {
        $('#hosting-uno').fadeOut(10);
        $('#hosting-tres').fadeOut(10);
        $('#hosting-dos').fadeIn(10);
        $('#tab-dos').addClass("active");
        $('#tab-uno').removeClass("active");
        $('#tab-tres').removeClass("active");
    });
    //----------------------------------------
    $('#tab-uno').click(function()
    {
        $('#hosting-uno').fadeIn(10);
        $('#hosting-tres').fadeOut(10);
        $('#hosting-dos').fadeOut(10);
        $('#tab-dos').removeClass("active");
        $('#tab-uno').addClass("active");
        $('#tab-tres').removeClass("active");
    });
    //----------------------------------------
    $('#tab-tres').click(function()
    {
        $('#hosting-uno').fadeOut(10);
        $('#hosting-tres').fadeIn(10);
        $('#hosting-dos').fadeOut(10);
        $('#tab-dos').removeClass("active");
        $('#tab-uno').removeClass("active");
        $('#tab-tres').addClass("active");
    });

    //Icon Menu
    $('.menu-icon').on('click', function()
    {
        $('nav').slideToggle();
    });
});