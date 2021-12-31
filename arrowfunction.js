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
