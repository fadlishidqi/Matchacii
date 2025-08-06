"use client"
import { useState, useEffect } from "react"
import Image from "next/image"

export default function TestimoniSection() {
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

    const element = document.getElementById('testimoni-section')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const testimonials = [
    {
      id: 1,
      name: "Mitra Jakarta",
      text: "Waktu pertama kali buka booth, aku nggak nyangka bisa sold out dalam 3 jam. Bahkan, ada customer yang rela nungguin batch kedua dibuka. Ini pengalaman jualan paling menyenangkan!",
      image: "/images/MITRA.png",
      rating: 5
    },
    {
      id: 2,
      name: "Mitra Bandung", 
      text: "MATCHACII beda sama brand lain. Stoknya selalu aman, komunikasi sama tim pusat juga enak. Aku ngerasa beneran dibimbing dan dihargai sebagai mitra.",
      image: "/images/MITRA.png",
      rating: 5
    }
  ]

  return (
    <section
      id="testimoni-section"
      className="bg-gradient-to-br from-emerald-50 via-emerald-50 to-green-50 px-6 py-6 max-w-md mx-auto relative overflow-hidden"
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
            Real Voices
          </h2>
          <div className="relative -mt-1 ml-8">
            <div className="inline-block bg-emerald-500 text-white px-6 py-2 font-medium text-sm transform -rotate-1 shadow-lg">
              Mitra MATCHACII.SMG Speak Up!
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="space-y-6 mb-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`transition-all duration-1000 delay-${300 + (index * 200)} ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-white/50 hover:shadow-2xl hover:scale-105 transition-all duration-500 group relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-100/50 rounded-full -translate-y-10 translate-x-10 group-hover:scale-110 transition-transform duration-500"></div>
              
              {/* Quote icon */}
              <div className="absolute top-4 left-4 text-emerald-500/20 text-4xl font-serif">"</div>
              
              {/* Content */}
              <div className="relative">
                {/* Stars Rating */}
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">⭐</span>
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-gray-700 text-md leading-relaxed font-medium mb-6 px-4">
                  "{testimonial.text}"
                </blockquote>

                {/* Mitra Info - Aligned Left */}
                <div className="flex items-center space-x-4 px-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden shadow-lg border-2 border-white">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{testimonial.name}</p>
                    <p className="text-emerald-600 text-xs font-medium">Partner MATCHACII</p>
                  </div>
                </div>
              </div>

              {/* Bottom quote */}
              <div className="absolute bottom-4 right-4 text-emerald-500/20 text-4xl font-serif rotate-180">"</div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className={`text-center mt-8 transition-all duration-1000 delay-900 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <p className="text-xs text-gray-500 font-medium mt-3">
          Jadilah bagian dari <span className="font-bold text-emerald-600">success story</span> berikutnya
        </p>
      </div>
    </section>
  )
}