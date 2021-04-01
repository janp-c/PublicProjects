//Script del Vídeo.
var video = document.getElementById('mp4');
var boton = document.getElementById('boton');
function playVideo()
{
    video.play();
    boton.style.display = 'none';
}
video.addEventListener('ended', function()
{
    boton.style.display = 'block';
});

//Menu Icon - jQuery
$(document).ready(function(){
    $('.menu-icon').on('click', function(){
        $('nav').slideToggle();
    });
});