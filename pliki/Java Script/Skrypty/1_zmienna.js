//var let

/*      zmienna = 7;

zmienna - nazwa zmiennej

= operator przypisania
7  - wartość zmiennej

*/






var imie = "Janusz";
var nazwisko = "Nowak";
nazwisko = 'Nowak';
document.write("Twoje imię:");


var wiek=12;
//+ oznacza konkatenacja - połączenie stringów(sznurek)
document.write("<br>Twój wiek: " + wiek);

console.log(wiek);

var x, y;
x=120;
y=17;

var suma = x+y;
//document.write("<br> suma wynosi " + (x + y));
document.write("<br> suma wynosi " + suma);

//alert(suma);

x = 20;
y = 2;

var suma = x + y; //22
var różnica = x - y; //18
x= 19;
y=2;
var iloraz = x / y; // 9,5
var iloczyn = x * y; // 38

//modulo - reszta z dzielenia

var modulo = x % y;
console.log("wartosc" + modulo);

console.log("suma:" + suma +",różnica" + różnica + ",iloraz" + iloraz + ",iloczyn" + iloczyn + ",modulo" + modulo);

console.log("wartosc" + różnica);
console.log("wartosc" + iloraz);
console.log("wartosc" + iloczyn);

var x, y;
x=10;
y=2;

// typy danych
var a = 10, b = "10a";

//window.alert(a+b);
typeof(a)

console.log(typeof(a)); //number
console.log(typeof(b)); //string
var prawda = true;
console.log(typeof(prawda)); //boolean
var nic = null;
console.log(typeof(nic)); //object
var pusta;
console.log(typeof(pusta)); //undefined


console.log(a + (a % 3) - 10); //1


var dziesietny = 11; // liczba w systemie dziesietnym, decymalnym
var oktalny =010; // ósemkowy,oktalny

/*
010 => 8
0 - system oktalny
10 => 1 * 8^1 + 0 * 8^0 = 1*8 + 0*1 = 8+0=8
*/
var szesnastkowy =0x10 // szesnastkowy,hexadecymalny
/*
0x10=> 16
0x - system szesnastkowy
10 => 1*16^1 + 0 * 16^0 = 1*16 + 0*1= 16+0=16
*/
console.log(dziesietny);
console.log(oktalny);

var liczba1 = prompt("podaj pierwsza liczbe");
console.log("liczba podana pierwsza z klawiatury: " + liczba1);

var liczba2 = prompt("podaj drugą liczbe");
console.log("liczba podana druga z klawiatury: " + liczba2);



// typy zmiennych
console.log(typeof(liczba1));
console.log(typeof(liczba2));


// zamiana zmienych na typ liczbowych

liczba1= parseInt(liczba1);
liczba2= parseInt(liczba2);



suma = liczba1 + liczba2;
console.log("suma wynosi: "+ suma);


/*
      suma dwóch liczb zmiennoprzecinkowych
      ParseFloat
      wyświetl sume dwóch liczb w foramcie: ".... + .... = ...."
      np: 3,5 + 4 = 7,5
*/


var liczba3 = prompt("podaj trzecią liczbe");
console.log("liczba podana trzecia z klawiatury: " + liczba3);



var liczba4 = prompt("podaj czwarta liczbe");
console.log("liczba podana czwarta z klawiatury: " + liczba4);

// typy zmiennych
console.log(typeof(liczba3));
console.log(typeof(liczba4));

liczba3= parseFloat(liczba3);
liczba4= parseFloat(liczba4);



suma = liczba3 + liczba4;
console.log("suma wynosi: " + liczba3 + "+" + liczba4 + "=" + suma);





//camel case
var liczbaPierwsza = parseFloat(prompt("podaj pierwszą liczbe", "np.3.5"));
var liczbaDruga = parseFloat(prompt("podaj drugą liczbe", "np.3.7"));
suma = liczbaPierwsza + liczbaDruga;
document.write(liczbaPierwsza + "+" + liczbaDruga + "=" + suma);


/* zadanie domowe

napisz program ,który obliczy pole protokąta ( dane podaje użytkownik z klawiatury,liczby zmiennoprzecinkowe)
Wynik wyświetl na ekranie w formacie: BOKa"...., BOKb:...., Pole wynosi:....cm^2" (w indeksie górnym (sup))

zad2 i 3
w podobny sposób oblicz pole trójkąta i pole kola



*/
