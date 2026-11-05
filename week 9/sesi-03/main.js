export { hitungTotal } from "./utils.js";

// Uji normal
console.log("Uji normal (2, 10000):", hitungTotal(2, 10000));

// Uji tidak valid (angka negatif atau desimal)
console.log("Uji tidak valid (-1, 10000):", hitungTotal(-1, 10000));
console.log("Uji tidak valid (1.5, 10000):", hitungTotal(1.5, 10000));