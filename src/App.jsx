import { useState } from "react";

function App() {
  const [lang, setLang] = useState("tr");

  const texts = {
    tr: {
      about: "Hakkımda",
      projects: "Projeler",
      contact: "İletişim",

      about1: "React ve JavaScript kullanarak kullanıcı odaklı, responsive ve modern web arayüzleri geliştiriyorum.",
      about2: "API entegrasyonu, state yönetimi ve Supabase ile authentication gibi gerçek proje ihtiyaçları üzerinde çalışıyorum.",

      button: "Projeleri Gör",
      title: "Frontend Developer",

      phone: "Telefon",

      cv: "CV İndir",
      cvFile: "/cv-tr.pdf",

      demo: "Canlı Demo",

      techTitle: "Teknolojiler",
      point1Title: "Frontend Development",
      point1Text: "React, JavaScript ve responsive UI geliştirme.",
      point2Title: "API & Integration",
      point2Text: "REST API, veri yönetimi ve uygulama entegrasyonları.",
      point3Title: "Real-world Projects",
      point3Text: "Gerçek kullanım senaryolarına yönelik projeler geliştiriyorum.",

      projectsData: [
        {
          title: "Task App",
          desc:
            "Görev yönetimi, tekrar eden görevler, alt görevler ve üretkenlik analizleri içeren görev uygulaması.",
          tech: ["React", "Supabase", "JavaScript"],
          link: "https://task-app-tau-six.vercel.app/",
          github: "https://github.com/Lilith442/task-app",
          image: "/task.png"
        },

        {
          title: "Game Explorer",
          desc:
            "RAWG API kullanarak geliştirilen oyun arama ve keşif uygulaması.",
          tech: ["React", "JavaScript", "REST API"],
          link: "https://game-explorer-nine.vercel.app/",
          github: "https://github.com/Lilith442/game-explorer",
          image: "/game.png"
        }
      ]
    },

    en: {
      about: "About",
      projects: "Projects",
      contact: "Contact",

      about1: "I build user-focused, responsive and modern web interfaces using React and JavaScript.",
      about2: "I work with API integration, state management and real-world features such as authentication with Supabase.",

      button: "View Projects",
      title: "Frontend Developer",

      phone: "Phone",

      cv: "Download CV",
      cvFile: "/cv-en.pdf",

      demo: "Live Demo",
      techTitle: "Technologies",
      point1Title: "Frontend Development",
      point1Text: "React, JavaScript and responsive UI development.",
      point2Title: "API & Integration",
      point2Text: "REST APIs, data management and application integrations.",
      point3Title: "Real-world Projects",
      point3Text: "Building projects focused on real-world use cases.",

      projectsData: [
        {
          title: "Task App",
          desc:
            "A task management application with recurring tasks, subtasks and productivity analytics.",
          tech: ["React", "Supabase", "JavaScript"],
          link: "https://task-app-tau-six.vercel.app/",
          github: "https://github.com/Lilith442/task-app",
          image: "/task.png"
        },

        {
          title: "Game Explorer",
          desc:
            "A game search and discovery application built with the RAWG API.",
          tech: ["React", "JavaScript", "REST API"],
          link: "https://game-explorer-nine.vercel.app/",
          github: "https://github.com/Lilith442/game-explorer",
          image: "/game.png"
        }
      ]
    }
  };

  return (
    <div id="top">

      <nav>
        <h2>
          <a
            href="https://portfolio-mauve-alpha-87.vercel.app/"
            className="logo"
          >
            Ebrar Büşra Kısa
          </a>
        </h2>

        <div className="nav-right">

          <div className="nav-links">

            <a href="#about">
              {texts[lang].about}
            </a>

            <a href="#projects">
              {texts[lang].projects}
            </a>

            <a href="#contact">
              {texts[lang].contact}
            </a>

          </div>

          <div className="lang-switch">

            <button
              className={lang === "tr" ? "active" : ""}
              onClick={() => setLang("tr")}
            >
              TR
            </button>

            <button
              className={lang === "en" ? "active" : ""}
              onClick={() => setLang("en")}
            >
              EN
            </button>

          </div>

        </div>
      </nav>


      <header className="hero">

        <div className="hero-content">

          <img
            src="/profile.jpg"
            alt="profile"
            className="hero-img"
          />

          <h1>
            Ebrar Büşra Kısa
          </h1>

          <p>
            {texts[lang].title}
          </p>

          <div className="hero-buttons">

            <a
              href="#contact"
              className="hero-btn secondary"
            >
              {texts[lang].contact}
            </a>

            <a
              href="#projects"
              className="hero-btn main"
            >
              {texts[lang].button}
            </a>

            <a
              href="#about"
              className="hero-btn secondary"
            >
              {texts[lang].about}
            </a>

          </div>

          <div className="socials">

            <a
              href="https://github.com/Lilith442"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>

            <a
              href="https://linkedin.com/in/ebrar-büşra-kısa-83395b243"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>

          </div>

        </div>

      </header>


<section id="about">
  <h1>{texts[lang].about}</h1>

  <div className="about-box">

    <div className="about-text">
      <p>{texts[lang].about1}</p>

      <p>{texts[lang].about2}</p>

      <div className="about-points">
        <div className="about-point">
          <span>⚛️</span>
          <div>
            <strong>{texts[lang].point1Title}</strong>
            <p>{texts[lang].point1Text}</p>
          </div>
        </div>

        <div className="about-point">
          <span>🔗</span>
          <div>
            <strong>{texts[lang].point2Title}</strong>
            <p>{texts[lang].point2Text}</p>
          </div>
        </div>

        <div className="about-point">
          <span>🚀</span>
          <div>
            <strong>{texts[lang].point3Title}</strong>
            <p>{texts[lang].point3Text}</p>
          </div>
        </div>
      </div>
    </div>

    <div className="about-side">

      <h3>{texts[lang].techTitle}</h3>

      <div className="about-tags">
        <span>React</span>
        <span>JavaScript</span>
        <span>HTML</span>
        <span>CSS</span>
        <span>Supabase</span>
        <span>REST API</span>
      </div>

      <a href={texts[lang].cvFile} download className="cv-btn">
        📄 {texts[lang].cv}
      </a>

    </div>

  </div>
</section>


      <section className="hire">

        <h2>
          {lang === "tr"
            ? "Benimle Çalışmak İster misiniz?"
            : "Want to work with me?"}
        </h2>

        <p>
          {lang === "tr"
            ? "Gerçek projelerde değer katabileceğim, öğrenmeye açık bir frontend developerım."
            : "I’m a frontend developer ready to contribute to real-world projects and grow with your team."}
        </p>

        <div className="hire-buttons">

          <a
            href="mailto:ebrarbusrak@gmail.com"
            className="hire-btn"
          >
            📩{" "}
            {lang === "tr"
              ? "Email Gönder"
              : "Send Email"}
          </a>

          <a
            href="#projects"
            className="hire-btn secondary"
          >
            🚀{" "}
            {lang === "tr"
              ? "Projelerimi Gör"
              : "View Projects"}
          </a>

        </div>

      </section>


      <section id="projects">

        <h1>
          {texts[lang].projects}
        </h1>

        <div className="projects">

          {texts[lang].projectsData.map((proj, index) => (

            <div
              className="card"
              key={index}
            >

              <div
                className="card-bg"
                style={{
                  backgroundImage: `url(${proj.image})`
                }}
              ></div>


              <div className="card-overlay">

                <h3>
                  {proj.title}
                </h3>

                <p>
                  {proj.desc}
                </p>


                <div className="project-tech">

                  {proj.tech.map((tech) => (

                    <span key={tech}>
                      {tech}
                    </span>

                  ))}

                </div>


                <div className="project-links">

                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-btn"
                  >
                    🚀 {texts[lang].demo}
                  </a>


                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-btn github-btn"
                  >
                    GitHub
                  </a>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>


      <section
        id="contact"
        className="center"
      >

        <h1>
          {texts[lang].contact}
        </h1>

        <p>
          Email:{" "}
          <a href="mailto:ebrarbusrak@gmail.com">
            ebrarbusrak@gmail.com
          </a>
        </p>

        <p>
          {texts[lang].phone}: +90 539 731 4369
        </p>

      </section>

    </div>
  );
}

export default App;