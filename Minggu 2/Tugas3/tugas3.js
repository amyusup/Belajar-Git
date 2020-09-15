const cekTypeNumber = (params) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let cek = typeof params === "number"
        if (cek) {
          resolve(`${params} bertipe data number`);
        } else {
          reject(new Error(`${params} bukan bertipe data number`));
        }
      }, 3000);
    });
  };

const cekGanjilGenap = (params) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let cek = params % 2 == 0
        if (cek) {
          resolve(`${params} adalah genap`);
        } else {
          reject(new Error(`${params} adalah ganjil`));
        }
      }, 3000);
    });
  };


const check = (params, metode, callback) => {
  if (params == undefined || metode == undefined || callback == undefined) {
    console.log("Semua parameter harus diisi");
  } else {
    if (typeof params != "number" || typeof metode != "string" || typeof callback != "function") {
      console.log("Tipedata parameter tidak sesuai");
    } else {
      metode = metode.toLowerCase();
      if (metode == "thencatch") {
        let promise = callback(params);
        promise
          .then((hasil) => {
            console.log(hasil);
          })
          .catch((err) => {
            console.log(err.message);
          });
      } else if (metode == "trycatch") {
        (async () => {
          try {
            let promise = await callback(params);
            console.log(promise);
          } catch (err) {
            console.log(err.message);
          }
        })();
      } else {
        console.log("Metode yang dimasukkan tidak terdaftar");
      }
    }
  }
};

check(2, "TRYCATCH",cekGanjilGenap);
