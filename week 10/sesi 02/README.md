Nama: Chelsea Rahel Manurung
NIM: 41426029
Prodi: DIV-TRPL

3. Starter DOM
- Tindakan: Membuat struktur kerangka HTML dasar dengan elemen <main>, judul, tempat pesan, dan list kosong (#daftar), lalu menghubungkan file main.js. Saya juga mencoba sengaja mengetik selector yang salah untuk melihat pesan error null di Console sebelum akhirnya memperbaikinya kembali.   
- Hasil nyata: Elemen berhasil ditemukan oleh JavaScript dengan benar tanpa kendala.

4. Teks dan Elemen Baru
- Tindakan: Membuat elemen <li> baru lewat JavaScript dan mencoba memasukkan teks yang mengandung tag HTML (seperti <b>Rina</b>) menggunakan textContent.   
- Hasil nyata: Teks tercetak mentah-mentah di layar beserta tag <b>-nya secara literal, dan browser tidak membuat elemen cetak tebal baru. Ini membuktikan textContent aman dari HTML injection karena memperlakukannya murni sebagai teks. 

5. State dan Render
- Tindakan: Menyiapkan array data peserta, lalu membuat fungsi render() untuk membersihkan kontainer dan melalukan perulangan guna menampilkan data ke DOM. Saya memanggil fungsi render ini dua kali berturut-turut dan mencoba mengosongkan array-nya.   
- Hasil nyata: Item di dalam list tidak mengalami duplikasi sama sekali saat dirender ulang, dan jumlah elemen di web selalu pas mengikuti isi data array.

6. Keadaan Kosong (Empty State)
- Tindakan: Menambahkan pengecekan kondisi menggunakan ternary operator di dalam fungsi render() berdasarkan panjang array (peserta.length). Jika array kosong, teks "Belum ada peserta" akan dimunculkan, lengkap dengan pengaturan gaya di CSS.   
- Hasil nyata: Pesan kosong (empty state) langsung tampil dengan jelas di halaman ketika data peserta sedang kosong.

7. Latihan mandiri dan matriks uji
- Kasus Normal
~Tindakan: Menjalankan fungsi render() dengan data peserta yang normal dan valid (misalnya berisi dua data nama peserta seperti Rina dan Budi).~Hasil Aktual: Jumlah elemen <li> yang tampil di halaman web sesuai persis dengan jumlah data di dalam array state. 

- Kasus Batas (Boundary)
~Tindakan: Menguji kondisi array data saat kosong total (peserta = []) lalu melakukan render ulang.   
~Hasil Aktual: Program tidak error, dan pesan pemberitahuan kondisi kosong (empty state) seperti "Belum ada peserta" langsung tampil dengan baik di antarmuka.   
~Tindakan Lain: Memanggil fungsi render dua kali berturut-turut untuk menguji apakah elemen bisa menumpuk.  
~Hasil Aktual: Tidak ada data yang duplikat karena fungsi pembersihan bekerja dengan baik sebelum elemen baru dimasukkan.
   
 - Kasus Gagal
~Tindakan: Sengaja mengetik selector elemen yang keliru di dalam script (misalnya salah menulis ID elemen) atau mencoba memasukkan teks string yang mengandung tag HTML (seperti <b>Rina</b>) menggunakan textContent.   
~Hasil Aktual: Untuk selector yang salah, program langsung memunculkan nilai null dan terdiagnosis sebagai error di Console. Sedangkan untuk tag HTML, teks tercetak mentah-mentah secara literal di layar beserta tag <b>-nya tanpa merender efek tebal, yang membuktikan data aman dari eksekusi markup liar.  