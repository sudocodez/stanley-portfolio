import { NAV_ITEMS, SITE } from "../data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>
          © {year} {SITE.name}. Built with React + Vite.
        </p>
        <nav aria-label="Footer">
          <ul style={{ display: "flex", flexWrap: "wrap", gap: "1.25rem" }}>
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
