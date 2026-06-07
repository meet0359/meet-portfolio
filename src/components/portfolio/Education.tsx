import { useProfile } from "@/context/ProfileContext";

const Education = () => {
  const { educations } = useProfile();

  return (
    <section id="education" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">
            Academic Background
          </p>
          <h2 className="text-4xl font-bold mb-3">Education</h2>
          <p className="text-muted-foreground max-w-2xl">
            Degrees and institutions that shaped my technical foundation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {educations.map((edu) => (
            <div key={edu.degree} className="card-glass rounded-2xl p-6 hover-lift">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-2xl flex-shrink-0">
                  {edu.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold">{edu.degree}</h3>
                  <p className="text-primary font-semibold mt-0.5">{edu.institution}</p>
                  <div className="flex items-center gap-4 mt-1.5 text-sm text-muted-foreground">
                    <span>{edu.period}</span>
                    {edu.gpa && (
                      <span className="text-primary font-medium">GPA: {edu.gpa}</span>
                    )}
                  </div>

                  {edu.highlights && edu.highlights.length > 0 && (
                    <ul className="mt-4 space-y-2">
                      {edu.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary mt-0.5 flex-shrink-0">▸</span>
                          {h}
                        </li>
                      ))}
                    </ul>
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

export default Education;
