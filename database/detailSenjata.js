const weaponDetails = {
  "keris": {
    name: "Keris",
    origin: "Jawa",
    type: "Senjata tikam",
    material: "Logam pamor",
    length: "30-40 cm",
    description: "Keris adalah senjata tradisional Jawa yang dikenal memiliki bilah berlekuk dan dipercaya memiliki kekuatan magis. Selain sebagai senjata, keris juga memiliki nilai spiritual dan simbol status sosial.",
    history: "Jejak awal keris dapat ditelusuri hingga abad ke-9 di relief Candi Borobudur. Namun, bentuk keris yang dikenal saat ini berkembang pesat pada masa Kerajaan Majapahit (abad ke-13 hingga ke-15) dan menyebar ke seluruh Nusantara. Keris diakui sebagai Warisan Budaya Takbenda Dunia oleh UNESCO pada tahun 2005.",
    image: "images/keris.png"
  },

  "badik": {
    name: "Badik",
    origin: "Sulawesi Selatan",
    type: "Senjata tikam",
    material: "Besi pamor dan kayu",
    length: "25-40 cm",
    description: "Badik adalah senjata tradisional masyarakat Bugis dan Makassar di Sulawesi Selatan. Senjata ini digunakan baik untuk pertahanan diri maupun sebagai simbol kehormatan. Bilahnya bisa lurus atau melengkung, tergantung asal pembuatannya.",
    history: "Sejarah badik sangat erat kaitannya dengan budaya maritim dan perniagaan suku Bugis-Makassar sejak berabad-abad lalu. Senjata ini menjadi lambang harga diri ('siri') dan keberanian seorang pria. Setiap daerah di Sulawesi Selatan mengembangkan bentuk dan pamor badik yang khas, mencerminkan identitas komunitasnya.",
    image: "images/badik.png"
  },

  "kujang": {
    name: "Kujang",
    origin: "Jawa Barat (Sunda)",
    type: "Senjata simbolik dan pertanian",
    material: "Besi pamor",
    length: "20-35 cm",
    description: "Kujang merupakan senjata khas masyarakat Sunda yang dipercaya memiliki kekuatan spiritual dan sering dianggap sebagai simbol ketajaman pikiran. Dahulu digunakan sebagai alat pertanian dan senjata bela diri.",
    history: "Kujang pertama kali dibuat sekitar abad ke-8 dan ke-9, awalnya sebagai peralatan pertanian. Pada masa Kerajaan Pajajaran (abad ke-14 hingga ke-16), kujang berkembang menjadi senjata pusaka yang memiliki nilai filosofis dan spiritual tinggi, melambangkan kesuburan dan kekuatan.",
    image: "images/kujang.png"
  },

  "mandau": {
    name: "Mandau",
    origin: "Kalimantan (Suku Dayak)",
    type: "Senjata tebas",
    material: "Besi, kayu, dan tanduk rusa",
    length: "50-70 cm",
    description: "Mandau adalah senjata khas suku Dayak di Kalimantan yang digunakan untuk berburu dan berperang. Mandau memiliki ukiran khas di gagangnya dan dipercaya memiliki roh penjaga yang memberi perlindungan bagi pemiliknya.",
    history: "Mandau secara turun-temurun menjadi senjata utama dan simbol jati diri suku Dayak. Sejarahnya terkait erat dengan tradisi 'Ngayau' (perburuan kepala) di masa lalu. Proses pembuatannya sangat sakral dan seringkali melibatkan ritual adat untuk mengisi mandau dengan kekuatan spiritual.",
    image: "images/mandau.png"
  },

  "parang": {
    name: "Parang",
    origin: "Maluku dan Nusa Tenggara",
    type: "Senjata tebas dan alat kerja",
    material: "Besi dan kayu",
    length: "40-60 cm",
    description: "Parang digunakan secara luas di Indonesia bagian timur, baik sebagai alat untuk membuka hutan, memotong kayu, maupun sebagai senjata perang. Desainnya sederhana namun sangat fungsional dan tangguh.",
    history: "Parang adalah salah satu alat tertua dan paling mendasar dalam kebudayaan Austronesia. Sejarahnya sebagai alat kerja pertanian dan pembukaan lahan telah berlangsung selama ribuan tahun. Dalam sejarah peperangan antar suku di Maluku, parang seperti 'Parang Salawaku' menjadi senjata ikonik yang digunakan bersama perisai.",
    image: "images/parang.png"
  },

  "rencong": {
    name: "Rencong",
    origin: "Aceh (Sumatera)",
    type: "Senjata tikam",
    material: "Logam dan gading/tanduk",
    length: "20-30 cm",
    description: "Rencong adalah senjata tradisional rakyat Aceh yang menjadi simbol keberanian dan kehormatan. Bentuknya sedikit melengkung dan sering diselipkan di pinggang sebagai tanda kesiapsiagaan seorang pejuang.",
    history: "Rencong telah menjadi bagian dari budaya Aceh sejak masa kesultanan-kesultanan Islam seperti Kesultanan Samudera Pasai dan Kesultanan Aceh Darussalam. Senjata ini menjadi simbol perlawanan rakyat Aceh melawan penjajah, terutama dalam Perang Aceh melawan Belanda, menjadikannya lambang patriotisme dan kegigihan.",
    image: "images/rencong.png"
  },

  "sumpit": {
    name: "Sumpit",
    origin: "Kalimantan",
    type: "Senjata jarak jauh",
    material: "Bambu dan kayu keras",
    length: "100-200 cm",
    description: "Sumpit digunakan oleh suku-suku di Kalimantan untuk berburu dan bertempur. Anak sumpit sering dilengkapi racun alami dari tumbuhan hutan, membuatnya sangat mematikan meskipun terlihat sederhana.",
    history: "Sumpit adalah senjata kuno yang telah digunakan oleh suku-suku asli di hutan hujan tropis di seluruh dunia, termasuk Kalimantan. Sejarahnya berawal dari kebutuhan berburu hewan secara senyap di dalam hutan lebat. Keahlian menggunakan sumpit diwariskan dari generasi ke generasi sebagai keterampilan bertahan hidup yang vital.",
    image: "images/sumpit.png"
  },

  "tombak": {
    name: "Tombak",
    origin: "Sumatera",
    type: "Senjata tikam dan lempar",
    material: "Besi dan kayu",
    length: "150-250 cm",
    description: "Tombak merupakan senjata serbaguna yang digunakan di banyak daerah Indonesia, termasuk Sumatera. Senjata ini efektif untuk pertempuran jarak dekat maupun lempar, dan memiliki peran penting dalam upacara adat.",
    history: "Tombak adalah salah satu senjata tertua dalam peradaban manusia. Di Nusantara, tombak telah digunakan sejak zaman prasejarah. Pada era kerajaan seperti Sriwijaya di Sumatera, tombak menjadi senjata utama bagi pasukan infanteri. Banyak pusaka kerajaan yang berbentuk tombak dan diyakini memiliki kekuatan magis serta nilai historis yang tinggi.",
    image: "images/tombak.png"
  },

    "golok": {
    name: "Golok",
    origin: "Betawi (Jawa Barat)",
    type: "Senjata tebas dan alat kerja",
    material: "Besi dan kayu",
    length: "30-60 cm",
    description: "Golok adalah senjata sekaligus alat sehari-hari masyarakat Betawi dan Sunda. Fungsinya beragam, mulai dari berkebun, berburu, hingga bela diri.",
    history: "Golok telah lama digunakan oleh masyarakat Jawa Barat, terutama Betawi. Dalam sejarah, golok identik dengan jawara Betawi sebagai simbol keberanian dan keteguhan. Hingga kini, golok masih digunakan dalam seni bela diri silat serta menjadi ikon budaya Betawi.",
    image: "images/golok.png"
  },
  
  "klewang": {
    name: "Klewang",
    origin: "Sumatera (Melayu)",
    type: "Senjata tebas",
    material: "Besi dan kayu",
    length: "50-70 cm",
    description: "Klewang adalah senjata tradisional Melayu berbentuk seperti pedang pendek, digunakan dalam peperangan dan pertahanan diri.",
    history: "Klewang banyak digunakan di Sumatera, terutama oleh masyarakat Melayu pada masa kerajaan-kerajaan pesisir. Pada masa kolonial Belanda, klewang juga diproduksi massal untuk keperluan militer Hindia Belanda, sehingga dikenal luas hingga ke luar negeri.",
    image: "images/klewang.png"
  }
};
