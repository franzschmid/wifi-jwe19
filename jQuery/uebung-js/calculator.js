//let wertDesFeldes = $('input').val();

//let wertDesFeldes = $('input').attr('value');

//let wertDesFeldes = $('p').text();

// let wertDesFeldes = $('p').html();

/*
let zahl1 = $('.zahl1').val();
let zahl2 = $('.zahl2').val();

$('.ergebnis').val(eval(zahl1 + '+' + zahl2));

$('.number-btn').click(function() {
  var current = $(this);
  $('input.ergebnis').val(current.val());
});

$('.back-btn').click(function() {
  var aktuelleErgebnis = $('.ergebnis').val();
  aktuelleErgebnis = aktuelleErgebnis.substr(0, aktuelleErgebnis.length-1);
  $('.ergebnis').val(aktuelleErgebnis);
});
*/


$('.insert').click(function() {
  var buttonInput = $(this).val();
  $('.screen').val($('.screen').val() + buttonInput);
});

$('.btn-back').click(function() {
  var aktuelleErgebnis = $('.screen').val();
  aktuelleErgebnis = aktuelleErgebnis.substr(0, aktuelleErgebnis.length - 1);
  $('.screen').val(aktuelleErgebnis);
});

$('.btn-clean').click(function() {
  var clean = '';
  $('.screen').val(clean);
});

$('.btn-equal').click(function() {
var result = $('.screen').val();
result = eval(result);
$('.screen').val(result);
});
