for (var i=1; i <10; i++){
   document.write(i + " ");
}

// inkrementacja i++  i= i + 1


/*
inicjalizacja     var i=0
warunek           i <= 10
uaktualnianie i++

Napisz program ktory wyswietli liczby od 13 do 20 w petli for kazda liczba ma byc zapisanan w nowej lini

*/

for(var i=13;i<=20;i++){
   document.write(i+"<hr>");
}
document.write(i+"<hr>");

/*
wypisz liczby od 5 do 30 ktore sa podzielne przez 5
*/



// 1 sposob
for (i=5; i <=30; i += 5){
   document.write(i + " ");

}

// 2 sposób

for (i=5; i <=30; i++){
   if (i % 5 ==0)
   document.write(i + " ");
}

/* wypisz liczby parzyste od przedzialu <10, 50> malejoco
po kazdej liczbie zrob przecinek i spacje po ostatniej liczbie kropka
*/


for (i=50; i >=10; i--){
   if (i % 2 == 0)
   if (i == 10)
   document.write(i + '.');
      else {
   document.write(i + ',');
}}


/* ludź podaje dwie liczby  z klawiatury
jesli bedzie peirwsza wieksza lub rowna druga to wyswietl
 dane rosnaco podobnie jak w zadaniu ponizej
 jesli druga liczba bedzie wieksza to wyswietl dane malejoco
 podobnie jak w zadaniu powyzej
 */


document.write('daj liczbe');
var L1= parseFloat(prompt('liczba1'));
var L2=parseFloat(prompt('liczba2'));

if (l2=> l1){
      for (i =L1; i <=L2; i++){
         if (i == L2)
         document.write(i + '.')
      else
      document.write(i + ',')
   }
}else{

      for(i = L1; i >=L2; i--){

         if (i==L2)
         document.write(i + '.')
else{
               document.write(i + ',')

}}



/*uzytkownik podaje numer z klawiatury 3 liczy zmiennoprzecinkowe
wyswietl na ekranie sume tych liczb i podaj czy suma jest parzysta
*/
}

var suma = 0;
var y;

for (i = 1; i <=3; i++){
   y = parseFloat(prompt("podaj wartosc liczby nr " + i + ":"));
   suma += y;
}

document.write('suma wynosi: ' + suma);


/*

narysuj choinke czytaj drzewo

*
**
***
****

ludz podaje maxymalny poziom choinki i jaka wartosc ma sie wsywietlac
*/

var star_symbol ="*";
var size = 900
;
y = parseFloat(prompt("choinka " + i + ":"));
y = parseFloat(prompt("z ilu znakow " + i + ":"));



var i,a;

for (i=10000;i<=60000;i++)
{
    for (a=1;a<=i;a++)
    {
    document.write("heh");
    }
    document.write("<br>");
}
document.write("<br>");
