'use client';

export default function IdeaLeaguePage() {
  const universities = [
    {
      name: "TU Delft",
      fullName: "Delft University of Technology",
      country: "Netherlands",
      founded: 1842,
      url: "https://www.tudelft.nl",
      description: "TU Delft is the oldest and largest Dutch public technical university, known for its pioneering work in engineering, design, and applied sciences.",
      color: "from-blue-500 to-blue-700"
    },
    {
      name: "ETH Zürich",
      fullName: "Swiss Federal Institute of Technology Zurich",
      country: "Switzerland",
      founded: 1855,
      url: "https://ethz.ch",
      description: "ETH Zurich is one of the world's leading universities in science and technology, renowned for its cutting-edge research and excellence in engineering and natural sciences.",
      color: "from-indigo-500 to-indigo-700"
    },
    {
      name: "RWTH Aachen",
      fullName: "RWTH Aachen University",
      country: "Germany",
      founded: 1870,
      url: "https://www.rwth-aachen.de",
      description: "RWTH Aachen is one of Germany's leading technical universities, with particular strengths in engineering, natural sciences, and interdisciplinary research.",
      color: "from-cyan-500 to-cyan-700"
    },
    {
      name: "Chalmers University of Technology",
      fullName: "Chalmers University of Technology",
      country: "Sweden",
      founded: 1829,
      url: "https://www.chalmers.se",
      description: "Chalmers is a Swedish university located in Gothenburg, focusing on engineering and natural sciences, with strong emphasis on sustainability and innovation.",
      color: "from-sky-500 to-sky-700"
    },
    {
      name: "Politecnico di Milano",
      fullName: "Polytechnic University of Milan",
      country: "Italy",
      founded: 1863,
      url: "https://www.polimi.it",
      description: "Politecnico di Milano is Italy's largest technical university, excelling in engineering, architecture, and industrial design with strong ties to industry.",
      color: "from-blue-600 to-blue-800"
    }
  ];

  const logos = [
    { src: "/logos/TUDelft.png", alt: "TU Delft" },
    { src: "/logos/ETH.jpg", alt: "ETH Zürich" },
    { src: "/logos/RTWH.png", alt: "RWTH Aachen" },
    { src: "/logos/Chalmers.png", alt: "Chalmers" },
    { src: "/logos/Polimi.png", alt: "Politecnico di Milano" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-950 via-blue-900 to-blue-950 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            IDEA League
          </h1>
          <div className="w-32 h-1 bg-amber-400 mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-blue-100 font-light mb-12">
            International Alliance of Research Universities
          </p>

          {/* Logo Carousel */}
          <div className="relative overflow-hidden py-8 bg-white/10 rounded-lg backdrop-blur-sm">
            <div className="flex animate-scroll">
              {logos.map((logo, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 mx-8 flex items-center justify-center bg-white rounded-lg p-4"
                  style={{ width: '180px', height: '100px' }}
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
              {logos.map((logo, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 mx-8 flex items-center justify-center bg-white rounded-lg p-4"
                  style={{ width: '180px', height: '100px' }}
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-blue-50 border-2 border-blue-200 rounded-full px-8 py-3 mb-8">
              <p className="text-blue-900 font-semibold text-lg">Five Leading European Technical Universities</p>
            </div>
            <p className="text-xl text-slate-700 leading-relaxed mb-6 max-w-4xl mx-auto">
              The IDEA League is a strategic alliance of five of Europe's leading universities of science 
              and technology, formed to promote collaboration in education, research, and innovation.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Together, these institutions represent centuries of academic excellence and have collectively 
              shaped modern engineering and scientific thought across Europe and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">
              Mission and Values
            </h2>
            <p className="text-lg text-slate-600">
              Advancing excellence through collaboration and shared commitment
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white rounded-2xl shadow-lg border-2 border-slate-100 p-10 hover:border-blue-400 hover:shadow-2xl transition-all duration-300">
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl w-20 h-20 flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:scale-110 transition-transform">
                <span className="text-4xl">🎓</span>
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4 text-center">
                Educational Excellence
              </h3>
              <div className="w-16 h-1 bg-blue-400 mx-auto mb-4"></div>
              <p className="text-slate-600 text-center leading-relaxed">
                Fostering world-class engineering and scientific education through collaborative 
                programs and student exchange
              </p>
            </div>

            <div className="group bg-white rounded-2xl shadow-lg border-2 border-slate-100 p-10 hover:border-amber-400 hover:shadow-2xl transition-all duration-300">
              <div className="bg-gradient-to-br from-amber-500 to-amber-700 rounded-2xl w-20 h-20 flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:scale-110 transition-transform">
                <span className="text-4xl">🔬</span>
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4 text-center">
                Research Collaboration
              </h3>
              <div className="w-16 h-1 bg-amber-400 mx-auto mb-4"></div>
              <p className="text-slate-600 text-center leading-relaxed">
                Advancing cutting-edge research through joint projects and sharing of resources 
                across institutions
              </p>
            </div>

            <div className="group bg-white rounded-2xl shadow-lg border-2 border-slate-100 p-10 hover:border-green-400 hover:shadow-2xl transition-all duration-300">
              <div className="bg-gradient-to-br from-green-500 to-green-700 rounded-2xl w-20 h-20 flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:scale-110 transition-transform">
                <span className="text-4xl">💡</span>
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4 text-center">
                Innovation and Impact
              </h3>
              <div className="w-16 h-1 bg-green-400 mx-auto mb-4"></div>
              <p className="text-slate-600 text-center leading-relaxed">
                Driving technological innovation and addressing global challenges through 
                interdisciplinary approaches
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Member Universities */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">
              Member Universities
            </h2>
            <p className="text-lg text-slate-600">
              Five institutions, one vision of excellence
            </p>
          </div>
          
          <div className="space-y-6">
            {universities.map((university, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl border-2 border-slate-200 overflow-hidden hover:border-amber-400 hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Color accent bar */}
                  <div className={`w-full md:w-3 bg-gradient-to-b ${university.color}`}></div>
                  
                  {/* Content */}
                  <div className="flex-1 p-8 md:p-10">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                      <div className="mb-4 md:mb-0">
                        <a 
                          href={university.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-3xl md:text-4xl font-serif font-bold text-blue-950 hover:text-amber-600 transition-colors inline-flex items-center group"
                        >
                          {university.name}
                          <svg 
                            className="w-6 h-6 ml-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" 
                            fill="none" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth="2" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                          >
                            <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                          </svg>
                        </a>
                        <p className="text-xl text-slate-600 mt-2">{university.fullName}</p>
                      </div>
                      <div className="flex flex-col items-start md:items-end space-y-2">
                        <span className="bg-blue-100 text-blue-900 px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wide">
                          {university.country}
                        </span>
                        <span className="text-slate-500 text-sm font-medium">
                          Founded {university.founded}
                        </span>
                      </div>
                    </div>
                    <p className="text-slate-700 leading-relaxed text-lg">
                      {university.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leonardo Medal Connection */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">
              The Leonardo Da Vinci Medal
            </h2>
            <p className="text-lg text-slate-600">
              A collective commitment to recognizing excellence
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl border-2 border-slate-200 p-10 md:p-14">
            <div className="space-y-8 text-slate-700 text-lg leading-relaxed">
              <p className="text-xl">
                The Leonardo Da Vinci Medal represents one of the IDEA League's most prestigious initiatives—
                a collective commitment to recognizing and celebrating excellence at the intersection of 
                mathematics and engineering.
              </p>
              
              <p>
                By administering this award jointly, the five member universities ensure that:
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-10">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-l-4 border-blue-600 p-6 rounded-r-xl">
                  <p className="flex items-start text-slate-800">
                    <span className="text-blue-600 font-bold mr-3 text-2xl">✓</span>
                    <span>Selection decisions reflect a true pan-European academic consensus</span>
                  </p>
                </div>
                <div className="bg-gradient-to-br from-amber-50 to-amber-100 border-l-4 border-amber-600 p-6 rounded-r-xl">
                  <p className="flex items-start text-slate-800">
                    <span className="text-amber-600 font-bold mr-3 text-2xl">✓</span>
                    <span>The highest standards of academic rigor are maintained</span>
                  </p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 border-l-4 border-green-600 p-6 rounded-r-xl">
                  <p className="flex items-start text-slate-800">
                    <span className="text-green-600 font-bold mr-3 text-2xl">✓</span>
                    <span>The award benefits from diverse perspectives across institutions and countries</span>
                  </p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 border-l-4 border-purple-600 p-6 rounded-r-xl">
                  <p className="flex items-start text-slate-800">
                    <span className="text-purple-600 font-bold mr-3 text-2xl">✓</span>
                    <span>The historic Prix Poncelet legacy is preserved and projected into the future</span>
                  </p>
                </div>
                <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 border-l-4 border-indigo-600 p-6 rounded-r-xl md:col-span-2">
                  <p className="flex items-start text-slate-800">
                    <span className="text-indigo-600 font-bold mr-3 text-2xl">✓</span>
                    <span>European values in technical education are reinforced and promoted</span>
                  </p>
                </div>
              </div>

              <p>
                The annual rotation of the host university ensures equal representation and allows each 
                institution to contribute its unique perspective and traditions to the award ceremony.
              </p>

              <div className="bg-gradient-to-br from-amber-50 to-amber-100 border-2 border-amber-300 rounded-xl p-8 mt-10">
                <p className="text-amber-900 italic text-center text-xl font-medium">
                  "Through the Leonardo Da Vinci Medal, the IDEA League honors not just individual achievement, 
                  but the enduring European tradition of integrating mathematical rigor with engineering practice."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-950 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">
            Discover the Award
          </h2>
          <p className="text-blue-100 mb-10 text-lg">
            Learn about the criteria, historic laureates, and what the Leonardo Da Vinci Medal represents
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/about" className="bg-amber-500 text-slate-900 px-10 py-4 rounded-lg font-semibold hover:bg-amber-400 transition shadow-lg">
              About the Medal
            </a>
            <a href="/laureates" className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-950 transition">
              View Laureates
            </a>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </main>
  );
}