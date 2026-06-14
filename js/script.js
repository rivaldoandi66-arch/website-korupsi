// =======================================
// DATABASE KASUS
// =======================================

const dataKasus = [

{
    id:1,
    nama:"Juliari Peter Batubara",
    jabatan:"Mantan Menteri Sosial",
    instansi:"Kementerian Sosial RI",
    tahun:"2021",
    kasus:"Korupsi Bantuan Sosial (Bansos) COVID-19",
    kerugian:"Rp32 Miliar",
    status:"Vonis",
    gambar:"images/koruptor/images/koruptor1.jpg",
    kronologi:"Contoh kronologi singkat mengenai kasus korupsi bantuan sosial."
},

{
    id:2,
    nama:"Setya Novanto",
    jabatan:"Mantan Ketua DPR RI",
    instansi:"Dewan Perwakilan Rakyat",
    tahun:"2018",
    kasus:"Korupsi Proyek e-KTP",
    kerugian:"Sekitar Rp2,3 triliun",
    status:"Vonis",
    gambar:"images/koruptor/images/koruptor2.jpg",
    kronologi:"Contoh kronologi singkat mengenai proyek jalan."
},

{
    id:3,
    nama:"Edhy Prabowo",
    jabatan:"Mantan Menteri Kelautan dan Perikanan",
    instansi:"Kementerian Kelautan dan Perikanan",
    tahun:"2021",
    kasus:"Korupsi Ekspor Benih Lobster",
    kerugian:"25,7 miliar",
    status:"Vonis",
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
    status:"Vonis",
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
    status:"Vonis",
    gambar:"images/koruptor/images/koruptor5.jpeg",
    kronologi:"Contoh kronologi singkat mengenai pengadaan alat."
}

];

// =======================================
// MENAMPILKAN CARD
// =======================================

const cardContainer = document.querySelector(".card-container");

function tampilkanData(data){

    cardContainer.innerHTML = "";

    data.forEach(function(item){

        cardContainer.innerHTML += `

        <div class="card">

            <img src="${item.gambar}" alt="${item.nama}">

            <div class="card-content">

                <h2>${item.nama}</h2>

                <p><strong>Jabatan :</strong> ${item.jabatan}</p>

                <p><strong>Instansi :</strong> ${item.instansi}</p>

                <p><strong>Tahun :</strong> ${item.tahun}</p>

                <p><strong>Status :</strong> ${item.status}</p>

                <a href="detail.html?id=${item.id}" class="detail-btn">

                    Lihat Detail

                </a>

            </div>

        </div>

        `;

    });

}

tampilkanData(dataKasus);

// =======================================
// SEARCH
// =======================================

const search = document.getElementById("search");

search.addEventListener("keyup", function(){

    const keyword = search.value.toLowerCase();

    const hasil = dataKasus.filter(function(item){

        return (

            item.nama.toLowerCase().includes(keyword) ||

            item.jabatan.toLowerCase().includes(keyword) ||

            item.instansi.toLowerCase().includes(keyword) ||

            item.tahun.toLowerCase().includes(keyword)

        );

    });

    tampilkanData(hasil);

});

// =======================================
// DASHBOARD
// =======================================

document.getElementById("jumlahKasus").textContent = dataKasus.length;

// Jumlah Instansi

const daftarInstansi = [];

dataKasus.forEach(function(item){

    if(!daftarInstansi.includes(item.instansi)){

        daftarInstansi.push(item.instansi);

    }

});

document.getElementById("jumlahInstansi").textContent = daftarInstansi.length;

// Jumlah Tahun

const daftarTahun = [];

dataKasus.forEach(function(item){

    if(!daftarTahun.includes(item.tahun)){

        daftarTahun.push(item.tahun);

    }

});

document.getElementById("jumlahTahun").textContent = daftarTahun.length;