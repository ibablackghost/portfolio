import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Database, 
  Palette, 
  Smartphone, 
  Cloud, 
  GitBranch
} from 'lucide-react';
import './Skills.css';

const Skills: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Code size={30} />,
      color: '#667eea',
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'Vue.js', level: 80 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Tailwind CSS', level: 90 }
      ]
    },
    {
      title: 'Backend',
      icon: <Database size={30} />,
      color: '#764ba2',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Express', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'PostgreSQL', level: 75 },
        { name: 'GraphQL', level: 70 },
        { name: 'REST API', level: 90 }
      ]
    },
    {
      title: 'Design',
      icon: <Palette size={30} />,
      color: '#f093fb',
      skills: [
        { name: 'Figma', level: 85 },
        { name: 'Adobe XD', level: 80 },
        { name: 'Photoshop', level: 75 },
        { name: 'Illustrator', level: 70 },
        { name: 'UI/UX Design', level: 85 },
        { name: 'Prototyping', level: 80 }
      ]
    },
    {
      title: 'Mobile',
      icon: <Smartphone size={30} />,
      color: '#f5576c',
      skills: [
        { name: 'React Native', level: 80 },
        { name: 'Flutter', level: 70 },
        { name: 'iOS Development', level: 65 },
        { name: 'Android Development', level: 70 },
        { name: 'PWA', level: 85 },
        { name: 'Responsive Design', level: 95 }
      ]
    },
    {
      title: 'DevOps',
      icon: <Cloud size={30} />,
      color: '#4facfe',
      skills: [
        { name: 'Docker', level: 80 },
        { name: 'AWS', level: 75 },
        { name: 'Vercel', level: 85 },
        { name: 'Netlify', level: 80 },
        { name: 'CI/CD', level: 75 },
        { name: 'Linux', level: 70 }
      ]
    },
    {
      title: 'Tools',
      icon: <GitBranch size={30} />,
      color: '#43e97b',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'VS Code', level: 95 },
        { name: 'Webpack', level: 80 },
        { name: 'Vite', level: 85 },
        { name: 'Jest', level: 75 },
        { name: 'ESLint', level: 80 }
      ]
    }
  ];

  const technologies = [
    { name: 'React', icon: '⚛️', color: '#61dafb' },
    { name: 'TypeScript', icon: '🔷', color: '#3178c6' },
    { name: 'Node.js', icon: '🟢', color: '#68a063' },
    { name: 'MongoDB', icon: '🍃', color: '#4db33d' },
    { name: 'AWS', icon: '☁️', color: '#ff9900' },
    { name: 'Docker', icon: '🐳', color: '#2496ed' },
    { name: 'Git', icon: '📦', color: '#f05032' },
    { name: 'Figma', icon: '🎨', color: '#f24e1e' }
  ];

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <motion.div
          className="skills-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="skills-header" variants={itemVariants}>
            <h2 className="section-title">Mes compétences</h2>
            <p className="skills-subtitle">
              Une expertise diversifiée dans les technologies modernes du web
            </p>
          </motion.div>

          <motion.div 
            className="skills-grid"
            variants={itemVariants}
          >
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                className="skill-category"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="category-header">
                  <div 
                    className="category-icon"
                    style={{ color: category.color }}
                  >
                    {category.icon}
                  </div>
                  <h3 className="category-title">{category.title}</h3>
                </div>
                
                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="skill-item"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: skillIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="skill-info">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <motion.div
                          className="skill-progress"
                          style={{ backgroundColor: category.color }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: skillIndex * 0.1 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="technologies-section"
            variants={itemVariants}
          >
            <h3 className="technologies-title">Technologies favorites</h3>
            <div className="technologies-grid">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  className="tech-item"
                  whileHover={{ 
                    scale: 1.1, 
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div 
                    className="tech-icon"
                    style={{ backgroundColor: tech.color }}
                  >
                    {tech.icon}
                  </div>
                  <span className="tech-name">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
