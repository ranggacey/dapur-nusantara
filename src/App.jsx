import { useState, useEffect } from 'react'

const MENU = [
  { cat: 'Hidangan Utama' },
  { name: 'Rendang Sapi', desc: 'Dimasak 8 jam dengan santan dan rempah pilihan.', price: 'Rp 55rb', tag: 'Best Seller' },
  { name: 'Nasi Goreng Kampung', desc: 'Nasi goreng smokey dengan telur dan kerupuk.', price: 'Rp 35rb', tag: null },
  { name: 'Sate Ayam Madura', desc: '10 tusuk dengan bumbu kacang medok.', price: 'Rp 40rb', tag: null },
  { name: 'Ayam Goreng Kalasan', desc: 'Ayam kampung ungkep gurih, sambal terasi.', price: 'Rp 38rb', tag: null },
  { cat: 'Pelengkap' },
  { name: 'Gado-gado Jakarta', desc: 'Sayuran segar dengan saus kacang creamy.', price: 'Rp 30rb', tag: null },
  { name: 'Soto Ayam Lamongan', desc: 'Kuah bening gurih dengan koya melimpah.', price: 'Rp 32rb', tag: null },
  { cat: 'Minuman & Penutup' },
  { name: 'Es Cendol Dawet', desc: 'Cendol homemade, santan, dan gula aren.', price: 'Rp 18rb', tag: 'Favorit' },
  { name: 'Es Teh / Jeruk', desc: 'Diseduh dari teh melati pilihan.', price: 'Rp 10rb', tag: null },
]

const GALLERY = [
  'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=800&auto=format&fit=crop',
]

const TESTIS = [
  { name: 'Hendra Gunawan', role: 'Kritikus Kuliner', text: 'Rendangnya juara — empuk, bumbunya meresap sampai ke dalam. Salah satu rendang terenak di Semarang.' },
  { name: 'Maya Kusuma', role: 'Pelanggan Setia', text: 'Tempat langganan keluarga tiap weekend. Pelayanannya ramah, makanannya nggak pernah mengecewakan.' },
  { name: 'Rudi Hartono', role: 'Food Vlogger', text: 'Sotonya autentik banget, koyanya melimpah. Suasananya juga nyaman buat kumpul keluarga besar.' },
]

function Icon({ name }) {
  const paths = {
    flame: <path d="M12 2s5 4.5 5 9a5 5 0 0 1-10 0c0-2 1-3.5 1-3.5S9 9 10 9c0-3 2-7 2-7z" />,
    leaf: <path d="M5 21c0-9 5-14 14-14 0 9-5 14-14 14zm0 0c3-3 6-6 9-9" />,
    star: <path d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.2 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8L12 2z" />,
    clock: <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zm0-13v5l3 2" />,
    pin: <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11zm0-8.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />,
    arrow: <path d="M5 12h14m-6-6l6 6-6 6" />,
    check: <path d="M4 12l5 5L20 6" />,
    phone: <path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.13.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.25a2 2 0 0 1 2.1-.45c.9.34 1.84.57 2.8.7A2 2 0 0 1 22 16.9z" />,
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {paths[name]}
    </svg>
  )
}

export default function App() {
  const [open, setOpen] = useState(false)
  const [sent, setSent] = useState(false)

  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } }),
      { threshold: 0.1 }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <div className="site">
      <nav className="nav">
        <div className="container nav-inner">
          <a className="logo" href="#"><span className="logo-mark"><Icon name="flame" /></span>Dapur Nusantara</a>
          <div className={`nav-links ${open ? 'show' : ''}`}>
            <a href="#tentang" onClick={() => setOpen(false)}>Tentang</a>
            <a href="#menu" onClick={() => setOpen(false)}>Menu</a>
            <a href="#testimoni" onClick={() => setOpen(false)}>Testimoni</a>
          </div>
          <div className="nav-cta">
            <a href="#reservasi" className="btn btn-primary">Reservasi Meja</a>
            <button className="burger" onClick={() => setOpen(!open)} aria-label="Menu"><span /><span /><span /></button>
          </div>
        </div>
      </nav>

      <header className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow reveal"><Icon name="leaf" /> Masakan Indonesia Autentik — Est. 2008</p>
            <h1 className="reveal">Cita Rasa Nusantara<br />yang <em>Tak Terlupakan.</em></h1>
            <p className="lead reveal">Resep warisan tiga generasi, rempah pilihan dari seluruh Indonesia, dimasak fresh setiap hari. Rasakan kehangatan rumah di setiap suapan.</p>
            <div className="hero-actions reveal">
              <a href="#reservasi" className="btn btn-primary">Reservasi Sekarang <Icon name="arrow" /></a>
              <a href="#menu" className="btn btn-ghost">Lihat Menu</a>
            </div>
            <div className="hero-stats reveal">
              <div><strong>17 thn</strong><span>Berdiri</span></div>
              <div><strong>60+</strong><span>Menu Autentik</span></div>
              <div><strong>4.8</strong><span>Rating</span></div>
            </div>
          </div>
          <div className="hero-visual reveal">
            <img className="hero-img" src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000&auto=format&fit=crop" alt="Suasana Dapur Nusantara" />
            <div className="float-card">
              <span className="stars"><Icon name="star" /><Icon name="star" /><Icon name="star" /><Icon name="star" /><Icon name="star" /></span>
              <div><strong>"Rendang terenak di Semarang"</strong><span>— 3.100+ ulasan Google</span></div>
            </div>
          </div>
        </div>
      </header>

      <section id="tentang" className="section about">
        <div className="container about-grid">
          <div className="about-imgs reveal">
            <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop" alt="Interior restoran" />
            <img src="https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=800&auto=format&fit=crop" alt="Hidangan mie" />
          </div>
          <div className="reveal">
            <p className="eyebrow">Cerita Kami</p>
            <h2>Resep Warisan,<br />Rasa <em>Istimewa.</em></h2>
            <p>Berawal dari warung kecil di tahun 2008, Dapur Nusantara tumbuh dari kecintaan pada masakan rumahan Indonesia. Setiap bumbu diulek manual, setiap santan diperas fresh — tanpa pengawet, tanpa penyedap buatan.</p>
            <p>Kini kami melayani ribuan keluarga setiap bulannya, dengan satu prinsip yang tak berubah: <strong>masak seperti untuk keluarga sendiri.</strong></p>
            <div className="about-points">
              <div><Icon name="check" />Bumbu ulek manual tiap pagi</div>
              <div><Icon name="check" />Bahan segar dari pasar lokal</div>
              <div><Icon name="check" />Halal & higienis terjamin</div>
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="section menu-sec">
        <div className="container narrow">
          <p className="eyebrow reveal">Menu Favorit</p>
          <h2 className="reveal">Pilihan <em>Terbaik</em> Kami</h2>
          <div className="menu-list">
            {MENU.map((m, i) => m.cat ? (
              <h3 key={i} className="menu-cat reveal">{m.cat}</h3>
            ) : (
              <div key={i} className="menu-item reveal">
                <div className="menu-item-head"><h4>{m.name}</h4>{m.tag && <span className="tag">{m.tag}</span>}</div>
                <p>{m.desc}</p>
                <div className="dots" /><span className="price">{m.price}</span>
              </div>
            ))}
          </div>
          <p className="menu-note reveal">Harga belum termasuk pajak 10%. Menu lengkap tersedia di restoran.</p>
        </div>
      </section>

      <section className="gallery">
        <div className="gallery-grid">
          {GALLERY.map((src, i) => (
            <img key={i} src={src} alt="Galeri Dapur Nusantara" loading="lazy" className="reveal" />
          ))}
        </div>
      </section>

      <section id="testimoni" className="section">
        <div className="container">
          <p className="eyebrow reveal">Kata Pelanggan</p>
          <h2 className="reveal">Cerita <em>Bahagia</em> Mereka</h2>
          <div className="testi-grid">
            {TESTIS.map((t, i) => (
              <article key={i} className="testi-card reveal">
                <span className="stars"><Icon name="star" /><Icon name="star" /><Icon name="star" /><Icon name="star" /><Icon name="star" /></span>
                <p>"{t.text}"</p>
                <div className="testi-user"><span className="avatar">{t.name[0]}</span><div><strong>{t.name}</strong><span>{t.role}</span></div></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="reservasi" className="reserv">
        <div className="container reserv-grid">
          <div className="reveal">
            <p className="eyebrow light">Reservasi</p>
            <h2>Amankan Meja<br />untuk <em>Momen Spesialmu.</em></h2>
            <p>Acara keluarga, buka puasa bersama, atau meeting kantor — kami siapkan yang terbaik.</p>
            <div className="reserv-info">
              <div><span><Icon name="phone" /></span><div><strong>(024) 123-4567</strong><span>Telepon / WhatsApp</span></div></div>
              <div><span><Icon name="clock" /></span><div><strong>10.00 – 22.00 WIB</strong><span>Setiap hari</span></div></div>
              <div><span><Icon name="pin" /></span><div><strong>Jl. Gajah Mada No. 21, Semarang</strong><span>Dekat Simpang Lima</span></div></div>
            </div>
          </div>
          <div className="reserv-form reveal">
            {sent ? (
              <div className="sent">
                <span className="sent-icon"><Icon name="check" /></span>
                <h3>Reservasi Diterima!</h3>
                <p>Terima kasih! Tim kami akan menghubungimu maksimal 1x24 jam untuk konfirmasi.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true) }}>
                <h3>Form Reservasi</h3>
                <label>Nama<input required placeholder="Nama lengkap" /></label>
                <div className="row">
                  <label>Tanggal<input required type="date" /></label>
                  <label>Jumlah Tamu<input required type="number" min="1" defaultValue="2" /></label>
                </div>
                <label>Catatan<textarea rows="3" placeholder="Contoh: meja dekat jendela, acara ulang tahun..." /></label>
                <button className="btn btn-primary" type="submit">Kirim Reservasi</button>
              </form>
            )}
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-grid">
          <div><a className="logo" href="#"><span className="logo-mark"><Icon name="flame" /></span>Dapur Nusantara</a><p>Masakan Indonesia autentik sejak 2008. Halal dan higienis.</p></div>
          <div><h4>Jelajah</h4><a href="#tentang">Tentang</a><a href="#menu">Menu</a><a href="#reservasi">Reservasi</a></div>
          <div><h4>Kontak</h4><a href="#">WhatsApp</a><a href="#">Instagram</a><a href="#">GoFood / GrabFood</a></div>
          <div><h4>Jam Buka</h4><p>Setiap Hari<br />10.00 – 22.00 WIB</p></div>
        </div>
        <div className="container footer-bottom"><p>© 2026 Dapur Nusantara. Seluruh hak cipta dilindungi.</p></div>
      </footer>
    </div>
  )
}
