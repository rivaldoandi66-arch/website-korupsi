// =========================================
// DATABASE KASUS
// (Sama seperti di script.js)
// =========================================

const dataKasus = [

{
    id:1,
    nama:"Juliari Peter Batubara",
    jabatan:"Mantan Menteri Sosial",
    instansi:"Kementerian Sosial RI",
    tahun:"2021",
    kasus:"Korupsi Bantuan Sosial (Bansos) COVID-19",
    kerugian:"Rp32 Miliar",
    status:"Terpidana",
    gambar:"images/koruptor/images/koruptor1.jpg",
    kronologi:"Terbukti menerima suap terkait pengadaan paket bantuan sosial COVID-19 yang diperuntukkan bagi masyarakat terdampak pandemi."
},

{
    id:2,
    nama:"Setya Novanto",
    jabatan:"Mantan Ketua DPR RI",
    instansi:"Dewan Perwakilan Rakyat",
    tahun:"2018",
    kasus:"Korupsi Proyek e-KTP",
    kerugian:"Sekitar Rp2,3 triliun",
    status:"Terpidana",
    gambar:"images/koruptor/images/koruptor2.jpg",
    kronologi:"Terbukti melakukan tindak pidana korupsi dalam proyek pengadaan Kartu Tanda Penduduk Elektronik (e-KTP)."
},

{
    id:3,
    nama:"Edhy Prabowo",
    jabatan:"Mantan Menteri Kelautan dan Perikanan",
    instansi:"Kementerian Kelautan dan Perikanan",
    tahun:"2021",
    kasus:"Korupsi Ekspor Benih Lobster",
    kerugian:"25,7 miliar",
    status:"Terpidana",
    gambar:"images/koruptor/images/koruptor3.jpg",
    kronologi:"Terbukti menerima suap terkait pemberian izin ekspor benih bening lobster."
},

{
    id:4,
    nama:"Andhi Pramono",
    jabatan:"Mantan Kepala Bea Cukai Makassar",
    instansi:"Direktorat Jenderal Bea dan Cukai",
    tahun:"2024",
    kasus:"Tindak Pidana Pencucian Uang dan Gratifikasi",
    kerugian:"58,9 miliar",
    status:"Terpidana",
    gambar:"images/koruptor/images/koruptor4.jpg",
    kronologi:"Terbukti menerima gratifikasi serta melakukan tindak pidana pencucian uang selama menjabat."
},

{
id:5,
    nama:"Surya Darmadi",
    jabatan:"Pemilik Perusahaan",
    instansi:"PT Duta Palma Group",
    tahun:"2023",
    kasus:"Korupsi Perizinan Perkebunan",
    kerugian:"Lebih dari Rp78 triliun (menurut putusan dan perhitungan perkara)",
    status:"Terpidana",
    gambar:"images/koruptor/images/koruptor5.jpeg",
    kronologi:"Terbukti melakukan tindak pidana korupsi dan pencucian uang terkait pengelolaan kawasan perkebunan sawit."
}

];

// =========================================
// AMBIL PARAMETER ID DARI URL
// =========================================

const parameter = new URLSearchParams(window.location.search);

const id = Number(parameter.get("id"));

// =========================================
// CARI DATA BERDASARKAN ID
// =========================================

const data = dataKasus.find(function(item){

    return item.id === id;

});

// =========================================
// TAMPILKAN DATA
// =========================================

if(data){

    document.getElementById("gambar").src = data.gambar;

    document.getElementById("nama").textContent = data.nama;

    document.getElementById("jabatan").textContent = data.jabatan;

    document.getElementById("instansi").textContent = data.instansi;

    document.getElementById("tahun").textContent = data.tahun;

    document.getElementById("kasus").textContent = data.kasus;

    document.getElementById("kerugian").textContent = data.kerugian;

    document.getElementById("status").textContent = data.status;

    document.getElementById("kronologi").textContent = data.kronologi;

}