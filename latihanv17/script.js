//for..of
// const mhs = ["candra", "desi", "dion"];

//pake for biasa
// for (let i = 0; i < mhs.length; i++) {
//   console.log(mhs[i]);
// }

//pake foreach
// mhs.forEach((m) => console.log(m));

// for (const m of mhs) {
//   console.log(m);
// }

//untuk string
// const nama = "candra";
// for (const n of nama) {
//   console.log(n);
// }

// const mhs = ["candra", "desi", "dion"];
// mhs.forEach((m, i) => {
//   console.log(`${m} adalah mahasiswa ke ${i + 1}`);
// });

//pake for of
// for (const [i, m] of mhs.entries()) {
//   console.log(`${m} adalah mahasiswa ke ${i + 1}`);
// }

//nodelist
const liNama = document.querySelectorAll(".nama");

// liNama.forEach((n) => console.log(n.textContent));
// for (n of liNama) {
//   console.log(n.innerHTML);
// }

//arguments
// function jumlahkanAngka() {
//   //   console.log(arguments);
//   let jumlah = 0;
//   for (a of arguments) {
//     jumlah += a;
//   }
//   return jumlah;
// }
// console.log(jumlahkanAngka(1, 2, 3, 4, 5, 6, 7));

// for..in
const mhs = {
  nama: "candra",
  umur: 33,
  email: "candra@gmail.com",
};

for (m in mhs) {
  console.log(mhs[m]);
}
