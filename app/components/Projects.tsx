import HudFrame from "./HudFrame";

type Project = {
  title: string;
  description: string;
  tech: string[];
  status: "Completed" | "In Progress";
};

const projects: Project[] = [
  {
    title: "Gaming Company Website",
    description:
      "A website for a gaming company, currently in development.",
    tech: ["TypeScript", "Next.js"],
    status: "In Progress",
  },
  {
    title: "Chatbot Platform",
    description:
      "A web platform for building and deploying chatbots, currently under active development.",
    tech: ["TypeScript", "Next.js"],
    status: "In Progress",
  },
  {
    title: "Calculator",
    description:
      "A functional calculator application built to practice core logic and problem-solving.",
    tech: ["C++"],
    status: "Completed",
  },
  {
    title: "University Coursework Projects",
    description:
      "A collection of academic projects completed during the BS AI program, covering programming fundamentals and problem-solving in C++ and Python.",
    tech: ["C++", "Python"],
    status: "Completed",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative px-6 md:px-16 lg:px-24 py-24">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-center">
        Projects
      </h2>
      <p className="text-muted mb-12 text-center">
        Things I&apos;ve built and I&apos;m building.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="relative bg-card/40 backdrop-blur-sm border border-white/5 rounded-lg p-6 hover:border-accent/60 transition-colors"
          >
            <HudFrame />
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-semibold text-foreground">
                {project.title}
              </h3>
              <span
                className={`text-xs px-2 py-1 rounded-full ${
                  project.status === "Completed"
                    ? "bg-accent/20 text-accent-light"
                    : "bg-muted/20 text-muted"
                }`}
              >
                {project.status}
              </span>
            </div>
            <p className="text-muted text-sm mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs bg-background/50 border border-white/10 text-muted px-2 py-1 rounded"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}