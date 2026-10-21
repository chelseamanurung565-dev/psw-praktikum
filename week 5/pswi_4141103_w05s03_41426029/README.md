Nama: Chelsea Rahel Manurung
NIM: 41426029
Prodi: Teknologi Rekayasa perangkat Lunak

HASIL UJI

1. Mengubah Container menjadi Grid
-Tindakan:
Mengubah class cards menjadi catalog pada HTML. Pada CSS, mengganti display: flex menjadi display: grid dan menambahkan grid-template-columns: 1fr 1fr.
-Hasil:
Tiga card tersusun menjadi dua kolom, yaitu dua card di baris pertama dan satu card di baris kedua.

2. Grid Adaptif
*Pada lebar layar 320px, card tersusun menjadi satu kolom ke bawah.
*Pada lebar 700px dan 1200px, card tersusun menjadi dua kolom, dengan dua card di baris pertama dan satu card di baris kedua. Jumlah kolom menyesuaikan lebar ruang yang tersedia.

3. Card Internal dan Gap
-Tindakan:
Menambahkan link "Lihat detail" pada setiap card. Menggunakan Flexbox pada .card untuk menyusun isi card dari atas ke bawah, menambahkan gap: .5rem, dan mengatur margin judul serta paragraf menjadi 0.
-Hasil:
Setiap card memiliki judul, paragraf, dan link "Lihat detail". Isi card tersusun rapi dari atas ke bawah dan link tidak memenuhi seluruh lebar card.

4. Review layout
*Pengujian Card*
- 0 card: Saya mencoba menghapus semua card sementara dan hasilnya tidak ada card yang muncul.
- 1 card: Saya mencoba menampilkan satu card dan hasilnya card muncul dengan benar.
- 5 card: Saya mencoba menampilkan lima card dan semua card muncul dengan susunan yang menyesuaikan lebar halaman.
- Setelah selesai menguji, saya mengembalikan jumlah card menjadi 3 seperti semula.

*Pengujian Validator*
- HTML: Saat mengecek HTML, saya menemukan dua error karena tag penutup </div> berlebih. Setelah saya perbaiki, HTML berhasil divalidasi tanpa error.
- CSS:Saya mengecek CSS menggunakan validator dan hasilnya tidak ada error.

*Review Layout*
- Saya menggunakan Grid untuk mengatur posisi card dalam baris dan kolom.
- Saya menggunakan Flexbox untuk menyusun judul, paragraf, dan tautan di dalam card supaya terlihat rapi.

5. AI Use Statement
Saya menggunakan AI untuk bertanya tentang cara kerja CSS yang ada di modul karena ada beberapa bagian yang belum saya pahami. Saya juga menggunakan AI untuk membantu memahami dan memperbaiki error yang saya temukan saat mengecek HTML menggunakan W3C Validator. Setelah itu, saya mengecek kembali hasilnya menggunakan validator sampai tidak ada error.

6. Latihan Mandiri dan Matriks Uji
 1. Kasus Normal
- Input/kondisi: Satu card dan lima card
- Tindakan: Mencoba tampilan card di browser
- Hasil aktual: Diisi sesuai hasil pengujian
- Status/bukti: Sesuai hasil pengujian

 2. Kasus Batas
- Input/kondisi: Lebar layar 320px
- Tindakan: Mengubah lebar layar menjadi 320px
- Hasil aktual: Diisi sesuai hasil pengujian
- Status/bukti: Sesuai hasil pengujian

 3. Kasus Gagal
- Input/kondisi: Urutan Tab
- Tindakan: Menekan tombol Tab dan mengamati perpindahan fokus
- Hasil aktual: Diisi setelah pengujian
- Status/bukti: Diisi setelah pengujian