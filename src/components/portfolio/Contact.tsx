import { useState } from "react";
import { useProfile } from "@/context/ProfileContext";

const Contact = () => {
  const profile = useProfile();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Send email using Web3Forms
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          // TODO: Get your free access key from https://web3forms.com/ and paste it here
          access_key: "c76374be-d5e4-430b-8f33-118d0ead552e",
          name: form.name,
          email: form.email,
          message: form.message,
          subject: `Portfolio contact from ${form.name}`,
          from_name: form.name
        }),
      });

      if (response.ok) {
        setSent(true);
        setForm({ name: "", email: "", message: "" });
      } else {
        alert("Something went wrong while sending your message. Please try again or email me directly.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong while sending your message. Please try again or email me directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14 text-center">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">
            Let's Work Together
          </p>
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Have a project in mind or just want to chat? I'm always open to new
            opportunities and collaborations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Info */}
          <div>
            <div className="card-glass rounded-2xl p-8 mb-6">
              <div className="flex items-start gap-5 mb-4">
                {profile.profileImage ? (
                  <img
                    src={profile.profileImage}
                    alt={profile.name}
                    className="w-20 h-20 rounded-xl object-cover object-top border-2 border-primary/20 flex-shrink-0"
                  />
                ) : (
                  <div className="w-20 h-20 rounded-xl bg-primary/10 border-2 border-primary/20 flex items-center justify-center text-2xl font-bold text-primary flex-shrink-0">
                    {profile.name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase()}
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold mb-1">{profile.name}</h3>
                  <p className="text-primary font-semibold mb-2">{profile.title}</p>
                  <p className="text-muted-foreground text-xs">{profile.tagline}</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed text-justify mb-2">
                {profile.bio}
              </p>
              <p className="text-muted-foreground text-sm">
                Based in {profile.location} — open to remote work. I typically respond within 24 hours.
              </p>

              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-base">📍</span>
                  <span className="text-muted-foreground">{profile.location}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-base">✉️</span>
                  <a href={`mailto:${profile.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                    {profile.email}
                  </a>
                </div>
                {profile.phone && (
                  <div className="flex items-center gap-3 text-sm">
                    <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-base">📞</span>
                    <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="text-muted-foreground hover:text-primary transition-colors">
                      {profile.phone}
                    </a>
                  </div>
                )}
                {profile.resumePdfUrl && (
                  <div className="flex items-center gap-3 text-sm mt-4 pt-4 border-t border-border">
                    <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-base">📄</span>
                    <a
                      href={profile.resumePdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors font-medium"
                    >
                      View / Download Resume (PDF)
                    </a>
                  </div>
                )}
              </div>
            </div>

            <div className="flex gap-3 flex-wrap">
              {profile.socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[100px] card-glass rounded-xl py-3 flex flex-col items-center gap-1 hover-lift hover:border-primary/40 transition-colors"
                >
                  <span className="text-xl">{s.icon}</span>
                  <span className="text-xs text-muted-foreground">{s.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="card-glass rounded-2xl p-8">
            {sent ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="text-2xl font-bold mb-2">Ready to send</h3>
                <p className="text-muted-foreground">
                  Your message has been sent successfully! I will get back to you as soon as possible. Thanks for reaching out.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 text-primary font-semibold hover:underline text-sm"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors text-sm resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all hover-lift glow-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message ✈️"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
