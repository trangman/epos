import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Services", href: "/services" },
    { label: "Why Us", href: "/why-us" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" }
  ];

  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-slate-950 via-blue-950 to-slate-950 backdrop-blur z-50 border-b border-cyan-400/50 shadow-lg shadow-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <a className="flex items-center cursor-pointer">
            <img 
              src="/logowhite.svg" 
              alt="EPOS Logo" 
              className="h-6 w-auto"
            />
          </a>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <a className="text-cyan-100/70 hover:text-cyan-300 transition">{item.label}</a>
            </Link>
          ))}
          <Link href="/contact">
            <a>
              <Button className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-white font-bold shadow-lg shadow-cyan-500/50">
                Get Started
              </Button>
            </a>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gradient-to-b from-slate-900 to-blue-950 border-t border-cyan-400/50 px-4 py-4 space-y-4">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <a
                className="block text-cyan-100/70 hover:text-cyan-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            </Link>
          ))}
          <Link href="/contact">
            <a onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-white font-bold shadow-lg shadow-cyan-500/50">
                Get Started
              </Button>
            </a>
          </Link>
        </div>
      )}
    </nav>
  );
}
