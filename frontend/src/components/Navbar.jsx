import { useEffect, useState } from "react";

const links = [
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (e, id) => {
    e.preventDefault();
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      data-testid="floating-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500`}
    >
      <div
        className={`mx-3 md:mx-6 mt-3 md:mt-5 border border-burgundy/15 backdrop-blur-xl transition-all duration-500 ${
          scrolled ? "bg-ivory/80" : "bg-ivory/50"
        } ${open ? "rounded-3xl" : "rounded-full"}`}
      >
        <nav className="flex items-center justify-between px-4 sm:px-5 md:px-8 py-3 md:py-3.5 gap-3">
          <a
            href="#top"
            data-testid="nav-logo"
            onClick={(e) => handleClick(e, "top")}
            className="font-serif italic text-burgundy text-base sm:text-lg md:text-xl tracking-tight whitespace-nowrap"
          >
            Rocío Consuegra
          </a>

          <ul className="hidden md:flex items-center gap-9">
            {links.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  data-testid={`nav-link-${l.id}`}
                  onClick={(e) => handleClick(e, l.id)}
                  className="text-charcoal text-[13px] uppercase tracking-[0.18em] link-underline"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            data-testid="nav-contact-btn"
            onClick={(e) => handleClick(e, "contact")}
            className="hidden md:inline-flex items-center gap-2 bg-burgundy text-butter text-[12px] uppercase tracking-[0.2em] px-5 py-2.5 rounded-full hover:bg-charcoal transition-colors duration-300"
          >
            Contact
            <span aria-hidden>↗</span>
          </a>

          {/* mobile toggle */}
          <button
            data-testid="nav-mobile-toggle"
            onClick={() => setOpen(!open)}
            className="md:hidden text-burgundy text-xs tracking-[0.2em] uppercase border border-burgundy/30 rounded-full px-3 py-1.5"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? "Close" : "Menu"}
          </button>
        </nav>

        {open && (
          <div
            className="md:hidden px-5 pb-5 pt-2 flex flex-col gap-3 border-t border-burgundy/10"
            data-testid="nav-mobile-menu"
          >
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={(e) => handleClick(e, l.id)}
                className="text-charcoal text-base uppercase tracking-[0.2em] py-1"
                data-testid={`nav-mobile-link-${l.id}`}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              data-testid="nav-mobile-contact-btn"
              onClick={(e) => handleClick(e, "contact")}
              className="mt-2 inline-flex items-center justify-center gap-2 bg-burgundy text-butter text-[12px] uppercase tracking-[0.2em] px-5 py-3 rounded-full"
            >
              Contact <span aria-hidden>↗</span>
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
