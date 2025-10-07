const hero = document.querySelector(".hero");
const backgrounds = [
  "images/keris.png",
  "images/mandau.png",
  "images/rencong.png",
  "images/badik.png",
  "images/kujang.png",
  "images/parang.png",
  "images/sumpit.png",
  "images/tombak.png"
];
let currentBg = 0;

// Change background every 5 seconds
function changeBackground() {
  hero.style.backgroundImage = `url('${backgrounds[currentBg]}')`;
  currentBg = (currentBg + 1) % backgrounds.length;
}
setInterval(changeBackground, 5000);
changeBackground();

// container senjata
const container = document.getElementById("senjata-container");

function tampilkanSenjata(data) {
  container.innerHTML = "";
  data.forEach(s => {
    const card = `
      <div class="card">
        <img src="${s.gambar}" alt="${s.nama}">
        <h3>${s.nama}</h3>
        <p><strong>Asal:</strong> ${s.asal}</p>
        <p>${s.deskripsi}</p>
        <button class="btn">Lihat Detail</button>
      </div>
    `;
    container.innerHTML += card;
  });
}

tampilkanSenjata(senjata);

// search functionality
document.getElementById("search").addEventListener("input", function() {
  const keyword = this.value.toLowerCase();
  const hasil = senjata.filter(s =>
    s.nama.toLowerCase().includes(keyword) ||
    s.asal.toLowerCase().includes(keyword)
  );
  tampilkanSenjata(hasil);
});

// Render awal
tampilkanSenjata(dataSenjata);
generateFilterOptions();

