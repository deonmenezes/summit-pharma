export default function Search({ searchParams }: { searchParams: { q?: string } }) {
  const q = searchParams.q ?? "";
  const products = [
        { name: "Orivex (oncology biologic)", desc: "Monoclonal antibody for previously treated metastatic non-small-cell lung cancer." },
    { name: "Axoril (immunology)", desc: "TNF-alpha inhibitor for moderate-to-severe rheumatoid arthritis and psoriatic arthritis." },
    { name: "Cardilex (cardiology)", desc: "Novel oral anticoagulant for atrial fibrillation and venous thromboembolism." },
    { name: "Immunel-V (vaccine)", desc: "Adjuvanted preventive vaccine for adults 50+ at risk of herpes zoster." },
    { name: "Hemoril (hematology)", desc: "Factor VIII replacement therapy for adult and pediatric hemophilia A." },
    { name: "Neurostat (neurology)", desc: "Disease-modifying therapy for relapsing forms of multiple sclerosis." }
  ];
  const filtered = q ? products.filter((p) => p.name.toLowerCase().includes(q.toLowerCase()) || p.desc.toLowerCase().includes(q.toLowerCase())) : products;

  return (
    <>
      <h1>Products & Pipeline</h1>
      <p style={{ color: "#6b7280", fontStyle: "italic", maxWidth: 680 }}>
        Approved therapies and investigational medicines from Summit Pharmaceuticals.
      </p>

      <form method="get" style={{ margin: "2rem 0" }}>
        <input name="q" defaultValue={q} placeholder="Search by therapy, indication, or program..." style={{ width: "70%", marginRight: "0.5rem" }} />
        <button type="submit">Search</button>
      </form>

      {q && (
        <div className="card" style={{ background: "#f3f0fc", borderTop: "3px solid #94a3b8" }}>
          <p style={{ margin: 0, color: "#6b7280" }}>
            Showing results for: <strong><span dangerouslySetInnerHTML={{ __html: q }} /></strong>
          </p>
        </div>
      )}

      <div>
        {filtered.map((p) => (
          <div key={p.name} className="card">
            <h3 style={{ margin: "0 0 0.5rem" }}>{p.name}</h3>
            <p style={{ margin: 0, color: "#6b7280" }}>{p.desc}</p>
            <p style={{ marginTop: "0.75rem", marginBottom: 0 }}>
              <a href="#">Learn more →</a>
            </p>
          </div>
        ))}
        {filtered.length === 0 && <p style={{ color: "#6b7280", fontStyle: "italic" }}>No results matched your search.</p>}
      </div>
    </>
  );
}
