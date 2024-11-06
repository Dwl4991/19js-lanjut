//cara membuat object pada js
//1. object literal
// problem : tidak efektif untuk object yang banyak
// let mahasiswa = {
//   nama: "Candra",
//   energy: 10,
//   makan: function (porsi) {
//     this.energy = this.energy + porsi;
//     console.log(`Halo ${this.nama}, selamat makan`);
//   },
// };

//2. function declaration
// function Mahasiswa(nama, energi) {
//   let mahasiswa = {};
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;

//   mahasiswa.makan = function (porsi) {
//     this.energi += porsi;
//     console.log(`Halo ${this.nama}, selamat makan!`);
//   };
//   mahasiswa.main = function (jam) {
//     this.energi -= jam;
//     console.log(`Halo ${this.nama}, selamat main!`);
//   };
//   return mahasiswa;
// }
// let candra = Mahasiswa("Candra", 10);
// let dodi = Mahasiswa("Dodi,30");

//3. Constructor Function
//kehword new
function Mahasiswa(nama, energi) {
  this.nama = nama;
  this.energi = energi;

  this.makan = function (porsi) {
    this.energi += porsi;
    console.log(`Halo ${this.nama}, selamat makan!`);
  };
  this.main = function (jam) {
    this.energi -= jam;
    console.log(`Halo ${this.nama}, selamat main!`);
  };
  this.tidur = function (jam) {
    this.energi += jam;
    console.log(`hai ${this.nama}, selamat tidur !`);
  };
}

let candra = new Mahasiswa("candra", 20);
