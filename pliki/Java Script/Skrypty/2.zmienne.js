/*var k = document.getElementById('komunikat');
/*k.innerHTML='<span style="color red"> Janusz</span>';*/
/*k.textContent ='<span style="color:red"> Janusz</span>'*/
/*to tez dziala ale sie nie wyswietla tylko teskt*/

/*użytkownik podaje z klawiatury swoją narodowość
jeśli poda "polska" to wyświetli sie komunikat na stronie w bloku o tresci "polska najlepszy kraj"
niemcy - "niemcy-zal.pl"
"inny kraj" - "moze warto sprobowac"
*/


var komunikat = prompt("podaj swoją narodowość");

if (komunikat =='polska' || komunikat == 'Polska')
komunikat.textContent = 'polska - najlepszy kraj';
else if(komunikat == 'niemcy' || komunikat == 'Niemcy' || komunikat == 'NIEMCY'){
   komunikat.textContent = 'Niemcy';
   alert('Niemcy');
}

else

komunikat.textContent = 'Moze warto sprobowac';


//
/* Jezeli uzytkownik poda z klawiatury prawidlowa dlugosc bloku
to wyswietli sie mu: "Pole wynosi:.....cm2" oraz "obwod":.....cm"
Jezeli dane beda bledne to wyswietli sie komunikat o tresci:
"bledne dane!" w kolorze czerwonym
utworz nowy blok strony do wyswietlania komunikatu
*/


var komunikatKwadrat = document.getElementById('komunikatKwadrat')
var bok = parseFloat(prompt("podaj dlugosc boku"));
if (bok > 0){
   let pole = bok * bok;
   let obwod = 4 * bok;
   let text = 'Pole wynosi: ' + pole + 'cm<sup>2</sup>';
   text += 'obwod ' + obwod + 'cm';
   komunikatKwadrat.innerHTML = text;
}else {komunikatKwadrat.innerHTML = '<span style="color:red">bledne dane!</span>';
}
