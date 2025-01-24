import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Code2 } from 'lucide-react';

function App() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const projects = [
    {
      title: "Project One",
      description: "A full-stack web application built with React and Node.js",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072",
      link: "#"
    },
    {
      title: "Project Two",
      description: "Mobile-first e-commerce platform",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2015",
      link: "#"
    },
    {
      title: "Project Three",
      description: "AI-powered data visualization dashboard",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=2076",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-premier-navy">
      {/* Hero Section */}
      <motion.header 
        className="h-screen flex items-center justify-center bg-gradient-to-br from-premier-navy via-premier-slate to-premier-navy"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="text-center px-4">
          <motion.h1 
            className="text-6xl font-bold text-premier-gold mb-6"
            {...fadeIn}
          >
            Ghanashyam Sunuwar
          </motion.h1>
          <motion.p 
            className="text-xl text-premier-cream mb-8"
            {...fadeIn}
            transition={{ delay: 0.2 }}
          >
            Frontend Developer (ReactJS)
          </motion.p>
          <motion.div 
            className="flex justify-center space-x-4"
            {...fadeIn}
            transition={{ delay: 0.4 }}
          >
            <a href="https://github.com/ghanashyamsunuwar" className="text-premier-gold hover:text-premier-cream transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/ghanashyam-sunuwar-736112234/" className="text-premier-gold hover:text-premier-cream transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-premier-gold hover:text-premier-cream transition-colors">
              <Mail size={24} />
            </a>
          </motion.div>
        </div>
      </motion.header>

      {/* About Section */}
      <motion.section 
        className="py-20 px-4 md:px-8 max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-premier-gold mb-8 text-center">About Me</h2>
        <div className="bg-premier-slate/30 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-premier-gold/20">
          <p className="text-premier-cream leading-relaxed">
            I'm a passionate developer with 5+ years of experience in building modern web applications.
            My expertise includes React, Node.js, and cloud technologies. I love creating elegant
            solutions to complex problems and am always eager to learn new technologies.
          </p>
        </div>
      </motion.section>

      {/* Projects Section */}
      <section className="py-20 px-4 md:px-8 bg-premier-slate/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-premier-gold mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-premier-slate/30 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-premier-gold/20"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-premier-gold mb-2">{project.title}</h3>
                  <p className="text-premier-cream mb-4">{project.description}</p>
                  <a 
                    href={project.link}
                    className="inline-flex items-center text-premier-gold hover:text-premier-cream transition-colors"
                  >
                    View Project <ExternalLink size={16} className="ml-2" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <motion.section 
        className="py-20 px-4 md:px-8 max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-premier-gold mb-12 text-center">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {['React', 'Node.js', 'TypeScript', 'Python', 'AWS', 'Docker', 'GraphQL', 'MongoDB'].map((skill, index) => (
            <motion.div
              key={skill}
              className="bg-premier-slate/30 backdrop-blur-sm p-4 rounded-lg shadow-md flex items-center space-x-3 border border-premier-gold/20"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Code2 size={20} className="text-premier-gold" />
              <span className="text-premier-cream">{skill}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-premier-slate py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="mb-4 text-premier-cream">Let's work together!</p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-premier-gold hover:text-premier-cream transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="text-premier-gold hover:text-premier-cream transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-premier-gold hover:text-premier-cream transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;