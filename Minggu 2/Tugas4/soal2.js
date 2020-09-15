reverseWords = (params) => {
  var kalimat = params.split(" ");
  var hasil = "";
  for (let x = kalimat.length - 1; x >= 0; x--) {
    hasil = hasil + " " + kalimat[x];
  }
  console.log(hasil);
};

reverseWords("Saya belajar Javascript")

// let s = "Harry:Potter";
// let delimiter = ":";
// let a = s.search(":");

// console.log(s.substring(0, a));
