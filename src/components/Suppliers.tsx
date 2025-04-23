import React from 'react';
import { Building2, Shield, Award, Bone as Drone, Brain, Zap, Sword } from 'lucide-react';

export function Suppliers() {
  const suppliers = [
    {
      name: 'Drone & UAV Technologies',
      specialty: '',
      location: '',
      certification: '',
      icon: Drone
    },
    {
      name: 'Command & Control Infrastructure',
      specialty: '',
      location: '',
      certification: '',
      icon: Building2
    },
    {
      name: 'Power Systems & Backup',
      specialty: '',
      location: '',
      certification: '',
      icon: Zap
    },
    {
      name: 'AI, Analytics & Security Software',
      specialty: '',
      location: '',
      certification: '',
      icon: Brain
    },
    {
      name: 'Tactical Gear & Local Response Kits',
      specialty: '',
      location: '',
      certification: '',
      icon: Sword
    }
  ];

  return (
    <section id="suppliers" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Our Trusted Suppliers</h2>
        <h4 className="text-1xl font-normal text-center mb-10">Our supplier ecosystem is divided into five key categories:</h4>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {suppliers.map((supplier) => (
            <div
              key={supplier.name}
              className="p-6 rounded-lg bg-black/40 backdrop-blur-sm border border-[#EDAF3D]/20 transform hover:scale-105 transition-all duration-300"
            >
              <supplier.icon className="w-12 h-12 text-[#EDAF3D] mb-4" />
              <h3 className="text-xl font-bold mb-2">{supplier.name}</h3>
              <p className="text-gray-400 mb-2">{supplier.specialty}</p>
              <p className="text-sm text-gray-500">{supplier.location}</p>
              <div className="mt-4 inline-block px-3 py-1 bg-[#EDAF3D]/10 rounded-full text-[#EDAF3D] text-sm">
                {supplier.certification}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}