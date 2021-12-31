// SPREAD OPERATOR
console.log("----SPREAD OPERATOR----");
let warna = ["biru", "merah", "kuning", "hijau"];

let dataBukuTambahan = {
  penulis: "john doe",
  tahunTerbit: 2020,
};

let buku = {
  nama: "pemograman dasar",
  jumlahHalaman: 172,
  warnaSampul: ["hitam"],
};
// kode diatas ini jangan di rubah atau di hapus sama sekali

/* Tulis kode jawabannya di sini */

let newbuku = (buku = {
  nama: "pemograman dasar",
  jumlahHalaman: 172,
  warnaSampul: [...warna],
  ...dataBukuTambahan,
});
console.log(newbuku);
