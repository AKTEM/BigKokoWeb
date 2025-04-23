import React from 'react';
import { Check, Bone as Drone, ShieldCheck, Shield } from 'lucide-react';

export function Pricing() {
  const pricingPlans = [
    {
      name: 'Aegis-1 SDS',
      icon: Drone,
      price: '',
      description: 'Advanced Smart Defense System',
      features: [
        'AI-powered threat detection',
        'Real-time response system',
        '24/7 technical support',
        'Annual maintenance included',
        'Software updates'
      ],
      buyLink: 'https://invoicing.pesapal.com/InvoicePay/Pay?id=6ade1d41-aa36-4f64-8774-2050c2d6769a'
    },
    {
      name: 'Argus-1 Perimeter Defense',
      icon: ShieldCheck,
      price: '',
      description: 'Perimeter Guard System',
      features: [
        'Autonomous surveillance',
        'Weather-resistant hardware',
        'Extended range coverage',
        'Integration support',
        'Custom configuration'
      ],
      buyLink: 'https://invoicing.pesapal.com/InvoicePay/Pay?id=e193f221-4d0f-4fc3-ae3b-d5cc0efd8d81'
    },
    {
      name: 'Cerberus-1 TDS',
      icon: Shield,
      price: '',
      description: 'Tactical Defense System',
      features: [
        'Centralized control',
        'Multi-device management',
        'Advanced analytics',
        'Priority support',
        'Custom development'
      ],
      buyLink: 'https://invoicing.pesapal.com/InvoicePay/Pay?id=2d4f4808-1d28-44bc-85af-d1dfa76711d7'
    }
  ];

  const purchaseTerms = [
    'Initial consultation and site assessment required',
    'Custom configuration and setup included',
    'Training and documentation provided',
    'Warranty and support package included',
    'Flexible payment terms available',
    'Volume discounts for multiple units'
  ];

  const orderSteps = [
    'Schedule a consultation with our team',
    'Receive customized solution proposal',
    'Review and approve technical specifications',
    'Complete purchase agreement',
    'Schedule installation and setup',
    'Receive training and handover'
  ];

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Pricing</h2>

        {/* How to Place Order */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h3 className="text-2xl font-bold mb-6">How to Place Order</h3>
            <div className="space-y-4">
              {orderSteps.map((step, index) => (
                <div key={step} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#EDAF3D] text-black flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <p className="text-lg">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Purchase Order Terms</h3>
            <ul className="space-y-4">
              {purchaseTerms.map((term) => (
                <li key={term} className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-[#EDAF3D] mt-1" />
                  <span>{term}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Payment Options */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-8">Payment Options</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan) => (
              <div key={plan.name} className="bg-black/40 backdrop-blur-sm border border-[#EDAF3D]/20 rounded-lg p-8 text-center transform hover:scale-105 transition-all duration-300">
                <plan.icon className="w-12 h-12 text-[#EDAF3D] mx-auto mb-4" />
                <h4 className="text-xl font-bold mb-2">{plan.name}</h4>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                <div className="text-2xl font-bold mb-6">{plan.price}</div>
                <a 
                  href={plan.buyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-block px-6 py-3 bg-[#EDAF3D] text-black rounded-lg hover:bg-[#EDAF3D]/90 transition-colors font-semibold"
                >
                  Buy Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}