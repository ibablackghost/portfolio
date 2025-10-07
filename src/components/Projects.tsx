import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, 
  Github, 
  Eye, 
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import './Projects.css';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [currentProject, setCurrentProject] = useState(0);

  const filters = [
    { id: 'all', label: 'Tous' },
    { id: 'web', label: 'Web' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'design', label: 'Design' }
  ];

  const projects = [
    {
      id: 1,
      title: 'E-commerce Moderne',
      description: 'Plateforme e-commerce complète avec React, Node.js et MongoDB. Interface moderne et intuitive.',
      image: '/ecommerce.jpg',
      category: 'web',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      features: ['Panier intelligent', 'Paiement sécurisé', 'Gestion admin', 'API REST'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: true
    },
    {
      id: 2,
      title: 'Application Mobile Fitness',
      description: 'App mobile de suivi fitness avec React Native. Suivi des exercices et nutrition.',
      image: '/fitness.jpg',
      category: 'mobile',
      technologies: ['React Native', 'Firebase', 'Redux', 'Expo'],
      features: ['Tracking exercices', 'Plan nutritionnel', 'Statistiques', 'Social'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: true
    },
    {
      id: 3,
      title: 'Dashboard Analytics',
      description: 'Tableau de bord analytique avec visualisations interactives et temps réel.',
      image: '/api/placeholder/600/400',
      category: 'web',
      technologies: ['Vue.js', 'D3.js', 'WebSocket', 'PostgreSQL'],
      features: ['Graphiques interactifs', 'Temps réel', 'Export PDF', 'Filtres avancés'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: false
    },
    {
      id: 4,
      title: 'Design System',
      description: 'Système de design complet avec composants réutilisables et documentation.',
      image: '/api/placeholder/600/400',
      category: 'design',
      technologies: ['Figma', 'Storybook', 'React', 'Styled Components'],
      features: ['Composants UI', 'Documentation', 'Thèmes', 'Accessibilité'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: false
    },
    {
      id: 5,
      title: 'API Microservices',
      description: 'Architecture microservices avec Docker et Kubernetes pour une application scalable.',
      image: '/api/placeholder/600/400',
      category: 'web',
      technologies: ['Node.js', 'Docker', 'Kubernetes', 'Redis'],
      features: ['Scalabilité', 'Monitoring', 'Load balancing', 'CI/CD'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: false
    },
    {
      id: 6,
      title: 'App de Météo',
      description: 'Application météo avec géolocalisation et prévisions détaillées.',
      image: '/meteo.jpg',
      category: 'mobile',
      technologies: ['Flutter', 'API REST', 'SQLite', 'Maps'],
      features: ['Géolocalisation', 'Prévisions', 'Notifications', 'Offline'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: false
    }
  ];

  const filteredProjects = projects.filter(project => 
    activeFilter === 'all' || project.category === activeFilter
  );

  const featuredProjects = projects.filter(project => project.featured);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % featuredProjects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
  };

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <motion.div
          className="projects-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="projects-header" variants={itemVariants}>
            <h2 className="section-title">Mes projets</h2>
            <p className="projects-subtitle">
              Découvrez mes réalisations et projets personnels
            </p>
          </motion.div>

          {/* Projets en vedette */}
          <motion.div className="featured-section" variants={itemVariants}>
            <h3 className="featured-title">Projets en vedette</h3>
            <div className="featured-carousel">
              <motion.button
                className="carousel-btn prev"
                onClick={prevProject}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft size={24} />
              </motion.button>

              <div className="featured-container">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentProject}
                    className="featured-project"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="featured-image">
                      <img 
                        src={featuredProjects[currentProject]?.image} 
                        alt={featuredProjects[currentProject]?.title}
                        className="project-img"
                      />
                    </div>
                    <div className="featured-content">
                      <h4 className="featured-project-title">
                        {featuredProjects[currentProject]?.title}
                      </h4>
                      <p className="featured-project-description">
                        {featuredProjects[currentProject]?.description}
                      </p>
                      <div className="featured-tech">
                        {featuredProjects[currentProject]?.technologies.map((tech, index) => (
                          <span key={index} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                      <div className="featured-actions">
                        <motion.a
                          href={featuredProjects[currentProject]?.liveUrl}
                          className="btn btn-primary"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Eye size={20} />
                          Voir le projet
                        </motion.a>
                        <motion.a
                          href={featuredProjects[currentProject]?.githubUrl}
                          className="btn btn-secondary"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github size={20} />
                          Code source
                        </motion.a>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <motion.button
                className="carousel-btn next"
                onClick={nextProject}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight size={24} />
              </motion.button>
            </div>
          </motion.div>

          {/* Filtres */}
          <motion.div className="projects-filters" variants={itemVariants}>
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Grille des projets */}
          <motion.div className="projects-grid" variants={itemVariants}>
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="project-card"
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  <div className="project-image">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="project-img"
                    />
                    <div className="project-overlay">
                      <motion.a
                        href={project.liveUrl}
                        className="overlay-btn"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink size={20} />
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        className="overlay-btn"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github size={20} />
                      </motion.a>
                    </div>
                  </div>
                  
                  <div className="project-content">
                    <div className="project-header">
                      <h4 className="project-title">{project.title}</h4>
                      <span className={`project-category ${project.category}`}>
                        {project.category}
                      </span>
                    </div>
                    
                    <p className="project-description">{project.description}</p>
                    
                    <div className="project-tech">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">{tech}</span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="tech-more">+{project.technologies.length - 3}</span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
