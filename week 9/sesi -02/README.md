Nama: Chelsea Rahel Manurung
NIM: 41426029
Prodi: D4 TRPL

3. File dan Console
Tindakan: Menuliskan perintah console.log("Halo, praktikum PSW Chelsea berjalan!"); di dalam file main.js lalu menyimpannya.
Hasil Nyata: Saat halaman dimuat ulang di browser, pesan tersebut sukses tercetak di tab Console DevTools dan file berhasil dieksekusi tanpa adanya SyntaxError.

4. Konversi Data
Uji 1 (Number("abc")):
Tindakan: Menjalankan kode console.log(Number("abc")); di dalam file main.js.
Hasil Nyata: Konsol menampilkan nilai NaN (Not-a-Number) karena string huruf tidak dapat diubah menjadi angka matematika.

Uji 2 (Number.isFinite):
Tindakan: Menjalankan kode console.log(Number.isFinite(Number("abc")));.
Hasil Nyata: Konsol menampilkan nilai false karena NaN bukan merupakan angka berhingga yang valid.

5. Aturan Jumlah Tiket
-Uji Kasus Normal (Input 1 dan 5):
Tindakan: Mengubah nilai input menjadi 1 lalu 5 pada kode pemeriksaan jumlah tiket.
Hasil Nyata: Konsol masing-masing menampilkan total harga 10000 dan 50000 (nilai sah dihitung secara normal).

-Uji Kasus Batas Bawah & Atas (Input 0 dan 6):
Tindakan: Menguji input di luar rentang yang diizinkan dengan memasukkan nilai 0 dan 6.
Hasil Nyata: Konsol menampilkan pesan "Jumlah tidak valid" karena berada di luar rentang 1 sampai 5.

-Uji Kasus Desimal (Input 1.5):
Tindakan: Memasukkan nilai desimal 1.5 ke dalam variabel pemeriksaan.
Hasil Nyata: Konsol menampilkan pesan "Jumlah tidak valid" karena gagal dalam pengujian Number.isInteger().

-Uji Kasus Non-Angka / Huruf (Input "abc"):
Tindakan: Memasukkan string huruf "abc" sebagai sumber data input tiket.
Hasil Nyata: Konsol menampilkan pesan "Jumlah tidak valid" karena hasil konversi ke Number menghasilkan NaN.

6. Loop Koleksi
-Uji Tiga Item (Array Awal):
Tindakan: Menjalankan perulangan for...of pada const judul = ["HTML", "CSS", "Audit"]; untuk mencetak setiap item ke konsol.
Hasil Nyata: Konsol menampilkan tiga baris keluaran secara berurutan: HTML, CSS, dan Audit sesuai dengan panjang array.

-Uji Array Kosong:
Tindakan: Menguji perulangan menggunakan array kosong const judul = [];.
Hasil Nyata: Tidak ada iterasi atau keluaran yang berjalan sama sekali, dan program tetap berjalan aman tanpa error.

-Uji Tambah Item Keempat:
Tindakan: Menambahkan satu item baru sehingga array menjadi const judul = ["HTML", "CSS", "Audit", "JavaScript"];.
Hasil Nyata: Konsol mencetak keempat item secara berurutan sesuai panjang array yang baru.

7. Latihan Mandiri dan Matriks Uji
-Kasus Normal (Input 3 pada tiket / Number("2")+1)
Tindakan: Menjalankan nilai yang sah sesuai aturan logika program.
Hasil Aktual: Menghasilkan total harga 30000 dan angka 3.

-Kasus Batas (Input 0 dan 6 pada tiket)
Tindakan: Menguji nilai angka yang berada tepat di luar batas rentang 1 sampai 5.
Hasil Aktual: Konsol mencetak pesan "Jumlah tidak valid".

-Kasus Gagal (Input "abc" / Array kosong [])
Tindakan: Menguji string huruf pada konversi angka dan perulangan koleksi kosong.
Hasil Aktual: Menghasilkan NaN dan tidak melakukan iterasi perulangan sama sekali.

AI use statement
Saya menggunakan bantuan AI (Gemini) untuk lebih memahami tentang perubahan-perubahan yang terjadi di console browser.