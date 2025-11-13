export default function HistoryPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-950 via-blue-900 to-blue-950 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            Historical Origin and Continuity
          </h1>
          <div className="w-32 h-1 bg-amber-400 mx-auto mb-4"></div>
          <p className="text-xl text-blue-100">
            From the Prix Poncelet (1868) to the Leonardo Da Vinci Medal
          </p>
        </div>
      </section>

      {/* Timeline Introduction */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            
            <p className="text-xl text-slate-700 leading-relaxed max-w-4xl mx-auto mb-6">
              The Leonardo Da Vinci Medal and the Prix Poncelet are not separate awards, but rather two chapters 
              of the same story—a nearly two-century tradition of recognizing mathematical excellence applied to 
              engineering.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
              This continuity ensures that the legacy of one of Europe's oldest scientific prizes is preserved 
              and projected into the 21st century with renewed institutional support and academic rigor.
            </p>
          </div>
        </div>
      </section>

      {/* The Prix Poncelet */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">
              The Prix Poncelet (1868-Present)
            </h2>
            <p className="text-lg text-slate-600">
              Europe's first prize for mathematical engineering
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl border-2 border-slate-200 p-10 md:p-14">
            <div className="space-y-6 text-slate-700 text-lg leading-relaxed">
              <p className="text-xl">
                The <span className="font-semibold text-blue-900">Prix Poncelet</span> was established in 1868 by the 
                <span className="font-semibold text-blue-900"> Académie des Sciences de France</span>, making it the first 
                European prize specifically dedicated to rewarding the application of mathematics to engineering.
              </p>

              <div className="bg-gradient-to-br from-amber-50 to-amber-100 border-l-4 border-amber-500 rounded-r-xl p-8 my-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-600 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-2xl font-bold">
                    P
                  </div>
                  <div>
                    <p className="font-bold text-amber-900 mb-2 text-xl">Named After:</p>
                    <p className="text-slate-800">
                      <span className="font-semibold">Jean-Victor Poncelet (1788-1867)</span>, French mathematician 
                      and engineer, pioneer of projective geometry and its applications to mechanics and engineering.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-3xl font-serif font-bold text-slate-900 mt-12 mb-6">
                Historical Significance
              </h3>

              <p>
                Throughout the 19th and 20th centuries, the Prix Poncelet became synonymous with the highest 
                level of achievement in mathematical engineering. Recipients of this prize were recognized for 
                work that demonstrated:
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-8">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-l-4 border-blue-600 p-6 rounded-r-xl">
                  <p className="flex items-start text-slate-800">
                    <span className="text-blue-600 font-bold mr-3 text-xl">▸</span>
                    <span>Rigorous application of mathematical principles to engineering problems</span>
                  </p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 border-l-4 border-green-600 p-6 rounded-r-xl">
                  <p className="flex items-start text-slate-800">
                    <span className="text-green-600 font-bold mr-3 text-xl">▸</span>
                    <span>Development of new mathematical methods for technical applications</span>
                  </p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 border-l-4 border-purple-600 p-6 rounded-r-xl">
                  <p className="flex items-start text-slate-800">
                    <span className="text-purple-600 font-bold mr-3 text-xl">▸</span>
                    <span>Advancement of theoretical foundations for engineering practice</span>
                  </p>
                </div>
                <div className="bg-gradient-to-br from-amber-50 to-amber-100 border-l-4 border-amber-600 p-6 rounded-r-xl">
                  <p className="flex items-start text-slate-800">
                    <span className="text-amber-600 font-bold mr-3 text-xl">▸</span>
                    <span>Contributions that bridged pure mathematics and applied engineering</span>
                  </p>
                </div>
              </div>

              <h3 className="text-3xl font-serif font-bold text-slate-900 mt-12 mb-6">
                A Dormant Legacy
              </h3>

              <p>
                Despite its prestigious history, the Prix Poncelet gradually lost institutional momentum in recent 
                decades. While never formally discontinued, the prize lacked the regular administration and 
                contemporary relevance needed to maintain its position as a leading European academic award.
              </p>

              <p>
                This created both a challenge and an opportunity: how could this historic legacy be preserved 
                while adapting it to the realities and needs of 21st-century European higher education?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Renewal */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">
              Renewal Through the IDEA League
            </h2>
            <p className="text-lg text-slate-600">
              Preserving tradition while embracing the future
            </p>
          </div>
          
          <div className="space-y-12">
            <div className="bg-white rounded-2xl shadow-xl border-2 border-slate-200 p-10 md:p-14">
              <div className="space-y-6 text-slate-700 text-lg leading-relaxed">
                <p className="text-xl">
                  The creation of the <span className="font-semibold text-blue-900">Leonardo Da Vinci Medal</span> represents 
                  a collective academic decision by the five universities of the IDEA League to update, strengthen, 
                  and give continuity to the Prix Poncelet tradition.
                </p>

                <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300 rounded-2xl p-10 my-10">
                  <h4 className="font-bold text-blue-900 mb-6 text-2xl text-center">Why This Framework?</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex items-start space-x-3">
                      <span className="text-blue-600 text-2xl flex-shrink-0">✓</span>
                      <span className="text-blue-900">Provides institutional stability through a permanent university consortium</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-blue-600 text-2xl flex-shrink-0">✓</span>
                      <span className="text-blue-900">Ensures regular administration with rotating host universities</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-blue-600 text-2xl flex-shrink-0">✓</span>
                      <span className="text-blue-900">Maintains academic rigor through peer review and collective decision-making</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-blue-600 text-2xl flex-shrink-0">✓</span>
                      <span className="text-blue-900">Projects European academic values into contemporary engineering education</span>
                    </div>
                    <div className="flex items-start space-x-3 md:col-span-2">
                      <span className="text-blue-600 text-2xl flex-shrink-0">✓</span>
                      <span className="text-blue-900">Connects historical prestige with modern interdisciplinary approaches</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-3xl font-serif font-bold text-slate-900 mt-12 mb-6">
                  One Prize, Two Names, One Mission
                </h3>

                <p className="text-xl">
                  The Leonardo Da Vinci Medal does not replace the Prix Poncelet—it <span className="italic font-semibold">continues</span> it. 
                  The complete list of laureates, from 1868 to the present, forms a single, unbroken timeline of 
                  excellence in mathematical engineering.
                </p>

                <p>
                  This approach ensures that:
                </p>

                <div className="space-y-4 my-8">
                  <div className="bg-gradient-to-r from-amber-50 to-white border-l-4 border-amber-500 p-6 rounded-r-xl">
                    <p className="flex items-start">
                      <span className="text-amber-600 font-bold mr-3 text-xl">◆</span>
                      <span className="text-slate-800">The historical prestige of the Prix Poncelet is preserved and honored</span>
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-blue-50 to-white border-l-4 border-blue-500 p-6 rounded-r-xl">
                    <p className="flex items-start">
                      <span className="text-blue-600 font-bold mr-3 text-xl">◆</span>
                      <span className="text-slate-800">The award gains renewed institutional support and visibility</span>
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-white border-l-4 border-green-500 p-6 rounded-r-xl">
                    <p className="flex items-start">
                      <span className="text-green-600 font-bold mr-3 text-xl">◆</span>
                      <span className="text-slate-800">Future laureates join a legacy spanning nearly two centuries</span>
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-purple-50 to-white border-l-4 border-purple-500 p-6 rounded-r-xl">
                    <p className="flex items-start">
                      <span className="text-purple-600 font-bold mr-3 text-xl">◆</span>
                      <span className="text-slate-800">European academic values in engineering education are reinforced</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Final Statement Box */}
            <div className="bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 rounded-2xl shadow-2xl p-12 text-center border-4 border-amber-300">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                <p className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                  From 1868 to Today
                </p>
                <p className="text-xl text-white leading-relaxed">
                  A single tradition of excellence, linking two centuries of mathematical 
                  and engineering thought under a modern, interdisciplinary, university-based European framework.
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
            Explore the Complete Timeline
          </h2>
          <p className="text-blue-100 mb-10 text-lg">
            View the full list of laureates from 1868 to the present day
          </p>
          <a href="/laureates" className="inline-block bg-amber-500 text-slate-900 px-10 py-4 rounded-lg font-semibold hover:bg-amber-400 transition shadow-lg">
            View Laureates Timeline
          </a>
        </div>
      </section>
    </main>
  );
}