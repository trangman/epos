import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-950 to-blue-950 text-cyan-100/70 py-12 border-t border-cyan-400/50 shadow-lg shadow-cyan-500/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/logowhite.svg" 
                alt="EPOS Logo" 
                className="h-6 w-auto"
              />
            </div>
            <p className="text-sm">Global payment solutions for modern businesses.</p>
          </div>
          <div>
            <h4 className="text-cyan-300 font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services">
                  <a className="hover:text-white transition">Payments</a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a className="hover:text-white transition">FX</a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a className="hover:text-white transition">Cards</a>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-cyan-300 font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about">
                  <a className="hover:text-white transition">About</a>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <a className="hover:text-white transition">Blog</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="hover:text-white transition">Contact</a>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-cyan-300 font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy">
                  <a className="hover:text-white transition">Privacy</a>
                </Link>
              </li>
              <li>
                <Link href="/terms">
                  <a className="hover:text-white transition">Terms</a>
                </Link>
              </li>
              <li>
                <Link href="/compliance">
                  <a className="hover:text-white transition">Compliance</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-cyan-400/50 pt-8 text-center text-sm">
          <p>&copy; 2025 EPOS Payments. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
