import { useProfile } from "@/context/ProfileContext";

const Experience = () => {
  const { experiences } = useProfile();

  return (
    <section id="experience" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">
            My Journey
          </p>
          <h2 className="text-4xl font-bold mb-3">Work Experience</h2>
          <p className="text-muted-foreground max-w-2xl">
            Roles and projects I've contributed to, with a focus on delivery, collaboration, and technical impact.
          </p>
        </div>

        <div className="relative pl-6 timeline-line space-y-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative flex items-center gap-6">
              {/* Timeline dot - centered with card and line */}
              <div
                className={`absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 flex-shrink-0 z-10 ${
                  exp.current
                    ? "border-primary bg-primary pulse-glow"
                    : "border-muted-foreground bg-background"
                }`}
              />

              <div className="card-glass rounded-2xl p-6 hover-lift flex-1 min-w-0">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="text-xl font-bold">{exp.role}</h3>
                    <p className="text-primary font-semibold">{exp.company}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-foreground">{exp.period}</div>
                    <div className="text-xs text-muted-foreground">{exp.location}</div>
                    {exp.current && (
                      <span className="inline-block mt-1 px-2 py-0.5 text-xs rounded-full bg-primary/20 text-primary border border-primary/30 font-semibold">
                        Current
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4 text-justify">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs rounded-lg bg-secondary text-muted-foreground border border-border font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
