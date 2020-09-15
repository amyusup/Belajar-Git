seleksiNilai = (begin, finish, arr = []) => {
  if (begin == undefined || finish == undefined || arr.length == 0) {
    console.log("Semua parameter harus diisi");
  } else {
    if (
      typeof begin != "number" ||
      typeof finish != "number" ||
      typeof arr !== "object"
    ) {
      console.log("Tipedata parameter tidak sesuai");
    } else {
      if (arr.length <= 5) {
        console.log(arr);
        console.log("Data array harus lebih dari 5");
      } else {
        if (begin >= finish) {
          console.log("Nilai akhir harus lebih besar dari nilai awal");
        } else {
          filterArr = arr.filter((items) => items > begin && items < finish);
          sortArr = filterArr.sort((a, b) => a - b);
          console.log(sortArr);
        }
      }
    }
  }
};

seleksiNilai();
console.log("========================================");
seleksiNilai(0, 2, 10);
console.log("========================================");
seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8]);
