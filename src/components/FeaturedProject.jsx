import { FEATURED_PROJECT } from "../data/projects";

export default function FeaturedProject() {
  return (
    <section id="work" aria-labelledby="work-title">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">Featured project</p>
          <h2 className="section-title" id="work-title">
            Real work, shipped for a real client.
          </h2>
          <p className="section-lead">
            One flagship project — built end to end, in production, with the
            story told honestly.
          </p>
        </div>

        <article className="project-card">
          <div className="project-media reveal">
            <span className="project-flag">Client project · live</span>
            <img
              src={FEATURED_PROJECT.image}
              alt={FEATURED_PROJECT.alt}
              loading="lazy"
            />
          </div>

          <div className="project-body reveal">
            <p className="eyebrow">{FEATURED_PROJECT.type}</p>
            <h3>{FEATURED_PROJECT.title}</h3>
            <p className="project-desc">{FEATURED_PROJECT.description}</p>

            <div className="project-stack">
              {FEATURED_PROJECT.stack.map((tech) => (
                <span className="tag" key={tech}>
                  {tech}
                </span>
              ))}
            </div>

            <ul className="project-desc" style={{ paddingLeft: "1.25rem" }}>
              {FEATURED_PROJECT.highlights.map((h) => (
                <li
                  key={h}
                  style={{ listStyle: "disc", marginBottom: "0.5rem" }}
                >
                  {h}
                </li>
              ))}
            </ul>

            <div className="project-links">
              <a
                href={FEATURED_PROJECT.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Visit the live site ↗
              </a>
              <a href="#case-study" className="btn btn-outline">
                Read the case study
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
