console.log('laden');

$(document).ready(function() {
      console.log('dokument fertig');
      $('button').click(function() {
            console.log('Bitte');


            $(document).ready(function() {

              function timeout() {
                window.setTimeout(function() {
                  $(this).removeClass('sending');
                  $(this).text('gesendet');
                  $(this).attr('disabled', false);
                }, 3000);
              }

              // Hinzufügen einer Klasse
              $('button').click(function() {
                $(this).addClass('sending');
                $(this).text('senden');
                $(this).addAttr('disabled', true);
                timeout();
              });

            });


            //    $(this).css({
            //    'width': '300px'
            //    });
