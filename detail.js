function getParameterByName(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

const weaponId = getParameterByName("nama").toLowerCase();
const container = document.getElementById("detail-container");

if (weaponId && weaponDetails[weaponId]) {
  const weapon = weaponDetails[weaponId];
  container.innerHTML = `
    <div class="weapon-detail">
      <img src="${weapon.image}" alt="${weapon.name}">
      <h2>${weapon.name}</h2>
      <p><strong>Asal:</strong> ${weapon.origin}</p>
      <p><strong>Tipe:</strong> ${weapon.type}</p>
      <p><strong>Bahan:</strong> ${weapon.material}</p>
      <p><strong>Panjang:</strong> ${weapon.length}</p>
      <h3>Deskripsi:</h3>
      <p>${weapon.description}</p>
      <br>
      <p><strong>Sejarah:</strong> ${weapon.history}</p>
    </div>
  `;
} else {
  container.innerHTML = `<p>Data senjata tidak ditemukan.</p>`;
}

function kembali() {
  window.history.back();
}
