$(document).ready(function(){
  let count = 0
  $("a, input").mousedown(function(e) {
       e.stopPropagation();
  });
  $(document).mousedown(function(){
    if (count == 0) {
      $('h1').hide()
      $('.count, .slider').fadeIn().text((count + 1) + " china")
    }else {
      $('.count').text((count + 1) + " chinas")
    }
    count++
    let random_image = Math.floor(Math.random()*(16)+1)
    let random_sound = Math.floor(Math.random()*(19)+1)
    let audio = new Audio(`resources/chinaSounds/China_${random_sound}.mp3`)
    let size_val = $('.slider').val()
    let pos_x = event.clientX - (size_val / 2)
    let os_y = event.clientY - (size_val / 2)
    $('body').prepend(`<img class='trumps_face'
                                  src='resources/trumpFaces/trump_${random_image}.png'
                                  style='width:${size_val}px;z-index:${count};top:${pos_y}px;left:${pos_x}px;'/>`)
    audio.play()
  })
})
