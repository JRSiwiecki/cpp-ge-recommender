import * as React from "react";
import Links from "./Links";

export default function About() {
  return (
    <div>
      <Links />
      <main className="about-container">
        <header>
          <h1>About + Credits</h1>
        </header>

        <section>
          <h1>Creator</h1>
          <p>Made by Joseph Siwiecki</p>

          <a
            href="https://www.linkedin.com/in/josephsiwiecki/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <br />

          <a
            href="https://github.com/JRSiwiecki/cpp-ge-recommender"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github Repository
          </a>
        </section>

        <section>
          <h2>Frameworks & Libraries</h2>

          <a
            href="https://react.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React (Front-end + Router)
          </a>

          <br />

          <a href="https://mui.com/" target="_blank" rel="noopener noreferrer">
            Material UI (Front-end)
          </a>

          <br />

          <a
            href="https://flask.palletsprojects.com/en/2.3.x/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Flask (Server)
          </a>

          <br />

          <a
            href="https://www.crummy.com/software/BeautifulSoup/"
            target="_blank"
            rel="noopener noreferrer"
          >
            BeautifulSoup (Scraper)
          </a>
        </section>

        <section>
          <h2>Data</h2>

          <a
            href="https://catalog.cpp.edu/preview_program.php?catoid=53&poid=13914"
            target="_blank"
            rel="noopener noreferrer"
          >
            California State Polytechnic University, Pomona - General Education
            Course List
          </a>

          <br />

          <a
            href="https://github.com/ZombiMigz/opencpp-api"
            target="_blank"
            rel="noopener noreferrer"
          >
            ZombiMigz - OpenCPP API
          </a>
        </section>

        <section>
          <h2>Other Helpful Applications</h2>

          <br />

          <a
            href="https://www.cppscheduler.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ZombiMigz - CPPScheduler.com
          </a>

          <br />

          <a
            href="https://broncodirect.me/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CPP CS Discord - BroncoDirectMe Extension
          </a>
        </section>

        <br />
      </main>

      <footer className="about-container">
        <section>
          <h3>Icons</h3>
          <a
            href="https://www.flaticon.com/free-icons/education"
            target="_blank"
            rel="noopener noreferrer"
            title="education icons"
          >
            Education icons created by Freepik - Flaticon
          </a>
        </section>

        <br />

        <section>
          <p>Not affiliated with CPP.</p>
        </section>
      </footer>
    </div>
  );
}
