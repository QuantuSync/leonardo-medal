export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Header - DRAMATIC REDESIGN */}
      <section className="bg-gradient-to-r from-blue-950 via-blue-900 to-blue-950 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            About the Leonardo Da Vinci Medal
          </h1>
          <div className="w-32 h-1 bg-amber-400 mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-blue-100 font-light">
            Honoring Excellence in Mathematical Engineering
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border-2 border-slate-200 p-10 md:p-14 space-y-8 text-slate-700 text-lg leading-relaxed">
            <h2 className="text-4xl font-serif font-bold text-slate-900 mb-8">
              Purpose and Philosophy
            </h2>
            
            <p className="text-xl">
              The Leonardo Da Vinci Medal is the academic award of the <span className="font-semibold text-blue-900">IDEA League</span>, 
              created to recognize and celebrate excellence at the intersection of mathematics, engineering, 
              and technical creativity.
            </p>

            <p>
              This prestigious award honors individuals whose work exemplifies the spirit of Leonardo da Vinci himself: 
              the fusion of rigorous mathematical thinking with innovative engineering practice, combining analytical 
              depth with creative problem-solving.
            </p>

            <h3 className="text-3xl font-serif font-bold text-slate-900 mt-12 mb-6">
              What the Medal Represents
            </h3>

            <p>
              The medal recognizes contributions that demonstrate:
            </p>

            {/* Four Characteristics - ELEGANT WHITE BOXES */}
            <div className="grid md:grid-cols-2 gap-6 my-10">
              <div className="bg-white border-l-4 border-amber-600 p-6 rounded-r-xl shadow-md hover:shadow-lg transition-shadow">
                <p className="flex items-start">
                  <span className="text-amber-600 font-bold mr-3 text-2xl flex-shrink-0">●</span>
                  <span><span className="font-semibold text-slate-900">Mathematical Excellence:</span> Outstanding application 
                  of mathematical theory to solve real-world engineering challenges</span>
                </p>
              </div>
              
              <div className="bg-white border-l-4 border-blue-600 p-6 rounded-r-xl shadow-md hover:shadow-lg transition-shadow">
                <p className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3 text-2xl flex-shrink-0">●</span>
                  <span><span className="font-semibold text-slate-900">Creative Engineering:</span> Innovative solutions that 
                  demonstrate exceptional technical ingenuity and originality</span>
                </p>
              </div>
              
              <div className="bg-white border-l-4 border-green-600 p-6 rounded-r-xl shadow-md hover:shadow-lg transition-shadow">
                <p className="flex items-start">
                  <span className="text-green-600 font-bold mr-3 text-2xl flex-shrink-0">●</span>
                  <span><span className="font-semibold text-slate-900">Technical Impact:</span> Work that advances the field 
                  and creates lasting value for engineering practice</span>
                </p>
              </div>
              
              <div className="bg-white border-l-4 border-purple-600 p-6 rounded-r-xl shadow-md hover:shadow-lg transition-shadow">
                <p className="flex items-start">
                  <span className="text-purple-600 font-bold mr-3 text-2xl flex-shrink-0">●</span>
                  <span><span className="font-semibold text-slate-900">Interdisciplinary Thinking:</span> The ability to bridge 
                  multiple domains and integrate diverse perspectives</span>
                </p>
              </div>
            </div>

            <h3 className="text-3xl font-serif font-bold text-slate-900 mt-12 mb-6">
              A European Academic Tradition
            </h3>

            <p>
              The Leonardo Da Vinci Medal is administered by the five leading European universities of the 
              IDEA League, ensuring that the selection process maintains the highest standards of academic 
              rigor and institutional integrity.
            </p>

            <p>
              Unlike many contemporary awards, this medal emphasizes the fundamental importance of mathematical 
              foundations in engineering innovation. It recognizes that the greatest advances in engineering 
              often emerge from deep mathematical insight combined with creative technical vision.
            </p>

            <h3 className="text-3xl font-serif font-bold text-slate-900 mt-12 mb-6">
              Continuing a Historic Legacy
            </h3>

            <p>
              The medal does not exist in isolation. It represents the continuation and modernization of the 
              <span className="font-semibold text-blue-900"> Prix Poncelet</span>, established in 1868 by the Académie des 
              Sciences de France—the first European prize dedicated to rewarding the application of mathematics 
              to engineering.
            </p>

            <p>
              By establishing this continuity, the IDEA League ensures that a nearly two-century tradition of 
              recognizing mathematical excellence in engineering is preserved, updated, and projected into the 
              future with renewed institutional support and academic rigor.
            </p>

            {/* Final Quote - ELEGANT MEDALLION STYLE */}
            <div className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 rounded-2xl p-10 mt-12 border-2 border-amber-400 shadow-2xl">
              {/* Patrón de fondo sutil */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                  backgroundSize: '32px 32px'
                }}></div>
              </div>
              
              <div className="relative">
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-6"></div>
                <p className="text-white italic text-center text-xl font-medium leading-relaxed">
                  "The Leonardo Da Vinci Medal honors those who, like its namesake, see no boundary between 
                  mathematical theory and practical engineering, between analytical rigor and creative vision."
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mt-6"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-950 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">
            Explore the Complete Story
          </h2>
          <p className="text-blue-100 mb-10 text-lg">
            Learn about the historical origins, selection criteria, and the prestigious list of laureates
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/history" className="bg-white text-blue-950 px-10 py-4 rounded-lg font-semibold hover:bg-blue-50 transition shadow-lg">
              Historical Origin
            </a>
            <a href="/laureates" className="bg-amber-500 text-slate-900 px-10 py-4 rounded-lg font-semibold hover:bg-amber-400 transition shadow-lg">
              View Laureates
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}