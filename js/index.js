//////////////  menu bar  /////////////
$(document).ready(function(){
  $.get('common/menu.html').done(function(data){
    $('.top-container').html(data)
  })
})

$(document).ready(function(){
  $.get('slide_show.html').done(function(data){
    $('.middle-container').html(data)
  })
})
