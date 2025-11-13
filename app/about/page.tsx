export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-950 via-blue-900 to-blue-950 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            About the Leonardo Da Vinci Medal
          </h1>
          <div className="w-32 h-1 bg-amber-400 mx-auto"></div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-amber-50 border-2 border-amber-200 rounded-full px-8 py-3 mb-8">
              <p className="text-amber-900 font-semibold text-lg">Purpose and Philosophy</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border-2 border-slate-200 p-10 md:p-14 space-y-8 text-slate-700 text-lg leading-relaxed">
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

            <div className="grid md:grid-cols-2 gap-6 my-10">
              <div className="group bg-gradient-to-br from-amber-50 to-amber-100 border-l-4 border-amber-600 rounded-r-xl p-8 hover:shadow-lg transition-all">
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-600 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-2xl font-bold">
                    ∫
                  </div>
                  <div>
                    <h4 className="font-bold text-amber-900 mb-2 text-xl">Mathematical Excellence</h4>
                    <p className="text-slate-700">Outstanding application of mathematical theory to solve real-world engineering challenges</p>
                  </div>
                </div>
              </div>

              <div className="group bg-gradient-to-br from-blue-50 to-blue-100 border-l-4 border-blue-600 rounded-r-xl p-8 hover:shadow-lg transition-all">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-2xl">
                    ⚙
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-900 mb-2 text-xl">Creative Engineering</h4>
                    <p className="text-slate-700">Innovative solutions that demonstrate exceptional technical ingenuity and originality</p>
                  </div>
                </div>
              </div>

              <div className="group bg-gradient-to-br from-green-50 to-green-100 border-l-4 border-green-600 rounded-r-xl p-8 hover:shadow-lg transition-all">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-2xl">
                    ✦
                  </div>
                  <div>
                    <h4 className="font-bold text-green-900 mb-2 text-xl">Technical Impact</h4>
                    <p className="text-slate-700">Work that advances the field and creates lasting value for engineering practice</p>
                  </div>
                </div>
              </div>

              <div className="group bg-gradient-to-br from-purple-50 to-purple-100 border-l-4 border-purple-600 rounded-r-xl p-8 hover:shadow-lg transition-all">
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-2xl">
                    ◈
                  </div>
                  <div>
                    <h4 className="font-bold text-purple-900 mb-2 text-xl">Interdisciplinary Thinking</h4>
                    <p className="text-slate-700">The ability to bridge multiple domains and integrate diverse perspectives</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* European Tradition */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">
              A European Academic Tradition
            </h2>
            <p className="text-lg text-slate-600">
              Excellence through collaboration and shared values
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg border-2 border-slate-200 p-10">
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl w-16 h-16 flex items-center justify-center mb-6 text-3xl text-white shadow-lg">
                🎓
              </div>
              <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">
                Institutional Integrity
              </h3>
              <p className="text-slate-700 leading-relaxed">
                The Leonardo Da Vinci Medal is administered by the five leading European universities of the 
                IDEA League, ensuring that the selection process maintains the highest standards of academic 
                rigor and institutional integrity.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border-2 border-slate-200 p-10">
              <div className="bg-gradient-to-br from-amber-500 to-amber-700 rounded-xl w-16 h-16 flex items-center justify-center mb-6 text-3xl text-white shadow-lg">
                📐
              </div>
              <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">
                Mathematical Foundations
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Unlike many contemporary awards, this medal emphasizes the fundamental importance of mathematical 
                foundations in engineering innovation. It recognizes that the greatest advances in engineering 
                often emerge from deep mathematical insight combined with creative technical vision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Historic Legacy */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">
              Continuing a Historic Legacy
            </h2>
            <p className="text-lg text-slate-600">
              Two centuries of recognizing excellence
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-blue-950 rounded-2xl shadow-2xl p-10 md:p-14 text-white">
            <div className="space-y-6 text-lg leading-relaxed">
              <p className="text-xl">
                The medal does not exist in isolation. It represents the continuation and modernization of the 
                <span className="font-semibold text-amber-400"> Prix Poncelet</span>, established in 1868 by the Académie des 
                Sciences de France—the first European prize dedicated to rewarding the application of mathematics 
                to engineering.
              </p>

              <p>
                By establishing this continuity, the IDEA League ensures that a nearly two-century tradition of 
                recognizing mathematical excellence in engineering is preserved, updated, and projected into the 
                future with renewed institutional support and academic rigor.
              </p>

              <div className="bg-white/10 backdrop-blur-sm border-2 border-amber-400 rounded-xl p-8 mt-8">
                <div className="flex items-center justify-center space-x-6 mb-6">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-amber-400">1868</div>
                    <div className="text-sm text-blue-200 mt-2">Prix Poncelet</div>
                  </div>
                  <div className="text-4xl text-amber-400">→</div>
                  <div className="text-center">
                    <div className="text-5xl font-bold text-amber-400">2026</div>
                    <div className="text-sm text-blue-200 mt-2">Leonardo Medal</div>
                  </div>
                </div>
                <p className="text-center text-blue-100 text-lg">
                  One continuous tradition of excellence
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-l-4 border-blue-600 rounded-r-2xl p-12 shadow-xl">
            <svg className="w-16 h-16 text-blue-300 mb-6 mx-auto" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-2xl md:text-3xl text-blue-900 italic text-center font-medium leading-relaxed">
              "The Leonardo Da Vinci Medal honors those who, like its namesake, see no boundary between 
              mathematical theory and practical engineering, between analytical rigor and creative vision."
            </p>
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
            <a href="/history" className="bg-amber-500 text-slate-900 px-10 py-4 rounded-lg font-semibold hover:bg-amber-400 transition shadow-lg">
              Historical Origin
            </a>
            <a href="/laureates" className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-950 transition">
              View Laureates
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}