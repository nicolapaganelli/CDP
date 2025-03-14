import { useEffect, useState } from 'react'
import CollectionItem from './components/CollectionItem'
import './App.css'

const collectionItems = [
  {
    id: 1,
    title: "Porsche × Cyberpunk 2077",
    description: "Experience the fusion of classic Porsche design with Night City's cyberpunk aesthetic",
    price: "$149",
    image: "/CDP/assets/images/6aa71b042c92f885fe6999e17fe14164_19c16a250d3a4c28ed07494587ee0bd8.jpg"
  },
  {
    id: 2,
    title: "Porsche  × Displate",
    description: "The electric future meets the digital realm in this stunning metal piece",
    price: "$149",
    image: "/CDP/assets/images/6ac300a3ebf813461fe7e4ac7641de53_1365ae901646677b017d08ca34650c55.jpg"
  },
  {
    id: 3,
    title: "Displate × Cyberpunk 2077",
    description: "A certified collectible",
    price: "$149",
    image: "/CDP/assets/images/limited_certificate.webp"
  }
];

function App() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app">
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <nav className="nav-container">
          <div className="logo-container">
            <img src="/CDP/assets/logos/Porsche_Logo.svg" alt="Porsche" className="logo" />
            <span className="collaboration-text">×</span>
            <img src="/CDP/assets/logos/Displate_logo.svg" alt="Displate" className="logo" />
            <span className="collaboration-text">×</span>
            <img src="/CDP/assets/logos/Cyberpunk_2077_logo.svg" alt="Cyberpunk 2077" className="logo" />
          </div>
          <div className="nav-links">
            <a href="#collection">Collection</a>
            <a href="#about">About</a>
            <a href="#gallery">Gallery</a>
            <a href="#purchase" className="cta-button">Buy Now</a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-video-container">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="hero-video"
            >
              <source src="/CDP/assets/videos/hero-video.mp4" type="video/mp4" />
            </video>
            <div className="hero-overlay"></div>
          </div>
          <div className="hero-content">
            <h1>Porsche × Displate × Cyberpunk 2077</h1>
            <p className="subtitle">Limited Edition Metal Art Collection</p>
            <a href="#collection" className="cta-button">Explore Collection</a>
          </div>
        </section>

        <section id="collection" className="collection">
          <h2>Limited Edition of 2000 Pieces</h2>
          <div className="collection-grid">
            {collectionItems.map(item => (
              <CollectionItem
                key={item.id}
                image={item.image}
                title={item.title}
                description={item.description}
                price={item.price}
              />
            ))}
          </div>
        </section>

        <section id="about" className="about">
          <div className="about-content">
            <h2>The Collaboration</h2>
            <p>Experience the fusion of automotive excellence and digital art in this exclusive collection. Each piece captures the essence of Porsche's iconic design language through the lens of Night City's cyberpunk aesthetic.</p>
          </div>
        </section>

        <section id="gallery" className="gallery">
          <h2>Gallery</h2>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img src="/CDP/assets/images/Gallery/add24fe7a9c7345a1c9a9db44a6fe945_7b32b423d749ef131ab4916d8b78a27a.jpg" alt="Gallery image 1" />
            </div>
            <div className="gallery-item">
              <img src="/CDP/assets/images/Gallery/7860628cc9fa9817167867963e2a5b61_834322bb0b7e9bff718af67a324ea08d.jpg" alt="Gallery image 2" />
            </div>
            <div className="gallery-item">
              <img src="/CDP/assets/images/Gallery/6c44b1f90addd2ffb169e8bf1ada0ecf_cd212e3bacc61af9aef00f82cdb7a158.jpg" alt="Gallery image 3" />
            </div>
          </div>
        </section>

        <section id="purchase" className="purchase">
          <h2>Own a Piece of History</h2>
          <p>Limited to 2000 pieces worldwide</p>
          <a href="https://displate.com/limited-edition/displate/8023130" className="cta-button">Buy Now</a>
        </section>
      </main>

      <footer>
        <div className="footer-content">
          <div className="footer-links">
            <a href="#collection">Collection</a>
            <a href="#about">About</a>
            <a href="#gallery">Gallery</a>
          </div>
          <div className="footer-logos">
            <img src="/CDP/assets/logos/Porsche_Logo.svg" alt="Porsche" />
            <img src="/CDP/assets/logos/Displate_logo.svg" alt="Displate" />
            <img src="/CDP/assets/logos/Cyberpunk_2077_logo.svg" alt="Cyberpunk 2077" />
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
