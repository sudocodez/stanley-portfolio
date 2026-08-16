import { useEffect, useRef, useState } from "react";
import { NAV_ITEMS, SITE } from "../data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // Close the mobile menu with Escape.
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header className="nav">
        <div className="container nav-inner">
          <a href="#top" className="nav-brand" onClick={close}>
            {SITE.name}
          </a>

          <nav aria-label="Primary" className="nav-links">
            {NAV_ITEMS.map((item) => (
              <a key={item.id} href={`#${item.id}`}>
                {item.label}
              </a>
            ))}
          </nav>

          <a href="#contact" className="btn btn-primary nav-cta">
            Contact me
          </a>

          <button
            type="button"
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </button>
        </div>
      </header>

      <nav
        id="mobile-menu"
        ref={menuRef}
        aria-label="Mobile"
        className={`mobile-menu${open ? " open" : ""}`}
        hidden={!open}
      >
        {NAV_ITEMS.map((item) => (
          <a key={item.id} href={`#${item.id}`} onClick={close}>
            {item.label}
          </a>
        ))}
      </nav>
    </>
  );
}
