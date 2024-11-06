// // function expresion
// const tampilNama = function (nama) {
//   return `Halo, ${nama}`;
// };
// console.log(tampilNama("candra"));

// const tampilNama = (nama) => {
//   return `Halo, ${nama}`;
// };
// console.log("a");

// const tampilNama = (nama, waktu) => {
//   return `Halo, ${nama},${waktu}`;
// };
// console.log(tampilNama("candra", "malam"));

// const tampilNama = (nama) => {
//   return `Halo, ${nama}`;
// };
// console.log("a");

// let mahasiswa = ["candra", "dian", "dodi"];

// let jumlahHuruf = mahasiswa.map(function (nama) {
//   return nama.length;
// });
// console.log(jumlahHuruf);

//di ubah menjadi arrow function
// let jumlahHuruf = mahasiswa.map((nama) => nama.length);
// console.log(jumlahHuruf);

//mengmbalikan dalam bentuk object
// let jumlahHuruf = mahasiswa.map((nama) => ({ nama: nama, jumlahHuruf: nama.length }));
// console.table(jumlahHuruf);

//video 7 Constructor Function
// const Mahasiswa = function () {
//   this.nama = "Candra";
//   this.umur = "30";
//   this.sayHello = function () {
//     console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//   };
// };

// const candra = new Mahasiswa();

//arrow function
// const Mahasiswa = function () {
//   this.nama = "Candra";
//   this.umur = "30";
//   this.sayHello = () => {
//     console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//   };
// };

// const candra = new Mahasiswa();

//Object literal g bisa pake this untuk arrow functionnya

// const Mahasiswa = function () {
//   this.nama = "Candra";
//   this.umur = "30";
//   this.sayHello = function () {
//     console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//   };
//   setInterval(() => {
//     console.log(this.umur++);
//   }, 500);
// };

// const candra = new Mahasiswa();

// nambah style
const box = document.querySelector(".box");
box.addEventListener("click", function () {
  let satu = "size";
  let dua = "caption";

  if (this.classList.contains(satu)) {
    [satu, dua] = [dua, satu];
  }
  this.classList.toggle(satu);
  setTimeout(() => {
    this.classList.toggle(dua);
  }, 600);
});
