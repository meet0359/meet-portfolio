import { useProfile } from "@/context/ProfileContext";

const Hero = () => {
  const profile = useProfile();
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const initials = profile.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center dot-grid section-padding pt-32"
    >
      {/* Glow orb */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div className="animate-fade-up order-2 md:order-1">
          {profile.availability && (
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-primary pulse-glow inline-block" />
              {profile.availability}
            </div>
          )}

          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
            Hi, I'm{" "}
            <span className="text-gradient block">{profile.name}</span>
          </h1>

          <p className="text-lg text-muted-foreground mb-3 font-medium">
            {profile.tagline}
          </p>

          <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg text-justify">
            {profile.bio}
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => handleScroll("#projects")}
              className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all hover-lift glow-primary"
            >
              View My Work
            </button>
            <button
              onClick={() => handleScroll("#contact")}
              className="px-6 py-3 rounded-xl border border-border text-foreground font-semibold hover:border-primary hover:text-primary transition-all"
            >
              Get In Touch
            </button>
            {profile.resumePdfUrl && (
              <a
                href={profile.resumePdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl border border-border text-foreground font-semibold hover:border-primary hover:text-primary transition-all inline-flex items-center gap-2"
              >
                Download Resume
              </a>
            )}
          </div>

          {/* Stats */}
          <div className="mt-12 flex gap-8">
            {profile.stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-gradient">{stat.value}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Photo */}
        <div className="flex justify-center md:justify-end order-1 md:order-2 animate-fade-in">
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/40 to-transparent blur-2xl scale-110" />
            <div className="relative w-72 h-96 md:w-80 md:h-[28rem] rounded-3xl overflow-hidden border-2 border-primary/30 glow-primary bg-primary/10 flex items-center justify-center">
              {profile.profileImage ? (
                <img
                  src={profile.profileImage}
                  alt={`${profile.name} - Developer`}
                  className="w-full h-full object-cover object-top"
                />
              ) : (
                <span className="text-6xl md:text-7xl font-bold text-primary/60">
                  {initials}
                </span>
              )}
            </div>
            {profile.availability && (
              <div className="absolute -bottom-4 -left-4 card-glass rounded-xl px-4 py-2.5 text-sm font-semibold flex items-center gap-2">
                <span className="text-primary">⚡</span> Open to Work
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
