palindrom = (kata) => {
    kata = kata.toLowerCase();
  var hasil = "";
  for (let x = kata.length - 1; x >= 0; x--) {
    hasil = hasil + kata[x];
  }

  if (hasil === kata) {
    console.log("PALINDROM");
  } else {
    console.log("BUKAN PALINDROM");
  }
};

palindrom("Malam")
