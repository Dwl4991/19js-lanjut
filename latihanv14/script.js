// tagged Template

// const nama = "Candra Dwl";
// const umur = 30;

// function coba(strings, ...values) {
//   //   let result = "";
//   //   strings.forEach((str, i) => {
//   //     result += `${str}${values[i] || ""} `;
//   //   });
//   //   return result;

//   // pakai reduce , bisa di bandingnkan dengan di atasnya
//   return strings.reduce((result, str, i) => `${result}${str}${values[i] || ""}`, "");
// }

// const str = coba`Hallo, nama saya ${nama}, saya ${umur} tahun`;
// console.log(str);

//kalau mau ada highlight
const nama = "Candra Dwl";
const umur = 30;

function highlight(strings, ...values) {
  return strings.reduce((result, str, i) => `${result}${str}<span class='hl'>${values[i] || ""}</span>`, "");
}

const str = highlight`Hallo, nama saya ${nama}, saya ${umur} tahun`;
document.body.innerHTML = str;
