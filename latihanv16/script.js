//Destructuring

// function penjumlahanPerkalian(a, b) {
//   return [a + b, a * b];
// }

// const jumlah = penjumlahanPerkalian(2, 3)[0];
// const kali = penjumlahanPerkalian(2, 3)[1];

// const [jumlah, kali] = penjumlahanPerkalian(2, 3);
// console.log(jumlah);
// console.log(kali);
// function kalkulasi(a, b) {
//   return [a + b, a - b, a * b, a / b];
// }

// const [tambah, kurang, kali, bagi] = kalkulasi(2, 3);
// console.log(bagi);

// function kalkulasi(a, b) {
//   return {
//     tambah: a + b,
//     kurang: a - b,
//     kali: a * b,
//     bagi: a / b,
//   };
// }

// const { tambah, bagi, kurang, kali } = kalkulasi(2, 3);
// console.log(bagi);

//Destructuring function arguments
const mhs1 = {
  nama: "candra",
  umur: 33,
  email: "candra@gmail",
};
//di pecah di parameter
// function cetakMhs(nama, umur) {
//   return `Hallo, nama saya ${nama} ,dan saya berumur  ${umur} tahun `;
// }
// console.log(cetakMhs(mhs1.nama, mhs1.umur));
//dipecah di object
function cetakMhs(mhs) {
  return `Hallo, nama saya ${mhs.nama} ,dan saya berumur  ${mhs.umur} tahun `;
}
console.log(cetakMhs(mhs1));
