switch (x){
   case 'k':
   bok = prompt('podaj dlugosc boku');
   pole = k*k;
   k.innerHTML = 'pole kwadratu wynosi: ' + pole + 'cm<sup>2</sup>';
      break;
      case 'p':
      bok = prompt('podaj dlugosc boku A');
      bok = prompt('podaj dlugosc boku B');
      pole =bokA*bokB;
      k.innerHTML = 'pole prostokąt wynosi: ' + pole + 'cm<sup>2</sup>';
         break;
         case 't':
         bok = prompt('podaj dlugosc podstawy');
         bok = prompt('podaj wysokosc');
         pole =0,5 * bokA * bokB;
         k.innerHTML = 'pole trujkat wynosi: ' + pole + 'cm<sup>2</sup>';
            break;
         default:
         k.innerHTML = '<span style="color:red>bledne dane</span>';
