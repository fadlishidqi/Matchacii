"use client"
import { useState, useEffect, useRef } from "react"
import Image from "next/image"

export default function MenuSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)
  const autoSlideRef = useRef<NodeJS.Timeout | null>(null)

  const menus = [
    { id: 1, image: "/images/MENU1.png" },
    { id: 2, image: "/images/MENU2.png" },
    { id: 3, image: "/images/MENU3.png" },
    { id: 4, image: "/images/MENU4.png" },
    { id: 5, image: "/images/MENU5.png" },
  ]

  // Observer for section visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('menu-section')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  // Auto-slide logic
  const startAutoSlide = () => {
    autoSlideRef.current = setInterval(() => {
      setCurrentIndex(prev => {
        const nextIndex = (prev + 1) % menus.length
        scrollToIndex(nextIndex)
        return nextIndex
      })
    }, 3000)
  }

  const stopAutoSlide = () => {
    if (autoSlideRef.current) {
      clearInterval(autoSlideRef.current)
      autoSlideRef.current = null
    }
  }

  useEffect(() => {
    if (isVisible) startAutoSlide()
    return stopAutoSlide
  }, [isVisible])

  const resetAutoSlide = () => {
    stopAutoSlide()
    setTimeout(() => {
      if (!autoSlideRef.current) startAutoSlide()
    }, 5000)
  }

  const scrollToIndex = (index: number) => {
    if (scrollRef.current) {
      const itemWidth = 256 + 16
      const scrollPosition = index * itemWidth
      scrollRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      })
      setCurrentIndex(index)
    }
  }

  const goToPrevious = () => {
    resetAutoSlide()
    const newIndex = currentIndex === 0 ? menus.length - 1 : currentIndex - 1
    scrollToIndex(newIndex)
  }

  const goToNext = () => {
    resetAutoSlide()
    const newIndex = (currentIndex + 1) % menus.length
    scrollToIndex(newIndex)
  }

  const handleDotClick = (index: number) => {
    resetAutoSlide()
    scrollToIndex(index)
  }

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft
      const itemWidth = 256 + 16
      const newIndex = Math.round(scrollLeft / itemWidth)
      setCurrentIndex(Math.min(Math.max(newIndex, 0), menus.length - 1))
    }
  }

  return (
    <section
      id="menu-section"
      className="bg-gradient-to-br from-emerald-50 via-green-50 to-emerald-50 px-6 py-2 max-w-md mx-auto relative overflow-hidden"
    >
      {/* Background and floating elements omitted for brevity */}

      {/* Section Title */}
      <div className={`text-center mb-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="relative inline-block">
          <h2 className="text-3xl font-black text-gray-900 mb-2 leading-tight transform -rotate-1">
            Menu Signature
          </h2>
          <div className="relative -mt-1 ml-8">
            <div className="inline-block bg-emerald-500 text-white px-6 py-2 font-medium text-sm transform -rotate-1 shadow-lg">
              Rasa Premium, Harga Kaki Lima
            </div>
          </div>
        </div>
      </div>

      {/* Menu Description */}
      <div className={`mb-8 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        
          <p className="text-gray-700 text-md text-center font-medium">
            Semua menu MATCHACII menggunakan<span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded-lg">
              100% pure matcha grade premium
            </span>yang memberikan rasa autentik dan kaya akan antioksidan.
          </p>
        </div>

      {/* Carousel */}
      <div className={`mb-8 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="relative">
          {/* Previous */}
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-white/50 flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300"
          >
            <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next */}
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-white/50 flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300"
          >
            <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Carousel */}
          <div 
            ref={scrollRef}
            className="flex space-x-4 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollSnapType: 'x mandatory' }}
            onScroll={handleScroll}
          >
            {menus.map((menu, index) => (
              <div
                key={menu.id}
                className="flex-shrink-0 w-64 bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl border border-white/50 hover:shadow-2xl hover:scale-105 transition-all duration-500"
                style={{ scrollSnapAlign: 'center' }}
              >
                <Image
                  src={menu.image}
                  alt={`Menu ${menu.id}`}
                  width={256}
                  height={320}
                  className="w-full h-80 object-cover"
                />
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center space-x-2 mt-6">
            {menus.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? 'bg-emerald-500 scale-125'
                    : 'bg-gray-300 hover:bg-emerald-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Highlight (unchanged) */}
      <div className={`transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="relative bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500 rounded-2xl p-6 overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16 animate-spin"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12 animate-ping"></div>
          <div className="absolute top-4 left-4 text-white/30 text-4xl font-serif">"</div>
          <div className="relative text-center">
            <h3 className="text-white text-xl font-black mb-4 leading-tight">
              🍃 Menu Instagramable
              <span className="block text-lg font-medium bg-white/20 px-3 py-1 rounded-lg mt-2">
                Bikin Customer Pengen Repeat Order!
              </span>
            </h3>
            <p className="text-white/95 text-sm leading-relaxed font-medium">
              Setiap varian dirancang khusus untuk menciptakan pengalaman rasa yang tak terlupakan 
              dan visual yang menarik untuk media sosial.
            </p>
          </div>
          <div className="absolute bottom-4 right-4 text-white/30 text-4xl font-serif rotate-180">"</div>
        </div>
      </div>

      {/* Hide scrollbar */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}
