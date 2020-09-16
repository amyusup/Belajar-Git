divideAndSort = (params) => {
  params = params.toString();
  params = params + "0";
  var hasilBatas = "";
  var hasilArray = [];
  for (let i = 0; i < params.length; i++) {
    if (params[i] === "0") {
      hasilArray.push(hasilBatas);

      hasilBatas = "";
    } else {
      hasilBatas = hasilBatas + params[i];
    }
  }

  console.log(hasilArray);
  var hasilAkhir = "";

  hasilArray.map((item) => {
    hasilAkhir = hasilAkhir + "" + Array.from(item).sort();
  });
  console.log(hasilAkhir.replace(/,/gi, ""));
};

divideAndSort(5956560159466056);
