const mtk = 80;
const bahasaIndonesia = 80;
const bahasaInggris = 80;
const ipa = 80;
let grade = "";

//rata-rata
if (
  mtk != undefined && 
  bahasaIndonesia != undefined &&
  bahasaInggris != undefined &&
  ipa != undefined
) {
  let hasil = (mtk + bahasaIndonesia + bahasaInggris + ipa) / 4;
  console.log(`Rata-rata = ${hasil}`);

  //grade
  if (hasil >= 90 && hasil <= 100) {
    grade = "A";
  } else if (hasil >= 80 && hasil <= 89) {
    grade = "B";
  } else if (hasil >= 70 && hasil <= 79) {
    grade = "C";
  } else if (hasil >= 80 && hasil <= 69) {
    grade = "D";
  } else if (hasil >= 0 && hasil <= 59) {
    grade = "E";
  } else {
    grade = "Angka yang dimasukkan tidak benar";
  }
  console.log(`Grade = ${grade}`);
} else {
  console.log("Semua data harus diisi!");
}
