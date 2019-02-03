/*const pi = Math.PI; //3.14141592653589793
let zaokrąglij = Math.round(5.2); //5
let zaokrąglij = Math.round(5.5; //6
let potega = Math.pow(2,4);
let pierwiastek = Math.sqrt(16);
let bezwzgledna = Math.abs(4.5);
let calkowita = Math.ceil(5.1); //6
let calkowita1 = Math.floor(5.999); //5
let minimalna = Math.min(1,2.4, -4, 5); //-4
let maksymalna = Math.max(1, 2.4, -4, 5); //5
let losuj = Math.random(); //0.173931492890

//wylosuj liczbe calkowita z przedzialu [2,10]


let max = 10;
let min = 2;
let wylosuj = Math.floor(Math.random() * (max - min + 1 )) + min;

console.log(wylosuj);


//napisac funkcje.cos na klawiaturze.on wpisuje liczby z klawiatury losujez przedzialu

var l1= prompt('podaj pierwsza liczbe z przedzialu');
var l2= prompt('podaj druga liczbe z przedzialu');
let los= Match.floor(Math.random()*(l2-l1+1))+l1;
*/
function losowanie(min,max){
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min > max){
    let pom = min;
    min = max;
    max = pom;
  }
   return Math.floor(Math.random() * (max - min + 1 )) + min;
}

let a = prompt('podaj liczbe minimalna');
let b = prompt('podaj liczbe maksymalna');



console.log(losowanie(a, b));


/*
wylosuj na ekranie tyle liczb z przedzialu ile poda uzytkownik z klawiatury ,wyswietl je w formacie;
liczba 1:.....
liczba 2:.....
liczba 3:.....



*/

document.write('minimalna: ' + a + '<br>');
document.write('maksymalna: ' + b + '<br>');

 let ile = prompt('ile wylosowac licz');
 for (var i = 0; i < ile; i++) {
let x = i + 1;
let wylosowana = losowanie (a,b);
document.write('liczba ' + x + ' : ' + wylosowana + '<br>');
}
