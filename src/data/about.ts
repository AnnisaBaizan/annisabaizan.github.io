export interface HobbyItem {
  icon: string;
  name: string;
  note: string;
}

export interface TraitCard {
  icon: string;
  title: string;
  badge: string;
  body: string;
}

export interface FriendQuote {
  text: string;
  from: string;
}

export const ABOUT_HOBBIES: HobbyItem[] = [
  { icon: "🔭", name: "Astronomi · Psikologi · Filsafat", note: "Semesta, manusia, dan makna. Tiga hal berbeda — satu ketertarikan yang sama." },
  { icon: "✂️", name: "Crafting & Kerajinan", note: "Kadang ekspresi yang paling jujur tidak butuh kata-kata." },
  { icon: "🎵", name: "Menyanyi", note: "Bukan untuk didengar semua orang. Cukup untuk diri sendiri — dan orang yang tepat." },
  { icon: "💻", name: "Problem Solving", note: "Belum tamat kalau masalah belum selesai. Berjam-jam di depan layar bukan beban — ini mode." },
  { icon: "✍️", name: "Menulis", note: "Cara lain untuk memproses — pikiran yang terlalu penuh untuk disimpan sendiri." },
  { icon: "📖", name: "Membaca & Riset", note: "Satu pertanyaan membuka sepuluh pertanyaan lain. Tidak apa-apa — itu yang menarik." },
];

export const ABOUT_STRENGTHS: TraitCard[] = [
  { icon: "🧩", title: "Systematic Thinker", badge: "Default Mode", body: "Bukan sekadar terorganisir — ini cara default memproses informasi. Memisahkan yang diketahui dari yang diasumsikan, mencari pola, membangun kesimpulan dari dasar yang solid." },
  { icon: "🔥", title: "Dedikasi & Daya Juang", badge: "Verified", body: "Kalau sudah commit — all-in. Rela begadang, rela otak-atik berjam-jam, tidak berhenti sebelum menemukan solusi. Bukan karena semangat sesaat — tapi karena memang tidak bisa berhenti di tengah jalan." },
  { icon: "🎯", title: "Standar yang Datang dari Dalam", badge: "Self-Driven", body: "Tidak butuh diawasi untuk bekerja dengan baik. Standar bukan karena tekanan luar — tapi karena memang tidak nyaman menghasilkan sesuatu yang kurang dari yang seharusnya." },
  { icon: "🤝", title: "Empati yang Tidak Berisik", badge: "Hidden Strength", body: "Toleran terhadap perbedaan. Selalu mencari alasan di balik tindakan orang sebelum menghakimi. Bisa bersabar dengan orang yang membutuhkan — bukan karena terpaksa, tapi karena genuine care yang tidak selalu terlihat dari luar." },
  { icon: "🚀", title: "Independent Agency", badge: "Consistent Pattern", body: "Bergerak atas inisiatif sendiri — mendesain jalan belajar, mengambil keputusan, menyelesaikan masalah tanpa harus menunggu arahan. Mandiri bukan karena tidak butuh orang lain — tapi karena memang sudah terbiasa mencari jalan sendiri." },
  { icon: "✅", title: "Intellectual Honesty", badge: "Non-Negotiable", body: "Lebih memilih 'tidak tahu' daripada jawaban yang salah. Kebenaran di atas kenyamanan. Fakta di atas kecepatan." },
  { icon: "🌱", title: "Kapasitas Belajar yang Genuine", badge: "Terus Berkembang", body: "Bukan sekadar suka belajar — ada perubahan nyata setelah belajar. Dari ilmu komputer sampai psikologi, dari coding sampai memahami diri sendiri." },
  { icon: "🤲", title: "Tulus dalam Membantu", badge: "Verified by Others", body: "Kalau membantu, benar-benar membantu. Rela menjelaskan berulang-ulang, rela mencari pendekatan yang berbeda sampai orang benar-benar mengerti dan terbantu." },
];

export const ABOUT_WEAKNESSES: TraitCard[] = [
  { icon: "🐌", title: "Analysis Paralysis", badge: "High Impact", body: "Overthinking yang aktif menghambat eksekusi. Preference untuk thoroughness sebelum commit sering lebih mahal dari yang seharusnya." },
  { icon: "🪞", title: "Perfeksionisme yang Berbalik ke Dalam", badge: "High Impact", body: "Standar tinggi yang seharusnya jadi kekuatan — kadang berbalik menjadi tekanan terhadap diri sendiri." },
  { icon: "📏", title: "Ekspektasi Tinggi terhadap Orang Lain", badge: "Moderate", body: "Standar untuk diri sendiri yang tinggi kadang tanpa sadar menjadi tolok ukur untuk orang lain juga." },
  { icon: "🔧", title: "Susah Delegasi", badge: "High Impact", body: "Lebih mudah mengerjakan sendiri daripada menyerahkan ke orang lain. Efektif dalam jangka pendek — tapi tidak sustainable dalam jangka panjang." },
  { icon: "🎯", title: "Belajar Tanpa Arah yang Jelas", badge: "Perlu Kalibrasi", body: "Bisa sangat serius belajar — tapi tidak selalu terarah. Banyak yang dipelajari, tidak semuanya berujung pada aplikasi yang jelas." },
];

export const ABOUT_FRIENDS_SAY: FriendQuote[] = [
  { text: '"Seneng hal-hal yang kadang orang tidak ekspek, terus kalau sudah tahu — sampai detail dia tahu. Gila belajar, anaknya ambisius."', from: "Teman Dekat" },
  { text: '"Kalau sudah ada tujuan, pokoknya dia usahakan. Misalnya ada tugas, pasti dikerjakan sampai selesai."', from: "Rekan Kuliah" },
  { text: '"Tough but warm. Dingin di luar, hangat di dalam. Peduli dengan orang di sekelilingnya."', from: "Teman Lama" },
  { text: '"Baik pada orang-orang terdekat, apalagi kalau sudah akrab, sangat perhatian."', from: "Sahabat" },
];

/** Long-form quote blocks (first-impression vs reality column). */
export const ABOUT_FIRST_IMPRESSION_QUOTES: string[] = [
  '"Seneng hal-hal yang kadang orang tidak ekspek, terus kalau sudah tahu — sampai detail dia tahu."\n"Gila belajar, anaknya ambisius. Apa yang jadi persoalan kalau belum terpecahkan belum ada solusi, pasti terus belajar sampai persoalan itu bisa diselesaikan."',
  '"Kalau sudah ada tujuan, pokoknya dia usahakan."\n"Misalnya ada tugas, pasti dikerjakan sampai selesai."\n"Dedikasi, fokus, semangat juang, gigih, dan komitmen. Tidak mudah menyerah."',
  '"Tough but warm."\n"Dingin di luar, hangat di dalam."\n"Peduli dengan orang di sekelilingnya, walaupun mungkin caranya sedikit jutek — padahal di dalam hati sangat care sama orang."',
];
