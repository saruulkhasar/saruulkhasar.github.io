//////////////  smoothly change pages  /////////////
$(document).ready(function(){
  $.get('common/menu.html').done(function(data){
    $('.top-container').html(data)
  })
})

//////////////  books page  /////////////
$(document).ready(function(){
  $.get('ichiro-kishimi.html').done(function(data){
    $('.ichiro-kishimi').html(data)
  })
})

$(document).ready(function(){
  $.get('john-bogle.html').done(function(data){
    $('.john-bogle').html(data)
  })
})

$(document).ready(function(){
  $.get('phil-knight.html').done(function(data){
    $('.phil-knight').html(data)
  })
})

$(document).ready(function(){
  $.get('benjamin-graham.html').done(function(data){
    $('.benjamin-graham').html(data)
  })
})
