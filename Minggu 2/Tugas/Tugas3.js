var printSegitiga = 5;
if (typeof printSegitiga != "number") {
  console.log("Data harus number");
} else {
  for (var i = printSegitiga; i >= 1; i--) {
    var cetak = "";
    for (var j = 1; j <= i; j++) {
      cetak = cetak + j;
    }
    console.log(cetak);
  }
}
