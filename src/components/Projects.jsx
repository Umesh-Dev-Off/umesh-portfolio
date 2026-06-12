import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
  const projectList = [
    {
      title: "Credit Card Fraud Detection System",
      skills: ["Python", "Scikit-learn", "Flask", "Pandas", "NumPy"]
    },
    {
      title: "E-Commerce Platform",
      skills: ["React", "Django", "PostgreSQL", "Redis"]
    }
  ];

  return (
    <section id="projects" className="bg-[#ff2a2a] text-white py-24 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      
      {/* Decorative stars to match the About section */}
      <div className="absolute top-10 right-10 md:right-20 text-black opacity-20 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
      <div className="absolute bottom-10 left-4 md:left-20 text-black opacity-20 animate-pulse" style={{ animationDelay: '1.2s' }}>
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-block border border-black/20 rounded-full px-5 py-1.5 text-xs text-black font-bold mb-4 shadow-sm bg-black/10 uppercase tracking-widest">
            My Portfolio
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-black mb-4">
            Featured <span className="text-white">Projects</span>
          </h2>
          <p className="text-red-50 text-sm md:text-base max-w-lg mx-auto leading-relaxed font-semibold">
            A showcase of software engineering, full-stack architectures, and machine learning models built to solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectList.map((project, index) => (
            <div 
              key={index}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-delay={index * 150}
              className="bg-gray-900 border border-transparent rounded-[1.8rem] p-6 md:p-8 hover:scale-[1.02] hover:shadow-[0_25px_50px_rgba(0,0,0,0.35)] transition-all duration-500 group"
            >
              <div>
                {/* Title */}
                <h3 className="text-2xl font-black text-white mb-4 tracking-tight group-hover:text-[#ff2a2a] transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx} 
                      className="px-3 py-1 bg-white/5 border border-white/10 text-xs rounded-full text-white/80 font-mono font-medium hover:bg-[#ff2a2a]/10 hover:border-[#ff2a2a]/30 hover:text-white transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
