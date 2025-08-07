"use client"
import { useState, useEffect } from "react"
import Image from "next/image"

export default function ContactSection() {
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

    const element = document.getElementById('contact-section')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="contact-section"
      className="bg-gradient-to-br from-emerald-50 via-green-50 to-emerald-50 px-6 py-2 max-w-md mx-auto relative overflow-hidden"
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
            Ready to Join?
          </h2>
          <div className="relative -mt-1 ml-8">
            <div className="inline-block bg-emerald-500 text-white px-6 py-2 font-medium text-sm transform -rotate-1 shadow-lg">
              Hubungi Kami Sekarang!
            </div>
          </div>
        </div>
      </div>

      {/* Main Slogan */}
      <div className={`mb-8 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="relative bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500 rounded-2xl p-6 shadow-2xl shadow-emerald-500/30 overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16 animate-spin"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12 animate-ping"></div>

          <div className="absolute top-4 left-4 text-white/30 text-4xl font-serif">"</div>
          <div className="relative text-center">
            <h3 className="text-white text-2xl font-black mb-4 leading-tight">
              MATCHACII
              <span className="block text-lg font-medium bg-white/20 px-3 py-1 rounded-lg mt-2">
                Paling Dicari, Paling Dicintai!
              </span>
            </h3>
            <p className="text-white/95 text-sm leading-relaxed font-medium">
              Peluang nggak datang dua kali. Tapi MATCHACII bisa jadi awal dari perubahan besar dalam hidupmu.
            </p>
          </div>
          <div className="absolute bottom-4 right-4 text-white/30 text-4xl font-serif rotate-180">"</div>
        </div>
      </div>

      {/* Contact Information */}
      <div className={`space-y-6 mb-8 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        {/* WhatsApp Contact */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-white/50 hover:shadow-2xl hover:scale-105 transition-all duration-500 group relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-20 h-20 bg-green-100/50 rounded-full -translate-y-10 translate-x-10 group-hover:scale-110 transition-transform duration-500"></div>
          
          {/* Content */}
          <div className="relative flex items-center space-x-4">
            <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center shadow-lg border-2 border-white">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516"/>
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-lg">WhatsApp Official</h4>
              <p className="text-emerald-600 font-medium text-sm">Chat langsung dengan tim kami</p>
              <a 
                href="https://wa.me/6288804087923" 
                className="inline-block mt-2 px-4 py-2 bg-green-500 text-white font-semibold text-sm rounded-lg hover:bg-green-600 transition-colors shadow-md"
              >
                +62 888-0408-7923
              </a>
            </div>
          </div>
        </div>

        {/* Instagram Contact */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-white/50 hover:shadow-2xl hover:scale-105 transition-all duration-500 group relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-20 h-20 bg-pink-100/50 rounded-full -translate-y-10 translate-x-10 group-hover:scale-110 transition-transform duration-500"></div>
          
          {/* Content */}
          <div className="relative flex items-center space-x-4">
            {/* Instagram Logo Background with Instagram gradient */}
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg border-2 border-white">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-lg">Instagram</h4>
              <p className="text-emerald-600 font-medium text-sm">Follow untuk update terbaru</p>
              <a 
                href="https://instagram.com/matchacii.smg" 
                className="inline-block mt-2 px-4 py-2 bg-green-500 text-white font-semibold text-sm rounded-lg hover:bg-green-600 transition-all shadow-md"
              >
                @matchacii.smg
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Paket Kemitraan Section */}
      <div className={`mb-4 transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="text-center mb-6">
          <h3 className="text-2xl font-black text-gray-900 mb-2">Pilihan Paket</h3>
          <p className="text-emerald-600 font-medium text-sm">Temukan paket yang cocok untukmu</p>
        </div>

        <div className="space-y-4">
          {/* Paket Non Booth */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border border-white/50 hover:scale-105 transition-all duration-300">
            <Image
              src="/images/PAKET1.png"
              alt="Paket Non Booth - Rp 2.399.000"
              width={400}
              height={300}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Paket Booth Standar */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border border-white/50 hover:scale-105 transition-all duration-300">
            <Image
              src="/images/PAKET2.png"
              alt="Paket Booth Standar - Rp 3.499.000"
              width={400}
              height={300}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Paket Booth Premium */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border border-white/50 hover:scale-105 transition-all duration-300">
            <Image
              src="/images/PAKET3.png"
              alt="Paket Booth Premium - Rp 4.500.000"
              width={400}
              height={300}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Catatan Penting */}
        <div className="mt-6 space-y-4">
          <div className="bg-gradient-to-r from-amber-400 to-orange-400 rounded-xl p-4 shadow-lg">
            <h4 className="text-white text-lg font-black mb-2">Catatan Penting:</h4>
            <p className="text-white text-sm font-medium leading-relaxed">
              Seluruh mitra wajib memilih salah satu paket untuk menjaga tampilan brand yang profesional 
              dan seragam di seluruh titik penjualan MATCHACII. Ini adalah bentuk keseriusan kami dalam 
              membangun brand awareness jangka panjang.
            </p>
          </div>

          {/* Catatan Tambahan */}
          <div className="relative bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500 rounded-2xl p-6 shadow-emerald-500/30 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16 animate-spin"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12 animate-ping"></div>
            
            <div className="absolute top-4 left-4 text-white/30 text-4xl font-serif">"</div>
            <div className="relative">
              <h4 className="text-white text-lg font-black mb-4 leading-tight">Catatan Tambahan:</h4>
              <div className="space-y-2">
                {[
                  "Semua paket terhubung langsung dengan pusat MATCHACII.SMG",
                  "Support branding, konten promosi, dan bimbingan penjualan",
                  "Bisa upgrade paket kapan pun sesuai perkembangan usahamu",
                  "Free konsultasi bulanan!"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <span className="text-white text-sm font-bold mt-0.5">●</span>
                    <p className="text-white/95 text-sm font-medium leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute bottom-4 right-4 text-white/30 text-4xl font-serif rotate-180">"</div>
          </div>
        </div>
      </div>
    </section>
  )
}