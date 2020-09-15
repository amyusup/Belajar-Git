divideAndSort = (params) => {
    params = params.toString()
    var batas = params.split("0");
    
    var hasilBatas = ""
    for(let i = 0; i < batas.length; i++) {
        var splitBatas = batas[i].split("")
        var sortBatas = splitBatas.sort()
         hasilBatas = hasilBatas + sortBatas.join("")
    }
    console.log(hasilBatas)
  
};
  
  divideAndSort(5956560159466056)