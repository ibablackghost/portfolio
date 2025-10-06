import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Zap, Heart } from 'lucide-react';
import './About.css';
import { BsWordpress } from 'react-icons/bs';
import { FaUniversity } from 'react-icons/fa';

const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  } as any;

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  } as any;

  const stats = [
    { number: '25+', label: 'Projets réalisés' },
    { number: '2+', label: 'Années d\'expérience' },
    { number: '100%', label: 'Satisfaction client' },
    { number: 'Dakar', label: 'Basé à Dakar' }
  ];

  const features = [
    {
      icon: <Code size={40} />,
      title: 'Développement Full-Stack',
      description: 'Expert en React, Angular, Node.js, et bases de données modernes'
    },
    {
      icon: <Palette size={40} />,
      title: 'Design UI/UX',
      description: 'Création d\'interfaces intuitives et esthétiques'
    },
    {
      icon: <Zap size={40} />,
      title: 'Performance',
      description: 'Optimisation pour des applications rapides et fluides'
    },
    {
      icon: <Heart size={40} />,
      title: 'Passion',
      description: 'Amour du code et de l\'innovation technologique'
    },
    {
      icon: <BsWordpress size={40} />,
      title: 'WordPress',
      description: 'Création et gestion de sites WordPress sur mesure'
    },
    {
      icon: <FaUniversity size={40} />,
      title: 'FinTech',
      description: 'Solutions innovantes pour la finance digitale et les paiements'
    },

  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="about-text" variants={itemVariants}>
            <h2 className="section-title">À propos de moi</h2>
            <div className="about-description">
              <p>
                Développeur passionné basé à Dakar, je me spécialise dans la création
                d'applications web modernes et performantes. Mon expertise couvre
                l'ensemble du stack technologique, du frontend au backend.
              </p>
              <p>
                J'aime transformer des idées complexes en solutions élégantes et intuitives.
                Mon approche se base sur l'écoute, la collaboration et l'innovation pour
                créer des expériences digitales exceptionnelles au Sénégal et en Afrique.
              </p>
            </div>

            <motion.div
              className="stats-grid"
              variants={itemVariants}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="stat-item"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="about-features"
            variants={itemVariants}
          >
            <div className="features-grid">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="feature-card"
                  whileHover={{
                    scale: 1.05,
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="feature-icon">
                    {feature.icon}
                  </div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
