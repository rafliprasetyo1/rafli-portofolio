import React, { useState, useEffect } from 'react';

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [displayedName, setDisplayedName] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const fullName = "Rafli Prasetyo";

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    // Typing effect
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullName.length) {
        setDisplayedName(fullName.slice(0, index));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(typingInterval);
      }
    }, 150); // 150ms delay between each character

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(typingInterval);
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: "Aplikasi E-Commerce",
      image : "/images/Screenshot 2025-07-22 195447.png",
      description: "Platoform e-commerce modern dengan integrasi data mining dan CRM",
      tags: ["React", "Supabase", "Pyhton", "ngrok"],
      gradient: "from-purple-600 to-blue-600",
      url: "https://github.com/amiiiiiiii102/crm-makeUp-kelompok11-2sic"
    },
    {
      id: 2,
      title: "Segmentasi Pelanggan",
      image : "https://rfmcube.com/wp-content/uploads/2021/07/1_HiwX6vul8c4PBEueq3yBMw.png",
      description: "Model prediksi segmentasi pelanggan berdasarkan perilaku pembelian dengan metode FRM & XGBoost",
      tags: ["Pyhton", "Google Collab"],
      gradient: "from-green-600 to-teal-600",
      url: "https://github.com/rafliprasetyo1/RFM-predictor"
    },
    {
      id: 3,
      title: "Website Admin toko retail",
      image : "/images/Screenshot 2025-07-22 210427.png",
      description: "Website untuk tampilan admin sebuah toko retail",
      tags: ["Laravel"],
      gradient: "from-orange-600 to-red-600"
    }
  ];

  const skills = ['React', 'Laravel', 'Supabase', 'Data Mining', 'Power BI', 'Pyhton', 'Kotlin'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white relative overflow-x-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px)`,
            left: '10%',
            top: '20%',
            transition: 'transform 0.5s ease-out'
          }}
        />
        <div 
          className="absolute w-80 h-80 rounded-full bg-gradient-to-r from-green-600/20 to-teal-600/20 blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * -0.05}px, ${mousePosition.y * -0.05}px)`,
            right: '10%',
            bottom: '20%',
            animationDelay: '1s',
            transition: 'transform 0.5s ease-out'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col md:flex-row items-center justify-between py-20">
          <div className={`md:w-1/2 mb-10 md:mb-0 transition-all duration-[1500ms] ease-out ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
            <div className="mb-6">
              <span className="inline-block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent text-lg font-medium mb-2">
                👋 Selamat datang di portofolio saya
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Halo, Saya{' '}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent relative">
                {displayedName}
                {isTyping && <span className="animate-pulse">|</span>}
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-300 mb-6 font-light">
              Web Developer & <span className="text-purple-400">Data Mining</span>
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-xl leading-relaxed">
              Saya menciptakan pengalaman digital yang menarik dengan kombinasi kreativitas dan teknologi terdepan.
            </p>
            {/* Social Links */}
            <div className="flex gap-4 mb-10">
              <a 
                href="https://github.com/rafliprasetyo1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-full p-3 hover:border-purple-500/50 transition-all duration-300 hover:scale-110"
              >
                <svg className="w-6 h-6 text-gray-300 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              
              <a 
                href="https://linkedin.com/in/rafli-prasetyo-1a2b3c4d" // Replace with your actual LinkedIn URL
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-full p-3 hover:border-purple-500/50 transition-all duration-300 hover:scale-110"
              >
                <svg className="w-6 h-6 text-gray-300 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>
          </div>
          
          <div className={`md:w-5/12 lg:w-2/5 transition-all duration-[1500ms] ease-out delay-500 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl blur opacity-75 animate-pulse"></div>
              <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50">
                <div className="rounded-2xl overflow-hidden transform hover:scale-105 transition-transform duration-700 ease-out">
                  <img 
                    src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                    alt="Profile" 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20">
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-3xl p-8 md:p-16 border border-gray-700/50">
            <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="md:w-2/5">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl blur opacity-50"></div>
                  <div className="relative rounded-2xl overflow-hidden transform hover:scale-105 transition-transform duration-700 ease-out">
                    <img 
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                      alt="About Me" 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
              
              <div className="md:w-3/5">
                <h2 className="text-4xl md:text-5xl font-bold mb-8">
                  <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    Tentang Saya
                  </span>
                </h2>
                <div className="space-y-6 text-gray-300 text-lg">
                  <p className="leading-relaxed">
                    Saya adalah seorang mahasiswa aktif Semester 4 di Politeknik caltex Riau, 
                    Saya memiliki ketertarikan mendalam pada bidang Machine Learning dan Kecerdasan Buatan.
                     Dengan latar belakang di pengembangan frontend menggunakan React dan Tailwind CSS, saya terus mengembangkan kemampuan saya di dunia AI untuk menciptakan solusi digital yang cerdas dan fungsional.
                  </p>
                </div>
                
                <div className="mt-10">
                  <h3 className="text-xl font-semibold mb-6 text-purple-400">Keahlian Teknis</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {skills.map((skill, index) => (
                      <div 
                        key={skill}
                        className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 text-center hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                          {skill}
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Proyek Unggulan
              </span>
            </h2>
           
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className={`group bg-gray-800/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-gray-600/50 transition-all duration-700 ease-out hover:scale-105 hover:shadow-2xl ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ animationDelay: `${index * 300}ms` }}
              >
                <div className="relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80`}></div>
                  <img 
                    src={project.image || "https://via.placeholder.com/400"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="bg-gray-700/50 backdrop-blur-sm text-gray-300 text-sm px-3 py-1 rounded-full border border-gray-600/50 hover:border-purple-500/50 transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <a
  href={project.url}
  target="_blank"
  rel="noopener noreferrer"
  className="group/btn relative bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 w-full overflow-hidden block text-center"
>
  <span className="relative z-10 flex items-center justify-center">
    Lihat Detail
    <svg className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  </span>
  <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform origin-left duration-300"></div>
</a>

                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;