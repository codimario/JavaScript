function fakeBin(x){
  x = x.split('');
  for (var i = 0; i < x.length; i++) {

    if (x[i] == '0' || x[i] == '1' || x[i] == '2' || x[i] == '3' || x[i] == '4') x[i] = '0';
    else x[i] = '1';
  }
return x.join('');
}

/*
Fake Binary

Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
*/