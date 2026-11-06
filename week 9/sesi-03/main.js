import { hitungTotal } from "./utils.js";

console.log("Uji normal (2, 10000):", hitungTotal(2, 10000));
console.log("Uji tidak valid (-1, 10000):", hitungTotal(-1, 10000));
console.log("Uji tidak valid (1.5, 10000):", hitungTotal(1.5, 10000));

const kegiatan = [
 { id: 1, judul: "HTML", kuota: 0 },
 { id: 2, judul: "CSS", kuota: 0 },
 { id: 3, judul: "Audit", kuota: 0 }
];
const tersedia = kegiatan.filter(k => k.kuota > 0);
console.log(tersedia);

console.log("Judul kegiatan tersedia:", tersedia.map(k => k.judul));

const { judul, kuota } = kegiatan[0];
console.log(judul, kuota);
{
    const pesanScope = "Variabel di dalam block scope";
    console.log(pesanScope);
} 