/*var komunikat = document.getElementById('komunikat');
var x = prompt("podaj co chcesz obliczyć","k - kwadrat, p - prostokąt, t - trujkat");
var pole, bokA,bokB;
if (x == 'k'){
      bok = prompt('podaj dlugosc boku');
      pole = k*k;
      k.innerHTML = 'pole kwadratu wynosi: ' + pole + 'cm<sup>2</sup>';
}else if(x == 'p'){
   bok = prompt('podaj dlugosc boku A');
   bok = prompt('podaj dlugosc boku B');
   pole =bokA*bokB;
   k.innerHTML = 'pole prostokąt wynosi: ' + pole + 'cm<sup>2</sup>';
}else if(x == 't'){
   bok = prompt('podaj dlugosc podstawy');
   bok = prompt('podaj wysokosc');
   pole =0,5 * bokA * bokB;
   k.innerHTML = 'pole trujkat wynosi: ' + pole + 'cm<sup>2</sup>';
}else {
      komunikat.innerHTML = '<span style="color:red">bledne dane!</span>';
}
*/

/*napisz program ktory poprosi uzytkownika o podanie swojego wieku jesli bedzie mial wiecej niz 18 lat to przekieruje go na strone "wp.pl"
a przeciwnym razie na stron dla dzieci z bajkami
*/

var wiek = prompt('podaj wiek');
if (wiek>20)
wiek='dorosły'


switch (wiek) {
    case (dorosły):
    window.location = https://www.wp.pl/

       break;
    default:
// window.location = './3_zmienne.js';
 }
