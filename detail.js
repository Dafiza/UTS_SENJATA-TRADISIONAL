function getParameterByName(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

const weaponId = getParameterByName("nama")?.toLowerCase();
const container = document.getElementById("detail-container");

let localWeapons = JSON.parse(localStorage.getItem("senjataData")) || []; // dari halaman utama
let localDetails = JSON.parse(localStorage.getItem("detailSenjata")) || {};

function tampilkanDetail(weapon) {
  container.innerHTML = `
    <div class="weapon-detail">
      <img src="${weapon.gambar || weapon.image || 'images/default.png'}" alt="${weapon.nama || weapon.name}">
      <h2>${weapon.nama || weapon.name}</h2>
      <p><strong>Asal:</strong> ${weapon.asal || weapon.origin || '-'}</p>
      <p><strong>Tipe:</strong> ${weapon.type || '-'}</p>
      <p><strong>Bahan:</strong> ${weapon.material || '-'}</p>
      <p><strong>Panjang:</strong> ${weapon.length || '-'}</p>
      <h3>Deskripsi:</h3>
      <p>${weapon.deskripsi || weapon.description || 'Belum ada deskripsi.'}</p>
      <br>
      <p><strong>Sejarah:</strong> ${weapon.history || 'Belum ada sejarah.'}</p>
    </div>
  `;
}

if (weaponId) {
  const weaponBase =
  weaponDetails[weaponId] ||
  localWeapons.find(
    (w) =>
      (w.name && w.name.toLowerCase() === weaponId) ||
      (w.nama && w.nama.toLowerCase() === weaponId)
  );

    if (weaponDetails[weaponId]) {
    tampilkanDetail(weaponDetails[weaponId]);
  } else if (localDetails[weaponId]) {
    tampilkanDetail(localDetails[weaponId]);
  } else if (weaponBase) {
    // kalau user sudah pernah menambah detail, tampilkan langsung
    const key = (weaponBase.name || weaponBase.nama).toLowerCase();
    if (localDetails[key]) {
      tampilkanDetail(localDetails[key]);
    } else {
      container.innerHTML = `
        <div class="add-detail">
          <p>Detail untuk <strong>${weaponBase.name || weaponBase.nama}</strong> belum tersedia.</p>
          <button id="add-detail-btn" class="btn">Tambahkan Detail Senjata</button>
        </div>
      `;
      document
        .getElementById("add-detail-btn")
        .addEventListener("click", () => tampilkanFormTambah(weaponBase));
    }
  } else {
    container.innerHTML = `<p>Data senjata tidak ditemukan.</p>`;
  }
}

function tampilkanFormTambah(weaponBase) {
  container.innerHTML = `
    <div class="form-detail">
      <h2>Tambah Detail Senjata: ${weaponBase.name}</h2>
      <form id="detail-form">
        <p><strong>Asal:</strong> ${weaponBase.origin || '-'}</p>
        <p><strong>Deskripsi singkat:</strong> ${weaponBase.description || '-'}</p>

        <input type="text" id="type" placeholder="Tipe Senjata (contoh: tikam, tebas)">
        <input type="text" id="material" placeholder="Bahan (contoh: besi, kayu)">
        <input type="text" id="length" placeholder="Panjang (cm)">
        <textarea id="description" placeholder="Deskripsi lengkap..."></textarea>
        <textarea id="history" placeholder="Sejarah singkat..."></textarea>
        <button type="submit" class="btn save">Simpan Detail</button>
      </form>
    </div>
  `;

  const form = document.getElementById("detail-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const newDetail = {
      name: weaponBase.name,
      origin: weaponBase.origin,
      image: weaponBase.image,
      type: document.getElementById("type").value.trim(),
      material: document.getElementById("material").value.trim(),
      length: document.getElementById("length").value.trim(),
      description:
        document.getElementById("description").value.trim() ||
        weaponBase.description,
      history: document.getElementById("history").value.trim(),
    };

    const weaponKey = (weaponBase.name || weaponBase.nama).toLowerCase();
    localDetails[weaponKey] = newDetail;
    localStorage.setItem("detailSenjata", JSON.stringify(localDetails));

    alert("Detail senjata berhasil disimpan!");
    tampilkanDetail(newDetail);
  });
}

function kembali() {
  window.history.back();
}
