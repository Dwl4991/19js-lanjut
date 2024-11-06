// Callback
//synchronus callback
// function halo(nama) {
//   alert(`Hallo, ${nama}`);
// }

// function tampilkanPesan(callback) {
//   const nama = prompt("masukkan Nama : ");
//   callback(nama);
// }

// tampilkanPesan((nama) => alert(`Halo, ${nama}`));

// const mhs = [
//   {
//     nama: "candra",
//     nrp: "45638476395874",
//     email: "candra@gmail.com",
//     jurusan: "teknik informatika",
//     idDosenWali: 1,
//   },
//   {
//     nama: "dessy",
//     nrp: "45638476395874",
//     email: "dessy@gmail.com",
//     jurusan: "teknik biologi",
//     idDosenWali: 2,
//   },
//   {
//     nama: "kenan",
//     nrp: "45638476395874",
//     email: "kenan@gmail.com",
//     jurusan: "teknik informatika",
//     idDosenWali: 3,
//   },
//   {
//     nama: "dian",
//     nrp: "45638476395874",
//     email: "dian@gmail.com",
//     jurusan: "teknik biologi",
//     idDosenWali: 4,
//   },
// ];
// console.log("mulai");
// mhs.forEach((m) => {
//   for (let i = 0; i < 10000000; i++) {
//     let date = new Date();
//   }
//   console.log(m.nama);
// });

// console.log("selesai");

//Asynchronous Callback
// function getDataMahasiswa(url, succes, error) {
//   let xhr = new XMLHttpRequest();

//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4) {
//       if (xhr.status === 200) {
//         succes(xhr.response);
//       } else if (xhr.status === 404) {
//         error();
//       }
//     }
//   };
//   xhr.open(`get`, url);
//   xhr.send();
// }

// console.log("mulai");
// getDataMahasiswa(
//   "mahasiswa.json",
//   (results) => {
//     const mhs = JSON.parse(results);
//     mhs.forEach((m) => console.log(m.nama));
//   },
//   () => {}
// );
// console.log("selesai");

//Jquery
console.log("mulai");
$.ajax({
  url: "mahasiswa.json",
  success: (mhs) => {
    mhs.forEach((m) => console.log(m.nama));
  },
  error: (e) => {
    console.log(e.responseText);
  },
});
console.log("selesai");
