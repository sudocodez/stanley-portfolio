import { SITE } from "../data/site";

export default function Hero() {
  const [firstWord, ...rest] = SITE.headline.split(" ");

  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow reveal">
              {SITE.role} · {SITE.location}
            </p>
            <h1 id="hero-title" className="reveal">
              {firstWord} <em>{rest.join(" ")}</em>
            </h1>
            <p className="hero-sub reveal">{SITE.tagline}</p>

            <div className="hero-actions reveal">
              <a href="#work" className="btn btn-primary">
                View my work
              </a>
              <a href="#about" className="btn btn-outline">
                About me
              </a>
            </div>

            <div className="hero-meta reveal">
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              <a href={SITE.github} target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
              <a href={SITE.linkedin} target="_blank" rel="noreferrer">
                LinkedIn ↗
              </a>
            </div>
          </div>

          <figure className="hero-portrait reveal">
            <img
              src="/images/stanley.jpg"
              alt="Portrait of Stanley Gerson"
              width={1129}
              height={1117}
            />
            <figcaption>{SITE.name} — {SITE.location}</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
