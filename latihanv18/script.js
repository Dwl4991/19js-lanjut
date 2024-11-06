//Spread Operator
//memecah iteables menjadi single element

// const mhs = ["candra", "dian", "erik"];
// //menggabungkan 2 array
// const dosen = ["dido", "doni", "dessy"];
// const orang = [...mhs, ...dosen];
// console.log(orang);

//Mengcopy array
// const mhs = ["candra", "dian", "erik"];
// const mhs1 = [...mhs];
// mhs1[0] = "mas ganteng";
// console.log(mhs);

//tes langsung di html
// const liMhs = document.querySelectorAll("li");
// console.log(mhs);

// const mhs = liMhs.map(m => )

//utuk besarin per huruf
const nama = document.querySelector(".nama");
const huruf = [...nama.textContent].map((h) => `<span>${h}</span>`).join("");
nama.innerHTML = huruf;
