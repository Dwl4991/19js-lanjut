// promise
//Object yang mere[resentasikan keberhasilan / kegagalan sebuah event yang asychronous di masa yang akan datang
//janji (terpenuhi/ ingkar)
//states ( fulfiied / rejected / p[ending)\
// callback (resolve / reject / finally)
// aksi (then / catch)

// contoh 1
// let ditepati = false;
// const janji1 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     resolve("janji telah ditepati");
//   } else {
//     reject("ingkar janji");
//   }
// });

// janji1.then((response) => console.log("OK! :" + response)).catch((response) => console.log("NOT OK! : " + response));

//contoh2
// let ditepati = true;
// const janji2 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     setTimeout(() => {
//       resolve("Ditepati setelah beberapa waktu!");
//     }, 2000);
//   } else {
//     setTimeout(() => {
//       resolve("Tidak Ditepati setelah beberapa waktu!");
//     }, 2000);
//   }
// });
// console.log("mulai");
// console.log(janji2.then(() => console.log(janji2)));
// console.log("selesai");

//promise.all()
const film = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        judul: "avangers",
        sutradara: "candra",
        pemeran: "novi",
      },
    ]);
  }, 1000);
});

const cuaca = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        kota: "bandung",
        temp: 26,
        kondisi: "cerah berawan",
      },
    ]);
  }, 500);
});

// film.then((response) => console.log(response));
// cuaca.then((response) => console.log(response));

Promise.all([film, cuaca]).then((response) => console.log(response));
