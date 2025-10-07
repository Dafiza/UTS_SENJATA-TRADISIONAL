// =============================
// DATA MANAGEMENT (LOCALSTORAGE)
// =============================

/**
 * Menggabungkan data awal dari senjata.js dan detailSenjata.js
 * dan menyimpannya ke localStorage jika belum ada.
 */
function initializeData() {
  // Mengambil data dari variabel global (dari file senjata.js dan detailSenjata.js)
  const initialSenjata = [...senjata];
  const initialDetails = { ...weaponDetails };

  const combinedData = initialSenjata.map(s => {
    const id = s.nama.toLowerCase();
    const details = initialDetails[id] || {};
    return {
      id: id,
      nama: s.nama,
      asal: s.asal,
      gambar: s.gambar,
      deskripsi: s.deskripsi,
      // Properti detail (bisa null jika tidak ada)
      tipe: details.type || null,
      bahan: details.material || null,
      panjang: details.length || null,
      sejarah: details.history || null
    };
  });

  localStorage.setItem('senjataDB', JSON.stringify(combinedData));
  return combinedData;
}

/**
 * Mengambil semua data senjata dari localStorage.
 * Jika tidak ada, panggil initializeData().
 */
function getSenjataData() {
  const data = localStorage.getItem('senjataDB');
  return data ? JSON.parse(data) : initializeData();
}

/**
 * Menyimpan data senjata ke localStorage.
 * @param {Array} data - Array data senjata yang akan disimpan.
 */
function saveSenjataData(data) {
  localStorage.setItem('senjataDB', JSON.stringify(data));
}


// =============================
// SETUP & INITIALIZATION
// =============================

// Hero background changer
const hero = document.querySelector(".hero");
const backgrounds = [
  "images/keris.png", "images/mandau.png", "images/rencong.png",
  "images/badik.png", "images/kujang.png", "images/parang.png",
  "images/sumpit.png", "images/tombak.png"
];
let currentBg = 0;

function changeBackground() {
  hero.style.backgroundImage = `url('${backgrounds[currentBg]}')`;
  currentBg = (currentBg + 1) % backgrounds.length;
}
setInterval(changeBackground, 5000);
changeBackground();

// DOM Elements
const container = document.getElementById("senjata-container");
const searchInput = document.getElementById("search");
const filterSelect = document.getElementById("filter-asal");
const form = document.getElementById("senjata-form");
const formTitle = document.getElementById("form-title");
const cancelEditBtn = document.getElementById("cancel-edit");
const hiddenIdInput = document.getElementById("senjata-id");

// Data dari localStorage
let dataSenjata = getSenjataData();

// =============================
// DISPLAY & RENDERING FUNCTIONS
// =============================

function tampilkanSenjata(data) {
  container.innerHTML = "";
  if (data.length === 0) {
    container.innerHTML = "<p>Tidak ada senjata yang cocok dengan pencarian.</p>";
    return;
  }
  data.forEach((s, index) => {
    const card = `
      <div class="card">
        <img src="${s.gambar || 'images/default.png'}" alt="${s.nama}" loading="lazy" onerror="this.src='images/default.png';">
        <h3>${s.nama}</h3>
        <p><strong>Asal:</strong> ${s.asal}</p>
        <p>${s.deskripsi.substring(0, 80)}...</p>
        <div class="card-buttons">
          <button class="btn" onclick="lihatDetail('${s.id}')">Lihat Detail</button>
          <button class="btn edit" onclick="editSenjata(${index})">Edit</button>
          <button class="btn delete" onclick="hapusSenjata(${index})">Hapus</button>
        </div>
      </div>
    `;
    container.innerHTML += card;
  });
}

function generateFilterOptions() {
  const origins = [...new Set(dataSenjata.map(s => s.asal))];
  filterSelect.innerHTML = '<option value="all">Semua Daerah</option>';
  origins.sort().forEach(asal => {
    const option = document.createElement("option");
    option.value = asal;
    option.textContent = asal;
    filterSelect.appendChild(option);
  });
}

// =============================
// EVENT HANDLERS & LOGIC
// =============================

function lihatDetail(id) {
  window.location.href = `detail.html?id=${encodeURIComponent(id)}`;
}

searchInput.addEventListener("input", function() {
  const keyword = this.value.toLowerCase();
  filterSelect.value = "all";
  const hasil = dataSenjata.filter(s =>
    s.nama.toLowerCase().includes(keyword) ||
    s.asal.toLowerCase().includes(keyword)
  );
  tampilkanSenjata(hasil);
});

filterSelect.addEventListener("change", function() {
  const selectedAsal = this.value;
  searchInput.value = "";
  if (selectedAsal === "all") {
    tampilkanSenjata(dataSenjata);
  } else {
    const hasil = dataSenjata.filter(s => s.asal === selectedAsal);
    tampilkanSenjata(hasil);
  }
});

form.addEventListener("submit", function(event) {
  event.preventDefault();
  const idToUpdate = hiddenIdInput.value;
  const senjataBaru = {
    nama: document.getElementById("nama").value.trim(),
    asal: document.getElementById("asal").value.trim(),
    gambar: document.getElementById("gambar").value.trim() || 'images/default.png',
    deskripsi: document.getElementById("deskripsi").value.trim(),
  };

  if (idToUpdate !== "") { // idToUpdate menyimpan index
    // Update
    const oldData = dataSenjata[idToUpdate];
    dataSenjata[idToUpdate] = { ...oldData, ...senjataBaru };
  } else {
    // Add new
    const newEntry = {
      ...senjataBaru,
      id: senjataBaru.nama.toLowerCase().replace(/\s+/g, '-'), // Buat ID unik
      tipe: null, bahan: null, panjang: null, sejarah: null // Detail masih kosong
    };
    dataSenjata.push(newEntry);
  }

  saveSenjataData(dataSenjata);
  tampilkanSenjata(dataSenjata);
  generateFilterOptions();
  resetForm();
});

function editSenjata(index) {
  const s = dataSenjata[index];
  formTitle.textContent = "Edit Senjata";
  hiddenIdInput.value = index; // Simpan index untuk update
  document.getElementById("nama").value = s.nama;
  document.getElementById("asal").value = s.asal;
  document.getElementById("gambar").value = s.gambar;
  document.getElementById("deskripsi").value = s.deskripsi;
  cancelEditBtn.style.display = "inline-block";
  window.scrollTo(0, document.body.scrollHeight);
}

function hapusSenjata(index) {
  if (confirm(`Apakah Anda yakin ingin menghapus ${dataSenjata[index].nama}?`)) {
    dataSenjata.splice(index, 1);
    saveSenjataData(dataSenjata);
    tampilkanSenjata(dataSenjata);
    generateFilterOptions();
  }
}

function resetForm() {
  form.reset();
  formTitle.textContent = "Tambah Senjata Baru";
  hiddenIdInput.value = "";
  cancelEditBtn.style.display = "none";
}

cancelEditBtn.addEventListener("click", resetForm);

// =============================
// INITIAL RENDER
// =============================
tampilkanSenjata(dataSenjata);
generateFilterOptions();