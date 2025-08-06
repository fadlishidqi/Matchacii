"use client"
import { useState, useEffect } from "react"
import Image from "next/image"

export default function WhyJoinSection() {
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

    const element = document.getElementById('why-join-section')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="why-join-section"
      className="bg-gradient-to-br from-white via-green-50 to-emerald-50 px-6 py-2 max-w-md mx-auto relative overflow-hidden"
    >
      {/* Background Pattern - Same as Hero */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-10 w-24 h-24 bg-emerald-400 rounded-full blur-2xl animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-green-300 rounded-full blur-xl animate-ping"></div>
        <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-teal-300 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      {/* Floating Elements - Same as Hero */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 right-8 w-4 h-4 bg-emerald-400/20 rounded-full animate-bounce delay-500"></div>
        <div className="absolute top-64 left-12 w-3 h-3 bg-green-400/30 rounded-full animate-ping delay-700"></div>
        <div className="absolute bottom-96 right-16 w-2 h-2 bg-teal-400/40 rounded-full animate-pulse delay-300"></div>
      </div>

      {/* Section Title - Positioned higher */}
      <div className={`text-center mb-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="relative inline-block">
          <h2 className="text-3xl font-black text-gray-900 mb-2 leading-tight transform -rotate-1">
            Apa yang didapat?
          </h2>
          <div className="relative -mt-1 ml-8">
            <div className="inline-block bg-emerald-500 text-white px-6 py-2 font-medium text-sm transform -rotate-1 shadow-lg">
              3 alasan kenapa harus gabung
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Image */}
      <div className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="relative rounded-3xl overflow-hidden backdrop-blur-sm hover:scale-105 transition-transform duration-500">
          <Image
            src="/images/SECTION3.png"
            alt="3 Alasan Kenapa Harus Gabung MATCHACII"
            width={400}
            height={600}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      </div>
    </section>
  )
}