import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Award } from 'lucide-react';

const certifications = [
  {
    title: 'Python programming Certification',
    issuer: 'IIT Bombay - Spoken Tutorial',
    date: '2024',
    link: '#',
    image: null,
  },
  {
    title: 'Web Development Fundamentals',
    issuer: 'freeCodeCamp',
    date: '2024',
    link: '#',
    image: null,
  },
  {
    title: 'Data Structures & Algorithms',
    issuer: 'Coursera',
    date: '2023',
    link: '#',
    image: null,
  },
  {
    title: 'React.js Certification',
    issuer: 'Meta',
    date: '2023',
    link: '#',
    image: null,
  },
  {
    title: 'Database Management Systems',
    issuer: 'NPTEL',
    date: '2024',
    link: '#',
    image: null,
  },
  {
    title: 'Machine Learning Foundations',
    issuer: 'Stanford Online',
    date: '2023',
    link: '#',
    image: null,
  },
];

const CertificationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="certifications" className="py-20 md:py-32" ref={ref}>
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium">My Achievements</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-2">Certifications</h2>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 group cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Award className="text-primary" size={24} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display font-semibold mb-1 group-hover:text-primary transition-colors line-clamp-2">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">{cert.issuer}</p>
                  <p className="text-xs text-muted-foreground/70">{cert.date}</p>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-border/50">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                >
                  View Certificate
                  <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
