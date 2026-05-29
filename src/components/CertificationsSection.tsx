import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Award } from 'lucide-react';

const certifications = [
  {
    title: 'Python programming Certification',
    issuer: 'IIT Bombay - Spoken Tutorial',
    date: '2024',
    link: 'https://www.linkedin.com/posts/hemant-patil-331163289_java-certification-iitbombay-activity-7294234821361377280-FGd5?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEX32BUBpMSjJXe-SiX7f9lvo6kgzDBtES4',
    image: null,
  },
  {
    title: 'Idea Pitching Competition At E-Cell MET BKC',
    issuer: 'MET BKC - Eureka',
    date: '2023',
    link: 'https://www.linkedin.com/posts/hemant-patil-331163289_participated-in-an-idea-pitching-competition-activity-7246945697000800256-UZHE?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEX32BUBpMSjJXe-SiX7f9lvo6kgzDBtES4',
    image: null,
  },
  {
    title: 'Runner Up in Hackathon',
    issuer: 'Sapkal Knowledge Hub, IOE, Nashik',
    date: '2026',
    link: 'https://www.linkedin.com/posts/hemant-patil-331163289_hackathon-technofest-runnerup-activity-7457445830266953728-GmS_?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEX32BUBpMSjJXe-SiX7f9lvo6kgzDBtES4',
    image: null,
  },
  {
    title: 'Participating in Project Expo - PROJIT',
    issuer: 'JIT COE, Nashik',
    date: '2026',
    link: 'https://www.linkedin.com/posts/hemant-patil-331163289_projit-achievement-futureengineer-activity-7429197655857262593-aZIa?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEX32BUBpMSjJXe-SiX7f9lvo6kgzDBtES4',
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
    title: 'WEB APPLICATION DEVELOPMENT',
    issuer: 'Supratechai Innovations pvt ltd, Nashik',
    date: '2026',
    link: 'https://www.linkedin.com/posts/hemant-patil-331163289_internship-webdevelopment-softwaredevelopment-activity-7460701899571306496-4-Cy?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEX32BUBpMSjJXe-SiX7f9lvo6kgzDBtES4',
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
