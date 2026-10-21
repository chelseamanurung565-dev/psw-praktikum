Nama: chelsea Rahel Manurung
NIM: 41426029

"Fungsi fungsi yang ada di dalam struktur HTML"
1. max-width = Membatasi lebar maksimal halaman agar tidak terlalu lebar.
2. margin = Mengatur jarak elemen dari elemen lainnya.
3. padding = Memberikan ruang antara isi dengan batas elemen.
4. background = Mengatur warna latar belakang.
5. color = Mengatur warna tulisan.
6. border = Memberikan garis pembatas pada elemen.
7. border-radius = Membuat sudut elemen menjadi melengkung.
8. width: 100% = Membuat form atau input memenuhi lebar wadah.
9. font-weight: bold = Membuat tulisan menjadi tebal.
10. hover = Mengubah tampilan tombol ketika kursor diarahkan ke tombol


Hasil Pengujian
1. Pengujian CSS
Sebelum CSS terhubung, tampilan halaman belum mendapatkan style dari style.css. Setelah link CSS diperbaiki, style berhasil diterapkan dan background halaman berubah sesuai CSS.

2. Pengujian Selector dan Class
Saya menambahkan class card pada form dan class notice pada paragraf. Saat nama class diubah sementara, style tidak lagi diterapkan pada elemen tersebut. Setelah nama class dikembalikan, style kembali muncul.

3. Pengujian Specificity
Saya mencoba aturan .card p dan .notice pada paragraf yang sama. Hasilnya, aturan .card p tetap diterapkan karena memiliki specificity yang lebih tinggi, walaupun urutan penulisannya diubah.

4. Pengujian Box Model
Sebelum menggunakan box-sizing: border-box, lebar box adalah:
240px + 32px padding + 4px border = 276px
Setelah menggunakan box-sizing: border-box, lebar keseluruhan box menjadi 240px.

Jadi, perbedaannya adalah sebelum menggunakan border-box lebar bertambah karena padding dan border ikut ditambahkan. Setelah menggunakan border-box, padding dan border sudah dihitung ke dalam ukuran width.

"AI Use Statement"
Saya menggunakan AI untuk membantu memahami konsep CSS dan menyusun penjelasan hasil pengujian. Kode dan hasil pengujian tetap saya cek dan jalankan sendiri melalui browser dan DevTools.