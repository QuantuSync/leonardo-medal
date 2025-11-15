'use client';

import { useEffect, useState } from 'react';

export default function LaureatesPage() {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [expandedYear, setExpandedYear] = useState<number | null>(null);

  useEffect(() => {
    const calculateCountdown = () => {
      const now = new Date();
      const currentYear = now.getFullYear();
      
      let nextAwardDate = new Date(currentYear, 1, 15);
      
      if (now > nextAwardDate) {
        nextAwardDate = new Date(currentYear + 1, 1, 15);
      }
      
      const difference = nextAwardDate.getTime() - now.getTime();
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      setCountdown({ days, hours, minutes, seconds });
    };

    calculateCountdown();
    const interval = setInterval(calculateCountdown, 1000);
    
    return () => clearInterval(interval);
  }, []);

  const laureates = [
    // 19th Century
    { year: 1868, name: "Alfred Clebsch", nationality: "German", field: "Mathematics", description: "German mathematician, awarded in the first edition of the prize." },
    { year: 1869, name: "Julius Robert von Mayer", nationality: "German", field: "Physics", description: "German physicist, pioneer of the law of conservation of energy." },
    { year: 1870, name: "Camille Jordan", nationality: "French", field: "Group Theory", description: "For his Traité des substitutions algébriques, a fundamental work in group theory." },
    { year: 1871, name: "Joseph Boussinesq", nationality: "French", field: "Fluid Mechanics", description: "French mathematician and hydraulic engineer, recognized for his work in fluid mechanics and applied mathematics." },
    { year: 1872, name: "Amédée Mannheim", nationality: "French", field: "Geometry", description: "For the great excellence of his geometric disquisitions." },
    { year: 1873, name: "William Thomson (Lord Kelvin)", nationality: "British", field: "Electromagnetism", description: "For his magnificent work on the mathematical theory of electricity and magnetism." },
    { year: 1874, name: "Jacques Bresse", nationality: "French", field: "Applied Mechanics", description: "French engineer, for his work in applied mechanics." },
    { year: 1875, name: "Gaston Darboux", nationality: "French", field: "Mathematics", description: "For the body of his mathematical work." },
    { year: 1876, name: "Xavier Kretz", nationality: "French", field: "Mathematics", description: "French mathematician, recognized for his mathematical contributions." },
    { year: 1877, name: "Edmond Laguerre", nationality: "French", field: "Mathematics", description: "For his mathematical work." },
    { year: 1878, name: "Maurice Lévy", nationality: "French", field: "Mathematical Physics", description: "French mathematical physicist." },
    { year: 1879, name: "Théodore Moutard", nationality: "French", field: "Mathematics", description: "French mathematician." },
    { year: 1880, name: "Henry Léauté", nationality: "French", field: "Engineering", description: "French engineer." },
    { year: 1881, name: "Charles Auguste Briot", nationality: "French", field: "Mathematics", description: "French mathematician." },
    { year: 1882, name: "Rudolf Clausius", nationality: "German", field: "Thermodynamics", description: "German physicist, father of thermodynamics." },
    { year: 1883, name: "Georges Henri Halphen", nationality: "French", field: "Mathematics", description: "French mathematician." },
    { year: 1884, name: "Jules Hoüel", nationality: "French", field: "Mathematics", description: "French mathematician." },
    { year: 1885, name: "Henri Poincaré", nationality: "French", field: "Mathematics", description: "For the body of his mathematical work. One of the greatest mathematicians and physicists of all time." },
    { year: 1886, name: "Émile Picard", nationality: "French", field: "Mathematics", description: "French mathematician." },
    { year: 1887, name: "Paul Émile Appell", nationality: "French", field: "Mathematics", description: "French mathematician." },
    { year: 1888, name: "Édouard Collignon", nationality: "French", field: "Engineering & Mathematics", description: "French engineer and mathematician." },
    { year: 1889, name: "Édouard Goursat", nationality: "French", field: "Mathematics", description: "French mathematician." },
    { year: 1890, name: "Carlos Ibáñez e Ibáñez de Ibero", nationality: "Spanish", field: "Geodesy", description: "Spanish military officer and geodesist, recognized for his dedication to the International Committee on Weights and Measures, culminating in the 1889 distribution of new meter standards." },
    { year: 1891, name: "Marie Georges Humbert", nationality: "French", field: "Function Theory", description: "For his study on the application of Fuchsian (automorphic) functions to algebraic curves." },
    { year: 1892, name: "Benjamin Baker & John Fowler", nationality: "British", field: "Civil Engineering", description: "British engineers, jointly awarded in recognition of their engineering work, coinciding with the completion of the Forth Bridge." },
    { year: 1893, name: "Gabriel Koenigs", nationality: "French", field: "Analysis", description: "French mathematician, recognized for his work in analysis and geometric mechanization." },
    { year: 1894, name: "Hermann Laurent", nationality: "French", field: "Mathematics", description: "For the body of his mathematical work." },
    { year: 1895, name: "Gustave Robin", nationality: "French", field: "Mathematics", description: "French mathematician." },
    { year: 1896, name: "Paul Painlevé", nationality: "French", field: "Mathematics", description: "French mathematician (and future Prime Minister), for the totality of his mathematical work." },
    { year: 1897, name: "Roger Liouville", nationality: "French", field: "Mathematics", description: "French mathematician." },
    { year: 1898, name: "Jacques Hadamard", nationality: "French", field: "Mathematics", description: "French mathematician, for his mathematical contributions." },
    { year: 1899, name: "Eugène Cosserat", nationality: "French", field: "Geometry & Mechanics", description: "For the body of his contributions to geometry and mechanics." },
    { year: 1900, name: "Léon Lecornu", nationality: "French", field: "Engineering", description: "French engineer." },
    
    // 20th Century
    { year: 1901, name: "Émile Borel", nationality: "French", field: "Measure Theory", description: "Pioneer of measure theory and probability, received the Prix Poncelet for his mathematical achievements." },
    { year: 1902, name: "Maurice d'Ocagne", nationality: "French", field: "Nomography", description: "French mathematician known for nomography." },
    { year: 1903, name: "David Hilbert", nationality: "German", field: "Mathematics", description: "German mathematician, honored for his outstanding contributions to mathematics." },
    { year: 1904, name: "Désiré André", nationality: "French", field: "Mathematics", description: "French mathematician." },
    { year: 1905, name: "Charles Lallemand", nationality: "French", field: "Geodesy", description: "French geodesist." },
    { year: 1906, name: "Claude Guichard", nationality: "French", field: "Mathematics", description: "French mathematician." },
    { year: 1907, name: "Charles Renard", nationality: "French", field: "Aeronautical Engineering", description: "French engineer, pioneer of aeronautics (awarded posthumously)." },
    { year: 1908, name: "Erik Ivar Fredholm", nationality: "Swedish", field: "Integral Equations", description: "Swedish mathematician, for his research on integral equations." },
    { year: 1909, name: "Magnus, Count of Sparre", nationality: "Swedish", field: "Artillery & Mechanics", description: "Swedish military officer and engineer, for his studies of artillery and mechanical work." },
    { year: 1910, name: "Charles Riquier", nationality: "French", field: "Mathematics", description: "French mathematician." },
    { year: 1911, name: "Auguste Rateau", nationality: "French", field: "Turbomachinery", description: "French engineer and inventor, pioneer in turbomachinery." },
    { year: 1912, name: "Edmond Maillet", nationality: "French", field: "Astronomy", description: "French astronomer." },
    { year: 1913, name: "Maurice Leblanc", nationality: "French", field: "Mechanical Engineering", description: "French mechanical engineer, for the body of his research in mechanics." },
    { year: 1914, name: "Henri Lebesgue", nationality: "French", field: "Measure Theory", description: "French mathematician, creator of Lebesgue measure theory." },
    { year: 1915, name: "Charles Rabut", nationality: "French", field: "Mathematics", description: "French mathematician." },
    { year: 1916, name: "Charles-Jean de La Vallée Poussin", nationality: "Belgian", field: "Analysis", description: "Belgian mathematician, awarded for his work in analysis." },
    { year: 1917, name: "Jules Andrade", nationality: "French", field: "Applied Mechanics", description: "French physicist and engineer, for his work in applied mechanics, especially in chronometry." },
    { year: 1918, name: "Joseph Larmor", nationality: "Irish", field: "Mathematical Physics", description: "Irish mathematical physicist." },
    { year: 1919, name: "Prosper Charbonnier", nationality: "French", field: "Ballistics", description: "French military engineer, for his work in ballistics." },
    { year: 1920, name: "Élie Cartan", nationality: "French", field: "Geometry", description: "French mathematician, for the body of his work—fundamental contributions to geometry and mathematical physics." },
    { year: 1921, name: "Jacques Émile Jouguet", nationality: "French", field: "Theoretical Mechanics", description: "French mathematician and physicist, for his contributions in theoretical mechanics." },
    { year: 1922, name: "Jules Drach", nationality: "French", field: "Mathematics", description: "French mathematician, for the body of his work in mathematics." },
    { year: 1923, name: "Auguste Boulanger", nationality: "French", field: "Scientific Work", description: "French mathematician and engineer (posthumous award), for the body of his scientific work." },
    { year: 1924, name: "Ernest Vessiot", nationality: "French", field: "Mathematics", description: "French mathematician, for the body of his work in mathematics." },
    { year: 1925, name: "Denis Eydoux", nationality: "French", field: "Hydraulics", description: "French engineer, for the body of his work in hydraulics." },
    { year: 1926, name: "Paul Montel", nationality: "French", field: "Mathematics", description: "French mathematician, for the body of his mathematical work." },
    { year: 1927, name: "Henri Villat", nationality: "French", field: "Fluid Mechanics", description: "French mathematician, specialist in fluid mechanics." },
    { year: 1929, name: "Alfred-Marie Liénard", nationality: "French", field: "Physics & Engineering", description: "French physicist and engineer." },
    { year: 1930, name: "Arnaud Denjoy", nationality: "French", field: "Mathematics", description: "French mathematician, for the body of his mathematical work." },
    { year: 1932, name: "Raoul Bricard", nationality: "French", field: "Geometry", description: "French mathematician, for his work in geometry." },
    { year: 1934, name: "René Maurice Fréchet", nationality: "French", field: "Mathematics", description: "French mathematician, for the body of his mathematical work." },
    { year: 1936, name: "Paul Lévy", nationality: "French", field: "Mathematics", description: "French mathematician, for the body of his mathematical work." },
    { year: 1937, name: "Joseph Bethenod", nationality: "French", field: "Mechanics & Electricity", description: "French physicist and engineer, for his work in mechanics and electricity." },
    { year: 1938, name: "Szolem Mandelbrojt", nationality: "French", field: "Function Theory", description: "French mathematician specializing in function theory." },
    { year: 1939, name: "Henri Bénard", nationality: "French", field: "Physics", description: "French physicist, famous for Bénard convection." },
    { year: 1942, name: "René Garnier", nationality: "French", field: "Mathematics", description: "French mathematician." },
    { year: 1945, name: "Alphonse Demoulin", nationality: "Belgian", field: "Mathematics", description: "Belgian mathematician." },
    { year: 1948, name: "Georges Valiron", nationality: "French", field: "Mathematics", description: "French mathematician." },
    { year: 1951, name: "Joseph Kampé de Fériet", nationality: "French", field: "Mathematics & Physics", description: "French mathematician and physicist." },
    { year: 1954, name: "Georges Darmois", nationality: "French", field: "Statistics", description: "French mathematician and statistician." },
    { year: 1966, name: "André Néron", nationality: "French", field: "Number Theory", description: "French mathematician specializing in number theory and algebraic geometry." },
    { year: 1972, name: "Michel Lazard", nationality: "French", field: "Algebra", description: "French mathematician specializing in algebra." },
    { year: 1975, name: "Jean Céa", nationality: "French", field: "Numerical Analysis", description: "French mathematician specializing in numerical analysis." },
    { year: 1978, name: "Henri Skoda", nationality: "French", field: "Complex Analysis", description: "French mathematician specializing in complex analysis." },
    { year: 1981, name: "Philippe G. Ciarlet", nationality: "French", field: "Numerical Methods", description: "French mathematician specializing in numerical methods." },
    { year: 1987, name: "Pierre Ladevèze", nationality: "French", field: "Computational Mechanics", description: "French engineer specializing in computational mechanics." },
    { year: 1990, name: "Jean-Yves Girard", nationality: "French", field: "Mathematical Logic", description: "French mathematical logician." },
    { year: 1993, name: "Marie Farge", nationality: "French", field: "Turbulence", description: "French mathematician and physicist, for her work on the application of wavelet transform to the study of turbulence." },
    { year: 1995, name: "Yves Le Jan", nationality: "French", field: "Probability Theory", description: "French mathematician specializing in probability theory. Last recorded edition of the Prix Poncelet." },
    
    // Leonardo Da Vinci Medal Era
    { year: 2026, name: "Under Evaluation", nationality: "TBD", field: "Mathematical Engineering", description: "The first Leonardo Da Vinci Medal will be awarded in February 2026, marking the continuation of the Prix Poncelet legacy under the administration of the IDEA League universities. The selection committee is currently evaluating three finalists:", finalists: [
      "Dr. Lucas Alaniz Pintos (Spain) - Formal verification systems and resilience engineering",
      "Prof. Emmanuel Trélat (France) - Control theory and numerical optimization",
      "Prof. Barbara Kaltenbacher (Austria) - Inverse problems and mathematical modeling"
    ] },
  ];

  // Calculate statistics
  const totalLaureates = laureates.length;
  const countries = [...new Set(laureates.map(l => l.nationality))].length;
  const fields = [...new Set(laureates.map(l => l.field))].length;
  const yearsOfHistory = 2026 - 1868;

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-950 via-blue-900 to-blue-950 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            Laureates Timeline
          </h1>
          <div className="w-32 h-1 bg-amber-400 mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-blue-100 font-light">
            Prix Poncelet (1868–1995) → Leonardo Da Vinci Medal (2026–Present)
          </p>
        </div>
      </section>

      {/* Stats Section - NEW */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {/* Stat 1 */}
            <div className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 rounded-2xl p-10 border-2 border-blue-400 shadow-2xl">
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                  backgroundSize: '32px 32px'
                }}></div>
              </div>
              <div className="relative">
                <div className="mb-2">
                  <span className="text-6xl font-serif font-bold bg-gradient-to-br from-blue-300 via-blue-400 to-blue-500 bg-clip-text text-transparent">
                    {yearsOfHistory}
                  </span>
                </div>
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto mb-3"></div>
                <div className="text-lg text-white font-semibold mb-1">
                  Years of History
                </div>
                <div className="text-sm text-blue-200 mt-2">
                  Since 1868
                </div>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 rounded-2xl p-10 border-2 border-amber-400 shadow-2xl">
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                  backgroundSize: '32px 32px'
                }}></div>
              </div>
              <div className="relative">
                <div className="mb-2">
                  <span className="text-6xl font-serif font-bold bg-gradient-to-br from-amber-300 via-amber-400 to-amber-600 bg-clip-text text-transparent">
                    {totalLaureates}
                  </span>
                </div>
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-3"></div>
                <div className="text-lg text-white font-semibold mb-1">
                  Distinguished Laureates
                </div>
                <div className="text-sm text-blue-200 mt-2">
                  Prix Poncelet Recipients
                </div>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 rounded-2xl p-10 border-2 border-green-400 shadow-2xl">
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                  backgroundSize: '32px 32px'
                }}></div>
              </div>
              <div className="relative">
                <div className="mb-2">
                  <span className="text-6xl font-serif font-bold bg-gradient-to-br from-green-300 via-green-400 to-green-500 bg-clip-text text-transparent">
                    {countries}
                  </span>
                </div>
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent mx-auto mb-3"></div>
                <div className="text-lg text-white font-semibold mb-1">
                  Countries
                </div>
                <div className="text-sm text-blue-200 mt-2">
                  Represented
                </div>
              </div>
            </div>

            {/* Stat 4 */}
            <div className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 rounded-2xl p-10 border-2 border-purple-400 shadow-2xl">
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                  backgroundSize: '32px 32px'
                }}></div>
              </div>
              <div className="relative">
                <div className="mb-2">
                  <span className="text-6xl font-serif font-bold bg-gradient-to-br from-purple-300 via-purple-400 to-purple-500 bg-clip-text text-transparent">
                    {fields}
                  </span>
                </div>
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent mx-auto mb-3"></div>
                <div className="text-lg text-white font-semibold mb-1">
                  Scientific Fields
                </div>
                <div className="text-sm text-blue-200 mt-2">
                  Disciplines Honored
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Section - ENHANCED */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">
              Next Award Ceremony
            </h2>
            <p className="text-lg text-slate-600">
              February 15th · In commemoration of Galileo Galilei's birth
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { value: countdown.days, label: 'Days' },
              { value: countdown.hours, label: 'Hours' },
              { value: countdown.minutes, label: 'Minutes' },
              { value: countdown.seconds, label: 'Seconds' }
            ].map((item, index) => (
              <div key={index} className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 rounded-2xl p-8 shadow-2xl border-2 border-amber-400 hover:scale-105 transition-transform">
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                    backgroundSize: '32px 32px'
                  }}></div>
                </div>
                <div className="relative">
                  <div className="text-5xl md:text-6xl font-bold font-mono mb-2 text-amber-400">
                    {item.value.toString().padStart(2, '0')}
                  </div>
                  <div className="text-sm uppercase tracking-widest text-blue-200 font-semibold">{item.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Introduction - ENHANCED */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 rounded-2xl p-14 border-2 border-amber-400 shadow-2xl">
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                backgroundSize: '32px 32px'
              }}></div>
            </div>
            <div className="relative text-center">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                A Single Tradition of Excellence
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-8"></div>
              <p className="text-xl text-blue-100 leading-relaxed max-w-4xl mx-auto">
                From the Prix Poncelet's establishment in 1868 to the Leonardo Da Vinci Medal today, 
                this timeline represents an unbroken legacy of recognizing mathematical excellence 
                applied to engineering across nearly two centuries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Laureates List - ENHANCED */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">
              Complete List of Laureates
            </h2>
            <p className="text-lg text-slate-600">
              127 years of recognizing mathematical and engineering excellence
            </p>
          </div>
          
          <div className="space-y-4">
            {laureates.map((laureate) => {
              const isFuture = laureate.year === 2026;
              
              return (
              <div 
                key={laureate.year}
                className={`bg-white border-2 rounded-2xl overflow-hidden transition-all duration-300 ${
                  isFuture 
                    ? 'border-amber-400 shadow-2xl ring-4 ring-amber-400/20' 
                    : 'border-slate-200 hover:border-amber-400 hover:shadow-2xl'
                }`}
              >
                <button
                  onClick={() => setExpandedYear(expandedYear === laureate.year ? null : laureate.year)}
                  className={`w-full px-8 py-6 flex items-center justify-between text-left transition-colors ${
                    isFuture ? 'bg-gradient-to-r from-amber-50 to-white' : 'hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center space-x-8 flex-1">
                    {/* Year Badge - SPECIAL DESIGN FOR 2026 */}
                    {isFuture ? (
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl blur-lg opacity-60 animate-pulse"></div>
                        <div className="relative bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 text-white rounded-xl px-6 py-4 shadow-2xl border-2 border-amber-300">
                          <span className="text-2xl font-bold font-serif">
                            {laureate.year}
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl blur opacity-40"></div>
                        <div className="relative bg-gradient-to-br from-amber-500 to-amber-700 text-white rounded-xl px-6 py-4 shadow-lg">
                          <span className="text-2xl font-bold font-serif">
                            {laureate.year}
                          </span>
                        </div>
                      </div>
                    )}
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className={`text-xl md:text-2xl font-bold ${
                          isFuture ? 'text-amber-900' : 'text-slate-900'
                        }`}>
                          {laureate.name}
                        </h3>
                        {isFuture && (
                          <span className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider animate-pulse">
                            Coming Soon
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap gap-3 text-sm">
                        <span className={`px-4 py-1.5 rounded-full font-semibold ${
                          isFuture 
                            ? 'bg-amber-100 text-amber-900 border border-amber-300' 
                            : 'bg-blue-100 text-blue-900'
                        }`}>
                          {laureate.nationality}
                        </span>
                        <span className="text-slate-400 hidden md:block">·</span>
                        <span className={`italic font-medium ${
                          isFuture ? 'text-amber-700' : 'text-slate-600'
                        }`}>{laureate.field}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Arrow Icon */}
                  <svg
                    className={`w-7 h-7 transition-transform duration-300 flex-shrink-0 ${
                      expandedYear === laureate.year ? 'rotate-180' : ''
                    } ${isFuture ? 'text-amber-600' : 'text-amber-600'}`}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                
                {/* Expanded Content */}
                {expandedYear === laureate.year && (
                  <div className={`px-8 pb-8 border-t-2 ${
                    isFuture 
                      ? 'bg-gradient-to-br from-amber-50 to-white border-amber-200' 
                      : 'bg-gradient-to-br from-slate-50 to-white border-slate-200'
                  }`}>
                    <div className="pt-6">
                      <div className={`w-16 h-1 bg-gradient-to-r mb-4 ${
                        isFuture ? 'from-amber-400 to-transparent' : 'from-amber-400 to-transparent'
                      }`}></div>
                      <p className="text-slate-700 leading-relaxed text-lg mb-6">
                        {laureate.description}
                      </p>
                      
                      {/* Finalists List for 2026 */}
                      {isFuture && (laureate as any).finalists && (
                        <div className="mt-8">
                          <h4 className="text-xl font-bold text-amber-900 mb-4 flex items-center">
                            <span className="bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">3</span>
                            Finalists Under Consideration
                          </h4>
                          <div className="space-y-3">
                            {(laureate as any).finalists.map((finalist: string, idx: number) => (
                              <div key={idx} className="bg-white border-l-4 border-amber-500 p-4 rounded-r-lg shadow-sm hover:shadow-md transition-shadow">
                                <p className="text-slate-800 font-medium flex items-start">
                                  <span className="text-amber-600 font-bold mr-3 text-lg">•</span>
                                  <span>{finalist}</span>
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )})}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-950 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">
            Learn More About the Award
          </h2>
          <p className="text-blue-100 mb-10 text-lg">
            Discover the criteria, selection process, and the universities behind this prestigious recognition
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/criteria" className="bg-amber-500 text-slate-900 px-10 py-4 rounded-lg font-semibold hover:bg-amber-400 transition shadow-lg">
              Award Criteria
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