'use client';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8">
            Leonardo Da Vinci Medal
          </h1>
          <div className="w-32 h-1 bg-amber-400 mx-auto mb-6"></div>
          <p className="text-2xl md:text-3xl text-blue-100 font-light mb-8">
            Academic Award of the IDEA League
          </p>
          
          <p className="text-xl text-blue-50 max-w-3xl mx-auto leading-relaxed">
            Recognition of excellence in mathematics and creative engineering,
            in continuity with the historic Prix Poncelet (1868-present)
          </p>
        </div>
      </section>

      {/* Intro Section with Medal */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Column */}
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-8">
                Preserving Excellence Since 1868
              </h2>
              <div className="space-y-6 text-slate-700 text-lg leading-relaxed">
                <p>
                  The Leonardo Da Vinci Medal is the academic award of the <span className="font-semibold text-blue-900">IDEA League</span>, 
                  created to recognize excellence where mathematics, engineering, and technical 
                  creativity intersect.
                </p>
                <p>
                  Its creation is based on a collective academic decision: to update and continue 
                  the historic <span className="font-semibold text-blue-900">Prix Poncelet</span>, established in 1868 by the Académie des Sciences de France, 
                  considered the first European prize dedicated to rewarding the application of mathematics 
                  to engineering.
                </p>
                <p>
                  This new framework does not simply replace one prize with another, but recovers a dormant 
                  legacy to project it coherently into the 21st century. The Leonardo Da Vinci Medal and the 
                  Prix Poncelet thus form a single line of historical continuity, linking two centuries of 
                  technical and scientific thought with a modern, interdisciplinary, and university-based European approach.
                </p>
              </div>
            </div>

            {/* Medal Image Column */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full blur-3xl opacity-20"></div>
                <img
                  src="/Medallabasesinfondo.png"
                  alt="Leonardo Da Vinci Medal"
                  className="relative w-full max-w-lg object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">
              What We Recognize
            </h2>
            <p className="text-lg text-slate-600">
              Four pillars of excellence in mathematical engineering
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group bg-white p-8 rounded-2xl shadow-lg border-2 border-slate-200 hover:border-amber-400 hover:shadow-2xl transition-all duration-300">
              <div className="bg-gradient-to-br from-amber-500 to-amber-700 rounded-xl w-16 h-16 flex items-center justify-center mb-6 text-white text-4xl font-serif shadow-lg group-hover:scale-110 transition-transform">
                ∫
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Mathematical Excellence</h3>
              <div className="w-12 h-1 bg-amber-400 mb-4"></div>
              <p className="text-slate-600 leading-relaxed">
                Outstanding contributions in mathematical theory applied to engineering challenges
              </p>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-lg border-2 border-slate-200 hover:border-blue-400 hover:shadow-2xl transition-all duration-300">
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl w-16 h-16 flex items-center justify-center mb-6 text-white text-4xl shadow-lg group-hover:scale-110 transition-transform">
                ⚙
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Creative Engineering</h3>
              <div className="w-12 h-1 bg-blue-400 mb-4"></div>
              <p className="text-slate-600 leading-relaxed">
                Innovative solutions that demonstrate exceptional technical ingenuity and originality
              </p>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-lg border-2 border-slate-200 hover:border-green-400 hover:shadow-2xl transition-all duration-300">
              <div className="bg-gradient-to-br from-green-500 to-green-700 rounded-xl w-16 h-16 flex items-center justify-center mb-6 text-white text-4xl shadow-lg group-hover:scale-110 transition-transform">
                ✦
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Technical Impact</h3>
              <div className="w-12 h-1 bg-green-400 mb-4"></div>
              <p className="text-slate-600 leading-relaxed">
                Work that advances the field and creates lasting value for engineering practice
              </p>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-lg border-2 border-slate-200 hover:border-purple-400 hover:shadow-2xl transition-all duration-300">
              <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl w-16 h-16 flex items-center justify-center mb-6 text-white text-4xl shadow-lg group-hover:scale-110 transition-transform">
                ◈
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Interdisciplinary Impact</h3>
              <div className="w-12 h-1 bg-purple-400 mb-4"></div>
              <p className="text-slate-600 leading-relaxed">
                Work that bridges multiple domains and advances technical knowledge
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Historical Connection - Da Vinci & Poncelet */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">
              A Bridge Across Centuries
            </h2>
            <p className="text-lg text-slate-600">
              From Renaissance genius to modern mathematical rigor
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Image Column */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <img
                  src="/DavinciPoncelet.png"
                  alt="Leonardo Da Vinci and Jean-Victor Poncelet"
                  className="w-full max-w-lg object-contain rounded-xl shadow-2xl"
                />
              </div>
            </div>

            {/* Scrolling Testimonial Column */}
            <div className="relative overflow-hidden bg-white rounded-2xl p-10 shadow-xl border-2 border-slate-200">
              <div className="relative">
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-slate-300 to-transparent mx-auto mb-6"></div>
                
                {/* Auto-scrolling content */}
                <div className="h-[460px] overflow-hidden relative">
                  <div className="absolute inset-0 animate-scroll-slow">
                    <div className="text-slate-700 space-y-6 text-lg leading-relaxed px-2">
                      <p className="text-blue-900 font-bold text-xl mb-4">
                        Two Minds, One Vision
                      </p>
                      
                      <p>
                        Leonardo da Vinci (1452-1519) and Jean-Victor Poncelet (1788-1867) lived centuries apart, 
                        yet they shared a profound conviction: that mathematical reasoning and engineering practice 
                        are inseparable facets of human innovation.
                      </p>

                      <p>
                        Da Vinci, the quintessential Renaissance polymath, approached engineering through the lens 
                        of geometric principles. His notebooks reveal a mind that saw mathematical patterns in 
                        nature and translated them into mechanical designs—from flying machines to hydraulic systems. 
                        For Leonardo, engineering was applied geometry, and geometry was the language of creation.
                      </p>

                      <p>
                        Three centuries later, Poncelet would formalize this intuition into a rigorous mathematical 
                        framework. His pioneering work in projective geometry provided engineers with powerful tools 
                        to solve problems that had resisted purely empirical approaches. Poncelet demonstrated that 
                        abstract mathematical concepts could unlock concrete engineering solutions.
                      </p>

                      <p className="text-blue-900 font-bold text-xl mt-8 mb-4">
                        The Common Thread
                      </p>

                      <p>
                        Both men understood that true innovation emerges at the intersection of theory and practice. 
                        Da Vinci's genius lay not just in his artistic vision, but in his ability to ground fantastical 
                        ideas in geometric reality. Poncelet's contribution was to show that mathematical abstraction, 
                        far from being divorced from practical concerns, could be engineering's most powerful ally.
                      </p>

                      <p>
                        The Prix Poncelet, established in 1868—one year after Poncelet's death—explicitly recognized 
                        this synthesis. It honored those who, like its namesake, advanced engineering through mathematical 
                        innovation. The prize rejected the false dichotomy between pure mathematics and applied engineering, 
                        celebrating instead their productive union.
                      </p>

                      <p className="text-blue-900 font-bold text-xl mt-8 mb-4">
                        A Legacy Renewed
                      </p>

                      <p>
                        The Leonardo Da Vinci Medal continues this tradition with deliberate purpose. By invoking both 
                        names—Leonardo's Renaissance vision and Poncelet's mathematical rigor—the award affirms that 
                        the challenges of the 21st century demand the same integration of creativity and precision that 
                        characterized both men's work.
                      </p>

                      <p>
                        Today's complex systems—from climate modeling to autonomous infrastructure—require engineers 
                        who can move fluidly between abstract mathematical frameworks and concrete physical realities. 
                        The Medal recognizes those rare individuals who, like Da Vinci sketching the laws of fluid 
                        dynamics or Poncelet revolutionizing geometric analysis, refuse to separate the elegance of 
                        mathematical thought from the urgency of engineering problems.
                      </p>

                      <p>
                        In honoring the Prix Poncelet's legacy while embracing Leonardo's name, the award declares 
                        that the spirit of mathematical engineering—rigorous, creative, and indispensable—remains as 
                        vital today as it was in Renaissance Florence or 19th-century France.
                      </p>

                      <p className="text-slate-600 italic text-center mt-8 pt-6 border-t border-slate-200">
                        "The noblest pleasure is the joy of understanding." — Leonardo da Vinci
                      </p>
                    </div>
                  </div>
                  
                  {/* Gradient overlays for smooth fade */}
                  <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white to-transparent pointer-events-none"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
                </div>

                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-slate-300 to-transparent mx-auto mt-6"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - ELEGANT MEDALLION DESIGN */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {/* Card 1 - Years of History */}
            <div className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 rounded-2xl p-10 border-2 border-blue-400 shadow-2xl">
              {/* Patrón de fondo sutil */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                  backgroundSize: '32px 32px'
                }}></div>
              </div>
              
              <div className="relative">
                {/* Número destacado */}
                <div className="mb-2">
                  <span className="text-6xl font-serif font-bold bg-gradient-to-br from-blue-300 via-blue-400 to-blue-500 bg-clip-text text-transparent">
                    157
                  </span>
                </div>
                
                {/* Línea decorativa */}
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto mb-3"></div>
                
                {/* Texto principal */}
                <div className="text-lg text-white font-semibold mb-1">
                  Years of History
                </div>
                
                {/* Subtítulo */}
                <div className="text-sm text-blue-200 mt-2">
                  Since 1868
                </div>
              </div>
            </div>

            {/* Card 2 - Distinguished Laureates */}
            <div className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 rounded-2xl p-10 border-2 border-amber-400 shadow-2xl">
              {/* Patrón de fondo sutil */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                  backgroundSize: '32px 32px'
                }}></div>
              </div>
              
              <div className="relative">
                {/* Número destacado */}
                <div className="mb-2">
                  <span className="text-6xl font-serif font-bold bg-gradient-to-br from-amber-300 via-amber-400 to-amber-600 bg-clip-text text-transparent">
                    95
                  </span>
                </div>
                
                {/* Línea decorativa */}
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-3"></div>
                
                {/* Texto principal */}
                <div className="text-lg text-white font-semibold mb-1">
                  Distinguished Laureates
                </div>
                
                {/* Subtítulo */}
                <div className="text-sm text-blue-200 mt-2">
                  Prix Poncelet Recipients
                </div>
              </div>
            </div>

            {/* Card 3 - Leading Universities */}
            <div className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 rounded-2xl p-10 border-2 border-green-400 shadow-2xl">
              {/* Patrón de fondo sutil */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                  backgroundSize: '32px 32px'
                }}></div>
              </div>
              
              <div className="relative">
                {/* Número destacado */}
                <div className="mb-2">
                  <span className="text-6xl font-serif font-bold bg-gradient-to-br from-green-300 via-green-400 to-green-500 bg-clip-text text-transparent">
                    5
                  </span>
                </div>
                
                {/* Línea decorativa */}
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent mx-auto mb-3"></div>
                
                {/* Texto principal */}
                <div className="text-lg text-white font-semibold mb-1">
                  Leading Universities
                </div>
                
                {/* Subtítulo */}
                <div className="text-sm text-blue-200 mt-2">
                  IDEA League Members
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-950 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">
            Explore the Legacy
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Discover the complete history of laureates, selection criteria, and the mission 
            of this prestigious European academic award
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <a href="/about" className="bg-white text-blue-950 px-6 py-4 rounded-lg font-semibold hover:bg-blue-50 transition shadow-lg">
              About the Medal
            </a>
            <a href="/history" className="bg-white text-blue-950 px-6 py-4 rounded-lg font-semibold hover:bg-blue-50 transition shadow-lg">
              Historical Origin
            </a>
            <a href="/laureates" className="bg-amber-500 text-slate-900 px-6 py-4 rounded-lg font-semibold hover:bg-amber-400 transition shadow-lg">
              View Laureates
            </a>
            <a href="/criteria" className="bg-transparent border-2 border-white text-white px-6 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-950 transition">
              Award Criteria
            </a>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes scroll-slow {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }
        
        .animate-scroll-slow {
          animation: scroll-slow 30s linear infinite;
        }
        
        .animate-scroll-slow:hover {
          animation-play-state: paused;
        }
      `}</style>
    </main>
  );
}