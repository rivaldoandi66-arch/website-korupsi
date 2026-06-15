// =======================================
// DATABASE KASUS
// =======================================
const dataKasus = [
    {
        id: 1,
        nama: "Juliari Peter Batubara",
        jabatan: "Mantan Menteri Sosial",
        instansi: "Kementerian Sosial RI",
        tahun: "2021",
        kasus: "Korupsi Bantuan Sosial (Bansos) COVID-19",
        kerugian: "Rp32 Miliar",
        status: "Vonis",
        gambar: "images/koruptor/images/koruptor1.jpg",
        kronologi: "Contoh kronologi singkat mengenai kasus korupsi bantuan sosial."
    },
    {
        id: 2,
        nama: "Setya Novanto",
        jabatan: "Mantan Ketua DPR RI",
        instansi: "Dewan Perwakilan Rakyat",
        tahun: "2018",
        kasus: "Korupsi Proyek e-KTP",
        kerugian: "Sekitar Rp2,3 triliun",
        status: "Vonis",
        gambar: "images/koruptor/images/koruptor2.jpg",
        kronologi: "Contoh kronologi singkat mengenai proyek jalan."
    },
    {
        id: 3,
        nama: "Edhy Prabowo",
        jabatan: "Mantan Menteri Kelautan dan Perikanan",
        instansi: "Kementerian Kelautan dan Perikanan",
        tahun: "2021",
        kasus: "Korupsi Ekspor Benih Lobster",
        kerugian: "25,7 milar",
        status: "Vonis",
        gambar: "images/koruptor/images/koruptor3.jpg",
        kronologi: "Terbukti menerima suap terkait pemberian izin ekspor benih bening lobster."
    },
    {
        id: 4,
        nama: "Andhi Pramono",
        jabatan: "Mantan Kepala Bea Cukai Makassar",
        instansi: "Direktorat Jenderal Bea dan Cukai",
        tahun: "2024",
        kasus: "Tindak Pidana Pencucian Uang dan Gratifikasi",
        kerugian: "58,9 milar",
        status: "Vonis",
        gambar: "images/koruptor/images/koruptor4.jpg",
        kronologi: "Terbukti menerima gratifikasi serta melakukan tindak pidana pencucian uang selama menjabat."
    },
    {
        id: 5,
        nama: "Surya Darmadi",
        jabatan: "Pemilik Perusahaan",
        instansi: "PT Duta Palma Group",
        tahun: "2023",
        kasus: "Korupsi Perizinan Perkebunan",
        kerugian: "Lebih dari Rp78 triliun (menurut putusan dan perhitungan perkara)",
        status: "Vonis",
        gambar: "images/koruptor/images/koruptor5.jpeg",
        kronologi: "Contoh kronologi singkat mengenai pengadaan alat."
    }
];

// =======================================
// MENAMPILKAN CARD (HANYA BERJALAN DI HALAMAN DATABASE)
// =======================================
function tampilkanData(data) {
    const cardContainer = document.querySelector(".card-container");
    if (!cardContainer) return; // Pengaman jika tidak ada di halaman ini
    
    cardContainer.innerHTML = "";
    data.forEach(function (item) {
        cardContainer.innerHTML += `
        <div class="card">
            <img src="${item.gambar}" alt="${item.nama}">
            <div class="card-content">
                <h2>${item.nama}</h2>
                <p><strong>Jabatan :</strong> ${item.jabatan}</p>
                <p><strong>Instansi :</strong> ${item.instansi}</p>
                <p><strong>Tahun :</strong> ${item.tahun}</p>
                <p><strong>Status :</strong> ${item.status}</p>
                <a href="detail.html?id=${item.id}" class="detail-btn">Lihat Detail</a>
            </div>
        </div>
        `;
    });
}

// =======================================
// FITUR SEARCH (HANYA JIKA ELEMEN SEARCH ADA)
// =======================================
const search = document.getElementById("search");
if (search) {
    search.addEventListener("keyup", function () {
        const keyword = search.value.toLowerCase();
        const hasil = dataKasus.filter(function (item) {
            return (
                item.nama.toLowerCase().includes(keyword) ||
                item.jabatan.toLowerCase().includes(keyword) ||
                item.instansi.toLowerCase().includes(keyword) ||
                item.tahun.toLowerCase().includes(keyword)
            );
        });
        tampilkanData(hasil);
    });
}

// =======================================
// DASHBOARD (HANYA BERJALAN JIKA ELEMENNYA ADA)
// =======================================
function hitungDashboard() {
    const jKasus = document.getElementById("jumlahKasus");
    const jInstansi = document.getElementById("jumlahInstansi");
    const jTahun = document.getElementById("jumlahTahun");

    if (!jKasus || !jInstansi || !jTahun) return; // Pengaman halaman

    jKasus.textContent = dataKasus.length;

    const daftarInstansi = [];
    dataKasus.forEach(function (item) {
        if (!daftarInstansi.includes(item.instansi)) {
            daftarInstansi.push(item.instansi);
        }
    });
    jInstansi.textContent = daftarInstansi.length;

    const daftarTahun = [];
    dataKasus.forEach(function (item) {
        if (!daftarTahun.includes(item.tahun)) {
            daftarTahun.push(item.tahun);
        }
    });
    jTahun.textContent = daftarTahun.length;
}

// =======================================
// DATA KUIS 7 PERTANYAAN
// =======================================
const quizData = [
    {
        question: "Memanipulasi data penerima Bantuan Sosial (Bansos) pada sistem digital demi keuntungan materi kelompok pribadi merupakan tindakan koruptif yang melanggar Pancasila sila ke-...",
        options: ["Sila ke-2 (Kemanusiaan yang Adil dan Beradab)", "Sila ke-3 (Persatuan Indonesia)", "Sila ke-5 (Keadilan Sosial bagi Seluruh Rakyat Indonesia)"],
        correct: 2,
        explanation: "Korupsi data bantuan sosial merampas hak hidup masyarakat miskin dan menghancurkan pemerataan keadilan sosial di Indonesia."
    },
    {
        question: "Menggunakan AI (Artificial Intelligence) untuk menghasilkan seluruh jawaban tugas kuliah secara instan tanpa proses belajar (plagiasi penuh) adalah contoh erosi moral digital karena...",
        options: ["Mengikis nilai kejujuran, kerja keras, dan integritas akademik mahasiswa", "Mempercepat penyelesaian tugas agar punya waktu luang bermain game", "Menghemat kuota internet dan daya komputasi perangkat pribadi"],
        correct: 0,
        explanation: "Etika akademik berbasis Pancasila menuntut kejujuran intelektual. Menggunakan AI sebagai alat bantu boleh, namun menjadikannya alat pemalsuan kemampuan merusak integritas diri."
    },
    {
        question: "Menyebarkan tuduhan korupsi atau kejahatan kepada seseorang di media sosial tanpa adanya bukti hukum yang valid (cyberbullying/pembunuhan karakter) bertentangan dengan...",
        options: ["Sila ke-1 (Ketuhanan yang Maha Esa)", "Sila ke-2 (Kemanusiaan yang Adil dan Beradab)", "Sila ke-4 (Kerakyatan yang Dipimpin oleh Hikmat Kebijaksanaan)"],
        correct: 1,
        explanation: "Sila ke-2 menegaskan hak asasi manusia untuk diperlakukan dengan adil dan beradab. Menghakimi orang di ruang digital secara serampangan merusak harkat kemানুsiaan korban."
    },
    {
        question: "Menggunakan fasilitas komputer laboratorium kampus atau jaringan kantor secara diam-diam untuk melakukan penambangan aset kripto (crypto mining) pribadi termasuk kategori...",
        options: ["Kreativitas teknologi Gen Z yang patut didukung", "Tindakan korupsi fasilitas skala kecil karena menyalahgunakan aset publik untuk keuntungan pribadi", "Hal biasa yang tidak merugikan siapa pun karena komputer tidak dibawa pulang"],
        correct: 1,
        explanation: "Menyalahgunakan wewenang dan fasilitas umum/publik demi memperkaya diri sendiri adalah benih utama dari karakter koruptif yang bertentangan dengan etika profesi."
    },
    {
        question: "Menyebarkan hoaks atau disinformasi tentang kasus hukum instansi tertentu dengan sengaja agar memicu perpecahan atau bentrokan antar kelompok masyarakat di internet melanggar...",
        options: ["Sila ke-3 (Persatuan Indonesia)", "Sila ke-4 (Kerakyatan yang Dipimpin oleh Hikmat Kebijaksanaan)", "Sila ke-5 (Keadilan Sosial bagi Seluruh Rakyat Indonesia)"],
        correct: 0,
        explanation: "Sila ke-3 mengutamakan keutuhan bangsa. Menyebarkan hoaks provokatif demi kepentingan pribadi/politik digital mengorbankan kedamaian dan persatuan nasional."
    },
    {
        question: "Menyerang opini orang lain dengan kata-kata kasar dan merasa paling benar saat berdiskusi tentang penegakan hukum di kolom komentar mencerminkan fenomena digital...",
        options: ["Budaya diskusi yang kritis dan modern", "Egoisme digital dan hilangnya budaya musyawarah yang bijaksana (Sila ke-4)", "Hak kebebasan berekspresi yang dilindungi undang-undang secara mutlak"],
        correct: 1,
        explanation: "Sila ke-4 mengajarkan kebijaksanaan dan saling mendengar. Debat toxic yang destruktif membuktikan hilangnya kemampuan musyawarah sehat di dunia maya."
    },
    {
        question: "Sesuai dengan esensi tugas Pancasila, mengapa kecurangan digital kecil (seperti menyuap admin game atau memalsukan dokumen digital) tetap dianggap salah besar meskipun tidak ada polisi yang menangkap?",
        options: ["Karena setiap tindakan memiliki dampak moral, membentuk karakter buruk, dan merugikan nilai kemanusiaan", "Hanya dianggap salah jika sampai viral dan mendapat sanksi sosial netizen", "Tidak salah, selama tidak merugikan keuangan negara secara langsung"],
        correct: 0,
        explanation: "Pancasila bukan sekadar hafalan aturan hukum formal, melainkan pedoman moral dan etika perilaku nyata kita sehari-hari, termasuk cara kita bertindak di ruang digital."
    }
];

let currentQuestionIndex = 0;
let score = 0;
let hasAnswered = false;

// =======================================
// LOGIKA KUIS (HANYA JIKA ELEMEN KUIS ADA)
// =======================================
function loadQuestion() {
    const qNumEl = document.getElementById("q-num");
    const qTextEl = document.getElementById("q-text");
    const optionsBox = document.getElementById("options-box");
    const feedbackBox = document.getElementById("feedback-box");
    const nextBtn = document.getElementById("next-btn");

    if (!qNumEl || !qTextEl || !optionsBox || !feedbackBox) return; // Pengaman jika tidak di halaman kuis

    hasAnswered = false;
    nextBtn.disabled = true;
    feedbackBox.style.display = "none";
    feedbackBox.innerHTML = "";

    let currentQuiz = quizData[currentQuestionIndex];
    qNumEl.innerText = `Pertanyaan ${currentQuestionIndex + 1} dari ${quizData.length}`;
    qTextEl.innerText = currentQuiz.question;

    optionsBox.innerHTML = "";
    currentQuiz.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.classList.add("option-btn");
        button.innerText = option;
        button.onclick = () => checkAnswer(index);
        optionsBox.appendChild(button);
    });
}

function checkAnswer(selectedIndex) {
    if (hasAnswered) return;
    hasAnswered = true;

    const currentQuiz = quizData[currentQuestionIndex];
    const buttons = document.querySelectorAll(".option-btn");
    const feedbackBox = document.getElementById("feedback-box");
    const nextBtn = document.getElementById("next-btn");

    buttons.forEach(btn => btn.style.cursor = "not-allowed");

    if (selectedIndex === currentQuiz.correct) {
        score++;
        buttons[selectedIndex].classList.add("correct");
        feedbackBox.innerHTML = `✅ <b>Jawaban Benar!</b><br>${currentQuiz.explanation}`;
        feedbackBox.className = "feedback-msg success";
    } else {
        buttons[selectedIndex].classList.add("wrong");
        buttons[currentQuiz.correct].classList.add("correct");
        feedbackBox.innerHTML = `❌ <b>Jawaban Salah!</b><br>Jawaban yang benar: <b>${currentQuiz.options[currentQuiz.correct]}</b>.<br><br>💡 <b>Pesan Moral:</b> ${currentQuiz.explanation}`;
        feedbackBox.className = "feedback-msg danger";
    }

    feedbackBox.style.display = "block";
    nextBtn.disabled = false;
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById("question-container").style.display = "none";
    document.getElementById("quiz-nav").style.display = "none";

    const resultContainer = document.getElementById("result-container");
    const scoreVal = document.getElementById("score-val");
    const resultMessage = document.getElementById("result-message");

    resultContainer.style.display = "block";
    let finalPercentage = Math.round((score / quizData.length) * 100);
    scoreVal.innerText = finalPercentage;

    if (finalPercentage === 100) {
        resultMessage.innerHTML = "🏆 <b>Luar Biasa Sempurna!</b> Kamu memiliki pondasi moral dan integritas digital yang luar biasa sesuai jiwa Pancasila.";
    } else if (finalPercentage >= 70) {
        resultMessage.innerHTML = "👍 <b>Sangat Baik!</b> Pemahaman etika digitalmu sudah tinggi, pertahankan kejujuran ini.";
    } else if (finalPercentage >= 50) {
        resultMessage.innerHTML = "⚠️ <b>Cukup Baik.</b> Masih ada poin moral yang perlu dievaluasi.";
    } else {
        resultMessage.innerHTML = "❌ <b>Perlu Belajar Lagi!</b> Era digital membutuhkan generasi berintegritas, bukan sekadar cerdas teknologi.";
    }
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("question-container").style.display = "block";
    document.getElementById("quiz-nav").style.display = "block";
    document.getElementById("result-container").style.display = "none";
    loadQuestion();
}

// INSIALISASI SECARA OTOMATIS BERDASARKAN ELEMEN HALAMAN YANG AKTIF
document.addEventListener("DOMContentLoaded", () => {
    tampilkanData(dataKasus);
    hitungDashboard();
    loadQuestion();
});