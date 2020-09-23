divideAndSort = (params) => {
  if (params == undefined) {
    console.log("Parameter harus diisi");
  } else {
    if (typeof params != "number") {
      console.log("Parameter harus bertipe number");
    }else if (params.toString().length > 16){
        console.log("Parameter tidak boleh lebih dari 16");
    } else {
      params = params + "0";
      var hasilBatas = "";
      var a = "";
      var hasilArray = [];
      for (let i = 0; i < params.length; i++) {
        if (params[i] === "0") {
          hasilArray.push(hasilBatas);
          hasilBatas = "";
        } else {
          hasilBatas = hasilBatas + params[i];
        }
      }

      var hasilAkhir = "";
      for (let j = 0; j < hasilArray.length; j++) {
        hasilAkhir = hasilAkhir + Array.from(hasilArray[j]).sort();
      }

      hasilAkhir = hasilAkhir.replace(/,/g, "");
      console.log(hasilAkhir);
    }
  }
};

divideAndSort();
divideAndSort("salah");
divideAndSort(595656015946606599);
