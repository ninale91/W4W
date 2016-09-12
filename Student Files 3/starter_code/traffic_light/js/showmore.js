$(document).ready(start);

function start(){
  $('#learn-more').click(expand);
}
(
function expand(e){
  e.preventDefault();
  $('.big-para').slidetoggle();
  // $('.big-para').css('height', 'initial');
  // $('#learn-more').text('Learn Less');
}

//Slide down and slide up in Jqueary slidetoggle
