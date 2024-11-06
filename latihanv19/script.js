//rest Parameter

// function myFunc(a, ...myArgs) {
//   return myArgs;
// }

// console.log(myFunc(1, 2, 3, 4, 5));

//menjumlahkan semua isi

// function jumlahkan(...angka) {
//   let total = 0;
//   for (const a of angka) {
//     total += a;
//   }

//   return total;

//pakai reduce jg bisa , lebih pendek dadri yang di atas
//   return angka.reduce((a, b) => a + b);
// }
// console.log(jumlahkan(1, 2, 3, 4, 5));

// array destructuring
// const kelompok1 = ["caasdf", "asdf", "adwsfads", "sadfasdf", "sadfasd"];
// const [ketua, wakil, ...anggota] = kelompok1;
// console.log(ketua);

//object destructuring
// const team = {
//   pm: "candra",
//   frontEnd1: "Dwi",
//   frontEnd2: "keenan",
//   backEnd: "waluyo",
//   ux: "dessy",
//   devOps: "sukma",
// };

// const { pm, ...myTeam } = team;
// console.log(myTeam);

//filtering
function filterBy(type, ...values) {
  return values.filter((v) => typeof v === type);
}

console.log(filterBy("number", 1, 2, "candra", false, 10));
