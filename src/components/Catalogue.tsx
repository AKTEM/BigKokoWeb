import React from 'react';
import { Bone as Drone, ShieldCheck, Shield } from 'lucide-react';

interface Product {
  name: string;
  description: string;
  features: string[];
  specifications: { [key: string]: string };
  icon: typeof Shield;
  image: string;
  href: string;
}

export function Catalogue() {
  const products: Product[] = [
    {
      name: 'Aegis-1 Smart Defense System (SDS)',
      description: 'Two-Pillar Architecture for Rapid Community Security',
      features: [
        'The Aegis-1 Smart Defense System is a modular, AI-driven security solution designed to protect rural and vulnerable communities from emerging threats.',
        
      ],
      specifications: {
        
      },
      icon: Drone,
      image: 'https://images.unsplash.com/photo-1624969862644-791f3dc98927?auto=format&fit=crop&q=80&w=1200',
      href: '/products/aegis'
    },
    {
      name: 'Argus-1 Perimeter Defense',
      description: 'The Argus-1 Perimeter Defense consists of a series of integrated high-tech surveillance systems including:',
      features: [
        '360-degree motion sensors',
        'Night-vision cameras',
        'Drones for aerial surveillance',
        'Automated response systems',
        'AI-powered analysis of security data',
        'Command and Control Center (CCC) for centralized monitoring and alerts',
      ],
      specifications: {
        
      },
      icon: ShieldCheck,
      image: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?auto=format&fit=crop&q=80&w=1200',
      href: '/products/argus'
    },
    {
      name: 'Cerberus-1 TDS',
      description: 'The Cerberus-1 TDS combines state-of-the-art technology to provide round-the-clock protection with the following features:',
      features: [
        'Real-Time Threat Detection powered by AI',
        'Autonomous Defense Units (AI-based drones and ground robots)',
        'Advanced Surveillance Systems (motion sensors, thermal cameras, and radar)',
        'Integrated Command & Control Center (CCC)',
        'Perimeter Security Integration (fence sensors, smart gates)',
        'Rapid-Response Unit Dispatch via drones and ground units',
      ],
      specifications: {
        
      },
      icon: Shield,
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200',
      href: '/products/cerberus'
    }
  ];

  return (
    <section id="catalogue" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Product Catalogue</h2>
        <div className="space-y-20">
          {products.map((product, index) => (
            <div key={product.name} className={`flex flex-col lg:flex-row gap-12 ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}>
              <div className="lg:w-1/2">
                <div className="relative group">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="rounded-lg shadow-xl transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
              <div className="lg:w-1/2 space-y-6">
                <div className="flex items-center gap-3">
                  <product.icon className="w-8 h-8 text-[#EDAF3D]" />
                  <h3 className="text-3xl font-bold">{product.name}</h3>
                </div>
                <p className="text-lg text-gray-400">{product.description}</p>
                
                <div>
                  <h4 className="text-xl font-semibold mb-4">Features</h4>
                  <ul className="space-y-2">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <Shield className="w-5 h-5 text-[#EDAF3D]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key}>
                        <dt className="text-sm text-gray-400">{key}</dt>
                        <dd className="font-semibold">{value}</dd>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                 
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}