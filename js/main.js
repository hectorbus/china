$(document).ready(function(){
  var ini = 0, count = 0
  $(window).on('click', function(){
    if (ini == 0) {
      ini = 1
      $('h1').hide()
    }
    count++
    random_image = Math.floor(Math.random()*(16)+1)
    random_sound = Math.floor(Math.random()*(19)+1)
    audio = new Audio(`resources/chinaSounds/China_${random_sound}.mp3`);
    pos_x = event.clientX - 100;
    pos_y = event.clientY - 100;
    $('body').prepend(`<img class='trumps_face'
                                  src='resources/trumpFaces/trump_${random_image}.png'
                                  style='z-index:${count};top:${pos_y}px;left:${pos_x}px;'/>`)
    audio.play()
  })
})
