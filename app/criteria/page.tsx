export default function CriteriaPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-950 via-blue-900 to-blue-950 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            Award Criteria
          </h1>
          <div className="w-32 h-1 bg-amber-400 mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-blue-100 font-light">
            Excellence at the Intersection of Mathematics and Engineering
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            
            <p className="text-xl text-slate-700 leading-relaxed max-w-4xl mx-auto">
              The Leonardo Da Vinci Medal honors individuals whose work exemplifies the Renaissance ideal: 
              the seamless integration of rigorous mathematical thinking with innovative engineering practice, 
              combining analytical depth with creative problem-solving.
            </p>
          </div>
        </div>
      </section>

      {/* Core Criteria - Enhanced Design */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">
              Four Pillars of Excellence
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Each laureate demonstrates mastery across these fundamental dimensions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Criterion 1 */}
            <div className="group relative bg-white rounded-2xl shadow-lg border-2 border-slate-100 p-10 hover:border-amber-400 hover:shadow-2xl transition-all duration-300">
              <div className="absolute -top-6 -left-6 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl p-6 shadow-lg">
                <span className="text-4xl text-white font-serif">∫</span>
              </div>
              <div className="mt-6">
                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">
                  Mathematical Excellence
                </h3>
                <div className="w-16 h-1 bg-amber-400 mb-6"></div>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Outstanding application of mathematical theory to solve real-world engineering challenges. 
                  The work must demonstrate:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-3 mt-1 text-xl">●</span>
                    <span className="text-slate-700">Deep understanding of mathematical principles</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-3 mt-1 text-xl">●</span>
                    <span className="text-slate-700">Rigorous analytical methods</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-3 mt-1 text-xl">●</span>
                    <span className="text-slate-700">Novel mathematical approaches to engineering problems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-3 mt-1 text-xl">●</span>
                    <span className="text-slate-700">Development of new mathematical tools or methods</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Criterion 2 */}
            <div className="group relative bg-white rounded-2xl shadow-lg border-2 border-slate-100 p-10 hover:border-blue-400 hover:shadow-2xl transition-all duration-300">
              <div className="absolute -top-6 -left-6 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-6 shadow-lg">
                <span className="text-4xl text-white">⚙</span>
              </div>
              <div className="mt-6">
                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">
                  Creative Engineering
                </h3>
                <div className="w-16 h-1 bg-blue-400 mb-6"></div>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Innovative solutions that demonstrate exceptional technical ingenuity and originality. 
                  The work should exhibit:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-1 text-xl">●</span>
                    <span className="text-slate-700">Inventive problem-solving approaches</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-1 text-xl">●</span>
                    <span className="text-slate-700">Fresh perspectives on technical challenges</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-1 text-xl">●</span>
                    <span className="text-slate-700">Elegant and practical engineering solutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-1 text-xl">●</span>
                    <span className="text-slate-700">Breakthrough thinking in design or implementation</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Criterion 3 */}
            <div className="group relative bg-white rounded-2xl shadow-lg border-2 border-slate-100 p-10 hover:border-green-400 hover:shadow-2xl transition-all duration-300">
              <div className="absolute -top-6 -left-6 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl p-6 shadow-lg">
                <span className="text-4xl text-white">✦</span>
              </div>
              <div className="mt-6">
                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">
                  Technical Impact
                </h3>
                <div className="w-16 h-1 bg-green-400 mb-6"></div>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Work that advances the field and creates lasting value for engineering practice. 
                  Impact is demonstrated through:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1 text-xl">●</span>
                    <span className="text-slate-700">Contributions that advance engineering knowledge</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1 text-xl">●</span>
                    <span className="text-slate-700">Practical applications with real-world significance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1 text-xl">●</span>
                    <span className="text-slate-700">Influence on industry practices or standards</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1 text-xl">●</span>
                    <span className="text-slate-700">Long-term relevance and sustainability</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Criterion 4 */}
            <div className="group relative bg-white rounded-2xl shadow-lg border-2 border-slate-100 p-10 hover:border-purple-400 hover:shadow-2xl transition-all duration-300">
              <div className="absolute -top-6 -left-6 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl p-6 shadow-lg">
                <span className="text-4xl text-white">◈</span>
              </div>
              <div className="mt-6">
                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">
                  Interdisciplinary Thinking
                </h3>
                <div className="w-16 h-1 bg-purple-400 mb-6"></div>
                <p className="text-slate-600 leading-relaxed mb-6">
                  The ability to bridge multiple domains and integrate diverse perspectives. 
                  This includes:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-3 mt-1 text-xl">●</span>
                    <span className="text-slate-700">Synthesis of knowledge from multiple fields</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-3 mt-1 text-xl">●</span>
                    <span className="text-slate-700">Cross-disciplinary collaboration and integration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-3 mt-1 text-xl">●</span>
                    <span className="text-slate-700">Holistic approaches to complex problems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-3 mt-1 text-xl">●</span>
                    <span className="text-slate-700">Connections between theory and practice</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Evaluation Philosophy */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">
              Evaluation Philosophy
            </h2>
            <p className="text-lg text-slate-600">
              How we assess contributions and recognize true excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-amber-50 to-white border-l-4 border-amber-500 p-8 rounded-r-xl shadow-sm">
              <h3 className="text-2xl font-semibold text-slate-900 mb-4 flex items-center">
                <span className="text-amber-600 mr-3 text-3xl">◆</span>
                Quality Over Quantity
              </h3>
              <p className="text-slate-700 leading-relaxed">
                The Medal recognizes depth of contribution rather than volume of publications. 
                A single transformative work carries more weight than numerous incremental advances. 
                We value work that fundamentally changes how engineers think about and approach problems.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white border-l-4 border-blue-500 p-8 rounded-r-xl shadow-sm">
              <h3 className="text-2xl font-semibold text-slate-900 mb-4 flex items-center">
                <span className="text-blue-600 mr-3 text-3xl">◆</span>
                Timeless Relevance
              </h3>
              <p className="text-slate-700 leading-relaxed">
                While we appreciate cutting-edge innovation, we prioritize work with lasting significance. 
                The best contributions stand the test of time, remaining relevant and influential long after 
                their initial publication. Historical laureates like Poincaré, Hilbert, and Cartan exemplify 
                this enduring impact.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white border-l-4 border-green-500 p-8 rounded-r-xl shadow-sm">
              <h3 className="text-2xl font-semibold text-slate-900 mb-4 flex items-center">
                <span className="text-green-600 mr-3 text-3xl">◆</span>
                Mathematical Foundations
              </h3>
              <p className="text-slate-700 leading-relaxed">
                True to the Prize's origins, mathematical rigor remains central. We seek work where 
                mathematics isn't merely a tool but a fundamental driver of engineering innovation. 
                The best contributions reveal how mathematical insight can unlock engineering breakthroughs 
                that would be impossible through empirical approaches alone.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white border-l-4 border-purple-500 p-8 rounded-r-xl shadow-sm">
              <h3 className="text-2xl font-semibold text-slate-900 mb-4 flex items-center">
                <span className="text-purple-600 mr-3 text-3xl">◆</span>
                European Academic Values
              </h3>
              <p className="text-slate-700 leading-relaxed">
                The Medal embodies European traditions of scholarly excellence, intellectual rigor, 
                and the integration of theoretical and practical knowledge. We value work that demonstrates 
                both academic depth and real-world relevance, bridging the gap between university research 
                and engineering practice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Selection Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">
              Selection Process
            </h2>
            <p className="text-lg text-slate-600">
              A rigorous, collaborative approach ensuring the highest standards
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-10 md:p-14">
            <div className="space-y-8 text-slate-700 text-lg leading-relaxed">
              <p>
                The Leonardo Da Vinci Medal is administered collectively by the five universities of the 
                IDEA League, ensuring academic rigor and institutional balance.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 my-12">
                <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border-2 border-blue-200">
                  <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4 shadow-lg">1</div>
                  <div className="text-sm font-bold text-blue-900 mb-3 uppercase tracking-wide">Nomination</div>
                  <p className="text-sm text-slate-700">
                    Candidates proposed by faculty from member universities
                  </p>
                </div>
                <div className="text-center p-8 bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl border-2 border-amber-200">
                  <div className="bg-amber-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4 shadow-lg">2</div>
                  <div className="text-sm font-bold text-amber-900 mb-3 uppercase tracking-wide">Evaluation</div>
                  <p className="text-sm text-slate-700">
                    Peer review by expert committees from all five universities
                  </p>
                </div>
                <div className="text-center p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border-2 border-green-200">
                  <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4 shadow-lg">3</div>
                  <div className="text-sm font-bold text-green-900 mb-3 uppercase tracking-wide">Selection</div>
                  <p className="text-sm text-slate-700">
                    Collective decision through consensus among universities
                  </p>
                </div>
              </div>

              <p>
                The host university rotates annually among the five IDEA League members, with each institution 
                taking responsibility for organizing the award ceremony in February. This rotating framework 
                ensures equal representation and maintains the Medal's pan-European character.
              </p>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300 rounded-xl p-8 mt-10">
                <p className="text-blue-900 italic text-center text-lg font-medium">
                  "The selection process prioritizes scholarly consensus over individual preferences, 
                  ensuring that every laureate represents a shared commitment to excellence across 
                  Europe's leading technical universities."
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
            Explore the Legacy
          </h2>
          <p className="text-blue-100 mb-10 text-lg">
            Discover the historic lineage of laureates and learn about the universities behind this award
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/laureates" className="bg-amber-500 text-slate-900 px-10 py-4 rounded-lg font-semibold hover:bg-amber-400 transition shadow-lg">
              View Laureates
            </a>
            <a href="/idea-league" className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-950 transition">
              About IDEA League
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}