import { SKILL_GROUPS } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">Skills</p>
          <h2 className="section-title" id="skills-title">
            Technologies I use and can talk about.
          </h2>
          <p className="section-lead">
            Each group is labelled honestly — what I'm confident in, what I
            have working knowledge of, and what I'm still learning. No
            percentage bars, no padding.
          </p>
        </div>

        <div className="skills-grid">
          {SKILL_GROUPS.map((group, i) => (
            <article
              className="skill-card reveal"
              key={group.title}
              style={{ transitionDelay: `${(i % 3) * 70}ms` }}
            >
              <h3>{group.title}</h3>
              <p className="skill-desc">{group.description}</p>
              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span className="tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
              <p className="skill-desc" style={{ marginTop: "1rem", marginBottom: 0 }}>
                <span className="tag tag-accent">{group.level}</span>
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
