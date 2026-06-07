import { useProfile } from "@/context/ProfileContext";

const Projects = () => {
  const { projects } = useProfile();

  return (
    <section id="projects" className="section-padding bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">
            What I've Built
          </p>
          <h2 className="text-4xl font-bold mb-3">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl">
            Selected work across products, platforms, and side projects — with links where available.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="relative card-glass rounded-2xl p-6 hover-lift overflow-hidden"
            >
              {/* Gradient accent */}
              <div
                className={`absolute top-0 right-0 w-48 h-48 rounded-full bg-gradient-to-br ${project.gradient} blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none`}
              />

              <div className="relative">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5 text-justify">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs rounded-lg bg-primary/10 text-primary border border-primary/20 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.link !== "#" && (
                    <a
                      href={project.link}
                      className="text-sm font-semibold text-primary hover:underline flex items-center gap-1"
                    >
                      Live Demo ↗
                    </a>
                  )}
                  {project.github !== "#" && (
                    <a
                      href={project.github}
                      className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                    >
                      GitHub →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
