export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Header */}
      <section className="bg-blue-950 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            About the Leonardo Da Vinci Medal
          </h1>
          <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-8 md:p-12 space-y-6 text-slate-700 text-lg">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">
              Purpose and Philosophy
            </h2>
            
            <p>
              The Leonardo Da Vinci Medal is the academic award of the <span className="font-semibold">IDEA League</span>, 
              created to recognize and celebrate excellence at the intersection of mathematics, engineering, 
              and technical creativity.
            </p>

            <p>
              This prestigious award honors individuals whose work exemplifies the spirit of Leonardo da Vinci himself: 
              the fusion of rigorous mathematical thinking with innovative engineering practice, combining analytical 
              depth with creative problem-solving.
            </p>

            <h3 className="text-2xl font-serif font-bold text-slate-900 mt-8 mb-4">
              What the Medal Represents
            </h3>

            <p>
              The medal recognizes contributions that demonstrate:
            </p>

            <div className="bg-slate-50 border-l-4 border-amber-500 p-6 my-6 space-y-3">
              <p className="flex items-start">
                <span className="text-amber-600 font-bold mr-3">•</span>
                <span><span className="font-semibold">Mathematical Excellence:</span> Outstanding application 
                of mathematical theory to solve real-world engineering challenges</span>
              </p>
              <p className="flex items-start">
                <span className="text-amber-600 font-bold mr-3">•</span>
                <span><span className="font-semibold">Creative Engineering:</span> Innovative solutions that 
                demonstrate exceptional technical ingenuity and originality</span>
              </p>
              <p className="flex items-start">
                <span className="text-amber-600 font-bold mr-3">•</span>
                <span><span className="font-semibold">Technical Impact:</span> Work that advances the field 
                and creates lasting value for engineering practice</span>
              </p>
              <p className="flex items-start">
                <span className="text-amber-600 font-bold mr-3">•</span>
                <span><span className="font-semibold">Interdisciplinary Thinking:</span> The ability to bridge 
                multiple domains and integrate diverse perspectives</span>
              </p>
            </div>

            <h3 className="text-2xl font-serif font-bold text-slate-900 mt-8 mb-4">
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

            <h3 className="text-2xl font-serif font-bold text-slate-900 mt-8 mb-4">
              Continuing a Historic Legacy
            </h3>

            <p>
              The medal does not exist in isolation. It represents the continuation and modernization of the 
              <span className="font-semibold"> Prix Poncelet</span>, established in 1868 by the Académie des 
              Sciences de France—the first European prize dedicated to rewarding the application of mathematics 
              to engineering.
            </p>

            <p>
              By establishing this continuity, the IDEA League ensures that a nearly two-century tradition of 
              recognizing mathematical excellence in engineering is preserved, updated, and projected into the 
              future with renewed institutional support and academic rigor.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
              <p className="text-blue-900 italic">
                "The Leonardo Da Vinci Medal honors those who, like its namesake, see no boundary between 
                mathematical theory and practical engineering, between analytical rigor and creative vision."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">
            Explore the Complete Story
          </h2>
          <p className="text-slate-600 mb-8">
            Learn about the historical origins, selection criteria, and the prestigious list of laureates
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/history" className="bg-blue-950 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 transition">
              Historical Origin
            </a>
            <a href="/laureates" className="bg-amber-500 text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-amber-400 transition">
              View Laureates
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}