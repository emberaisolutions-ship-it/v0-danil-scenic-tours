'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import FloatingButtons from '@/components/floating-buttons'
import AccessibilityToolbar from '@/components/accessibility-toolbar'

const heroSlideImages = [
  '/images/zebras-savanna.webp',
  '/images/rhinos-waterhole.webp',
  '/images/cheetah-resting.webp',
]

const galleryImages = [
  { image: '/images/elephant-kilimanjaro.webp', isPlaceholder: false },
  { image: '/images/amboseli-elephants.webp', isPlaceholder: false },
  { image: '/images/zebras-savanna.webp', isPlaceholder: false },
  { image: '/images/rhinos-waterhole.webp', isPlaceholder: false },
  { image: '/images/ostrich-wildlife.webp', isPlaceholder: false },
  { image: '/images/beach-diving.webp', isPlaceholder: false },
  { image: '/images/cultural-gathering.webp', isPlaceholder: false },
  { image: '/images/impala-herd.webp', isPlaceholder: false },
  { image: '/images/crowned-crane.webp', isPlaceholder: false },
]

export default function GalleryPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroSlideImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <main className="min-h-screen bg-[#FAF4E8]">
      <Navbar />
      
      {/* Hero */}
      <section className="relative h-[500px] md:h-[600px] flex flex-col items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          {heroSlideImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={image}
                alt="Kenya"
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(28,18,8,0.72) 0%, rgba(28,18,8,0.2) 100%)',
            zIndex: 1,
          }}
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-cormorant text-5xl md:text-6xl text-white mb-4 leading-tight">
            Kenya Through Our Lens
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl mx-auto" style={{ opacity: 0.85 }}>
            Explore the beauty, wildlife, and moments that await you.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 px-4 bg-[#FAF4E8]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {galleryImages.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                style={{
                  aspectRatio: '3/2',
                  position: 'relative',
                }}
              >
                {item.isPlaceholder || !item.image ? (
                  <div
                    style={{
                      backgroundColor: '#E8DCC5',
                      width: '100%',
                      height: '100%',
                    }}
                  />
                ) : (
                  <Image
                    src={item.image}
                    alt="Gallery image"
                    fill
                    className="object-cover"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
      <AccessibilityToolbar />
    </main>
  )
}
