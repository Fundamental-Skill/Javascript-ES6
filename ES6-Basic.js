// Arrow function luas dan keliling lingkaran
console.log("----ARROW FUNCTION----");
// LUAS DAN KELLUNG LINGKARAN
// ------Luas lingkaran
let luasliankaran = (r) => {
  return 3.14 * r ** 2;
};

// ------Keliling lingkaran
let kelilinglingkaran = (d) => {
  return 3.14 * d;
};

console.log("Luas lingkaran: " + luasliankaran(8) + " cm");
console.log("Keliling lingkaran: " + kelilinglingkaran(20) + " cm");

// ARROW FUNCTION
console.log("----ARROW FUNCTION----");
let introduce = (...intro) => {
  const [name, age, gender, job] = intro;
  console.log(intro);
  kata = `Pak ${name} adalah seorang ${job} ${gender} yang berusia ${age}`;
  return kata;
};

//kode di bawah ini jangan dirubah atau dihapus
const perkenalan = introduce("John", "30", "Laki-Laki", "penulis");
console.log(perkenalan); // Menampilkan "Pak John adalah seorang penulis yang berusia 30 tahun"

const newFunction = (...name) => {
  const [firstName, lastName] = name;
  return `${firstName} ${lastName}`;
};

// LITERAL
console.log("----LITERAL----");
const newFungsi = (literal = (firstName, lastName) => {
  return {
    firstName,
    lastName,
    fullName: function () {
      console.log(firstName + " " + lastName);
    },
  };
});

// kode di bawah ini jangan diubah atau dihapus sama sekali
console.log(newFungsi("John", "Doe").firstName);
console.log(newFungsi("Richard", "Roe").lastName);
newFungsi("William", "Imoh").fullName();

// DESTRUCTURING
console.log("----DESTRUCTURING----");
let phone = {
  name: "Galaxy Note 20",
  brand: "Samsung",
  year: 2020,
  colors: ["Mystic Bronze", "Mystic White", "Mystic Black"],
};
// kode diatas ini jangan di rubah atau di hapus sama sekali

/* Tulis kode jawabannya di sini */
let {
  brand: phoneBrand,
  name: phoneName,
  year: year,
  colors: [colorBronze, colorWhite, colorBlack],
} = phone;

// kode di bawah ini jangan dirubah atau dihapus
console.log(phoneBrand, phoneName, year, colorBlack, colorBronze);

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
