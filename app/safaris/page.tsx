'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import FloatingButtons from '@/components/floating-buttons'
import AccessibilityToolbar from '@/components/accessibility-toolbar'
import { ArrowRight } from 'lucide-react'

const heroSlideImages = [
  '/images/elephant-kilimanjaro.webp',
  '/images/amboseli-elephants.webp',
  '/images/cheetah-resting.webp',
]

const mainPackages = [
  {
    title: 'Masai Mara Exploration',
    duration: '4 Days',
    price: '$1,599',
    focus: 'The Great Migration, Big Five, and Maasai Cultural visits.',
    image: '/images/elephant-kilimanjaro.webp',
  },
  {
    title: 'Cultural Exploration in Samburu',
    duration: '7 Days',
    price: '$2,099',
    focus: 'Northern Frontier wildlife (Special Five) and authentic Samburu traditions.',
    image: '/images/cultural-gathering.webp',
  },
  {
    title: 'Adventure Safari - Great Rift Valley',
    duration: '6 Days',
    price: '$1,899',
    focus: 'Hiking, biking, and Rift Valley lakes (Naivasha/Nakuru).',
    image: '/images/zebras-savanna.webp',
  },
  {
    title: 'Kenyan Coastal Retreat',
    duration: '5 Days',
    price: '$1,799',
    focus: 'Diani Beach, marine life, and Swahili culture.',
    image: '/images/beach-diving.webp',
  },
]

const featuredExpeditions = [
  {
    title: 'The Grand Safari',
    duration: '14 Days',
    price: '$3,087',
  },
  {
    title: 'Southern Parks & Coast',
    duration: '10 Days',
    price: '$2,203',
  },
  {
    title: 'Big Five Special',
    duration: '8 Days',
    price: '$2,035',
  },
  {
    title: 'Amboseli Elephant Watching',
    duration: '4 Days',
    price: '$706',
  },
]

export default function SafarisPage() {
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
      
      {/* Hero with Slideshow */}
      <section className="relative h-[500px] md:h-[600px] flex flex-col items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          {heroSlideImages.map((image, index) => (
            <div
              key={index}
              className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
              style={{
                opacity: index === currentImageIndex ? 1 : 0,
              }}
            >
              <Image
                src={image}
                alt={`Safari experiences slide ${index + 1}`}
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
            Safari Experiences Built Around You.
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl mx-auto" style={{ opacity: 0.85 }}>
            Private & group tours across Kenya. From $128/person/day. Fully customizable.
          </p>
        </div>
      </section>

      {/* Seasonality Note */}
      <section className="py-8 px-4 bg-[#F2E8D5]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-playfair text-[#2A4A35] mb-2">Safari Packages</h2>
          <p className="text-[#1C1208] font-inter text-sm md:text-base">
            Rates are indicative per person sharing and vary by season (Peak/Low) and group size. All packages include 4x4 transport, expert guides, and full-board accommodation.
          </p>
        </div>
      </section>

      {/* Main Packages Grid */}
      <section className="py-20 px-4 bg-[#FAF4E8]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mainPackages.map((pkg, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                {/* Image */}
                <div className="relative w-full" style={{ aspectRatio: '4/3' }}>
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    className="object-cover"
                  />
                  {/* Pricing Badge */}
                  <div className="absolute top-4 right-4 bg-[#D4870A] text-white px-4 py-2 rounded-lg font-montserrat font-semibold text-sm">
                    from {pkg.price}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <p className="text-[#D4870A] font-montserrat font-semibold text-sm mb-1">{pkg.duration}</p>
                    <h3 className="text-2xl font-playfair text-[#2A4A35]">
                      {pkg.title}
                    </h3>
                  </div>
                  <p className="text-[#1C1208] font-inter leading-relaxed">
                    {pkg.focus}
                  </p>
                  <Link
                    href="/book"
                    className="inline-flex items-center gap-2 text-[#D4870A] font-montserrat font-semibold hover:gap-3 transition-all"
                  >
                    Learn More <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Expeditions */}
      <section className="py-20 px-4 bg-[#F2E8D5]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-playfair text-[#2A4A35] mb-4">Featured Expeditions</h2>
            <p className="text-[#1C1208] font-inter max-w-2xl mx-auto">
              Longer stays for a deeper connection with Kenya's wild landscapes and cultures
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredExpeditions.map((exp, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center">
                <p className="text-[#D4870A] font-montserrat font-semibold text-sm mb-2">{exp.duration}</p>
                <h3 className="text-xl font-playfair text-[#2A4A35] mb-4">
                  {exp.title}
                </h3>
                <div className="bg-[#FAF4E8] rounded-lg p-3 mb-4">
                  <p className="text-[#D4870A] font-montserrat font-bold text-lg">{exp.price} pp</p>
                </div>
                <Link
                  href="/book"
                  className="inline-block text-[#D4870A] font-montserrat font-semibold text-sm hover:text-[#2A4A35] transition-colors"
                >
                  Inquire →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Safari */}
      <section className="py-20 px-4 bg-[#FAF4E8]">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl p-12 text-center shadow-lg">
          <h2 className="text-4xl font-playfair text-[#2A4A35] mb-4">
            Custom Safari Adventure
          </h2>
          <p className="text-[#1C1208] font-inter text-lg mb-8 leading-relaxed">
            Can't find exactly what you're looking for? We'll design a bespoke safari experience tailored to your interests, group size, timeline, and budget.
          </p>
          <div className="bg-[#F2E8D5] rounded-lg p-4 mb-8">
            <p className="text-[#D4870A] font-montserrat font-bold text-xl">Bespoke Pricing</p>
          </div>
          <Link
            href="/book"
            className="inline-block px-8 py-3 bg-[#D4870A] text-white font-montserrat font-semibold rounded-lg hover:shadow-lg transition-all"
          >
            Request Custom Proposal
          </Link>
        </div>
      </section>

      {/* Tour Rates */}
      <section className="py-16 px-4 bg-[#F2E8D5]">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-4xl font-playfair text-[#2A4A35]">
            Tour Rates
          </h2>
          <p className="text-lg text-[#1C1208] font-inter leading-relaxed">
            The above packages are per person, sharing basis. Rates vary by season (Peak/Low) and group size. All quoted prices include expert guides, 4x4 transport, and full-board accommodation. For a detailed quote matching your travel dates and preferences, contact us today—it's free and there's no commitment.
          </p>
          <Link
            href="/book"
            className="inline-block px-8 py-3 bg-[#D4870A] text-white font-montserrat font-semibold rounded-lg hover:shadow-lg transition-all"
          >
            Get Your Custom Quote
          </Link>
        </div>
      </section>

      {/* Vehicle Info */}
      <section
        className="py-8 px-4"
        style={{
          backgroundColor: '#2A4A35',
          color: '#FDF8F0',
        }}
      >
        <div className="max-w-7xl mx-auto text-center font-inter">
          <p>
            ✓ All safaris are conducted in our regularly serviced 4x4 pop-up roof jeeps — equipped for optimal wildlife viewing, built for your comfort, and maintained for your safety.
          </p>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
      <AccessibilityToolbar />
    </main>
  )
}
