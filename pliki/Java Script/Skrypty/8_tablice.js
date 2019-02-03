//tworzenie tablicy za pomoca literału tablicy
var kolory = ['czerwony', 'zielony', 'żółty'];
console.log(kolory[0]);

//tworzenie tablicy za pomocą konstruktora Array

var samochody = new Array('BMW', 'Mercedes', 'Maluch', 'Pickup');
console.log('Ostatni samochód: ' + samochody[samochody.length - 1]);
samochody.push('ferrari');
console.log('ilość elementów w tablicy:' + samochody.length);
console.log('Ostatni samochód: ' + samochody[samochody.length - 1]);


//tablice wymiarowe


var tab = new Array(
      new Array('janek','franek','mirek'),
      new Array('miska','kopytko','korek'),
      new Array('opole','he;','wypić'),
);

console.log(tab[0]); //wyswietlenie jednej tablicy
console.log(tab[2][0]); // wyswietlenie jedmego elementu tablicy


// utworz tablice wielowymiarowa ktora bedzie zapwierala trzech pilkarzy klubu AC Milan. Krzysztof Piątek
// Imie:
//Nazwisko:
//Narodowsc


        var tab2 = new Array
          new Array('Krzysztof', 'Piatek', 'Polska');
          new Array('Pepe', 'Reina', 'Hiszpania');
          new Array('Lucas', 'Paqueta', 'Brazylia');

var imiona = ['Julka', 'Mirka', 'Anka', 'Janka'];
console.log(imiona);
var posortowane = imiona.sort();
console.log(posortowane);
var odwrotnosc = imiona.reverse();
console.log(odwrotnosc);

console.log(odwrotnosc.indexOf('Julia'));//2
console.log(odwrotnosc.indexOf ('Juliaaaa')); //-1

odwrotnosc.pop();
console.log(odwrotnosc);

odwrotnosc.push('Mirka');
console.log(odwrotnosc);

//tablica z liczbami

var liczby = [1,45,78,433,-34];
console.log(liczby);
var liczbySort = liczby.sort();
console.log(liczbySort);


liczby.sort(function(a, b){
    return (a - b);
}
);
console.log(liczby);

/*

utworz formularz z loginem(text) i haslem(password).
zapisz dane w tablicy.
uzytkownik podaje rowniez kolor (j.angielski) w jakim login i haslo
ma byc wyswietlony na erkanie w naglowlu h3
wyswietl w formacie:
Login..... Haslo...


*/
