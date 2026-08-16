import { SITE } from "../data/site";

const LINKS = [
  { label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
  { label: "GitHub", value: `github.com/${SITE.githubHandle}`, href: SITE.github },
  { label: "LinkedIn", value: "linkedin.com/in/stanleygerson", href: SITE.linkedin },
];

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-intro reveal">
            <p className="eyebrow">Contact</p>
            <h2 className="section-title" id="contact-title">
              Let's build something practical.
            </h2>
            <p>
              I'm open to junior and early-career roles, internships, and
              small real-world projects that stretch me. If you have a
              requirement — or just want to talk about the 200 CEOs platform —
              my inbox is open.
            </p>
            <a href={`mailto:${SITE.email}`} className="btn btn-primary">
              Email me
            </a>
          </div>

          <div className="contact-links reveal">
            {LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                className="contact-link"
              >
                <span className="clabel">{link.label}</span>
                <span className="cvalue">{link.value}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
