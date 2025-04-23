import React from 'react';
import { FileDown } from 'lucide-react';

export function Downloads() {
  const guides = [
    {
      title: 'Aegis-1 SDS User Guide',
      filename: 'https://docs.google.com/document/d/e/2PACX-1vS17rIXxMYlue-IiDJ4rkBE8hqTcuDSQbl3_kQVVLhudRJpp35NRzI8GrRjKxldmHnvAA2hVZqg2jYc/pub',
      description: 'Complete documentation for Aegis-1 Smart Defense System setup and operation'
    },
    {
      title: 'Argus-1 Perimeter Defense User Guide',
      filename: 'https://docs.google.com/document/d/e/2PACX-1vRxTTnjgwI3bkhTek7fivGNRn49LWsy0R4YMbvlXQiXu0fHwbwTpJbswuZmc_MPh-2_EnbLQj-X_Fgf/pub',
      description: 'Detailed guide for Argus-1 Perimeter Defense configuration and maintenance'
    },
    {
      title: 'Cerberus-1 TDS User Guide',
      filename: 'https://docs.google.com/document/d/e/2PACX-1vRgqgQNAMk7TroIgRTPZBG6Djy_EVx4viHJCFNA6hUsURBlpOofq0Pdp3zRLMLd6sPemmpKDOnMbmyT/pub',
      description: 'Comprehensive manual for Cerberus-1 Tactical Defense System deployment'
    }
  ];

  return (
    <section id="downloads" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Product Documentation</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {guides.map((guide) => (
            <div 
              key={guide.title}
              className="bg-black/40 backdrop-blur-sm border border-[#EDAF3D]/20 rounded-lg p-8 text-center group hover:border-[#EDAF3D] transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-4">{guide.title}</h3>
              <p className="text-gray-400 mb-8">{guide.description}</p>
              <a
                href={guide.filename}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-[#EDAF3D] text-black rounded-full hover:bg-opacity-90 transition-all transform group-hover:scale-105 font-semibold gap-2"
              >
                <FileDown className="w-5 h-5" />
                Download Guide
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}