import Script from "next/script";

export default function Home() {
  return (
    <div>
      <div className="up-nav">
        {/* Navigation*/}
        <nav
          className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
          id="sideNav"
        >
          <a className="navbar-brand js-scroll-trigger" href="#page-top">
            <span className="d-block d-lg-none">Titis Nur Azwanti</span>
            <span className="d-none d-lg-block">
              <img
                className="img-fluid img-profile rounded-circle mx-auto mb-2"
                src="assets/img/profilee.jpg"
                alt="..."
              />
            </span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#experience">
                  Experience
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#education">
                  Education
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#skills">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#interests">
                  Interests
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#awards">
                  Awards
                </a>
              </li>
            </ul>
          </div>
        </nav>
        {/* Page Content*/}
        <div className="container-fluid p-0">
          {/* About*/}
          <section className="resume-section" id="about">
            <div className="resume-section-content">
              <h1 className="mb-0">
                Titis Nur
                <span className="text-primary">Azwanti</span>
              </h1>
              <div className="subheading mb-5">
                Jl. Raya Situbondo · Banyuwangi, Jawa Timur · 68453 ·
                <a href="mailto:titisnurazwanti@gmail.com">
                  titisnurazwanti@gmail.com
                </a>
              </div>
              <p className="lead mb-5">
                I am a student at the PGRI Banyuwangi College of Computer
                Science. With a bachelor's degree in Informatics Engineering. I
                am currently in my final 4th semester.
              </p>
              <div className="social-icons">
                <a className="social-icon" href="#!">
                  <i className="fab fa-youtube" />
                </a>
                <a className="social-icon" href="#!">
                  <i className="fab fa-github" />
                </a>
                <a className="social-icon" href="#!">
                  <i className="fab fa-instagram" />
                </a>
                <a className="social-icon" href="#!">
                  <i className="fab fa-facebook-f" />
                </a>
              </div>
            </div>
          </section>
          <hr className="m-0" />
          {/* Experience*/}
          <section className="resume-section" id="experience">
            <div className="resume-section-content">
              <h2 className="mb-5">Experience</h2>
              <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">
                  <h3 className="mb-0">Mobile Apps Designer - FIGMA</h3>
                  <div className="subheading mb-3">Wedding Plan App</div>
                  <p>
                    Wedding plan is a platform that provides consulting services
                    for planning and implementing wedding events, with complete
                    facilities, professional services and competitive prices.
                    Here I am tasked with creating an application design that is
                    attractive and easily accessible to users.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <span className="text-primary">January 2022 - June 2022</span>
                </div>
              </div>
              <div className="d-flex flex-column flex-md-row justify-content-between">
                <div className="flex-grow-1">
                  <h3 className="mb-0">Build a Mobile App - FLUTTER</h3>
                  <div className="subheading mb-3">Wedding Plan App</div>
                  <p>
                    Wedding plan is a platform that provides consulting services
                    for planning and implementing wedding events, with complete
                    facilities, professional services and competitive prices.
                    Here we implement standard widgets / objects in designing
                    the user interface design of Android mobile-based
                    applications.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <span className="text-primary">January 2022 - June 2022</span>
                </div>
              </div>
            </div>
          </section>
          <hr className="m-0" />
          {/* Education*/}
          <section className="resume-section" id="education">
            <div className="resume-section-content">
              <h2 className="mb-5">Education</h2>
              <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">
                  <h3 className="mb-0">Taman Kanak - Kanak</h3>
                  <div className="subheading mb-3">TK Panca Bakti</div>
                </div>
                <div className="flex-shrink-0">
                  <span className="text-primary">2007 - 2009</span>
                </div>
              </div>
              <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">
                  <h3 className="mb-0">Madrasah Ibtidaiyah</h3>
                  <div className="subheading mb-3">MI Miftahul Huda</div>
                </div>
                <div className="flex-shrink-0">
                  <span className="text-primary">2009 - 2014</span>
                </div>
              </div>
              <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">
                  <h3 className="mb-0">Madrasah Tsanawiyah</h3>
                  <div className="subheading mb-3">MTs Negeri Wongsorejo</div>
                </div>
                <div className="flex-shrink-0">
                  <span className="text-primary">2014 - 2017</span>
                </div>
              </div>
              <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">
                  <h3 className="mb-0">Sekolah Menengah Kejuruan</h3>
                  <div className="subheading mb-3">SMK Negeri Wongsorejo</div>
                </div>
                <div className="flex-shrink-0">
                  <span className="text-primary">2017 - 2020</span>
                </div>
              </div>
              <div className="d-flex flex-column flex-md-row justify-content-between">
                <div className="flex-grow-1">
                  <h3 className="mb-0">Kuliah</h3>
                  <div className="subheading mb-3">
                    Sekolah Tinggi Ilmu Komputer PGRI Banyuwangi
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <span className="text-primary">2020 - Now</span>
                </div>
              </div>
            </div>
          </section>
          <hr className="m-0" />
          {/* Skills*/}
          <section className="resume-section" id="skills">
            <div className="resume-section-content">
              <h2 className="mb-5">Skills</h2>
              <div className="subheading mb-3">
                Programming Languages &amp; Tools
              </div>
              <ul className="list-inline dev-icons">
                <li className="list-inline-item">
                  <i className="fab fa-html5" />
                </li>
                <li className="list-inline-item">
                  <i className="fab fa-css3-alt" />
                </li>
                <li className="list-inline-item">
                  <i className="fab fa-js-square" />
                </li>
                <li className="list-inline-item">
                  <i className="fab fa-react" />
                </li>
                <li className="list-inline-item">
                  <i className="fab fa-node-js" />
                </li>
                <li className="list-inline-item">
                  <i className="fab fa-sass" />
                </li>
                <li className="list-inline-item">
                  <i className="fab fa-wordpress" />
                </li>
                <li className="list-inline-item">
                  <i className="fab fa-npm" />
                </li>
              </ul>
              <div className="subheading mb-3">Workflow</div>
              <ul className="fa-ul mb-0">
                <li>
                  <span className="fa-li">
                    <i className="fas fa-check" />
                  </span>
                  Mobile-First, Responsive Design
                </li>
                <li>
                  <span className="fa-li">
                    <i className="fas fa-check" />
                  </span>
                  Cross Browser Testing &amp; Debugging
                </li>
                <li>
                  <span className="fa-li">
                    <i className="fas fa-check" />
                  </span>
                  Cross Functional Teams
                </li>
                <li>
                  <span className="fa-li">
                    <i className="fas fa-check" />
                  </span>
                  Agile Development &amp; Scrum
                </li>
              </ul>
            </div>
          </section>
          <hr className="m-0" />
          {/* Interests*/}
          <section className="resume-section" id="interests">
            <div className="resume-section-content">
              <h2 className="mb-5">Interests</h2>
              <p>
                In addition to being a web developer and design, I enjoy my time
                watching a number of movies, dramas and television shows in the
                action and fantasy genres.
              </p>
              <p className="mb-0">
                My other interest is the interest in work related to accounting.
                There I felt that I found my true self. There are a lot of
                things that I do but are out of desire, but for this one thing
                it's very different and I can feel that way.
              </p>
            </div>
          </section>
          <hr className="m-0" />
          {/* Awards*/}
          <section className="resume-section" id="awards">
            <div className="resume-section-content">
              <h2 className="mb-5">Awards &amp; Certifications</h2>
              <ul className="fa-ul mb-0">
                <li>
                  <span className="fa-li">
                    <i className="fas fa-trophy text-warning" />
                  </span>
                  Google Analytics Certified Developer
                </li>
                <li>
                  <span className="fa-li">
                    <i className="fas fa-trophy text-warning" />
                  </span>
                  Mobile Web Specialist - Google Certification
                </li>
                <li>
                  <span className="fa-li">
                    <i className="fas fa-trophy text-warning" />
                  </span>
                  1<sup>st</sup>
                  Place - University of Colorado Boulder - Emerging Tech
                  Competition 2020
                </li>
                <li>
                  <span className="fa-li">
                    <i className="fas fa-trophy text-warning" />
                  </span>
                  1<sup>st</sup>
                  Place - University of Colorado Boulder - Adobe Creative Jam
                  2020 (UI Design Category)
                </li>
                <li>
                  <span className="fa-li">
                    <i className="fas fa-trophy text-warning" />
                  </span>
                  2<sup>nd</sup>
                  Place - University of Colorado Boulder - Emerging Tech
                  Competition 2021
                </li>
                <li>
                  <span className="fa-li">
                    <i className="fas fa-trophy text-warning" />
                  </span>
                  1<sup>st</sup>
                  Place - James Buchanan High School - Hackathon 2021
                </li>
                <li>
                  <span className="fa-li">
                    <i className="fas fa-trophy text-warning" />
                  </span>
                  3<sup>rd</sup>
                  Place - James Buchanan High School - Hackathon 2022
                </li>
              </ul>
            </div>
          </section>
        </div>
        {/* Bootstrap core JS*/}
        {/* Core theme JS*/}
      </div>
      <script
        src="https://use.fontawesome.com/releases/v6.1.0/js/all.js"
        crossOrigin="anonymous"
      ></script>
      <Script src="assets/js/scripts.js" />
    </div>
  );
}

export async function getServerSideProps(context) {
  const resp = await fetch("https://uas-back-end.herokuapp.com/");
  const hasil = await resp.json();

  return {
    props: { hasil: hasil.database }, // will be passed to the page component as props
  };
}
