import ContactForm from './components/ContactForm';
import BrandMark from './components/BrandMark';

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
];

const PILLARS = [
  {
    title: 'Strategy first',
    body: 'Every project starts with positioning, not palettes — so the visual decisions have a reason behind them.',
  },
  {
    title: 'Considered craft',
    body: 'Typography, color, and layout treated as one system, not a set of one-off choices made screen by screen.',
  },
  {
    title: 'Built to launch',
    body: 'Deliverables that are production-ready — for print, packaging, and the web — not just presentation decks.',
  },
];

const SERVICES = [
  {
    title: 'Brand Identity',
    body: 'Logo systems, color, type, and voice — the visual foundation everything else gets built on.',
    tags: ['Logo', 'Color System', 'Brand Guidelines'],
  },
  {
    title: 'Packaging & Print',
    body: 'Packaging and print collateral designed to hold up on a shelf, in the hand, and in a stack of mail.',
    tags: ['Packaging', 'Editorial', 'Print Production'],
  },
  {
    title: 'Digital & Web Design',
    body: 'Websites and digital products designed with the same rigor as the brand identity behind them.',
    tags: ['Web Design', 'UI Systems', 'Digital Campaigns'],
  },
];

const CASE_STUDIES = [
  {
    title: 'Case study placeholder A',
    tag: 'Brand Identity',
    blurb: 'Brand identity project summary goes here once real work is available.',
    gradient: ['var(--color-rouge)', 'var(--color-cinnamon)'],
  },
  {
    title: 'Case study placeholder B',
    tag: 'Packaging & Print',
    blurb: 'Packaging or campaign project summary goes here.',
    gradient: ['var(--color-masala)', 'var(--color-cardamom)'],
  },
  {
    title: 'Case study placeholder C',
    tag: 'Digital & Web Design',
    blurb: 'Web or product design project summary goes here.',
    gradient: ['var(--color-espresso)', 'var(--color-rouge)'],
  },
];

export default function Home() {
  return (
    <>
      <header className="nav">
        <div className="container nav-inner">
          <a className="nav-brand" href="#top">
            <BrandMark size={26} />
            MS CORP
          </a>
          <ul className="nav-links">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
          <a className="pill-btn" href="#contact">
            Start a project
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="container">
            <span className="eyebrow hero-eyebrow">
              Brand Identity · Packaging · Digital Design
            </span>
            <h1>
              We build brands
              <br />
              that earn a
              <br />
              second look.
            </h1>
            <hr className="hero-rule" />
            <p className="hero-caption">MS Corp Studio · Remote, worldwide</p>
          </div>
        </section>

        <section className="pillars">
          <div className="container">
            <span className="eyebrow">How we work</span>
            <div className="pillars-grid">
              {PILLARS.map((pillar, index) => (
                <div className="pillar" key={pillar.title}>
                  <p className="pillar-index">0{index + 1}</p>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="services" id="services">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">Services</span>
                <h2>What we do</h2>
              </div>
              <span className="section-label">
                Studio services
                <br />
                for growing brands
              </span>
            </div>
            <hr className="rule" />
            <div className="services-grid">
              {SERVICES.map((service, index) => (
                <div className="service-card" key={service.title}>
                  <p className="service-index">0{index + 1}</p>
                  <h3>{service.title}</h3>
                  <p>{service.body}</p>
                  <p className="service-tags">{service.tags.join(' · ')}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="statement">
          <div className="container">
            <p>&ldquo;Good design isn&apos;t decoration — it&apos;s how a brand earns trust.&rdquo;</p>
          </div>
        </section>

        <section className="work" id="work">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">Selected work</span>
              <h2>Different problems, the same rigor.</h2>
            </div>
            <div className="portfolio-grid">
              {CASE_STUDIES.map((item) => (
                <div className="portfolio-card" key={item.title}>
                  <div
                    className="thumb"
                    style={
                      {
                        '--thumb-a': item.gradient[0],
                        '--thumb-b': item.gradient[1],
                      } as React.CSSProperties
                    }
                  />
                  <span className="portfolio-card-tag">{item.tag}</span>
                  <div className="portfolio-card-title">
                    <h3>{item.title}</h3>
                    <span className="portfolio-card-arrow" aria-hidden="true">
                      &#8599;
                    </span>
                  </div>
                  <p>{item.blurb}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="motif-panel" aria-hidden="true">
          <BrandMark size={160} />
        </section>

        <section className="cta" id="contact">
          <div className="container cta-inner">
            <div className="cta-copy">
              <h2>
                Ready to build <span className="em">something new?</span>
              </h2>
              <p>
                Tell us a bit about your brand and what you need — we read
                every message and follow up within two business days.
              </p>
            </div>
            <div className="cta-form-wrap">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <BrandMark size={22} color="var(--color-cardamom)" />
            MS Corp Studio
          </div>
          <ul className="footer-links">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
            <li>
              <a href="mailto:maisilva@gmail.com">maisilva@gmail.com</a>
            </li>
          </ul>
          <p className="footer-meta">
            Remote studio, worldwide · &copy; {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </>
  );
}
