function hitungTotal(n, harga) {
 if (!Number.isInteger(n) || n < 1) return null;
 return n * harga;
}
console.log(hitungTotal(2, 10000));
