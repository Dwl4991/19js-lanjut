// Destructuring Variable / Assigment

// Destructuring Array

// const perkenalan = ["Halo", "nama", "saya", "candra dwi"];
// const [salam, satu, dua, nama] = perkenalan;
// console.log(dua);

//swap items = isinya di ganti
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

//retutn value pada function = nangkap array

// function coba() {
//   return [1, 2];
// }

// const a = coba();
// console.log(a);

//Rest parameter = arraynya ada banyak
// const [a, ...values] = [1, 2, 3, 4, 5, 6];
// console.log(a);
// console.log(values);

//Destructuring Object
// const mhs = {
//   nama: "candra",
//   umur: 30,
// };

// const { nama, umur } = mhs;
// console.log(nama);

//Assigment tanpa deklarasi object
// ({ nama, umur } = {
//   nama: "candra",
//   umur: 30,
// });

// console.log(nama);

//assig ke variable baru
// const mhs = {
//   nama: "candra",
//   umur: 30,
// };

// const { nama: n, umur: u } = mhs;
// console.log(u);

//Memberikan Default Value
// const mhs = {
//   nama: "candra",
//   umur: 30,
// };

// const { nama, umur, email = "email@default" } = mhs;
// console.log(email);

//Memberukin Nilai Default + assign ke variable baru
// const mhs = {
//   nama: "candra",
//   umur: 30,
// };
// const { nama: n, umur: u, email: e = "email@default" } = mhs;
// console.log(e);

//Rest parameter
// const mhs = {
//   nama: "candra",
//   umur: 30,
//   email: "candra@gmail.com",
// };
// const { nama, ...values } = mhs;
// console.log(values);

//Mengambiul field pada object, setelah dikirim sebagai parameter untuk function
const mhs = {
  id: 123,
  nama: "candra",
  umur: 30,
  email: "candra@gmail.com",
};

function getIdMhs({ id }) {
  return id;
}

console.log(getIdMhs(mhs));
