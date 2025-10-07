// Ambil data awal dari senjata.js
let dataSenjata = JSON.parse(localStorage.getItem("senjataData")) || senjata;

const searchInput = document.getElementById("search");
const filterSelect = document.getElementById("filter-asal");
// Fitur Search + Filter
filterSelect.addEventListener("change", filterSenjata);
searchInput.addEventListener("input", filterSenjata);

function filterSenjata() {
    const keyword = searchInput.value.toLowerCase();
    const filterValue = filterSelect.value;

    const hasilFilter = dataSenjata.filter((s) => {
    const cocokNama = s.nama.toLowerCase().includes(keyword);
    const cocokAsal = filterValue === "all" || s.asal === filterValue;
    return cocokNama && cocokAsal;
    });

    tampilkanSenjata(hasilFilter);
}

// Buat dropdown filter otomatis berdasarkan asal senjata
function generateFilterOptions() {
    // Reset opsi
    filterSelect.innerHTML = '<option value="all">Semua Daerah</option>';
    // Ambil semua asal dari data
    const asalList = dataSenjata.map(s => s.asal.trim());
    const unikAsal = [...new Set(asalList)].sort();

    // Tambahkan ke dropdown
    unikAsal.forEach(asal => {
    const option = document.createElement("option");
    option.value = asal;
    option.textContent = asal;
    filterSelect.appendChild(option);
    });
}

// Elemen
const form = document.getElementById("senjata-form");
const namaInput = document.getElementById("nama");
const asalInput = document.getElementById("asal");
const gambarInput = document.getElementById("gambar");
const deskripsiInput = document.getElementById("deskripsi");
const idInput = document.getElementById("senjata-id");
const cancelBtn = document.getElementById("cancel-edit");

// Re-render tampilan
function tampilkanSenjata(data) {
  const container = document.getElementById("senjata-container");
  container.innerHTML = "";

  data.forEach((s, index) => {
    container.innerHTML += `
      <div class="card">
        <img src="${s.gambar || 'images/default.png'}" alt="${s.nama}" loading="lazy">
        <h3>${s.nama}</h3>
        <p><strong>Asal:</strong> ${s.asal}</p>
        <p>${s.deskripsi}</p>
        <div class="card-buttons">
          <button class="btn" onclick="lihatDetail('${s.nama.toLowerCase()}')">Lihat Detail</button>
          <button class="btn edit" onclick="editSenjata(${index})">Edit</button>
          <button class="btn delete" onclick="hapusSenjata(${index})">Hapus</button>
        </div>
      </div>
    `;
  });

  localStorage.setItem("senjataData", JSON.stringify(dataSenjata));
}

// Tambah / Update senjata
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const newSenjata = {
    nama: namaInput.value.trim(),
    asal: asalInput.value.trim(),
    gambar: gambarInput.value.trim(),
    deskripsi: deskripsiInput.value.trim(),
  };

  const editIndex = idInput.value;

  if (editIndex) {
    dataSenjata[editIndex] = newSenjata;
    document.getElementById("form-title").textContent = "Tambah Senjata Baru";
    cancelBtn.style.display = "none";
  } else {
    dataSenjata.push(newSenjata);
  }

  localStorage.setItem("senjataData", JSON.stringify(dataSenjata));
  tampilkanSenjata(dataSenjata);
  form.reset();
  idInput.value = "";
});

// Edit senjata
function editSenjata(index) {
  const s = dataSenjata[index];
  namaInput.value = s.nama;
  asalInput.value = s.asal;
  gambarInput.value = s.gambar;
  deskripsiInput.value = s.deskripsi;
  idInput.value = index;

  document.getElementById("form-title").textContent = "Edit Senjata";
  cancelBtn.style.display = "inline-block";
}

// Batal edit
cancelBtn.addEventListener("click", () => {
  form.reset();
  idInput.value = "";
  cancelBtn.style.display = "none";
  document.getElementById("form-title").textContent = "Tambah Senjata Baru";
});

// Hapus senjata
function hapusSenjata(index) {
  if (confirm(`Hapus ${dataSenjata[index].nama}?`)) {
    dataSenjata.splice(index, 1);
    localStorage.setItem("senjataData", JSON.stringify(dataSenjata));
    tampilkanSenjata(dataSenjata);
  }
}

// Render awal
tampilkanSenjata(dataSenjata);
generateFilterOptions();
