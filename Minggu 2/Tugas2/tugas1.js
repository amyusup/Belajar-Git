builtInFunction = (params, builtIn) => {
  if (params == undefined || builtIn == undefined) {
    console.log("Parameter harus diisi");
  } else {
    if (typeof params != "string" || typeof builtIn != "string") {
      console.log("Parameter harus bertipe string");
    } else {
      builtIn = builtIn.toLowerCase();
      var temp = "";
      var pengertian = "";
      //1
      if (builtIn == "charat") {
        console.log(
          " charAt () -> adalah metode yang mengembalikan karakter dari indeks yang ditentukan."
        );
        console.log(`Dengan kata : ${params}`);
        //a
        temp = params.charAt(1);
        console.log(`Setelah penggunaan CharAt index ke 1 : ${temp}`);
        // 2
      } else if (builtIn == "concat") {
        console.log(
          " concat () -> adalah metode yang menambahkan dua atau lebih string dan mengembalikan satu string baru."
        );
        console.log(`Dengan kata : ${params} & kata : ${builtIn}`);
        // saya belajar javascriptconcat
        temp = params.concat(builtIn);
        console.log(`Setelah penggunaan Concat  : ${temp}`);
        // 3
      } else if (builtIn == "length") {
        console.log(
          " length -> berfungsi untuk mengembalikan jumlah karakter dalam string."
        );
        console.log(`Dengan kata : ${params}`);
        // length = 23
        temp = params.length;
        console.log(`Setelah penggunaan length  : ${temp}`);
        // 4
      } else if (builtIn == "replace") {
        console.log(
          " replace() -> berfungsi untuk menemukan kecocokan antara ekspresi, dan mengganti string yang cocok dengan string baru."
        );
        console.log(`Dengan kata : ${params}`);
        //saya belajar php
        temp = params.replace("javascript", "php");
        console.log(`Setelah penggunaan Replace  : ${temp}`);
        // 5
      } else if (builtIn == "search") {
        console.log(
          " search() -> Metode ini mengeksekusi pencarian kecocokan antara ekspresi dan String ini."
        );
        console.log(`Dengan kata : ${params}`);
        // Jika kata kunci tidak ditemukan return default javascript = -1
        if (params.search("javascript") == -1) {
          temp = "Tidak terdapat kata javascript";
        } else {
          temp = "Terdapat kata javascript";
        }
        console.log(`${temp}`);
        // 6
      } else if (builtIn == "split") {
        console.log(
          "spit () -> Metode ini membagi objek String menjadi array string dengan memisahkan string menjadi beberapa substring."
        );
        console.log(`Dengan kata : ${params}`);
        temp = params.split(" ");
        console.log(`Setelah penggunaan split  : ${temp}`);
        // 7
      } else if (builtIn == "substr") {
        console.log(
          "substr () -> Metode ini mengembalikan karakter dalam string yang dimulai di lokasi yang ditentukan melalui jumlah karakter yang ditentukan."
        );
        console.log(`Dengan kata : ${params}`);
        // dimulai dari index 0, sepanjang 4 karakter
        temp = params.substr(0, 4);
        console.log(`Setelah penggunaan substr(0,4)  : ${temp}`);
        // 8
      } else if (builtIn == "join") {
        console.log(
          "join () -> menggabungkan semua elemen array menjadi string."
        );
        params = params.split(" ");
        console.log(`Setelah jadi array : ${params}`);
        temp = params.join(" ");
        console.log(`Setelah penggunaan join  : ${temp}`);
        // 9
      } else if (builtIn == "tolowercase") {
        console.log(
          "toLowerCase () -> Metode ini mengembalikan nilai string panggilan yang diubah menjadi huruf kecil."
        );
        console.log(`Sebelum di uppercase: ${params}`);
        temp = params.toUpperCase();
        console.log(`Setelah penggunaan uppercase  : ${temp}`);
      } else if (builtIn == "touppercase") {
        console.log(
          "toUpperCase () -> Metode ini mengembalikan nilai string panggilan yang dikonversi menjadi huruf besar."
        );
        console.log(`Sebelum di lowercase: ${params}`);
        temp = params.toLowerCase();
        console.log(`Setelah penggunaan lowercase  : ${temp}`);
      } else {
        console.log("Built In tidak tersedia di library program");
        console.log(`Nama builIn : ${builtIn}`);
      }
    }
  }
};

builtInFunction();
console.log("========================================");
builtInFunction(1, true);
console.log("========================================");
builtInFunction("Saya belajar javascript", "salah");
console.log("========================================");
builtInFunction("Saya belajar javascript", "CHARAT");
console.log("========================================");
builtInFunction("Saya belajar javascript", "CONCAT");
console.log("========================================");
builtInFunction("Saya belajar javascript", "LENGTH");
console.log("========================================");
builtInFunction("Saya belajar javascript", "REPLACE");
console.log("========================================");
builtInFunction("Saya belajar javascript", "SEARCH");
console.log("========================================");
builtInFunction("Saya belajar javascript", "SPLIT");
console.log("========================================");
builtInFunction("Saya belajar javascript", "SUBSTR");
console.log("========================================");
builtInFunction("Saya belajar javascript", "JOIN");
console.log("========================================");
builtInFunction("Saya belajar javascript", "TOLOWERCASE");
console.log("========================================");
builtInFunction("Saya belajar javascript", "TOUPPERCASE");
