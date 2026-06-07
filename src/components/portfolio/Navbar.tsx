import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useProfile } from "@/context/ProfileContext";
import { profiles, currentProfileId } from "@/data/portfolio";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const profile = useProfile();
  const showDeveloperSwitcher = profiles.length > 1;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border/60 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {showDeveloperSwitcher ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="font-display text-xl font-bold text-gradient flex items-center gap-1 hover:opacity-90 transition-opacity outline-none">
                {profile.name}
                <ChevronDown className="w-5 h-5 opacity-70" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="min-w-[200px]">
              {profiles.map((p) => (
                <DropdownMenuItem key={p.id} asChild>
                  <Link
                    to={p.id === currentProfileId ? "/" : `/developer/${p.id}`}
                    className={p.id === profile.id ? "bg-accent font-medium" : ""}
                  >
                    {p.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <span className="font-display text-xl font-bold text-gradient">
            {profile.name}
          </span>
        )}

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("#contact")}
            className="text-sm font-semibold px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Hire Me
          </button>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block w-6 h-0.5 bg-foreground transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-foreground transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-foreground transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-card border-b border-border px-6 py-4 flex flex-col gap-4">
          {showDeveloperSwitcher && (
            <div className="pb-2 border-b border-border/60">
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Switch developer</p>
              <div className="flex flex-col gap-1">
                {profiles.map((p) => (
                  <Link
                    key={p.id}
                    to={p.id === currentProfileId ? "/" : `/developer/${p.id}`}
                    onClick={() => setMenuOpen(false)}
                    className={`text-sm py-1.5 px-2 rounded-md transition-colors ${p.id === profile.id ? "bg-primary/15 text-primary font-medium" : "text-muted-foreground hover:text-primary"}`}
                  >
                    {p.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-left text-sm text-muted-foreground hover:text-primary transition-colors font-medium py-1"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
