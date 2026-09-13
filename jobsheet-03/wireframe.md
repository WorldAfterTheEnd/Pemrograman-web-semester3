+------------------------------------------+
| SIMPUS-Mini                 [ Hamburger ]|
+------------------------------------------+
|       Form Registrasi Anggota Baru       |
|                                          |
| Nama Lengkap                             |
| [ ........................             ] |
|                                          |
| NIM / ID                                 |
| [ ...............                      ] |
|                                          |
| Program Studi                            |
| [ ............                         ] |
|                                          |
| [ Daftar ]  [ Batal ]                    |
+------------------------------------------+

1. Login ke halaman dashboard petugas SIMPUS-Mini
2. Masuk ke menu "Peminjaman" atau "Data Anggota"
3. Gunakan fitur pencarian atau filter status
4. Pilih kriteria filter atau ketik kata kunci "Terlambat / Lewat Jatuh Tempo"
5. Sistem memproses dan menampilkan daftar anggota beserta denda atau buku yang belum dikembalikan
6. Petugas melihat detail anggota untuk ditindaklanjuti

edge case
1. Anggota mencoba meminjam buku yang sama dua kali berturut-turut padahal buku tersebut belum dikembalikan sebelumnya.
2. Anggota meminjam buku saat kuota peminjaman maksimumnya sudah habis.
3. Petugas melakukan input data peminjaman untuk anggota yang status keanggotaannya sudah kadaluarsa atau diblokir.
4. Buku yang akan dipinjam ternyata sedang berstatus kosong atau stok habis di sistem saat petugas hendak melakukan konfirmasi.