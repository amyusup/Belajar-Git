showGreetings = (greeting) => {
  console.log(greeting);
};

let janjian = (showGreetings) =>
  new Promise((resolve, reject) => {
    let succes = true;
    if (succes) {
      resolve("berhasil");
      showGreetings("Selamat siang");
    } else {
      reject(new Error("janji dibatalkan."));
    }
  });

janjian(showGreetings)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error.message);
  });
