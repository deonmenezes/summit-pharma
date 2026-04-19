import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Summit Pharmaceuticals — Est. 1923",
  description: "Summit Pharmaceuticals"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="announce">Developing therapies in 32 countries · FDA, EMA, and PMDA approved portfolio</div>
        <header className="top">
          <Link href="/" className="brand">
            <span className="crest">SP</span>
            <span>
              Summit Pharmaceuticals
              <span className="brand-sub">Est. 1923</span>
            </span>
          </Link>
          <nav>
            <Link href="/search">Therapies</Link>
            <Link href="/comments">Research</Link>
            <Link href="/tools">Medical Info</Link>
            <Link href="/login" className="cta">HCP Portal</Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <div className="footer-inner">
            <div>
              <h4>Summit Pharmaceuticals</h4>
              <p style={{ margin: 0, color: "#6b7280", fontSize: "0.85rem" }}>
                Serving clients since 1923.
              </p>
            </div>
            <div>
              <h4>Therapies</h4>
              <Link href="/search">Overview</Link>
              <Link href="/search">Products</Link>
              <Link href="/search">Pricing</Link>
            </div>
            <div>
              <h4>Company</h4>
              <Link href="/comments">Research</Link>
              <Link href="/tools">Medical Info</Link>
              <Link href="/bounty">Security</Link>
            </div>
            <div>
              <h4>Legal</h4>
              <a href="/.well-known/security.txt">security.txt</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
          <div className="legal">
            <span>© {new Date().getFullYear()} Summit Pharmaceuticals. All rights reserved.</span>
            <span>Est. 1923.</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
