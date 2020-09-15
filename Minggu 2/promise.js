let janjian = new Promise((resolve, reject) => {
  let succes = false;
  if (succes) {
    setTimeout(() => {
      resolve("berhasil");
    }, 1000);
  } else {
    reject(new Error("janji dibatalkan."));
  }
});

janjian
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error.message);
  });
