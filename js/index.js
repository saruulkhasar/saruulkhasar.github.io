//////////////  smoothly change pages  /////////////
$(document).ready(function(){
  $.get('common/menu.html').done(function(data){
    $('.top-container').html(data)
  })
})
