import { motion } from "framer-motion";

export default function PortfolioWebsite() {
  const projects = [
    {
      number: "01",
      title: "AYA Crypto Agent",
      description:
        "Built an AI-powered crypto market intelligence platform with real-time analysis, automated workflows, and a modern full-stack architecture.",
      tech: ["React", "Node.js", "Tailwind", "AI"],
      github: "https://github.com/sidcandoall/aya-crypto-agent",
      link: "https://aya-crypto-agent.onrender.com",
      label: "Live Demo",
    },

    {
      number: "02",
      title: "Mind Mirror",
      description:
        "Developed an AI-driven emotional wellness platform using DistilBERT, FastAPI, and interactive analytics dashboards for mood and emotion tracking.",
      tech: [
        "Python",
        "FastAPI",
        "DistilBERT",
        "React",
        "Deep Learning",
      ],
      github: "https://github.com/htmw/2026S-Nexus",
      link: "https://github.com/htmw/2026S-Nexus/wiki",
      label: "Project Wiki",
    },

    {
      number: "03",
      title: "Fitness Progress Tracker",
      description:
        "Created a responsive fitness tracking platform focused on workout progression, physique monitoring, and nutrition analytics.",
      tech: ["Next.js", "MongoDB", "Chart.js"],
      github: "https://github.com/sidcandoall/fitness",
      link: "https://fitness5ive.vercel.app/login",
      label: "Live Demo",
    },
  ];

  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Spring Boot",
    "Python",
    "FastAPI",
    "MongoDB",
    "PostgreSQL",
    "AWS",
    "Docker",
    "Tailwind CSS",
    "Git",
    "REST APIs",
    "Microservices",
    "Deep Learning",
    "Agile",
  ];



  const experience = [
    {
      company: "NRI Educational Society",
      role: "Software Engineer",
      duration: "Sep 2024 – Feb 2025",
      tech: ["C#", "ASP.NET", "SQL", "SAP Crystal Reports"],
      achievements: [
        "Developed and maintained 450+ enterprise reports.",
        "Integrated SAP Crystal Reports with ASP.NET applications.",
        "Designed SQL queries and stored procedures for reporting.",
        "Collaborated with stakeholders to deliver reporting solutions."
      ],
    },
    {
      company: "Infosys",
      role: "Software Engineer – Banking Solutions",
      duration: "Apr 2023 – Jun 2024",
      tech: ["Java", "Spring Boot", "REST APIs", "Docker", "SQL"],
      achievements: [
        "Designed and maintained Java Spring Boot microservices.",
        "Built secure REST APIs using JWT authentication.",
        "Optimized SQL queries improving performance by ~75%.",
        "Automated backend workflows using Docker.",
        "Developed trade filtering features for enterprise banking applications."
      ],
    },
    {
      company: "Infosys",
      role: "Software Engineer Trainee",
      duration: "Oct 2022 – Mar 2023",
      tech: ["Java", "Angular", "Spring Boot", "SQL"],
      achievements: [
        "Developed full-stack applications using Java, Angular, and SQL.",
        "Built backend modules with Spring Boot.",
        "Optimized 150+ SQL queries.",
        "Implemented modular Angular components."
      ],
    },
  ];

  return (
     <div className="min-h-screen bg-[#0f1115] text-white font-sans">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0f1115]/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <h1 className="text-2xl font-bold tracking-wide">
            Krishna<span className="text-zinc-500">.</span>
          </h1>

          <nav className="hidden gap-8 text-sm md:flex">
            <a href="#about" className="transition hover:text-zinc-300">
              About
            </a>

            <a href="#experience" className="transition hover:text-zinc-300">
              Experience
            </a>

            <a href="#projects" className="transition hover:text-zinc-300">
              Projects
            </a>

            <a href="#skills" className="transition hover:text-zinc-300">
              Skills
            </a>

            <a href="#contact" className="transition hover:text-zinc-300">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative overflow-hidden px-6 py-24"
      >
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.12),transparent_25%)]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(6,182,212,0.10),transparent_25%)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left */}
          <div>
            <div className="mb-8 flex items-center gap-3 text-sm text-zinc-400">
              <div className="h-2 w-2 rounded-full bg-green-400" />
              Jersey City, NJ
            </div>

            <p className="mb-5 text-sm uppercase tracking-[0.35em] text-zinc-500">
              Software Engineer • Builder • Athlete
            </p>

            <h1 className="max-w-5xl text-6xl font-black leading-[0.95] tracking-tight md:text-8xl">
              Building systems.
              <br />
              Building leverage.
            </h1>

            <p className="mt-10 max-w-2xl text-lg leading-relaxed text-zinc-400 md:text-xl">
              I’m Krishna Mouli Pothana — a software engineer focused on
              scalable systems, modern web engineering, AI-driven products,
              and building at the intersection of technology, aesthetics,
              and ambition.
            </p>

            <div className="mt-12 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-white px-8 py-4 text-sm font-semibold uppercase tracking-wide text-black transition hover:scale-105"
              >
                Explore Work
              </a>

              <a
                href="#contact"
                className="rounded-full border border-white/5 px-8 py-4 text-sm font-semibold uppercase tracking-wide transition hover:bg-white/10"
              >
                Let’s Connect
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative flex justify-center">
            <div className="absolute -left-10 top-10 hidden h-44 w-44 rounded-full bg-blue-500/10 blur-3xl lg:block" />

            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/5 shadow-2xl">
              <img
                src={`${import.meta.env.BASE_URL}profile.jpg`}
                alt="profile"
                className="h-[650px] w-[500px] object-cover object-top"
              />
              <div className="absolute inset-0 bg-black/20" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </motion.section>

      {/* About */}
      <motion.section
        id="about"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mx-auto max-w-6xl px-6 py-28"
      >
        <div className="grid gap-16 md:grid-cols-2">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-zinc-500">
              About Me
            </p>

            <h2 className="text-5xl font-bold leading-tight">
              Engineering,
              <br />
              creativity,
              <br />
              discipline.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-zinc-400">
            <p>
              I’m a full-stack software engineer passionate about building
              scalable backend systems, polished interfaces, and impactful
              digital experiences.
            </p>

            <p>
              My background includes enterprise application development using
              Java, Spring Boot, microservices, REST APIs, and cloud-native
              deployment workflows.
            </p>

            <p>
              Beyond engineering, I’m deeply interested in fitness,
              entrepreneurship, and building a long-term personal brand around
              technology and ambition.
            </p>
          </div>
        </div>
      </motion.section>


      {/* Experience */}
      <motion.section
        id="experience"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mx-auto max-w-7xl px-6 py-28"
      >
        <div className="mb-20">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-zinc-500">
            Experience
          </p>
          <h2 className="text-5xl font-bold">
            Professional<br />Experience
          </h2>
        </div>

        <div className="space-y-16">
          {experience.map((job, index) => (
            <motion.div
              key={index}
              whileHover={{ x: 5 }}
              className="border-b border-white/5 pb-12"
            >
              <h3 className="text-3xl font-bold">{job.role}</h3>
              <p className="mt-2 text-lg text-zinc-400">{job.company}</p>
              <p className="mt-1 text-sm uppercase tracking-widest text-zinc-500">
                {job.duration}
              </p>

              <ul className="mt-6 space-y-2 text-zinc-400">
                {job.achievements.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-3">
                {job.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>


      {/* Projects */}
      <motion.section
        id="projects"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-[#151821] px-6 py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-20">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-zinc-500">
              Selected Work
            </p>

            <h2 className="text-5xl font-bold">
              Projects &
              <br />
              Case Studies
            </h2>
          </div>

          <div className="space-y-20">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ x: 6 }}
                className="border-b border-white/5 pb-16"
              >
                <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
                  {/* Left */}
                  <div className="max-w-3xl">
                    <p className="mb-5 text-sm uppercase tracking-[0.3em] text-zinc-500">
                      {project.number}
                    </p>

                    <h3 className="text-4xl font-bold md:text-5xl">
                      {project.title}
                    </h3>

                    <p className="mt-6 text-lg leading-relaxed text-zinc-400">
                      {project.description}
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                      {project.tech.map((item) => (
                        <span
                          key={item}
                          className="text-sm text-zinc-500"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right */}
                  <div className="flex gap-6 text-sm">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="transition hover:text-zinc-400"
                      >
                        GitHub ↗
                      </a>
                    )}

                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="transition hover:text-zinc-400"
                      >
                        {project.label} ↗
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Skills */}
      <motion.section
        id="skills"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mx-auto max-w-6xl px-6 py-28"
      >
        <div className="mb-14">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-zinc-500">
            Technical Skills
          </p>

          <h2 className="text-5xl font-bold">Tech Stack</h2>
        </div>

        <div className="flex flex-wrap gap-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="rounded-full border border-white/5 bg-[#1b1f2a] px-5 py-3 text-sm text-zinc-300 transition hover:border-white/20"
            >
              {skill}
            </div>
          ))}
        </div>
      </motion.section>

      {/* Philosophy */}
      <section className="relative overflow-hidden border-y border-white/5 bg-[#151821] px-6 py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_35%)]" />

        <div className="relative mx-auto max-w-5xl text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-zinc-500">
            Philosophy
          </p>

          <h2 className="mt-8 text-4xl font-black leading-tight md:text-6xl">
            Discipline creates freedom.
            <br />
            Consistency builds identity.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-zinc-400">
            Building at the intersection of technology, aesthetics,
            discipline, and ambition.
          </p>
        </div>
      </section>

      {/* Contact */}
      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="px-6 py-28"
      >
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-zinc-500">
            Let’s Connect
          </p>

          <h2 className="text-5xl font-bold">
            Ready to build something meaningful?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
            I’m currently open to software engineering opportunities,
            collaborations, and ambitious projects.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:krishhhsid@gmail.com"
              className="rounded-full bg-white px-8 py-4 font-semibold text-black transition hover:scale-105"
            >
              Email Me
            </a>

            <a
              href="https://www.linkedin.com/in/krishna--pothana/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/5 px-8 py-4 font-semibold transition hover:bg-white/10"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/sidcandoall"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/5 px-8 py-4 font-semibold transition hover:bg-white/10"
            >
              GitHub
            </a>
          </div>
        </div>
      </motion.section>
    </div>
  );
}