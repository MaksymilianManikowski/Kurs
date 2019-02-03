// pętla while

let i = 0;

while (i < 5) {
    document.write(i + ' ');
    i++;
}

while (i++ <10) {
  document.write(i + '');
}

/* uzytkownik podaje z klawiatury dwie wartosci,
petla while bedzie wykonywala sie tak dlugo dopoki x bedzie wieksze od lub rowne y

*/

let x = 0, y = 0;


while (x >=y) {
  x = Number(prompt('Podaj x'));
  y = Number(prompt('Podaj y'));

}

document.write('<br>x = ' + x + ', y = ' + y);

//petla do while

let wiek;

do {
  wiek = prompt('podaj swój wiek');
    if (wiek == 19) {
      document.write('<br>możesz grać w Cs');
    }
} while (wiek != 19);


/*
wykorzystaj petle for i do while .
podaj 5 liczb podzielnych przez 2 z klawiatury.
zapisz je do tablicy i wsywietl w konsoli tablice


*/



var liczby =[];

let a;

for ( i = 0; i <= 4; i++) {
  do {
    a = prompt('Podaj liczbe parzystą');
    a = parseInt(a);
  } while (a % 2 !=0);
  liczby[i] = a;
}
console.log(liczby);

/*
wyswietl na ekranie licby z tablicy z zadania powzyej

*/

for ( i = 0; i < liczby.length; i++) {
  document.write(liczby[i] + ' ');
}

/*
uzytkownik podaje kolory swe ulubione z kosnoli wyswietl je w formacie:
kolor1=...
kolor2=...
kolor3=...
*/


var kolory =[];
let kolor;

for ( i = 0; i < 3; i++) {
  let nr = i;
  nr = nr + 1;
  kolor = prompt('Podaj swuj ulubiony kolol nr' + nr);
  kolory[i] = kolor
}
console.log(kolory);

//console.log(kolory);

for (i = 0; i < kolory.length; i++) {
   nr = i + 1 ;
document.write('<br>kolor ' + nr + ' = ' + kolory[i] + '<br>');

}
//*********************************************************

/*napisz funkcvje ktora pobierze dane z input i wyswietli je w konsoli po naciscieniu przycisku jesli sa liczba
*/

document.write('<hr>');
document.write('<input type="text" id="liczba" value="">');
document.write('<button id="przycisk">wyslij</button>');

let elPrzycisk  =  document.getElementById('przycisk');
let elLiczba  =  document.getElementById('liczba');


elPrzycisk.onclick = function () {
  if (!isNaN(elLiczba.value)) {
    console.log(elLiczba.value);
  }

}

//***********************************************


var tab = ['Julia','Krystyna', 'Anna'];

for (i = 0; i < tab.length; i++) {
  document.write(tab[i]) + '<br>';
}

function p(a){
  document.write(a + '<br>');

}

tab.forEach(p);


function pokaz(wartosc,indeks){
  document.write(indeks + 1 + ' - element tablicy wynosi');
  document.write(wartosc + '<br>');
}
tab.forEach(pokaz);
