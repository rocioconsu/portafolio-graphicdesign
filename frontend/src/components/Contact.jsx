const phrase = "AVAILABLE FOR COMMISSIONS ✦ LET'S CREATE ✦ ";

const contacts = [
  { label: "Email", value: "rocioconsuegra-studio@gmail.com", href: "mailto:rocioconsuegra-studio@gmail.com", display: "rocioconsuegra-studio@gmail.com" },
  { label: "Instagram", value: "@byrocioconsu", href: "https://instagram.com/byrocioconsu", display: "@byrocioconsu" },
  { label: "Behance", value: "Rocío Consuegra", href: "https://www.behance.net/rocioconsuegra", display: "behance.net/rocioconsuegra" },
  { label: "LinkedIn", value: "in/rocío-consuegra-rico", href: "https://www.linkedin.com/in/rocío-consuegra-rico-a4013839b", display: "linkedin.com/in/rocío-consuegra-rico" },
];

export default function Contact() {
  const repeated = Array.from({ length: 3 }).map(() => phrase).join("");
  return (
    <section id="contact" data-testid="contact-section" className="bg-burgundy text-ivory pt-24 md:pt-36 overflow-hidden relative">
      <div className="mx-auto max-w-[1480px] px-6 md:px-10">
        <p className="text-[11px] uppercase tracking-[0.32em] text-butter font-sans mb-8">
          Get in touch
        </p>

        <h2
          data-testid="contact-heading"
          className="font-serif text-[14vw] sm:text-[11vw] lg:text-[9vw] leading-[0.9] tracking-[-0.03em] max-w-[14ch]"
        >
          Let's create <br /> <span className="italic text-butter">something</span> together.
        </h2>

        <div className="mt-16 md:mt-24 grid grid-cols-12 gap-6 md:gap-10 pb-10 md:pb-14">
          <div className="col-span-12 md:col-span-5">
            <p className="font-serif italic text-ivory/85 text-2xl md:text-3xl leading-snug max-w-md">
              Open to brand collaborations, art direction, 3D and creative AI commissions
              — based in Spain, working worldwide.
            </p>
            <a
              href="mailto:rocioconsuegra-studio@gmail.com"
              data-testid="contact-cta"
              className="inline-flex items-center gap-3 mt-8 bg-butter text-burgundy px-6 py-3 rounded-full uppercase tracking-[0.22em] text-[12px] font-sans hover:bg-ivory transition-colors duration-300"
            >
              Start a project <span aria-hidden>↗</span>
            </a>
          </div>

          <div className="col-span-12 md:col-span-7">
            <ul className="divide-y divide-ivory/15 border-y border-ivory/15">
              {contacts.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    data-testid={`contact-link-${c.label.toLowerCase()}`}
                    className="group grid grid-cols-12 items-center gap-4 py-5 md:py-7"
                  >
                    <span className="col-span-3 md:col-span-2 text-[11px] uppercase tracking-[0.28em] text-butter font-sans">
                      {c.label}
                    </span>
                    <span className="col-span-7 md:col-span-9 font-serif italic text-2xl md:text-4xl text-ivory group-hover:text-butter transition-colors duration-500 truncate">
                      {c.display}
                    </span>
                    <span className="col-span-2 md:col-span-1 text-right text-ivory/60 group-hover:text-butter transition-colors duration-500 text-xl">
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom marquee in butter */}
      <div className="bg-butter text-burgundy py-5 md:py-6 overflow-hidden border-t border-burgundy/15">
        <div className="marquee-track-rev font-serif italic text-3xl md:text-5xl whitespace-nowrap leading-none">
          <span className="pr-8">{repeated}</span>
          <span className="pr-8">{repeated}</span>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-ivory text-charcoal">
        <div className="mx-auto max-w-[1480px] px-6 md:px-10 py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="font-serif italic text-burgundy text-xl">Rocío Consuegra Studio</p>
          <p className="text-[11px] uppercase tracking-[0.3em] text-charcoal/60 font-sans">
            © {new Date().getFullYear()} — Designed & built with care. ✦ Vol. 01
          </p>
        </div>
      </footer>
    </section>
  );
}
