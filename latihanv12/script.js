// tamplate literal

// const nama = "candra";
// const umur = 33;
// console.log(`halo nama saya ${nama} dan umur saya ${umur}`);

//embended expresion
// console.log(`${1 + 2}`);
// console.log(`${alert("hai")}`);
// const x = 11;
// console.log(`${x % 2 == 0 ? "genap" : "ganjil"}`);

//HTML Fragment
// const mhs = {
//   nama: "Candra",
//   umur: 33,
//   nrp: "123120049",
//   email: "candra@gmail.com",
// };

// const el = `<div class="mhs">
// <h2> ${mhs.nama} </h2>
// </div>`;

// console.log(el);
// document.body.innerHTML = el;

//video13
// loop[ing]
const mhs = [
  {
    nama: "candra dwi waluyo",
    email: "candra.dwiwaluyo@gmail.com",
  },
  {
    nama: "dessy",
    email: "dessysuk@gmail.com",
  },
  {
    nama: "keenan",
    email: "kenanano@gmail.com",
  },
];

const el = `<div class="mhs">
<h2> ${mhs
  .map(
    (m) => ` <ul>
  <li>${m.nama}</li>
  <li>${m.email}</li>
  </ul>`
  )
  .join("")} </h2>
</div>`;

document.body.innerHTML = el;
