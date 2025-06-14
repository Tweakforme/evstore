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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-white">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white opacity-50" />
        
        <div className="container mx-auto px-6 text-center relative z-10 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 tracking-tight">
            EV Store
          </h1>
          <div className="w-24 h-0.5 bg-emerald-600 mx-auto mb-8" />
          <p className="text-lg md:text-xl text-gray-600 mb-16 leading-relaxed max-w-3xl mx-auto font-light">
            Precision-engineered Tesla solutions since 2020. Specializing in Model 3 and Y components, 
            professional service, and premium vehicle sales for discerning owners.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 mt-20 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-light text-emerald-600 mb-2">2020</div>
              <div className="text-xs uppercase tracking-wider text-gray-500 font-medium">Established</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light text-emerald-600 mb-2">3 & Y</div>
              <div className="text-xs uppercase tracking-wider text-gray-500 font-medium">Model Focus</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light text-emerald-600 mb-2">2017-25</div>
              <div className="text-xs uppercase tracking-wider text-gray-500 font-medium">Coverage</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light text-emerald-600 mb-2">BC</div>
              <div className="text-xs uppercase tracking-wider text-gray-500 font-medium">Kamloops</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
              Our Expertise
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive Tesla solutions from precision parts to complete vehicles
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Tesla Parts & Service */}
            <div className="bg-white p-10 rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-emerald-100 rounded-sm flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-2xl font-light text-gray-900 mb-4">Tesla Parts & Service</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Premium OEM and aftermarket components for Tesla Model 3 and Y (2017-2025). 
                Expert installation and maintenance by certified technicians who understand 
                the precision these vehicles demand.
              </p>
              <a href="#" className="text-emerald-600 text-sm font-medium hover:text-emerald-700 transition-colors">
                Learn more →
              </a>
            </div>

            {/* Vehicle Sales */}
            <div className="bg-white p-10 rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-sm flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-light text-gray-900 mb-4">Vehicle Sales</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Curated Tesla vehicles available at <span className="text-gray-900 font-medium">cars.evstore.ca</span>. 
                Each vehicle undergoes comprehensive inspection to meet our exacting standards 
                for quality and performance.
              </p>
              <a href="https://cars.evstore.ca" className="text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors">
                Browse inventory →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Company Portfolio */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
              Our Business Family
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              EV Store is part of a diversified portfolio of businesses serving Kamloops
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {companies.map((company) => (
              <div 
                key={company.name}
                className="border border-gray-200 p-8 rounded-sm hover:border-gray-300 transition-colors duration-300"
              >
                <h3 className="text-xl font-normal text-gray-900 mb-3">{company.name}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{company.description}</p>
                <a 
                  href={`https://${company.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-gray-900 text-sm inline-flex items-center gap-2 transition-colors"
                >
                  {company.url}
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
            Experience Precision
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Discover why Tesla owners choose EV Store for premium parts, expert service, and quality vehicles.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#"
              className="px-8 py-3 bg-gray-900 hover:bg-gray-800 text-white font-normal rounded-sm transition-colors duration-200"
            >
              Shop Tesla Parts
            </a>
            
            <a 
              href="https://cars.evstore.ca"
              className="px-8 py-3 border border-gray-900 text-gray-900 font-normal rounded-sm hover:bg-gray-100 transition-colors duration-200"
            >
              Browse Vehicles
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-gray-200">
        <div className="container mx-auto px-6 text-center">
          <div className="text-gray-500 text-sm">
            <p>&copy; 2025 EV Store. Precision in every detail.</p>
            <p className="mt-2">Proudly serving Kamloops since 2020.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;