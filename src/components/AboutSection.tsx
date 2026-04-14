import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, GraduationCap, Target, Sparkles } from 'lucide-react';

const highlights = [
  {
    icon: Code2,
    title: 'Software Development',
    description: 'Building robust applications with modern technologies',
  },
  {
    icon: GraduationCap,
    title: 'Information Technology Student',
    description: 'Currently pursuing Computer Science degree',
  },
  {
    icon: Target,
    title: 'Goal-Oriented',
    description: 'Focused on continuous learning and growth',
  },
  {
    icon: Sparkles,
    title: 'Creative Problem Solver',
    description: 'Turning complex problems into elegant solutions',
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-20 md:py-32 relative" ref={ref}>
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium">Get To Know</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-2">About Me</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-display font-semibold mb-4">
              A passionate developer based in <span className="gradient-text">India</span>
            </h3>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a Information Technology student with a deep passion for technology and software development. 
                My journey in programming started with curiosity about how things work, and it has evolved 
                into a commitment to creating meaningful digital experiences.
              </p>
              <p>
                I specialize in full-stack web development, with expertise in modern frameworks and 
                technologies. I believe in writing clean, efficient code and staying updated with the 
                latest industry trends.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or solving algorithmic challenges on platforms like LeetCode.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8"
            >
              <a href="#contact" className="btn-primary">
                Let's Connect
              </a>
            </motion.div>
          </motion.div>

          {/* Highlight Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="glass-card p-6 text-center"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="text-primary" size={24} />
                </div>
                <h4 className="font-display font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
