Nama: Chelsea Rahel Manurung
NIM: 41426029
Prodi: DIV-TRPL

3. Form Input
- Tindakan: Saya menambahkan elemen form HTML lengkap dengan label, input teks wajib, tombol submit, serta elemen penampung pesan dan daftar (<ul>) ke dalam dokumen web.
- Hasil Nyata: Struktur form input berhasil tampil di halaman web dengan rapi dan siap dihubungkan ke dalam skrip penanganan event JavaScript.

4. Tambah Peserta
- Tindakan: Saya menambahkan logika form di main.js dengan event submit, mencegah reload halaman, melakukan validasi input kosong, lalu memasukkan data baru ke state array serta memanggil fungsi render().
- Hasil Nyata: Formulir berhasil memproses input nama baru dan langsung memperbarui tampilan daftar peserta di layar tanpa melakukan refresh halaman.

5. Tombol Hapus Saat Render
- Tindakan: Saya menyisipkan kode pembuatan elemen tombol secara dinamis di dalam loop fungsi render(), memberikan teks "Hapus", serta menyematkan ID unik menggunakan btn.dataset.id.
- Hasil Nyata: Setiap item nama peserta yang tampil di layar web otomatis dilengkapi dengan tombol hapus yang memiliki atribut data ID masing-masing.

6. Delegation dan Pengujian
- Tindakan: Saya memasang satu event listener click pada elemen pembungkus (daftar) menggunakan teknik Event Delegation dan menguji fungsionalitasnya termasuk pengujian nama markup.
- Hasil Nyata: Tombol hapus dapat berfungsi dengan baik melalui container untuk menghapus data secara sinkron, dan teks markup ditampilkan secara aman sebagai string biasa.

7. Latihan Mandiri dan Matriks Uji
- Kasus Normal (Submit Enter):
~Tindakan: Saya mengetik nama peserta yang valid pada kolom input lalu menekan tombol Enter atau klik tombol "Tambah".   
~Hasil Nyata: Data peserta baru berhasil dimasukkan ke memori dan langsung tampil di dalam daftar (<ul>) secara otomatis.   
- Kasus Batas (Nama Spasi)
~Tindakan: Saya mencoba mengosongkan input atau hanya mengetik spasi saja, lalu melakukan submit.   
~Hasil Nyata: Sistem menolak data tersebut dan memunculkan pesan peringatan "Nama harus diisi" sesuai dengan validasi yang dibuat.  
- Kasus Gagal / Khusus (Hapus Item Dinamis)
~Tindakan: Saya mengklik tombol "Hapus" pada salah satu item peserta yang ada di dalam daftar.   
~Hasil Nyata: Data peserta berhasil dibuang dari array state dan elemen list-nya langsung hilang dari layar browser.

8. AI Use Statement: 
Dalam pengerjaan tugas praktikum ini, saya menggunakan Gemini sebagai teman diskusi untuk memahami fungsi-fungsi kode yang belum saya ketahui di modul. Setelah memahami penjelasannya, saya menulis, menguji, dan memastikan kodenya berjalan sendiri di komputer saya.

