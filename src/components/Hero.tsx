import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Github, Linkedin } from 'lucide-react';
import LazyImage from './LazyImage';
import { useReducedMotion, useLowEndDevice } from '../hooks/usePerformance';
import './Hero.css';

const Hero: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const isLowEndDevice = useLowEndDevice();

  // Réduire les animations sur les appareils bas de gamme ou si l'utilisateur préfère moins d'animation
  const shouldReduceAnimations = prefersReducedMotion || isLowEndDevice;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: shouldReduceAnimations ? { duration: 0.3 } : {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: shouldReduceAnimations ? 0 : 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: shouldReduceAnimations ? { duration: 0.3 } : {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const floatingVariants = shouldReduceAnimations ? {} : {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-shapes">
          <motion.div 
            className="shape shape-1"
            animate={shouldReduceAnimations ? {} : { rotate: 360 }}
            transition={shouldReduceAnimations ? {} : { duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className="shape shape-2"
            animate={shouldReduceAnimations ? {} : { rotate: -360 }}
            transition={shouldReduceAnimations ? {} : { duration: 25, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className="shape shape-3"
            variants={floatingVariants}
            animate={shouldReduceAnimations ? undefined : "animate"}
          />
        </div>
      </div>

      <div className="container">
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-text" variants={itemVariants}>
            <motion.h1 
              className="hero-title"
              variants={itemVariants}
            >
              Bonjour, je suis{' '}
              <span className="gradient-text">Papa Ibrahima Diagne</span>
            </motion.h1>
            
            <motion.p 
              className="hero-subtitle"
              variants={itemVariants}
            >
              Je crée des expériences web exceptionnelles avec React, TypeScript et des technologies modernes
            </motion.p>

            <motion.div 
              className="hero-buttons"
              variants={itemVariants}
            >
              <motion.a
                href="#projects"
                className="btn btn-primary"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Voir mes projets
              </motion.a>
              
              <motion.a
                href="/cv.pdf"
                className="btn btn-secondary"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                download
              >
                <Download size={20} />
                Télécharger CV
              </motion.a>
            </motion.div>

            <motion.div 
              className="hero-social"
              variants={itemVariants}
            >
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin size={24} />
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div 
            className="hero-image"
            variants={itemVariants}
          >
            <div className="image-container">
              <motion.div 
                className="profile-image"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <LazyImage
                  src="/images/profile-photo.jpg"
                  alt="Papa Ibrahima Diagne"
                  className="profile-photo-container"
                  placeholder="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjZjBlZmVmIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMjEwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSI4MCIgZmlsbD0iIzk5OTk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+8J+RqOKAjeKArfCfkrs8L3RleHQ+Cjwvc3ZnPgo="
                />
              </motion.div>
              <motion.div 
                className="floating-elements"
                variants={floatingVariants}
                animate="animate"
              >
                <div className="floating-element element-1">⚡</div>
                <div className="floating-element element-2">🚀</div>
                <div className="floating-element element-3">💡</div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
