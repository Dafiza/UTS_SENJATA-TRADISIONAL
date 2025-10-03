const hero = document.querySelector(".hero");
const backgrounds = [
  "https://upload.wikimedia.org/wikipedia/commons/1/1e/Keris.jpg",
  "https://i.etsystatic.com/29935057/r/il/f6b8c7/3164965111/il_1140xN.3164965111_6stg.jpg", // Mandau
  "https://traverse.id/wp-content/uploads/2018/01/Rencong.jpg", // Rencong
  "https://dzargon.com/wp-content/uploads/2015/03/Badik-Bontoala-Makassar-Pamor-Bessi-Tua-Meteorit-768x576.jpg" // Badik
];
let currentBg = 0;

function changeBackground() {
  hero.style.backgroundImage = `url('${backgrounds[currentBg]}')`;
  currentBg = (currentBg + 1) % backgrounds.length;
}
setInterval(changeBackground, 5000); // ganti tiap 5 detik
changeBackground();

// Data senjata tradisional
const senjata = [
  {
    nama: "Keris",
    asal: "Jawa",
    gambar: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Keris.jpg",
    deskripsi: "Keris adalah senjata tradisional Jawa dengan bilah bermata ganda yang memiliki nilai spiritual dan simbolis."
  },
  {
    nama: "Mandau",
    asal: "Kalimantan",
    gambar: "https://i.etsystatic.com/29935057/r/il/f6b8c7/3164965111/il_1140xN.3164965111_6stg.jpg",
    deskripsi: "Mandau adalah senjata khas suku Dayak, digunakan dalam upacara adat dan pertempuran."
  },
  {
    nama: "Rencong",
    asal: "Aceh",
    gambar: "https://traverse.id/wp-content/uploads/2018/01/Rencong.jpg",
    deskripsi: "Rencong merupakan senjata tradisional Aceh yang melambangkan keberanian dan kekuatan."
  },
  {
    nama: "Badik",
    asal: "Sulawesi",
    gambar: "https://dzargon.com/wp-content/uploads/2015/03/Badik-Bontoala-Makassar-Pamor-Bessi-Tua-Meteorit-768x576.jpg",
    deskripsi: "Badik adalah senjata khas Bugis-Makassar yang sering digunakan sebagai simbol kehormatan."
  },
  {
    nama: "Kujang",
    asal: "Jawa Barat (Sunda)",
    gambar: "https://upload.wikimedia.org/wikipedia/commons/2/23/Kujang-Bogor.jpg",
    deskripsi: "Kujang merupakan senjata tradisional Sunda yang dipercaya memiliki kekuatan magis."
  },
  {
    nama: "Parang",
    asal: "Maluku",
    gambar: "https://th.bing.com/th/id/R.08a9e85f2a36512b1b1f5d3fdf7f1285?rik=%2bfgzcIYqFzVqbQ&riu=http%3a%2f%2f2.bp.blogspot.com%2f-E1ELoqHsbyw%2fVEO1vk56TfI%2fAAAAAAAAACw%2fRpHlqxBLwoY%2fs1600%2fsenjata-tradisional-maluku.jpg&ehk=3yvAm2qkVxjTOVSadYEdD5aPQTTaHoUxbb3WM3nxKRU%3d&risl=&pid=ImgRaw&r=0",
    deskripsi: "Parang adalah senjata khas Maluku yang sering digunakan dalam kegiatan sehari-hari maupun upacara."
  },
  {
    nama: "Sumpit",
    asal: "Kalimantan",
    gambar: "https://lzd-img-global.slatic.net/g/ff/kf/Scf1be80449fb4787bbe3198c117a0d85x.jpg_720x720q80.jpg",
    deskripsi: "Sumpit adalah senjata tiup khas Dayak yang digunakan untuk berburu."
  },
  {
    nama: "Tombak",
    asal: "Sumatera",
    gambar: "https://cdn.idntimes.com/content-images/community/2020/12/80099278-863877100708659-6784566542895983723-n-resize-76-bc64bce2714c25397713eba80e0d8920-590fd50b2c60de22fc48436b31f0b25d.jpg",
    deskripsi: "Tombak digunakan oleh masyarakat Sumatera dalam peperangan maupun upacara adat."
  }
];

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

// Fitur pencarian
document.getElementById("search").addEventListener("input", function() {
  const keyword = this.value.toLowerCase();
  const hasil = senjata.filter(s => 
    s.nama.toLowerCase().includes(keyword) || 
    s.asal.toLowerCase().includes(keyword)
  );
  tampilkanSenjata(hasil);
});
