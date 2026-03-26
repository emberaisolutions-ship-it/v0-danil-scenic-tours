'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const destinations = [
  {
    name: 'Maasai Mara',
    description: 'Kenya\'s most iconic reserve with the Big Five and Great Wildebeest Migration.',
    image: '/images/zebras-savanna.webp',
    isPlaceholder: false,
  },
  {
    name: 'Amboseli',
    description: 'Famous elephant herds set against Mt. Kilimanjaro\'s breathtaking backdrop.',
    image: '/images/amboseli-elephants.webp',
    isPlaceholder: false,
  },
  {
    name: 'Lake Nakuru',
    description: 'Rift Valley gem renowned for flamingo colonies, rhinos, and leopards.',
    image: '/images/rhinos-waterhole.webp',
    isPlaceholder: false,
  },
]

export default function FeaturedDestinations() {
  return (
    <section className="py-20 px-4 bg-[#FAF4E8]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-playfair text-[#2A4A35] text-center mb-4">
          Where Will Kenya Take You?
        </h2>
        <p className="text-center text-[#1C1208] font-inter mb-16 max-w-2xl mx-auto">
          Explore some of Kenya's most spectacular destinations
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {destinations.map((dest, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              {dest.isPlaceholder ? (
                <div
                  style={{
                    backgroundColor: '#C4A882',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    aspectRatio: '3/2',
                    width: '100%',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '13px',
                    fontStyle: 'italic',
                    color: '#6B5240',
                    textAlign: 'center',
                    padding: '16px',
                  }}
                >
                  {dest.image}
                </div>
              ) : (
                <div className="relative w-full" style={{ aspectRatio: '3/2' }}>
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-playfair text-[#2A4A35]">
                  {dest.name}
                </h3>
                <p className="text-[#1C1208] font-inter text-sm leading-relaxed">
                  {dest.description}
                </p>
                <Link
                  href="/destinations"
                  className="inline-flex items-center gap-2 text-[#D4870A] font-montserrat font-semibold text-sm hover:gap-3 transition-all"
                >
                  See This Destination <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
