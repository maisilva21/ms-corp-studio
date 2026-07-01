import ContactForm from './components/ContactForm';

const CASE_STUDIES = [
  {
    title: 'Case study placeholder A',
    blurb: 'Brand identity project summary goes here once real work is available.',
  },
  {
    title: 'Case study placeholder B',
    blurb: 'Packaging or campaign project summary goes here.',
  },
  {
    title: 'Case study placeholder C',
    blurb: 'Web or product design project summary goes here.',
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero container">
        <h1>MS Corp Studio</h1>
        <p>
          A graphic design studio for brands that need clear, considered
          visual work — identity, packaging, and digital design.
          (Placeholder positioning copy — pending a real messaging pass.)
        </p>
      </section>

      <section className="container" id="work">
        <span className="placeholder-note">Placeholder content</span>
        <h2>Selected work</h2>
        <div className="portfolio-grid">
          {CASE_STUDIES.map((item) => (
            <div className="portfolio-card" key={item.title}>
              <div className="thumb">Image placeholder</div>
              <h3>{item.title}</h3>
              <p>{item.blurb}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container" id="contact">
        <h2>Start a project</h2>
        <p>Tell us a bit about what you need and we&apos;ll follow up.</p>
        <ContactForm />
      </section>

      <footer className="container">
        &copy; {new Date().getFullYear()} MS Corp Studio
      </footer>
    </main>
  );
}
