import { SITE } from "../data/site";

const FACTS = [
  { label: "Focus", value: "Web applications, APIs, problem solving" },
  { label: "Location", value: SITE.location },
  { label: "Currently learning", value: "PostgreSQL depth, more backend practice" },
  { label: "Open to", value: "Junior / early-career roles & internships" },
];

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">About</p>
          <h2 className="section-title" id="about-title">
            A developer who learns by building and shipping.
          </h2>
        </div>

        <div className="about-grid">
          <div className="about-body reveal">
            <p>
              I'm <strong>{SITE.name}</strong>, an early-career software
              developer focused on{" "}
              <strong>practical web applications and APIs</strong>. I care
              about the whole journey of software: understanding a real
              requirement, designing something that works, and shipping
              something people can actually use.
            </p>
            <p>
              My strongest work so far is a{" "}
              <strong>real client project</strong> — the full web platform for
              the 200 CEOs Business Forum, built end to end with React,
              Node.js and PostgreSQL. I've also refactored a 2,400-line
              single-file app into a clean modular structure and migrated its
              database from SQLite to PostgreSQL, learning a lot about how to
              do both properly.
            </p>
            <p>
              I'm early in my career and that's the point — I'm deliberate
              about building depth. I learn by building, shipping and
              understanding the systems behind what I create, and I'd rather
              be honest about what I'm still learning than claim more than I
              can defend.
            </p>
          </div>

          <dl className="about-facts reveal">
            {FACTS.map((fact) => (
              <div className="about-fact" key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
