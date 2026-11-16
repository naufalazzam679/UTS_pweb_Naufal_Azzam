# Website UMKM Gas Elpiji Berkah

Proyek website statis multi-halaman untuk UTS Pemrograman Web Dasar. Website dibuat menggunakan HTML, CSS, dan JavaScript murni tanpa framework.

> **Penting sebelum dikumpulkan:** "Gas Elpiji Berkah" dan informasi di dalam website ini adalah data contoh untuk membantu penyusunan proyek. Ganti dengan nama UMKM nyata yang kamu pilih, alamat, nomor telepon, akun media sosial, jam buka, nama anggota tim, foto, daftar produk, dan informasi lain yang sesuai kondisi sebenarnya. Jangan mengumpulkan data contoh sebagai fakta usaha.

## 1. Struktur folder

```text
gas-elpiji-berkah/
├── index.html
├── tentang.html
├── katalog.html
├── kontak.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── img/
│   ├── logo.svg
│   ├── lpg-3kg.svg
│   ├── lpg-55kg.svg
│   ├── lpg-12kg.svg
│   ├── bright-55kg.svg
│   ├── bright-12kg.svg
│   ├── delivery.svg
│   └── tim-usaha.svg
└── bukti/
    └── README.md
```

## 2. Fitur website

- Empat halaman yang saling terhubung: Beranda, Tentang, Katalog, dan Kontak.
- Elemen HTML semantik seperti `header`, `nav`, `main`, `section`, `article`, `figure`, dan `footer`.
- Tabel jam operasional pada halaman Beranda.
- Katalog berisi enam item dengan gambar, deskripsi, kategori, dan informasi harga/biaya.
- Pencarian nama produk dan filter kategori menggunakan array objek JavaScript.
- Formulir kontak dengan `label`, `required`, `type="email"`, `type="tel"`, pola nomor HP 10–13 digit, serta batas panjang pesan.
- Pesan validasi tambahan di bawah kolom dan pesan hasil demo formulir.
- Navigasi hamburger untuk layar HP.
- CSS eksternal, Flexbox, Grid, variabel CSS, media query, hover, transition, dan keyframes.

## 3. Cara menjalankan

1. Ekstrak file ZIP.
2. Buka folder `gas-elpiji-berkah`.
3. Klik dua kali `index.html`, atau buka folder menggunakan Visual Studio Code lalu jalankan dengan ekstensi Live Server.
4. Gunakan menu navigasi untuk membuka empat halaman.

Website dapat berjalan sebagai website statis tanpa database atau server PHP.

## 4. Bagian yang perlu disesuaikan

- **Nama usaha:** ubah teks "Gas Elpiji Berkah" pada seluruh halaman.
- **Profil dan sejarah:** isi sejarah nyata, tahun berdiri, visi/misi, dan wilayah pelayanan.
- **Tim:** ganti "Nama Pemilik" dan "Nama Petugas" dengan nama minimal tiga orang yang benar-benar terkait dengan usaha.
- **Katalog:** cocokkan produk dan layanan dengan yang benar-benar dijual.
- **Harga:** isi harga aktual dari UMKM. Contoh ini memakai keterangan "konfirmasi langsung" agar tidak mengarang harga.
- **Kontak:** isi alamat, nomor telepon/WhatsApp, email, dan media sosial yang aktif.
- **Peta:** pada `kontak.html`, ganti URL `src` iframe Google Maps dengan embed alamat usaha sebenarnya.
- **Jam operasional:** ubah tabel pada `index.html` sesuai jam buka nyata.

## 5. Formulir kontak

Formulir pada `kontak.html` adalah demo front-end. JavaScript memeriksa input dan menampilkan pesan sukses, tetapi **belum mengirim pesan ke email atau server**. Pengiriman sungguhan membutuhkan backend atau layanan formulir.

## 6. Sumber gambar

Semua gambar SVG dalam folder `img/` merupakan ilustrasi vektor orisinal yang dibuat khusus untuk proyek contoh ini; bukan foto produk atau foto pemilik usaha. Apabila diganti dengan foto dari internet, gunakan foto berlisensi yang mengizinkan penggunaan dan cantumkan sumber serta lisensinya di bagian ini.

## 7. Pemeriksaan W3C

Validasi masing-masing file HTML melalui https://validator.w3.org/ (pilih "Validate by File Upload" atau "Validate by Direct Input"). Setelah tidak ada error, simpan tangkapan layar hasil validasi untuk setiap halaman ke folder `bukti/` dengan nama:

- `validasi-beranda.png`
- `validasi-tentang.png`
- `validasi-katalog.png`
- `validasi-kontak.png`

Folder `bukti/` saat ini hanya berisi petunjuk. Tangkapan layar validasi asli belum dibuat.

## 8. GitHub

Nama repositori sesuai ketentuan tugas dapat menggunakan format `NIM-Nama-UTS`. Contoh urutan commit bertahap:

1. `Membuat struktur awal proyek`
2. `Menambahkan halaman beranda dan navigasi`
3. `Menambahkan halaman tentang dan katalog`
4. `Menambahkan halaman kontak dan formulir`
5. `Menyempurnakan CSS responsif dan JavaScript`

Sesuaikan pesan commit dengan perubahan yang benar-benar kamu lakukan. Jangan membuat lima commit palsu sekaligus hanya untuk memenuhi jumlah minimal.
