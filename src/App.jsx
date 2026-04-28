import { useState } from "react";

function App() {
  const [lang, setLang] = useState("tr");

  const texts = {
    tr: {
      about: "Hakkımda",
      projects: "Projeler",
      contact: "İletişim",
      about1: "React ile kullanıcı odaklı arayüzler geliştiriyorum.",
      about2: "API entegrasyonu, state yönetimi ve modern UI tasarımlarına odaklanıyorum.",
      button: "Projeleri Gör",
      title: "Frontend Developer",
      projectsData: [
        {
          title: "Game Explorer",
          desc: "Oyun arama ve keşif uygulaması",
          link: "https://game-explorer-nine.vercel.app",
          image: "/game.png"
        },
        {
          title: "Task App",
          desc: "Görev ve not takip uygulaması",
          link: "https://task-app-tau-six.vercel.app/",
          image: "/task.png"
        }
      ]
    },
    en: {
      about: "About",
      projects: "Projects",
      contact: "Contact",
      about1: "I build user-focused interfaces with React.",
      about2: "Focused on API integration, state management and modern UI design.",
      button: "View Projects",
      title: "Frontend Developer (React)",
      projectsData: [
        {
          title: "Game Explorer",
          desc: "Game search and discovery app",
          link: "https://game-explorer-nine.vercel.app",
          image: "/game.png"
        },
        {
          title: "Task App",
          desc: "Task and note tracking app",
          link: "https://task-app-tau-six.vercel.app/",
          image: "/task.png"
        }
      ]
    }
  };

  return (
    <div>
      {/* NAV */}
      <nav>
        <h2>Ebrar Büşra Kısa</h2>

        <div className="nav-right">
          <div className="nav-links">
            <a href="#projects">{texts[lang].projects}</a>
            <a href="#contact">{texts[lang].contact}</a>
          </div>

          <div className="lang-switch">
            <button onClick={() => setLang("tr")}>TR</button>
            <button onClick={() => setLang("en")}>EN</button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header className="hero">
        <div className="hero-content">
          <img src="/profile.jpg" alt="profile" className="hero-img" />

          <h1>Ebrar Büşra Kısa</h1>
          <p>{texts[lang].title}</p>

          <div className="hero-buttons">
            <a href="#contact" className="hero-btn secondary">
              {texts[lang].contact}
            </a>
            <a href="#projects" className="hero-btn main">
              {texts[lang].button}
            </a>
            <a href="#about" className="hero-btn secondary">
              {texts[lang].about}
            </a>
          </div>
          <div className="socials">
            <a href="https://github.com/Lilith442" target="_blank" rel="noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/ebrar-büşra-kısa-83395b243" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </header>

      {/* ABOUT */}
      <section id="about">
        <h1>{texts[lang].about}</h1>
        <div className="about-box">
          <p>{texts[lang].about1}</p>
          <p>{texts[lang].about2}</p>
          
        <div className="about-tags">
          <span>React</span>
          <span>JavaScript</span>
          <span>HTML</span>
          <span>CSS</span>
        </div>
        <a href="CV_LINKİN" className="cv-btn">CV İndir</a>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <h1>{texts[lang].projects}</h1>

        <div className="projects">
          {texts[lang].projectsData.map((proj, index) => (
            <a
              href={proj.link}
              className="card"
              key={index}
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* 🔥 BACKGROUND IMAGE */}
              <div
                className="card-bg"
                style={{ backgroundImage: `url(${proj.image})` }}
              ></div>

              {/* 🔥 CONTENT */}
              <div className="card-overlay">
                <h3>{proj.title}</h3>
                <p>{proj.desc}</p>
                <span className="card-btn">Live Demo</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <h1>{texts[lang].contact}</h1>
        <p>Email: ebrarbusrak@gmail.com</p>
        <p>Telefon: +90 539 731 4369</p>
      </section>
    </div>
  );
}

export default App;