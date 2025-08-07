"use client"
import { useState, useEffect } from "react"
import Image from "next/image"

export default function ROISection() {
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

    const element = document.getElementById('roi-section')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="roi-section"
      className="bg-gradient-to-br from-emerald-50 via-green-50 to-emerald-50 px-6 py-4 max-w-md mx-auto relative overflow-hidden"
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
      <div className={`text-center mb-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="relative inline-block">
          <h2 className="text-3xl font-black text-gray-900 mb-2 leading-tight transform -rotate-1">
            ROI Analysis
          </h2>
          <div className="relative -mt-1 ml-8">
            <div className="inline-block bg-emerald-500 text-white px-6 py-2 font-medium text-sm transform -rotate-1 shadow-lg">
              Bisnis Matcha Paling Cepat Balik Modal
            </div>
          </div>
        </div>
      </div>

      {/* ROI Image */}
      <div className={`mb-6 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl border border-white/50 hover:scale-105 transition-all duration-500">
          <Image
            src="/images/ROI.png"
            alt="ROI MATCHACII - Return of Investment Analysis"
            width={400}
            height={600}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      </div>

      {/* Key Benefits */}
        <div className={`mb-6 transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/50">
            <h3 className="font-black text-gray-900 text-lg mb-6 text-center">
            Kenapa ROI MATCHACII Sangat Menarik?
            </h3>

            <div className="space-y-4 mb-0">
            {[
                {
                title: "Break Even Point Super Cepat",
                desc: "Mulai dari 10-17 hari sudah balik modal"
                },
                {
                title: "Margin Keuntungan Tinggi", 
                desc: "Profit margin hingga 50% dari penjualan"
                },
                {
                title: "Potensi Penjualan Stabil",
                desc: "Target 50-100 cup per hari mudah dicapai"
                },
                {
                title: "Modal Terjangkau",
                desc: "Mulai dari 2,3 juta sudah bisa memulai bisnis"
                }
            ].map((benefit, index) => (
                <div
                key={index}
                className="flex items-center space-x-4 p-4 bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl border border-emerald-200/50 hover:shadow-lg transition-all duration-300 group"
                >
                <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-md font-bold">✓</span>
                </div>
                <span className="text-gray-800 text-md font-semibold flex-1">{benefit.title}</span>
                </div>
            ))}
            </div>
        </div>
        </div>

      {/* Call to Action */}
      <div className={`transition-all duration-1000 delay-900 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="bg-gradient-to-r from-amber-400 to-orange-400 rounded-xl p-4 shadow-lg">
          <p className="text-white text-sm font-semibold text-center">
            🔥 <span className="font-bold">Jangan tunggu lagi!</span> Semakin cepat mulai, semakin cepat merasakan keuntungannya
          </p>
        </div>
      </div>
    </section>
  )
}