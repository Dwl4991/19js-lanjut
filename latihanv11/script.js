//ambil semua elemen video
const videos = Array.from(document.querySelectorAll("[data-duration"));

//pilih hanya yang 'Teknik'
let namaVideo = videos
  .filter((video) => video.textContent.includes("Teknik"))
  //ambil durasi masing masing video
  .map((item) => item.dataset.duration)
  //ubah durasi menjadi float, ubah menit menjadi detik
  .map((waktu) => {
    //10:30 -> [10,30] split
    const parts = waktu.split(`:`).map((part) => parseFloat(part));
    return parts[0] * 60 + parts[1];
  })
  // jumlahkan semua detik
  .reduce((total, detik) => total + detik);
// ubah formatnya menjadi jam menit detik
const jam = Math.floor(namaVideo / 3600);
namaVideo = namaVideo - jam * 3600;
const menit = Math.floor(namaVideo / 60);
const detik = namaVideo - menit * 60;
//simpan di DOM
const pDurasi = document.querySelector(".total-durasi");
pDurasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik.`;

const jmlVideo = videos.filter((video) => video.textContent.includes("Teknik")).length;
const pJmlVideo = document.querySelector(".jumlah-video");
pJmlVideo.textContent = `${jmlVideo} Video`;
console.log(jmlVideo);
