var lightboxWrapper = $('.lightbox-wrapper');

for(var i=1; i<24;i++) {
  console.log(i);
  var src = '.jpg';


    if(i.toString().length == 1) {
      //wen der Index i 1 Stelle hat
      src = '00' + i + src;
    } else if (i.toString().length == 2) {
      // wenm der Index 2 Stellen hat
      src = '0' + i + src;
    } else {
      // wenn der Index 3 Stellen hat
      src = i + src;
    }

    //Erstellen eines HTML Tags
    var htmlTag = '<img src="gallery/thumbnails/' + src +'" class="kightbox-image" data-fullscreen="gallery/fullscreen/' + src +'">';

    lightboxWrapper.append(htmlTag);
}

$('.lightbox-image').click(function() {

  //Das richtige Bild ermitteln

  var $currentClickedImage = $(this);
  var imageTag = '<img src=' + $currentClickedImage.attr('data-fullscreen') + '" alt="">';
  $('#exampleModal .modal-body').html();
  $('#exampleModal').modal('show');

  //Bild wird hier in einem HTML Markup befindlichen DIV-Container geladen
  //Anschließend wird der DIV Container (Modal) eingebledet
});
