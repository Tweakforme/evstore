"use client"

import React, { useState, useEffect } from 'react';

const AboutPage = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const companies = [
    {
      name: "Advanced Plumbing",
      url: "advancedplumbingkamloops.ca",
      description: "Premium plumbing solutions for residential and commercial needs",
    },
    {
      name: "Rentals Kamloops",
      url: "rentalskamloops.ca",
      description: "Home and Office Rentals in Kamloops, BC",
    },
    {
      name: "Hodder Construction",
      url: "hodder.ca",
      description: "Expert construction services and project management",
    },
    {
      name: "EV Store Cars",
      url: "cars.evstore.ca",
      description: "Premium Tesla vehicles and certified pre-owned cars",
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-100">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Subtle dot pattern background */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(16, 185, 129) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        {/* Clean Hero Header */}
        <div className="container mx-auto px-6 text-center relative z-10 max-w-5xl">
          <h1 className="text-6xl md:text-7xl font-semibold text-gray-900 mb-8 tracking-tight">
            EV Store
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed max-w-4xl mx-auto">
            Precision-engineered Tesla solutions since 2020. Specializing in Model 3 and Y components, 
            professional service, and premium vehicle sales for discerning owners.
          </p>
          
          {/* Stats with theme colors */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mt-20">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-emerald-700">2020</div>
              <div className="text-sm uppercase tracking-wider text-gray-600">Established</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-teal-700">Model 3 & Y</div>
              <div className="text-sm uppercase tracking-wider text-gray-600">Specialization</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-cyan-700">2017-2024</div>
              <div className="text-sm uppercase tracking-wider text-gray-600">Coverage</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-slate-700">Kamloops</div>
              <div className="text-sm uppercase tracking-wider text-gray-600">Based</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-semibold text-gray-900 mb-6">
              Our Expertise
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Comprehensive Tesla solutions from precision parts to complete vehicles
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Tesla Parts & Service */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Tesla Parts & Service</h3>
              <p className="text-gray-700 leading-relaxed">
                Premium OEM and aftermarket components for Tesla Model 3 and Y (2017-2025). 
                Expert installation and maintenance by certified technicians who understand 
                the precision these vehicles demand.
              </p>
            </div>

            {/* Vehicle Sales */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Vehicle Sales</h3>
              <p className="text-gray-700 leading-relaxed">
                Curated Tesla vehicles available at <span className="text-emerald-600 font-semibold">cars.evstore.ca</span>. 
                Each vehicle undergoes comprehensive inspection to meet our exacting standards 
                for quality and performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Portfolio */}
      <section className="py-32">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-semibold text-gray-900 mb-6">
              Our Business Family
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              EV Store is part of a diversified portfolio of businesses serving Kamloops
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {companies.map((company, index) => (
              <div 
                key={company.name}
                className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 group"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{company.name}</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">{company.description}</p>
                <a 
                  href={`https://${company.url}`}
                  className="text-emerald-600 hover:text-emerald-700 font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all"
                >
                  {company.url}
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-12">
            <h2 className="text-4xl font-semibold text-gray-900 mb-8">
              Experience Precision
            </h2>
            <p className="text-lg text-gray-700 mb-12">
              Discover why Tesla owners choose EV Store for premium parts, expert service, and quality vehicles.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white font-medium rounded-lg transition-all duration-200 hover:shadow-lg">
                Shop Tesla Parts
              </button>
              
              <button className="px-8 py-4 border-2 border-emerald-600 text-emerald-600 font-medium rounded-lg hover:bg-emerald-600 hover:text-white transition-all duration-200">
                Browse Vehicles
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="text-gray-600">
            <p>&copy; 2025 EV Store. Precision in every detail.</p>
            <p className="mt-2">Proudly serving Kamloops since 2020.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;