"use client"
import { useState, useEffect } from "react"
import Image from "next/image"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50 px-6 py-8 max-w-md mx-auto relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-10 w-24 h-24 bg-emerald-400 rounded-full blur-2xl animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-green-300 rounded-full blur-xl animate-ping"></div>
        <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-teal-300 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 right-8 w-4 h-4 bg-emerald-400/20 rounded-full animate-bounce delay-500"></div>
        <div className="absolute top-64 left-12 w-3 h-3 bg-green-400/30 rounded-full animate-ping delay-700"></div>
        <div className="absolute bottom-96 right-16 w-2 h-2 bg-teal-400/40 rounded-full animate-pulse delay-300"></div>
      </div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-10 w-24 h-24 bg-emerald-400 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-green-300 rounded-full blur-xl"></div>
      </div>

      {/* Header Badge */}
      <div
        className={`text-center mb-10 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="inline-flex items-center px-5 py-3 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full text-sm shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all duration-300">
          <div className="w-2.5 h-2.5 bg-white rounded-full mr-3 animate-pulse"></div>
          <span className="text-white font-semibold tracking-wide">#2025 Best Matcha Business</span>
        </div>
      </div>

      {/* Logo & Brand */}
      <div
        className={`text-center mb-6 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="mx-auto mb-6 w-24 h-24 relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-400 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
          <Image
            src="/images/LOGOMATCHACII.png"
            alt="MATCHACII Logo"
            width={96}
            height={96}
            className="relative shadow-2xl rounded-3xl border-4 border-white/50 backdrop-blur-sm"
            priority
          />
        </div>
        <h1 className="text-4xl font-black text-gray-900 mb-3 tracking-tight">
          MATCHACII
          <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">.SMG</span>
        </h1>
        <div className="inline-block px-4 py-2 bg-gradient-to-r from-emerald-100 to-green-100 rounded-full">
          <p className="text-lg text-emerald-700 font-bold tracking-wide">Finest Street Matcha</p>
        </div>
      </div>

      {/* Main Description */}
      <div
        className={`text-center mb-6 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/50">
          <p className="text-gray-700 leading-relaxed text-md mb-0">
            MATCHACII.SMG adalah brand minuman matcha kekinian yang menghadirkan{" "}
            <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded-lg">
              pure premium grade matcha
            </span>{" "}
            berkualitas tinggi, disajikan dengan cara paling street-friendly dan cocok untuk pasar Indonesia.
          </p>
        </div>
      </div>

      {/* Matcha Business Image */}
      <div
        className={`text-center mb-6 transition-all duration-1000 delay-350 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/50 backdrop-blur-sm">
          <Image
            src="/images/HEROSECTION.png"
            alt="MATCHACII Bisnis Matcha"
            width={400}
            height={400}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      </div>

      {/* Expansion Quote */}
      <div
        className={`mb-6 transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="relative bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500 rounded-2xl p-6 shadow-2xl shadow-emerald-500/30 overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16 animate-spin"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12 animate-ping"></div>

          <div className="absolute top-4 left-4 text-white/30 text-4xl font-serif">&ldquo;</div>
          <p className="relative text-white text-md leading-relaxed font-medium pl-6">
            MATCHACII kini sedang dalam proses ekspansi menuju{" "}
            <span className="font-black bg-white/20 px-2 py-1 rounded-lg">50 cabang di Indonesia</span>, dengan visi
            menjadi pelopor street matcha berkualitas tinggi dan layanan kemitraan terbaik.
          </p>
          <div className="absolute bottom-4 right-4 text-white/30 text-4xl font-serif rotate-180">&rdquo;</div>
        </div>
      </div>

      {/* Keunggulan */}
      <div
        className={`mb-6 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/50">
          <p className="text-gray-700 text-md leading-relaxed mb-6 font-medium">
            Meskipun kami belum ekspansi besar-besaran, kami membuktikan bahwa kualitas dan supply chain kami stabil:
          </p>

          <div className="space-y-4 mb-6">
            {[
              "Tidak pernah kehabisan stok",
              "Sistem operasional tertata",
              "Didukung legalitas resmi CV. Arshaka Trisha Wasana Cidra",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 p-4 bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl border border-emerald-200/50 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-md font-bold">✓</span>
                </div>
                <span className="text-gray-800 text-md font-semibold flex-1">{item}</span>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-amber-400 to-orange-400 rounded-xl p-4 shadow-lg">
            <p className="text-white text-sm font-semibold">
              <span className="font-medium">CV. Arshaka Trisha Wasana Cidra</span> sudah berpengalaman lebih dari{" "}
              <span className="bg-white/20 px-2 py-1 rounded-lg font-bold">4 tahun di dunia F&amp;B</span>
            </p>
          </div>
        </div>
      </div>

      {/* Visi Kemitraan */}
      <div
        className={`transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="relative bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500 rounded-2xl p-6 overflow-hidden hover:scale-105 transition-all duration-500 group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16 animate-spin"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12 animate-ping"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-green-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div className="relative flex items-start space-x-4">
            <div>
              <h3 className="font-black text-white text-base mb-3 tracking-wide group-hover:animate-pulse">
                Visi Kemitraan MATCHACII:
              </h3>
              <p className="text-white/95 text-md leading-relaxed font-medium">
                &ldquo;Membangun jaringan street matcha yang solid, profesional, dan terus tumbuh bersama generasi muda
                pebisnis di Indonesia sadar akan kualitas, cita rasa, dan pengalaman yang autentik.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}