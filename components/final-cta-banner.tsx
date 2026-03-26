'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function FinalCTABanner() {
  return (
    <section className="relative overflow-hidden py-32 px-4 min-h-[500px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 ken-burns-zoom" style={{ zIndex: 0 }}>
        <Image
          src="/images/amboseli-elephants.webp"
          alt="Amboseli elephants with Mt. Kilimanjaro"
          fill
          className="object-cover"
        />
      </div>

      {/* Dark Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(28,18,8,0.72) 0%, rgba(28,18,8,0.2) 100%)',
          zIndex: 1,
        }}
      />

      {/* Dark Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(28,18,8,0.72) 0%, rgba(28,18,8,0.2) 100%)',
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="font-cormorant text-5xl md:text-6xl text-white mb-12 leading-tight">
          Your Dream Safari is One Message Away.
        </h2>

        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/book"
            className="px-8 py-3 bg-[#D4870A] text-[#1C1208] font-montserrat font-semibold rounded-lg hover:shadow-lg transition-all pulse-glow"
          >
            Start Planning
          </Link>
          <Link
            href="https://wa.me/254722919249"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border-2 border-white text-white font-montserrat font-semibold rounded-lg hover:bg-white hover:text-[#2A4A35] transition-all"
          >
            Chat on WhatsApp
          </Link>
        </div>
      </div>
    </section>
  )
}
