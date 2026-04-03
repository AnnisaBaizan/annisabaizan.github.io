import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import ScrambleText from "@/components/ui/ScrambleText";

export const metadata: Metadata = {
  title: "About — Annisa Baizan",
  description: "Systematic thinker. Dingin di luar, hangat di dalam.",
};

const HOBBIES = [
  { icon: "🔭", name: "Astronomi · Psikologi · Filsafat", note: "Semesta, manusia, dan makna. Tiga hal berbeda — satu ketertarikan yang sama." },
  { icon: "✂️", name: "Crafting & Kerajinan",             note: "Kadang ekspresi yang paling jujur tidak butuh kata-kata." },
  { icon: "🎵", name: "Menyanyi",                          note: "Bukan untuk didengar semua orang. Cukup untuk diri sendiri — dan orang yang tepat." },
  { icon: "💻", name: "Problem Solving",                   note: "Belum tamat kalau masalah belum selesai. Berjam-jam di depan layar bukan beban — ini mode." },
  { icon: "✍️", name: "Menulis",                           note: "Cara lain untuk memproses — pikiran yang terlalu penuh untuk disimpan sendiri." },
  { icon: "📖", name: "Membaca & Riset",                   note: "Satu pertanyaan membuka sepuluh pertanyaan lain. Tidak apa-apa — itu yang menarik." },
];

const STRENGTHS = [
  { icon: "🧩", title: "Systematic Thinker",               badge: "Default Mode",      body: "Bukan sekadar terorganisir — ini cara default memproses informasi. Memisahkan yang diketahui dari yang diasumsikan, mencari pola, membangun kesimpulan dari dasar yang solid." },
  { icon: "🔥", title: "Dedikasi & Daya Juang",            badge: "Verified",          body: "Kalau sudah commit — all-in. Rela begadang, rela otak-atik berjam-jam, tidak berhenti sebelum menemukan solusi. Bukan karena semangat sesaat — tapi karena memang tidak bisa berhenti di tengah jalan." },
  { icon: "🎯", title: "Standar yang Datang dari Dalam",    badge: "Self-Driven",       body: "Tidak butuh diawasi untuk bekerja dengan baik. Standar bukan karena tekanan luar — tapi karena memang tidak nyaman menghasilkan sesuatu yang kurang dari yang seharusnya." },
  { icon: "🤝", title: "Empati yang Tidak Berisik",         badge: "Hidden Strength",   body: "Toleran terhadap perbedaan. Selalu mencari alasan di balik tindakan orang sebelum menghakimi. Bisa bersabar dengan orang yang membutuhkan — bukan karena terpaksa, tapi karena genuine care yang tidak selalu terlihat dari luar." },
  { icon: "🚀", title: "Independent Agency",                badge: "Consistent Pattern",body: "Bergerak atas inisiatif sendiri — mendesain jalan belajar, mengambil keputusan, menyelesaikan masalah tanpa harus menunggu arahan. Mandiri bukan karena tidak butuh orang lain — tapi karena memang sudah terbiasa mencari jalan sendiri." },
  { icon: "✅", title: "Intellectual Honesty",              badge: "Non-Negotiable",    body: "Lebih memilih 'tidak tahu' daripada jawaban yang salah. Kebenaran di atas kenyamanan. Fakta di atas kecepatan." },
  { icon: "🌱", title: "Kapasitas Belajar yang Genuine",    badge: "Terus Berkembang",  body: "Bukan sekadar suka belajar — ada perubahan nyata setelah belajar. Dari ilmu komputer sampai psikologi, dari coding sampai memahami diri sendiri." },
  { icon: "🤲", title: "Tulus dalam Membantu",             badge: "Verified by Others", body: "Kalau membantu, benar-benar membantu. Rela menjelaskan berulang-ulang, rela mencari pendekatan yang berbeda sampai orang benar-benar mengerti dan terbantu." },
];

const WEAKNESSES = [
  { icon: "🐌", title: "Analysis Paralysis",                      badge: "High Impact",     body: "Overthinking yang aktif menghambat eksekusi. Preference untuk thoroughness sebelum commit sering lebih mahal dari yang seharusnya." },
  { icon: "🪞", title: "Perfeksionisme yang Berbalik ke Dalam",   badge: "High Impact",     body: "Standar tinggi yang seharusnya jadi kekuatan — kadang berbalik menjadi tekanan terhadap diri sendiri." },
  { icon: "📏", title: "Ekspektasi Tinggi terhadap Orang Lain",   badge: "Moderate",        body: "Standar untuk diri sendiri yang tinggi kadang tanpa sadar menjadi tolok ukur untuk orang lain juga." },
  { icon: "🔧", title: "Susah Delegasi",                          badge: "High Impact",     body: "Lebih mudah mengerjakan sendiri daripada menyerahkan ke orang lain. Efektif dalam jangka pendek — tapi tidak sustainable dalam jangka panjang." },
  { icon: "🎯", title: "Belajar Tanpa Arah yang Jelas",           badge: "Perlu Kalibrasi", body: "Bisa sangat serius belajar — tapi tidak selalu terarah. Banyak yang dipelajari, tidak semuanya berujung pada aplikasi yang jelas." },
];

const FRIENDS_SAY = [
  { text: "\"Seneng hal-hal yang kadang orang tidak ekspek, terus kalau sudah tahu — sampai detail dia tahu. Gila belajar, anaknya ambisius.\"", from: "Teman Dekat" },
  { text: "\"Kalau sudah ada tujuan, pokoknya dia usahakan. Misalnya ada tugas, pasti dikerjakan sampai selesai.\"", from: "Rekan Kuliah" },
  { text: "\"Tough but warm. Dingin di luar, hangat di dalam. Peduli dengan orang di sekelilingnya.\"", from: "Teman Lama" },
  { text: "\"Baik pada orang-orang terdekat, apalagi kalau sudah akrab, sangat perhatian.\"", from: "Sahabat" },
];

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="ab-hero">
        <div className="ab-hero-left">
          <div className="ab-eyebrow"><ScrambleText>About Annisa Baizan</ScrambleText></div>
          <h1 className="ab-name">
            Tough.<br />
            <em>Warm.</em><br />
            Working on it.
          </h1>
          <p className="ab-tagline">
            Systematic thinker yang lebih dalam dari yang terlihat.<br />
            Dingin di luar, hangat di dalam — tapi butuh waktu untuk sampai ke sana.
          </p>
          <div className="ab-tags">
            {["Computer Science · BINUS","ASN","INFJ","Independent","Evidence-Based"].map(t => (
              <span key={t} className="ab-tag">{t}</span>
            ))}
          </div>
        </div>
        <div className="ab-hero-right">
          <div className="ab-portrait">👤</div>
        </div>
      </section>

      {/* ── KESAN PERTAMA VS KENYATAAN ── */}
      <section className="ab-section ab-first">
        <div className="ab-section-inner">
          <div className="ab-section-label"><ScrambleText>Kesan Pertama vs Kenyataan</ScrambleText></div>
          <h2 className="ab-section-title">Yang Orang Lihat.<br />Yang Sebenarnya Ada.</h2>
          <div className="ab-two-col">
            <div>
              <div className="ab-prose">
                <p>Kesan pertama: <strong>pendiam, serius, sulit didekati.</strong><br />Mungkin terkesan cuek. Mungkin terkesan tidak tertarik.<br />Tapi diam bukan berarti kosong — dan jarak bukan berarti tidak mau dekat.</p>
                <p>Kenyataannya — satu benang merah yang mengikat semuanya:<br /><strong>tidak bisa setengah-setengah.</strong></p>
              </div>
              <div className="ab-divider" />
              <div className="ab-prose">
                <p><strong>01 — Tidak berhenti sebelum paham.</strong><br />Kalau sudah tertarik pada sesuatu, dikejar sampai ke akar.</p>
                <p><strong>02 — Tidak bisa kerja asal jadi.</strong><br />Yang dikerjakan, dikerjakan sungguh-sungguh. Standar bukan tuntutan dari luar — ini dari dalam.</p>
                <p><strong>03 — Hangat — tapi perlu waktu untuk sampai ke sana.</strong><br />Teman-teman yang sudah kenal bilang: care, tempat aman. Tapi untuk sampai ke sana butuh proses.</p>
              </div>
            </div>
            <div>
              {[
                "\"Seneng hal-hal yang kadang orang tidak ekspek, terus kalau sudah tahu — sampai detail dia tahu.\"\n\"Gila belajar, anaknya ambisius. Apa yang jadi persoalan kalau belum terpecahkan belum ada solusi, pasti terus belajar sampai persoalan itu bisa diselesaikan.\"",
                "\"Kalau sudah ada tujuan, pokoknya dia usahakan.\"\n\"Misalnya ada tugas, pasti dikerjakan sampai selesai.\"\n\"Dedikasi, fokus, semangat juang, gigih, dan komitmen. Tidak mudah menyerah.\"",
                "\"Tough but warm.\"\n\"Dingin di luar, hangat di dalam.\"\n\"Peduli dengan orang di sekelilingnya, walaupun mungkin caranya sedikit jutek — padahal di dalam hati sangat care sama orang.\"",
              ].map((q, i) => (
                <div key={i} className="ab-quote">{q}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── HOBI ── */}
      <section className="ab-section">
        <div className="ab-section-inner">
          <div className="ab-section-label"><ScrambleText>Di Luar Kode</ScrambleText></div>
          <h2 className="ab-section-title"><ScrambleText>Yang Jarang Ditampilkan</ScrambleText></h2>
          <p className="ab-section-lead">Ada sisi dari saya yang tidak langsung terlihat</p>
          <div className="ab-hobby-list">
            {HOBBIES.map(h => (
              <div key={h.name} className="ab-hobby-item">
                <span className="ab-hobby-icon">{h.icon}</span>
                <div className="ab-hobby-name"><ScrambleText>{h.name}</ScrambleText></div>
                <div className="ab-hobby-note">{h.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── KONTEKS ── */}
      <section className="ab-section" style={{background:"var(--bg-card)",borderTop:"1px solid var(--border-color)",borderBottom:"1px solid var(--border-color)"}}>
        <div className="ab-section-inner">
          <div className="ab-section-label"><ScrambleText>Konteks</ScrambleText></div>
          <h2 className="ab-section-title"><ScrambleText>Siapa, Di Mana, Mengerjakan Apa</ScrambleText></h2>
          <div className="ab-context-grid">
            <div className="ab-context-item">
              <div className="ab-context-label"><ScrambleText>Akademik</ScrambleText></div>
              <div className="ab-context-value"><ScrambleText>S1 Computer Science · BINUS</ScrambleText></div>
              <div className="ab-context-note">D3 Teknik Komputer lulus, lanjut S1. Termasuk self-directed curriculum di luar perkuliahan — bukan casual reading, tapi systematic study.</div>
            </div>
            <div className="ab-context-item">
              <div className="ab-context-label"><ScrambleText>Profesional</ScrambleText></div>
              <div className="ab-context-value"><ScrambleText>ASN</ScrambleText></div>
              <div className="ab-context-note">Dual-track: teknologi akademis + birokrasi pemerintahan. Multi-tracking yang demanding, dijalankan bersamaan.</div>
            </div>
            <div className="ab-context-item">
              <div className="ab-context-label"><ScrambleText>Tech Stack</ScrambleText></div>
              <div className="ab-context-value">Laravel · Vue.js · PHP · Python · Flask · FastAPI · MySQL · VB.NET · CodeIgniter</div>
              <div className="ab-context-note">Full-stack, health informatics &amp; institutional systems.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── KELEBIHAN ── */}
      <section className="ab-section">
        <div className="ab-section-inner">
          <div className="ab-section-label"><ScrambleText>Kelebihan</ScrambleText></div>
          <h2 className="ab-section-title"><ScrambleText>Yang Konsisten Ada</ScrambleText></h2>
          <p className="ab-section-lead">Dikonfirmasi oleh orang-orang di sekitar saya, bukan hanya self-assessment.</p>
          <div className="ab-cards">
            {STRENGTHS.map(s => (
              <div key={s.title} className="ab-card strength">
                <div className="ab-card-top">
                  <div className="ab-card-title">{s.icon} <ScrambleText>{s.title}</ScrambleText></div>
                  <span className="ab-card-badge cyan">{s.badge}</span>
                </div>
                <div className="ab-card-body">{s.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── KELEMAHAN ── */}
      <section className="ab-section" style={{background:"var(--bg-card)",borderTop:"1px solid var(--border-color)",borderBottom:"1px solid var(--border-color)"}}>
        <div className="ab-section-inner">
          <div className="ab-section-label"><ScrambleText>Kelemahan</ScrambleText></div>
          <h2 className="ab-section-title"><ScrambleText>Yang Masih Dikerjakan</ScrambleText></h2>
          <p className="ab-section-lead">Tidak ada yang sudah selesai hanya karena sudah diberi label. Ini masih aktif — dan sedang dihadapi.</p>
          <div className="ab-cards">
            {WEAKNESSES.map(w => (
              <div key={w.title} className="ab-card weakness">
                <div className="ab-card-top">
                  <div className="ab-card-title">{w.icon} <ScrambleText>{w.title}</ScrambleText></div>
                  <span className="ab-card-badge orange">{w.badge}</span>
                </div>
                <div className="ab-card-body">{w.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT FRIENDS SAY ── */}
      <section className="ab-section">
        <div className="ab-section-inner">
          <div className="ab-section-label"><ScrambleText>Kata Orang</ScrambleText></div>
          <h2 className="ab-section-title"><ScrambleText>Yang Orang Lain Bilang</ScrambleText></h2>
          <div className="ab-friend-grid">
            {FRIENDS_SAY.map((f, i) => (
              <div key={i} className="ab-friend-card">
                <div className="ab-friend-text">{f.text}</div>
                <div className="ab-friend-from">{f.from}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <div className="ab-cta">
        <h2 className="ab-cta-title"><ScrambleText>Mau Tahu Lebih?</ScrambleText></h2>
        <p className="ab-cta-sub">Lihat project-project yang pernah saya kerjakan, atau langsung reach out.</p>
        <div className="hero-cta" style={{justifyContent:"center"}}>
          <Link href="/projects" className="btn btn-primary btn-glow">⚗️ View Projects</Link>
          <Link href="/links"    className="btn btn-secondary">✉ Get in Touch</Link>
        </div>
      </div>

      <ScrollReveal />
    </>
  );
}
