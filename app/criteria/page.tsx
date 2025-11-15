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

      {/* Core Criteria - DRAMATIC REDESIGN */}
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
          
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {/* Criterion 1 - Mathematical Excellence */}
            <div className="group relative bg-white rounded-3xl shadow-xl border-2 border-slate-200 p-12 hover:border-amber-400 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              {/* Icon with dramatic glow */}
              <div className="text-center mb-8">
                <div className="relative inline-block">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
                  {/* Icon container */}
                  <div className="relative bg-gradient-to-br from-amber-400 to-amber-600 rounded-full w-32 h-32 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                    <span className="text-7xl text-white font-serif">∫</span>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-3xl font-serif font-bold text-slate-900 mb-6">
                  Mathematical Excellence
                </h3>
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-8"></div>
                <p className="text-slate-600 leading-relaxed text-lg mb-8">
                  Outstanding application of mathematical theory to solve real-world engineering challenges. 
                  The work must demonstrate:
                </p>
                <ul className="space-y-4 text-left">
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-4 mt-1 text-2xl flex-shrink-0">●</span>
                    <span className="text-slate-700 text-lg">Deep understanding of mathematical principles</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-4 mt-1 text-2xl flex-shrink-0">●</span>
                    <span className="text-slate-700 text-lg">Rigorous analytical methods</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-4 mt-1 text-2xl flex-shrink-0">●</span>
                    <span className="text-slate-700 text-lg">Novel mathematical approaches to engineering problems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-4 mt-1 text-2xl flex-shrink-0">●</span>
                    <span className="text-slate-700 text-lg">Development of new mathematical tools or methods</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Criterion 2 - Creative Engineering */}
            <div className="group relative bg-white rounded-3xl shadow-xl border-2 border-slate-200 p-12 hover:border-blue-400 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              {/* Icon with dramatic glow */}
              <div className="text-center mb-8">
                <div className="relative inline-block">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
                  {/* Icon container */}
                  <div className="relative bg-gradient-to-br from-blue-500 to-blue-700 rounded-full w-32 h-32 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                    <span className="text-7xl text-white">⚙</span>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-3xl font-serif font-bold text-slate-900 mb-6">
                  Creative Engineering
                </h3>
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto mb-8"></div>
                <p className="text-slate-600 leading-relaxed text-lg mb-8">
                  Innovative solutions that demonstrate exceptional technical ingenuity and originality. 
                  The work should exhibit:
                </p>
                <ul className="space-y-4 text-left">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-4 mt-1 text-2xl flex-shrink-0">●</span>
                    <span className="text-slate-700 text-lg">Inventive problem-solving approaches</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-4 mt-1 text-2xl flex-shrink-0">●</span>
                    <span className="text-slate-700 text-lg">Fresh perspectives on technical challenges</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-4 mt-1 text-2xl flex-shrink-0">●</span>
                    <span className="text-slate-700 text-lg">Elegant and practical engineering solutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-4 mt-1 text-2xl flex-shrink-0">●</span>
                    <span className="text-slate-700 text-lg">Breakthrough thinking in design or implementation</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Criterion 3 - Technical Impact */}
            <div className="group relative bg-white rounded-3xl shadow-xl border-2 border-slate-200 p-12 hover:border-green-400 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              {/* Icon with dramatic glow */}
              <div className="text-center mb-8">
                <div className="relative inline-block">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-green-700 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
                  {/* Icon container */}
                  <div className="relative bg-gradient-to-br from-green-500 to-green-700 rounded-full w-32 h-32 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                    <span className="text-7xl text-white">✦</span>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-3xl font-serif font-bold text-slate-900 mb-6">
                  Technical Impact
                </h3>
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent mx-auto mb-8"></div>
                <p className="text-slate-600 leading-relaxed text-lg mb-8">
                  Work that advances the field and creates lasting value for engineering practice. 
                  Impact is demonstrated through:
                </p>
                <ul className="space-y-4 text-left">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-4 mt-1 text-2xl flex-shrink-0">●</span>
                    <span className="text-slate-700 text-lg">Contributions that advance engineering knowledge</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-4 mt-1 text-2xl flex-shrink-0">●</span>
                    <span className="text-slate-700 text-lg">Practical applications with real-world significance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-4 mt-1 text-2xl flex-shrink-0">●</span>
                    <span className="text-slate-700 text-lg">Influence on industry practices or standards</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-4 mt-1 text-2xl flex-shrink-0">●</span>
                    <span className="text-slate-700 text-lg">Long-term relevance and sustainability</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Criterion 4 - Interdisciplinary Thinking */}
            <div className="group relative bg-white rounded-3xl shadow-xl border-2 border-slate-200 p-12 hover:border-purple-400 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              {/* Icon with dramatic glow */}
              <div className="text-center mb-8">
                <div className="relative inline-block">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
                  {/* Icon container */}
                  <div className="relative bg-gradient-to-br from-purple-500 to-purple-700 rounded-full w-32 h-32 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                    <span className="text-7xl text-white">◈</span>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-3xl font-serif font-bold text-slate-900 mb-6">
                  Interdisciplinary Thinking
                </h3>
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent mx-auto mb-8"></div>
                <p className="text-slate-600 leading-relaxed text-lg mb-8">
                  The ability to bridge multiple domains and integrate diverse perspectives. 
                  This includes:
                </p>
                <ul className="space-y-4 text-left">
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-4 mt-1 text-2xl flex-shrink-0">●</span>
                    <span className="text-slate-700 text-lg">Synthesis of knowledge from multiple fields</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-4 mt-1 text-2xl flex-shrink-0">●</span>
                    <span className="text-slate-700 text-lg">Cross-disciplinary collaboration and integration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-4 mt-1 text-2xl flex-shrink-0">●</span>
                    <span className="text-slate-700 text-lg">Holistic approaches to complex problems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-4 mt-1 text-2xl flex-shrink-0">●</span>
                    <span className="text-slate-700 text-lg">Connections between theory and practice</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Evaluation Philosophy - REDESIGNED */}
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
            <div className="bg-white border-l-4 border-amber-500 p-8 rounded-r-xl shadow-md hover:shadow-lg transition-shadow">
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

            <div className="bg-white border-l-4 border-blue-500 p-8 rounded-r-xl shadow-md hover:shadow-lg transition-shadow">
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

            <div className="bg-white border-l-4 border-green-500 p-8 rounded-r-xl shadow-md hover:shadow-lg transition-shadow">
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

            <div className="bg-white border-l-4 border-purple-500 p-8 rounded-r-xl shadow-md hover:shadow-lg transition-shadow">
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

      {/* Selection Process - DRAMATIC REDESIGN */}
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
          
          <div className="bg-white rounded-2xl shadow-xl border-2 border-slate-200 p-10 md:p-14">
            <div className="space-y-8 text-slate-700 text-lg leading-relaxed">
              <p>
                The Leonardo Da Vinci Medal is administered collectively by the five universities of the 
                IDEA League, ensuring academic rigor and institutional balance.
              </p>
              
              {/* Three Steps - ELEGANT MEDALLION DESIGN */}
              <div className="grid md:grid-cols-3 gap-8 my-12">
                {/* Step 1 - Nomination */}
                <div className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 rounded-2xl p-8 border-2 border-blue-400 shadow-2xl hover:scale-105 transition-transform duration-300">
                  {/* Patrón de fondo sutil */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                      backgroundSize: '32px 32px'
                    }}></div>
                  </div>
                  
                  <div className="relative text-center">
                    <div className="bg-gradient-to-br from-blue-400 to-blue-600 text-white w-20 h-20 rounded-full flex items-center justify-center text-4xl font-bold mx-auto mb-4 shadow-lg border-4 border-blue-300">1</div>
                    <div className="w-16 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto mb-4"></div>
                    <div className="text-sm font-bold text-blue-300 mb-3 uppercase tracking-wide">Nomination</div>
                    <p className="text-sm text-white leading-relaxed">
                      Candidates proposed by faculty from member universities
                    </p>
                  </div>
                </div>

                {/* Step 2 - Evaluation */}
                <div className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 rounded-2xl p-8 border-2 border-amber-400 shadow-2xl hover:scale-105 transition-transform duration-300">
                  {/* Patrón de fondo sutil */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                      backgroundSize: '32px 32px'
                    }}></div>
                  </div>
                  
                  <div className="relative text-center">
                    <div className="bg-gradient-to-br from-amber-400 to-amber-600 text-blue-950 w-20 h-20 rounded-full flex items-center justify-center text-4xl font-bold mx-auto mb-4 shadow-lg border-4 border-amber-300">2</div>
                    <div className="w-16 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-4"></div>
                    <div className="text-sm font-bold text-amber-300 mb-3 uppercase tracking-wide">Evaluation</div>
                    <p className="text-sm text-white leading-relaxed">
                      Peer review by expert committees from all five universities
                    </p>
                  </div>
                </div>

                {/* Step 3 - Selection */}
                <div className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 rounded-2xl p-8 border-2 border-green-400 shadow-2xl hover:scale-105 transition-transform duration-300">
                  {/* Patrón de fondo sutil */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                      backgroundSize: '32px 32px'
                    }}></div>
                  </div>
                  
                  <div className="relative text-center">
                    <div className="bg-gradient-to-br from-green-400 to-green-600 text-white w-20 h-20 rounded-full flex items-center justify-center text-4xl font-bold mx-auto mb-4 shadow-lg border-4 border-green-300">3</div>
                    <div className="w-16 h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent mx-auto mb-4"></div>
                    <div className="text-sm font-bold text-green-300 mb-3 uppercase tracking-wide">Selection</div>
                    <p className="text-sm text-white leading-relaxed">
                      Collective decision through consensus among universities
                    </p>
                  </div>
                </div>
              </div>

              <p>
                The host university rotates annually among the five IDEA League members, with each institution 
                taking responsibility for organizing the award ceremony in February. This rotating framework 
                ensures equal representation and maintains the Medal's pan-European character.
              </p>

              <div className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 rounded-2xl p-10 mt-10 border-2 border-amber-400 shadow-2xl">
                {/* Patrón de fondo sutil */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                    backgroundSize: '32px 32px'
                  }}></div>
                </div>
                
                <div className="relative">
                  <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-6"></div>
                  <p className="text-white italic text-center text-lg font-medium leading-relaxed">
                    "The selection process prioritizes scholarly consensus over individual preferences, 
                    ensuring that every laureate represents a shared commitment to excellence across 
                    Europe's leading technical universities."
                  </p>
                  <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mt-6"></div>
                </div>
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