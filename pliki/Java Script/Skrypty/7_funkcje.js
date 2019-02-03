/*function witaj(imie){
  document.write('witaj' + imie);
}


let imie = 'Janek';
witaj(imie);


function poleProstokata(a, b){
let pole = a * b;
return pole;

}

let bokA = prompt('podaj bok a');
let bokB = prompt('podaj bok b');
document.write('<br>Bok a: ' + bokA + '<br>Bok b: ' + bokB + '<br>Pole prostokata wynosi: ' + poleProstokata(bokA, bokB) + 'cm<sup>2</sup><br>');

// funkcja zwracajaca dwie warotsci

function poleObjetosc(szerokosc,dlugosc,wysokosc){

    let pole = szerokosc *  dlugosc;
    let objetosc = pole * wysokosc;
    let wynik = [pole, objetosc];
    return wynik;

}

    let pole = poleObjetosc(2, 3, 4)[0];
    let objetosc = poleObjetosc(2, 3, 4)[1];

    document.write('Pole wynosi: ' + pole + 'cm<sup>2</sup><hr>');
    document.write('objetosc wynosi: ' + objetosc + 'cm<sup>3</sup><hr>');
*/

// utworz funkcje obliczajaca pole i obwod kola promien podaje uzytkownik z klawiatury w polu tekstowym przycisk wywoluje funkjce i wyswietla wynik w bloku na stronie w formacie:
//pole kola:....
//obwod kola......
//wynik pola i obwodu ma byc wyswietlony w kolorze czerwoym


let pi = Math.PI;
let r = prompt('podaj promien kola');
function poleObw(){
  let pole = r * r * pi;
  let obw = 2 * pi * r;
  let wynik = [obw,pole];
  return wynik;
}

let pole = poleObw(2, 3, 4)[0];
let obw = poleObw(2, 3, 4)[1];

document.write('<hr> Pole wynosi: '+ '<span style="color: pink">' + pole + 'cm<sup>2</sup></span>' + '<br>');
document.write('<hr> Obwód wynosi: '+ '<span style="color: blue">' + obw + 'cm</span>' + '<br>');
