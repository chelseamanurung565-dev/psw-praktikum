console.log("Halo, praktikum PSW Chelsea berjalan!");

const teks = "2";
console.log(teks + 1);
console.log(Number(teks) + 1);
 
const teksKosong = "3";
console.log(Number(teksKosong)); // String kosong "" jika dikonversi ke Number akan jadi 0
console.log(Number.isFinite(Number(teksKosong)));

const jumlah = Number("1,5");
if (!Number.isInteger(jumlah) || jumlah < 1 || jumlah > 5) {
 console.log("Jumlah tidak valid");
} else { console.log(jumlah * 10000); }

const judul = [];
for (const item of judul) console.log(item);