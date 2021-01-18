$(document).ready(function() {

  $(".left").click(function(){
    // inserisco l'immagine attiva in una variabile
    var imgActive = $(".carousel>img.active");

    // creo una var per l'immagine precedente
    var imgPrev;

    //controllo se l'img a schermo ha .first
    if(imgActive.hasClass("first")){
      // se lo è, l'immagine attiva diventa quella con .last
      imgPrev = $(".carousel>img.last");
    } else {
      // altrimenti seleziono l'img precedente
      imgPrev = imgActive.prev();
    }

    imgActive.removeClass("active");
    imgPrev.addClass("active")
    imgPrev.append().hide().fadeIn(1000);
  });

  $(".right").click(function(){
    // inserisco l'immagine attiva in una variabile
    var imgActive = $(".carousel>img.active");

    // creo una var per l'immagine precedente
    var imgNext;

    //controllo se l'img a schermo ha .first
    if(imgActive.hasClass("last")){
      // se lo è, l'immagine attiva diventa quella con .last
      imgNext = $(".carousel>img.first");
    } else {
      // altrimenti seleziono l'img precedente
      imgNext = imgActive.next();
    }

    imgActive.removeClass("active");
    imgNext.addClass("active")
    imgNext.append().hide().fadeIn(1000);
  });

});
