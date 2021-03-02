var num;

for (var i = 1; i <= 100; i++) {
  document.getElementById('stampa').innerHTML += "</br>" + i + ") " ;

  if (i % 3 == 0) {
   num = "Fizz";
   document.getElementById('stampa').innerHTML += num;
  }
  if (i % 5 == 0) {
   num = "Buzz";
   document.getElementById('stampa').innerHTML += num;
  }
  if (i % 3 != 0 && i % 5 != 0) {
    num = i;
    document.getElementById('stampa').innerHTML += num;
  }
}
