import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "JavaScript", "SQL", "HTML", "CSS"],
      icon: (
        <svg className="w-6 h-6 text-[#ff2a2a]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
        </svg>
      )
    },
    {
      title: "Frameworks & Libraries",
      skills: ["Flask", "Django", "React", "Pandas", "NumPy", "Scikit-learn"],
      icon: (
        <svg className="w-6 h-6 text-[#ff2a2a]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 .414-.336.75-.75.75H4.5a.75.75 0 0 1-.75-.75v-4.25m16.5 0a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 14.15m16.5 0V9.75A2.25 2.25 0 0 0 18 7.5H6A2.25 2.25 0 0 0 3.75 9.75v4.4m16.5 0a2.25 2.25 0 0 1-2.25 2.25H6.75a2.25 2.25 0 0 1-2.25-2.25M13.5 10.5h.008v.008H13.5V10.5Zm0 3h.008v.008H13.5v-.008Z" />
        </svg>
      )
    },
    {
      title: "Databases",
      skills: ["MySQL", "MongoDB"],
      icon: (
        <svg className="w-6 h-6 text-[#ff2a2a]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0v3.75" />
        </svg>
      )
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "Visual Studio Code", "Jupyter Notebook", "Google Colab", "REST APIs"],
      icon: (
        <svg className="w-6 h-6 text-[#ff2a2a]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.43l-1.003.828c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.43l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>
      )
    },
    {
      title: "Core Competencies",
      skills: ["Data Structures & Algorithms", "Machine Learning", "Full Stack Development", "Database Design"],
      icon: (
        <svg className="w-6 h-6 text-[#ff2a2a]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.467 5.99 5.99 0 0 0-1.925 3.546 5.974 5.974 0 0 1-2.133-1A3.75 3.75 0 0 0 12 18Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 .75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" />
        </svg>
      )
    }
  ];

  return (
    <section id="skills" className="bg-[#0a0a0a] text-white py-24 px-6 md:px-12 w-full border-t border-gray-900 relative overflow-hidden font-sans">
      
      {/* Background ambient red glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#ff2a2a]/5 rounded-full filter blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-[#ff2a2a]/5 rounded-full filter blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-block border border-[#ff2a2a]/30 rounded-full px-5 py-1.5 text-xs text-[#ff2a2a] font-bold mb-4 shadow-[0_0_15px_rgba(255,42,42,0.1)] bg-[#ff2a2a]/5 uppercase tracking-widest">
            My Capabilities
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-4">
            Technical <span className="text-[#ff2a2a]">Skills</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-lg mx-auto leading-relaxed">
            A breakdown of my programming languages, developer frameworks, database knowledge, and core engineering competencies.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className={`bg-[#121212] border border-white/5 rounded-[1.8rem] p-6 flex flex-col hover:border-[#ff2a2a]/45 hover:shadow-[0_20px_40px_rgba(255,42,42,0.04)] hover:scale-[1.01] transition-all duration-500 group ${
                index === 3 ? "lg:col-span-1" : index === 4 ? "lg:col-span-2" : ""
              }`}
            >
              {/* Card Header (Icon & Title) */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-[#ff2a2a]/10 group-hover:border-[#ff2a2a]/30 transition-all duration-300">
                  {category.icon}
                </div>
                <h3 className="text-lg font-black text-white group-hover:text-[#ff2a2a] transition-colors duration-300">
                  {category.title}
                </h3>
              </div>

              {/* Skills Badges list */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="px-3.5 py-1.5 bg-white/5 border border-white/10 text-xs rounded-full text-white/80 font-mono font-medium hover:bg-[#ff2a2a]/10 hover:border-[#ff2a2a]/30 hover:text-white transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
