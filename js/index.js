//////////////  smoothly change pages  /////////////
$(document).ready(function(){
  $.get('common/menu.html').done(function(data){
    $('.top-container').html(data)
  })
})

$(document).ready(function(){
  $.get('benjamin-graham.html').done(function(data){
    $('.benjamin-graham').html(data)
  })
})
