3. Function Murni Sederhana
- Tindakan:
Membuat fungsi hitungTotal(n, harga) di dalam file utils.js dengan menambahkan validasi Number.isInteger(n) serta pengaman return null jika jumlah kurang dari 1. Setelah itu, memanggil fungsi tersebut di main.js menggunakan data normal (seperti 2 dan 10000) serta data tidak valid (seperti angka negatif atau desimal).

- Hasil Nyata:
Ketika diuji dengan data normal, fungsi berhasil menghitung dan menampilkan nilai 20000 di konsol. Ketika diuji dengan data tidak valid, fungsi mengembalikan nilai null sehingga perhitungan berhenti dengan aman. 

4. Koleksi Kegiatan
- Tindakan:
Membuat data array objek bernama kegiatan yang berisi ID, judul, serta kuota (termasuk menambahkan kegiatan ketiga). Lalu menggunakan metode .filter() untuk menyaring kegiatan yang kuotanya di atas nol, dan menggunakan .map() untuk mengambil bagian judulnya saja.

- Hasil Nyata:
Perintah filter berhasil menyaring kegiatan yang tersedia dengan baik. Perintah map berhasil mencetak daftar judul kegiatan yang tersaring ke konsol browser dalam bentuk array baru. 

5. Destructuring dan Scope
- Tindakan:
Menerapkan teknik destructuring objek (const { judul, kuota } = kegiatan[0];) untuk mengambil data properti objek pertama secara langsung. Selain itu, melakukan uji coba block scope menggunakan kurung kurawal {} untuk melihat batasan akses variabel di dalam blok. 

- Hasil Nyata:
Properti judul dan kuota berhasil ditarik tanpa harus memanggil indeks array secara panjang. Variabel yang dibuat dengan const di dalam blok kurung kurawal terbukti tidak bisa diakses dari luar dan memunculkan error ReferenceError sesuai dengan ekspektasi modul.   

6. Module dan Uji
- Tindakan:
Memisahkan kode program menjadi file modul terpisah, yaitu utils.js dan main.js. Menambahkan atribut type="module" pada tag <script> di dalam index.html dan menjalankan proyek menggunakan server lokal (Live Server). 

- Hasil Nyata:
File JavaScript berhasil saling terhubung melalui sistem import dan export tanpa kendala kebijakan akses. Seluruh hasil pengujian fungsi dan data tampil dengan baik di DevTools Console browser.

7. latihann Mandiri dan matriks uji
- Kasus normal
Input/kondisi: Memanggil fungsi hitungTotal(2, 10000) menggunakan data jumlah dan harga yang valid.   
Tindakan: Menuliskan pemanggilan fungsi dengan parameter angka bulat positif di dalam file main.js, lalu menyimpan perubahan file tersebut.   
Hasil aktual: Program berhasil melakukan perkalian dan memunculkan angka 20000 di dalam konsol browser.   
Status/bukti: Berhasil, karena hasil perhitungan angka total muncul dengan benar sesuai harapan.   

- Kasus batas
Input/kondisi: Menguji angka batas dengan memasukkan nilai 0 atau 6 pada parameter fungsi hitungTotal.   
Tindakan: Menjalankan perulangan pengujian angka batas di file utama untuk melihat bagaimana respons fungsi terhadap nilai di luar ketentuan.   
Hasil aktual: Fungsi langsung menghentikan proses perhitungan dan mengembalikan nilai null sesuai dengan aturan pengaman yang dibuat.   
Status/bukti: Berhasil, karena sistem terbukti mampu membatasi nilai masukan yang tidak sesuai ketentuan.   

- Kasus gagal
Input/kondisi: Sengaja salah menuliskan jalur atau path impor file utils.js atau memasukkan parameter data yang tidak valid.   
Tindakan: Mengubah parameter input atau jalur impor menjadi tidak sesuai aturan, lalu melihat bagaimana reaksi pada program.   
Hasil aktual: Sistem langsung mendeteksi kesalahan tersebut dan menampilkan pesan kesalahan (error merah atau hasil null) di konsol.   
Status/bukti: Berhasil mendeteksi error, karena mekanisme penanganan kesalahan pada sistem berjalan dengan semestinya.
