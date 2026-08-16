import { ARCH_FLOW, CASE_STUDY, FEATURED_PROJECT } from "../data/projects";
import { SITE } from "../data/site";

const FACTS = [
  { label: "Client", value: CASE_STUDY.client },
  { label: "Event", value: CASE_STUDY.event },
  { label: "Type", value: "Full-stack platform — frontend, API, database" },
  { label: "Status", value: "Live in production" },
];

export default function CaseStudy() {
  return (
    <section className="case-study" id="case-study" aria-labelledby="case-title">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">Case study</p>
          <h2 className="section-title" id="case-title">
            The 200 CEOs Business Forum, end to end.
          </h2>
          <p className="section-lead">
            Context → role → architecture → implementation → challenges →
            outcome → lessons. Written from the actual project, with nothing
            invented.
          </p>
        </div>

        {/* Context */}
        <div className="case-intro reveal">
          {CASE_STUDY.context.map((para) => (
            <p key={para}>{para}</p>
          ))}
        </div>

        <dl className="case-facts reveal">
          {FACTS.map((fact) => (
            <div className="case-fact" key={fact.label}>
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>

        {/* Screenshots */}
        <div className="case-media reveal">
          <figure>
            <img
              src="/images/ceo200-hero.png"
              alt="The 200 CEOs Business Forum homepage on a desktop viewport"
              loading="lazy"
            />
            <figcaption>The forum homepage — live at the200ceos.com</figcaption>
          </figure>
          <figure>
            <img
              src="/images/ceo200-mobile.png"
              alt="The 200 CEOs Business Forum homepage on a mobile viewport"
              loading="lazy"
            />
            <figcaption>Mobile view — the site is fully responsive</figcaption>
          </figure>
        </div>

        {/* Architecture */}
        <div className="case-block reveal">
          <h3>
            <span>01</span> Architecture at a glance
          </h3>
          <p>
            A frontend → API → database flow, with authentication and
            integrations layered around it:
          </p>
          <div className="flow">
            {ARCH_FLOW.map((f) => (
              <div className="flow-step" key={f.step}>
                <span className="step-num">{f.step}</span>
                <div>
                  <div className="step-title">{f.title}</div>
                  <div className="step-desc">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Role */}
        <div className="case-block reveal">
          <h3>
            <span>02</span> My role
          </h3>
          {CASE_STUDY.role.map((para) => (
            <p key={para}>{para}</p>
          ))}
        </div>

        {/* Implementation */}
        <div className="case-block reveal">
          <h3>
            <span>03</span> Implementation
          </h3>
          {CASE_STUDY.implementation.map((item) => (
            <div key={item.heading} style={{ marginBottom: "1.25rem" }}>
              <h4 style={{ color: "#eae5da", fontSize: "1.05rem", marginBottom: "0.4rem" }}>
                {item.heading}
              </h4>
              <p>{item.body}</p>
            </div>
          ))}
        </div>

        {/* Challenges */}
        <div className="case-block reveal">
          <h3>
            <span>04</span> Challenges
          </h3>
          {CASE_STUDY.challenges.map((c) => (
            <div key={c.heading} style={{ marginBottom: "1.25rem" }}>
              <h4 style={{ color: "#eae5da", fontSize: "1.05rem", marginBottom: "0.4rem" }}>
                {c.heading}
              </h4>
              <p>{c.body}</p>
            </div>
          ))}
        </div>

        {/* Outcome + lessons */}
        <div className="case-block reveal">
          <h3>
            <span>05</span> Outcome &amp; lessons
          </h3>
          {CASE_STUDY.outcome.map((para) => (
            <p key={para}>{para}</p>
          ))}
          <blockquote className="case-quote">
            {CASE_STUDY.lessons[0]}
          </blockquote>
          <ul>
            {CASE_STUDY.lessons.slice(1).map((lesson) => (
              <li key={lesson}>{lesson}</li>
            ))}
          </ul>
        </div>

        <div className="case-links reveal">
          <a
            href={FEATURED_PROJECT.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-gold"
          >
            Visit the live site ↗
          </a>
          <a href={SITE.github} target="_blank" rel="noreferrer" className="btn btn-ghost">
            See my GitHub ↗
          </a>
          <a href="#contact" className="btn btn-ghost">
            Ask me about it
          </a>
        </div>
      </div>
    </section>
  );
}
