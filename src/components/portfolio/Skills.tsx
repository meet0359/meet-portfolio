import { useProfile } from "@/context/ProfileContext";

const Skills = () => {
  const { skillCategories } = useProfile();

  return (
    <section id="skills" className="section-padding bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">
            What I Work With
          </p>
          <h2 className="text-4xl font-bold mb-3">Skills & Technologies</h2>
          <p className="text-muted-foreground max-w-2xl">
            Tools, languages, and platforms I use to design, build, and ship software.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat) => (
            <div key={cat.title} className="card-glass rounded-2xl p-6 hover-lift group">
              <div className="text-3xl mb-4">{cat.icon}</div>
              <h3 className="text-lg font-bold mb-4 group-hover:text-primary transition-colors">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-xs rounded-lg bg-primary/10 text-primary border border-primary/20 font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
