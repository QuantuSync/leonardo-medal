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
              <div className="inline-block bg-amber-50 border-2 border-amber-200 rounded-full px-6 py-2 mb-6">
                <p className="text-amber-900 font-semibold">A Two-Century Legacy</p>
              </div>
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

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-10 border-2 border-blue-200">
              <div className="text-6xl font-bold text-blue-900 mb-2">157</div>
              <div className="text-lg text-blue-700 font-semibold">Years of History</div>
              <div className="text-sm text-slate-600 mt-2">Since 1868</div>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-10 border-2 border-amber-200">
              <div className="text-6xl font-bold text-amber-900 mb-2">95</div>
              <div className="text-lg text-amber-700 font-semibold">Distinguished Laureates</div>
              <div className="text-sm text-slate-600 mt-2">Prix Poncelet Recipients</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-10 border-2 border-green-200">
              <div className="text-6xl font-bold text-green-900 mb-2">5</div>
              <div className="text-lg text-green-700 font-semibold">Leading Universities</div>
              <div className="text-sm text-slate-600 mt-2">IDEA League Members</div>
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
    </main>
  );
}