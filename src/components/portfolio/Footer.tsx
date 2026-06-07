import { useProfile } from "@/context/ProfileContext";

const Footer = () => {
  const profile = useProfile();
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <span className="font-bold text-gradient text-base">{"<" + profile.name + " />"}</span>
        <span>© {new Date().getFullYear()} · Crafted with ❤️ and lots of ☕</span>
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="hover:text-primary transition-colors"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
};

export default Footer;
