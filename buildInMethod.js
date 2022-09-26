// String.prototype.slice(a,b)
// digunakan untuk mengambil bagian dari string
// slice memiliki 2 buah parameter
// a/parameter pertama digunakan untuk posisi awal str akan di ambil
// b/paramter kedua digunakan untuk posisi akhir, input harus number atau undefined
// return adalah string baru atau tidak mutasi string awal

const str = "Hello Word!";
const result = str.slice(0, 2);
// console.log(result);

//Array.prototype.shift()
//method untuk membuang index pertama dalam sebuah array dan menggeser index yang lain ke kiri satu kali
// method ini tidak memiliki input parameter, jika array kosong maka akan me return undefined
// method ini memutasi array yang digunakan
const shiftedArray = str.split("");
const shiftResult = shiftedArray.shift();
// console.log(shiftResult);
// console.log(shiftedArray);

// Array.prototype.unshift(param)
// kebalikan dari method shift, shift array menambahkan argumen ke index awal pada array
// kemudian memindahkan index dari value array yang lain ke kanan sesuai panjang jumlah data yang akan dimasukkan
// method ini melakukan mutasi pada array yang digunakan
const unshiftedResult = shiftedArray.unshift(
  "a",
  "b",
  [1, 2, 3, 4],
  function sumNumber() {}
);
// console.log(unshiftedResult);
// console.log(shiftedArray);

// Array.prototype.indexOf(serachElement, startIndex)
// indexof digunakan untuk mencari index data pada array dari sebuah input yang kita masukkan
// searchElement adalah input pencarian yang akan dicocokkan jika dia berada dlam array
// jika ada maka akan mengembalikan index dari data yang ditemukan tersebut, jika tidak method akan mengembalikan undefined
// parameter startIndex dogunakan untuk pencarian dimulai dari index keberapa
// tidak memutasi string yang digunakan

const number = [1, 2, 3, 4, 2, 3, 2, 5];
// console.log(number.indexOf(2, 2));

// String.prototype.includes(searchElement, startPosition)
// digunakan untuk mencari apakah sebuah string memiliki string sesuai dengan arguments yang diberikan pada searchElement
// jika ya maka return true jika tidak maka return false
// method case-sensitive
// startPosition digunakan untuk memulai proses pencarian dari index ke berapa
// tidak memutasi string yang digunakan
const name = "Nur Cholis Majid";
// console.log(name.toLowerCase().includes("sm"));
