const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

//mencari angka >=3
// for
// const newAngka = [];
// for (let i = 0; i < angka.length; i++) {
//   if (angka[i] >= 3) {
//     newAngka.push(angka[i]);
//   }
// }
// console.log(newAngka);

//filter
// const newAngka = angka.filter((a) => a >= 3);
// console.log(newAngka);

//map
//kalikan semua angka dengan dua
// const newAngka = angka.map((a) => a * 2);
// console.log(newAngka);

//reduce => melakukan sesuatu untuk seluruh element array
// jumlahkan seluruh element array
// const newAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue);
// console.log(newAngka);

//Methode Chaining
//cari angka > 5 ,hasilnya di kali 3, jumlahkan
const hasil = angka
  .filter((a) => a > 5)
  .map((a) => a * 3)
  .reduce((acc, cur) => acc + cur);
console.log(hasil);
