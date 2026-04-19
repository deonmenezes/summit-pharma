import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="est">Science in Service of Life</div>
        <h1>Medicines for today. Discovery for tomorrow.</h1>
        <p className="lead">
          Summit Pharmaceuticals develops, manufactures, and delivers medicines in oncology, immunology, cardiology, and infectious disease — in 32 countries worldwide.
        </p>
        <div className="hero-actions">
          <Link href="/login" className="btn-primary">HCP Portal Sign In</Link>
          <Link href="/search" className="btn-ghost">Our Pipeline</Link>
        </div>
      </section>

      <section className="stats">
                <div className="stat"><strong>78</strong><span>Approved therapies</span></div>
        <div className="stat"><strong>32</strong><span>Countries</span></div>
        <div className="stat"><strong>48K</strong><span>Scientists & staff</span></div>
        <div className="stat"><strong>$14B</strong><span>Annual R&D</span></div>
      </section>

      <div className="section-title">
        <h2>Therapeutic Areas</h2>
        <div className="divider" />
        <p>Deep expertise across four core therapeutic areas.</p>
      </div>

      <section className="features">
                <div className="feature">
          <div className="icon">O</div>
          <h3>Oncology</h3>
          <p>Targeted therapies, immuno-oncology, and CAR-T cell therapies across 18 tumor types.</p>
        </div>
        <div className="feature">
          <div className="icon">I</div>
          <h3>Immunology</h3>
          <p>Biologics for rheumatoid arthritis, psoriasis, Crohn's, and rare autoimmune disease.</p>
        </div>
        <div className="feature">
          <div className="icon">C</div>
          <h3>Cardiology</h3>
          <p>Anticoagulants, lipid-lowering therapies, and treatments for heart failure.</p>
        </div>
        <div className="feature">
          <div className="icon">V</div>
          <h3>Vaccines</h3>
          <p>Preventive and therapeutic vaccines for infectious and non-infectious indications.</p>
        </div>
      </section>

      <div className="section-title">
        <h2>Voices from the Field</h2>
        <div className="divider" />
      </div>

      <section>
                <div className="testimonial">"Summit's CAR-T program has transformed outcomes for patients we previously had nothing to offer."<cite>Academic oncologist, comprehensive cancer center</cite></div>
        <div className="testimonial">"We partnered with Summit on the rare-disease natural-history study. Rigorous science, patient-first."<cite>Patient advocacy group executive director</cite></div>
      </section>
    </>
  );
}
