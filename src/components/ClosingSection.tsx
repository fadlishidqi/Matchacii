"use client"
import { useState, useEffect } from "react"

export default function ClosingSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('closing-section')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="closing-section"
      className="bg-gradient-to-br from-emerald-50 via-green-50 to-emerald-50 px-6 py-8 max-w-md mx-auto relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-28 h-28 bg-green-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 left-8 w-20 h-20 bg-emerald-400 rounded-full blur-2xl animate-bounce"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-teal-300 rounded-full blur-xl animate-ping"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 left-8 w-3 h-3 bg-emerald-400/20 rounded-full animate-bounce delay-300"></div>
        <div className="absolute top-80 right-12 w-2 h-2 bg-green-400/30 rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-40 left-16 w-4 h-4 bg-teal-400/25 rounded-full animate-ping delay-500"></div>
      </div>

      {/* Section Title */}
      <div className={`text-center mb-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="relative inline-block">
          <h2 className="text-3xl font-black text-gray-900 mb-2 leading-tight transform -rotate-1">
            Last Call!
          </h2>
          <div className="relative -mt-1 ml-8">
            <div className="inline-block bg-emerald-500 text-white px-6 py-2 font-medium text-sm transform -rotate-1 shadow-lg">
              Kesempatan Terbaik Tidak Datang Dua Kali
            </div>
          </div>
        </div>
      </div>

      {/* Main Message */}
      <div className={`mb-8 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="relative bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500 rounded-2xl p-6 shadow-2xl shadow-emerald-500/30 overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16 animate-spin"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12 animate-ping"></div>

          <div className="absolute top-4 left-4 text-white/30 text-4xl font-serif">&ldquo;</div>
          <div className="relative text-center">
            <h3 className="text-white text-2xl font-black mb-4 leading-tight">
              Wujudkan Bisnis Impianmu
              <span className="block text-lg font-medium bg-white/20 px-3 py-1 rounded-lg mt-2">
                Bersama MATCHACII
              </span>
            </h3>
            <p className="text-white/95 text-sm leading-relaxed font-medium mb-4">
              Slot kemitraan sangat terbatas &mdash; segera ambil bagian dalam bisnis matcha premium 
              yang sedang naik daun!
            </p>
            <div className="bg-white/20 rounded-lg p-3 mt-4">
              <p className="text-white font-bold text-md">
                MATCHACII.SMG &mdash; Finest Street Matcha, bukan matcha sembarangan!
              </p>
            </div>
          </div>
          <div className="absolute bottom-4 right-4 text-white/30 text-4xl font-serif rotate-180">&rdquo;</div>
        </div>
      </div>

      {/* Footer */}
      <div className={`transition-all duration-1000 delay-900 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="text-center py-6 border-t border-emerald-200/50">
          <p className="text-gray-600 text-xs font-medium">
            © 2025 MATCHACII.SMG - CV. Arshaka Trisha Wasana Cidra
          </p>
          <p className="text-emerald-600 text-xs font-bold mt-2">
            #FinestStreetMatcha #MatchaKekinian #BisnisMatcha2025
          </p>
        </div>
      </div>
    </section>
  )
}