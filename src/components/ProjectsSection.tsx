import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, ExternalLink, Folder } from 'lucide-react';

const projects = [
  {
    title: 'Event Management System',
    description: 'A web application for managing events, including event creation, registration, ticketing, and attendee management.',
    techStack: ['React', 'TypeScript', 'Firebase', 'Tailwind'],
    github: 'https://github.com/Hemantpatil1/UTSAV-frontend',
    live: 'https://utsav-met-bkc.netlify.app/',
  },
  {
    title: 'My profile',
    description: 'My personal profile',
    techStack: ['React', 'TypeScript', 'Firebase', 'Tailwind'],
    github: 'https://github.com/Hemantpatil1/Hemant-Patil-Profile',
    live: '#',
  },
  {
    title: 'Weather Dashboard',
    description: 'Real-time weather application with location-based forecasts, interactive maps, and historical weather data visualization.',
    techStack: ['React', 'OpenWeather API', 'Chart.js'],
    github: 'https://github.com',
    live: '#',
  },
  {
    title: 'Portfolio Generator',
    description: 'A dynamic portfolio builder that allows users to create and customize their professional portfolios with templates.',
    techStack: ['Next.js', 'Prisma', 'PostgreSQL'],
    github: 'https://github.com',
    live: '#',
  },
  {
    title: 'Scan-Grow',
    description: 'Real-time tree health maintenance',
    techStack: ['React', 'Socket.io', 'Express', 'WebRTC'],
    github: 'https://github.com/Hemantpatil1/treeguardian-main',
    live: 'https://scan-grow.netlify.app/',
  },
  {
    title: 'Algorithm Visualizer',
    description: 'Interactive tool for visualizing sorting and pathfinding algorithms with step-by-step animations and complexity analysis.',
    techStack: ['React', 'TypeScript', 'Framer Motion'],
    github: 'https://github.com',
    live: '#',
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-20 md:py-32 bg-muted/30" ref={ref}>
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium">What I've Built</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-2">Featured Projects</h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 flex flex-col group"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Folder className="text-primary" size={20} />
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg font-display font-semibold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 flex-grow line-clamp-3">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Hemantpatil1"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <Github size={18} />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
