let janjian = new Promise((resolve, reject) => {
  let succes = false;
  if (succes) {
    resolve("berhasil");
  } else {
    reject(new Error("janji dibatalkan."));
  }
});

// async function manggilJanjian() {
//   try {
//     let result = await janjian;
//     console.log(result);
//   } catch (error) {
//       console.log(error.message)
//   }
// }

// manggilJanjian();

//arrow functon

manggilJanjian = async => {
  try {
    let result = await janjian;
    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
};
memanggilJanjian();

// // self invoked function
// (async() =>{
//     try {
//         let result = await janjian;
//         console.log(result);
//       } catch (error) {
//           console.log(error.message)
//       }
// })()
