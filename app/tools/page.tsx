"use client";
import { useState } from "react";

export default function Tools() {
  const [host, setHost] = useState("hcp.summitpharma.example");
  const [out, setOut] = useState("");
  const [loading, setLoading] = useState(false);

  async function run() {
    setLoading(true);
    const res = await fetch(`/api/ping?host=${encodeURIComponent(host)}`);
    setOut(await res.text());
    setLoading(false);
  }

  return (
    <>
      <h1>Medical Information</h1>
      <p style={{ color: "#6b7280", fontStyle: "italic", maxWidth: 680 }}>
        For healthcare professionals with product and medical-science questions.
      </p>

      <div className="card">
        <h3 style={{ marginTop: 0 }}>HCP Portal Reachability</h3>
        <p style={{ color: "#6b7280", fontSize: "0.95rem" }}>
          Verify that the HCP Portal is reachable from your location.
        </p>
        <label>Hostname</label>
        <input value={host} onChange={(e) => setHost(e.target.value)} style={{ width: "70%", marginRight: "0.5rem" }} />
        <button onClick={run} disabled={loading}>{loading ? "Checking…" : "Check"}</button>
        {out && <pre style={{ marginTop: "1rem" }}>{out}</pre>}
      </div>

      <div className="card">
        <h3 style={{ marginTop: 0 }}>Direct Contacts</h3>
        <table>
          <tbody>
                        <tr><th>Medical Information (HCPs)</th><td>1-800-SUMMIT-RX (Mon–Fri)</td></tr>
            <tr><th>Patient Support</th><td>1-800-SUMMIT-HELP</td></tr>
            <tr><th>Adverse Event Reporting</th><td>1-800-SUMMIT-AE (24/7)</td></tr>
            <tr><th>Email</th><td>medinfo@summitpharma.example</td></tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
