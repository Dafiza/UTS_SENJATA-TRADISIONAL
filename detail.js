/**
 * Mengambil semua data senjata dari localStorage.
 */
function getSenjataData() {
  const data = localStorage.getItem('senjataDB');
  return data ? JSON.parse(data) : [];
}

/**
 * Menyimpan data senjata ke localStorage.
 */
function saveSenjataData(data) {
  localStorage.setItem('senjataDB', JSON.stringify(data));
}

/**
 * Mendapatkan parameter dari URL.
 * @param {string} name - Nama parameter.
 */
function getParameterByName(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

// ===================================
// MAIN LOGIC
// ===================================

const weaponId = getParameterByName("id");
const detailContainer = document.getElementById("detail-container");
const formContainer = document.getElementById("form-detail-container");
const allWeapons = getSenjataData();
const weapon = allWeapons.find(w => w.id === weaponId);

if (weapon) {
  // Cek apakah detailnya sudah ada (properti 'tipe' tidak null)
  if (weapon.tipe) {
    displayWeaponDetails(weapon);
  } else {
    displayAddDetailsForm(weapon);
  }
} else {
  detailContainer.innerHTML = `<p style="text-align:center;">Data senjata tidak ditemukan.</p>`;
}

/**
 * Menampilkan detail lengkap senjata.
 */
function displayWeaponDetails(w) {
  detailContainer.innerHTML = `
    <div class="weapon-detail">
      <img src="${w.gambar}" alt="${w.nama}">
      <h2>${w.nama}</h2>
      <p><strong>Asal:</strong> ${w.asal}</p>
      <p><strong>Tipe:</strong> ${w.tipe}</p>
      <p><strong>Bahan:</strong> ${w.bahan}</p>
      <p><strong>Panjang:</strong> ${w.panjang}</p>
      <h3>Deskripsi:</h3>
      <p>${w.deskripsi}</p>
      <br>
      <h3>Sejarah:</h3>
      <p>${w.sejarah}</p>
    </div>
  `;
}

/**
 * Menampilkan form untuk menambahkan detail.
 */
function displayAddDetailsForm(w) {
  // Tampilkan data dasar yang sudah ada
  detailContainer.innerHTML = `
    <div class="weapon-detail" style="border-bottom: 2px solid #eee; padding-bottom: 20px; margin-bottom: 0;">
      <img src="${w.gambar}" alt="${w.nama}">
      <h2>${w.nama}</h2>
      <p><strong>Asal:</strong> ${w.asal}</p>
      <h3>Deskripsi:</h3>
      <p>${w.deskripsi}</p>
    </div>
  `;

  // Tampilkan form di bawahnya
  formContainer.innerHTML = `
    <section class="form-section">
      <h2>Tambahkan Detail Senjata</h2>
      <form id="detail-form">
        <input type="text" id="tipe" placeholder="Tipe Senjata (cth: Senjata Tikam)" required>
        <input type="text" id="bahan" placeholder="Bahan Utama (cth: Logam Pamor, Kayu)" required>
        <input type="text" id="panjang" placeholder="Perkiraan Panjang (cth: 30-40 cm)" required>
        <textarea id="sejarah" placeholder="Ceritakan sejarah singkat senjata ini..." required rows="5"></textarea>
        <div class="form-buttons">
          <button type="submit" class="btn save">Simpan Detail</button>
        </div>
      </form>
    </section>
  `;

  // Tambahkan event listener untuk form
  document.getElementById("detail-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Cari index senjata yang mau diupdate
    const weaponIndex = allWeapons.findIndex(item => item.id === weaponId);
    
    // Update data di object
    allWeapons[weaponIndex].tipe = document.getElementById("tipe").value;
    allWeapons[weaponIndex].bahan = document.getElementById("bahan").value;
    allWeapons[weaponIndex].panjang = document.getElementById("panjang").value;
    allWeapons[weaponIndex].sejarah = document.getElementById("sejarah").value;
    
    // Simpan kembali ke localStorage
    saveSenjataData(allWeapons);
    
    // Muat ulang halaman untuk menampilkan detail yang baru disimpan
    window.location.reload();
  });
}