import React from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronDown } from 'lucide-react';

export function FAQ() {
  const faqs = [
    {
      question: "What is Aegis-1 Smart Defense System (SDS)?",
      answer: "Aegis-1 is a mobile, modular defense system combining AI-powered aerial surveillance drones with a ground-based Command & Control Center (CCC). It enables real-time threat detection, response coordination, and situational awareness in off-grid or vulnerable environments."
    },
    {
      question: "Who is Aegis-1 designed for?",
      answer: "It's ideal for rural communities, private estates, off-grid settlements, security contractors, local governments, cooperatives, farms, and humanitarian zones needing 24/7 surveillance and defense."
    },
    {
      question: "Where is Aegis-1 developed?",
      answer: "The system is developed and supported by Bigkoko Transcontinental Gruppen Filial, based in Stockholm, Sweden, in partnership with suppliers and technology partners across Sweden and Europe."
    },
    // Technical Setup
    {
      category: "TECHNICAL SETUP",
      question: "What are the core components of the system?",
      answer: `The system consists of:
      • AI Surveillance Drone(s)
      • Command & Control Center (CCC)
      • AI Local Server (YOLOv8 Object Detection)
      • Workstation PC
      • Dual Monitors (for AI & Drone Feeds)
      • Walkie-Talkie Base Station (Optional)
      • Router with Offline/Local Network Setup
      • Solar + UPS Power System (for rural/off-grid deployment)`
    },
    {
      category: "TECHNICAL SETUP",
      question: "What does the CCC do?",
      answer: "It serves as the central hub for monitoring, analysis, and coordination. It receives drone video feeds, runs local AI object detection, stores footage, and allows manual operator intervention and communication."
    },
    {
      category: "TECHNICAL SETUP",
      question: "What kind of threats can it detect?",
      answer: `Our AI model (YOLOv8) is trained to detect:
      • Humans in jungles/remote terrain
      • Armed intruders or firearms
      • Cattle and livestock
      • Motorcycles
      • Suspicious movement at night (via thermal cameras)`
    },
    {
      category: "TECHNICAL SETUP",
      question: "How is the system powered in rural areas?",
      answer: "Through solar power with battery backup, combined with a mini UPS to support the AI server, monitors, and workstation during cloudy or low-light conditions."
    },
    // Deployment & Operation
    {
      category: "DEPLOYMENT & OPERATION",
      question: "How long does setup take?",
      answer: "With training of personnel, setup can be completed within 1–3 days, and system adoption takes only a few hours thanks to our intuitive dashboard and simplified CCC configuration."
    },
    {
      category: "DEPLOYMENT & OPERATION",
      question: "Can the system work without the internet?",
      answer: "Yes. The entire system, including AI detection, communication, and storage, can run fully offline, using a local network or internal mesh Wi-Fi."
    },
    {
      category: "DEPLOYMENT & OPERATION",
      question: "How many drones can be connected?",
      answer: "Depending on the configuration, the CCC can manage 1–5 drones simultaneously for live feeds and AI processing."
    },
    {
      category: "DEPLOYMENT & OPERATION",
      question: "Must the CCC be near where the drone is flying?",
      answer: `No, the Command & Control Center (CCC) does not have to be physically near the drone. The system supports three deployment modes:

      1. Internet-Connected Deployment (Preferred for remote CCC):
      • The drone streams live video via 4G/5G to the cloud or local server
      • The CCC (anywhere in the country or world) accesses this stream in real-time
      • The AI model can run on a cloud server or locally in the CCC
      
      2. Local Deployment with Private Wi-Fi or LAN:
      • Drone and CCC are set up in the same general area
      • All data is processed and visualized locally without needing the internet
      • Useful in areas with no mobile network
      
      3. Hybrid Deployment:
      • Drone streams to a local field CCC, which then syncs or relays data to a central HQ CCC
      • The AI can run both at the field and HQ level depending on processing needs

      This means you can fly a drone in a conflict-prone village, while your security command center remains in Abuja, Lagos, or even Stockholm.`
    },
    // Legal & Ownership
    {
      category: "LEGAL & OWNERSHIP",
      question: "Do civilians need a license to use this system?",
      answer: "Drone and surveillance regulations vary by country. While thermal and AI-powered drones may require registration or clearance in some regions, we assist clients in navigating local laws during the pre-installation phase."
    },
    {
      category: "LEGAL & OWNERSHIP",
      question: "Can private individuals or corporations buy this?",
      answer: "Yes, private citizens, corporations, community groups, and NGOs can purchase Aegis-1, provided they follow local airspace and data privacy regulations."
    },
    // Purchasing & Pricing
    {
      category: "PURCHASING & PRICING",
      question: "What is the cost of a complete Aegis-1 SDS kit?",
      answer: "Pricing depends on configuration (number of drones, power options, AI models, hardware specs), but starter packages begin at €7,500 – €12,000, excluding VAT, delivery and installation."
    },
    {
      category: "PURCHASING & PRICING",
      question: "Do you offer payment plans or support for cooperatives?",
      answer: "Yes. We offer staged procurement, leasing models, and partnerships with village associations, especially in East and West Africa."
    },
    {
      category: "PURCHASING & PRICING",
      question: "Is local support available?",
      answer: "Yes. Through regional reps and partners in Rwanda, Ghana, Kenya, Nigeria, Sweden, and more—clients receive onboarding, installation, and training support."
    },
    // Security & Data
    {
      category: "SECURITY & DATA",
      question: "Is the data encrypted or secure?",
      answer: "Yes, all video feeds, alerts, and AI logs are encrypted locally and can be optionally backed up to the cloud or offline drives."
    },
    {
      category: "SECURITY & DATA",
      question: "Can recordings be exported?",
      answer: "Absolutely. Operators can download or transfer videos to USB drives, secure SD cards, or external storage at any time."
    },
    // Maintenance & Updates
    {
      category: "MAINTENANCE & UPDATES",
      question: "How do I update the AI model?",
      answer: "Updates can be made remotely (if internet is available) or manually using a USB or SD card with the latest AI training files from Bigkoko HQ."
    },
    {
      category: "MAINTENANCE & UPDATES",
      question: "What kind of maintenance is required?",
      answer: "Minimal. Drone calibration, battery checks, and software updates should be done monthly. We also offer a Maintenance Plan."
    },
    {
      category: "MAINTENANCE & UPDATES",
      question: "What if the system goes offline?",
      answer: "It will automatically store data locally and alert operators with visual/audio signals. The UPS will maintain critical operations until power is restored."
    }
  ];

  // Group FAQs by category
  const groupedFaqs = faqs.reduce((acc, faq) => {
    const category = faq.category || "General";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(faq);
    return acc;
  }, {});

  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {Object.entries(groupedFaqs).map(([category, categoryFaqs]) => (
            <div key={category} className="mb-8">
              {category !== "General" && (
                <h3 className="text-2xl font-bold mb-4 text-[#EDAF3D]">{category}</h3>
              )}
              {categoryFaqs.map((faq, index) => (
                <Disclosure key={index} as="div" className="mb-4">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex justify-between w-full px-6 py-4 text-left rounded-lg bg-black/40 backdrop-blur-sm border border-[#EDAF3D]/20 hover:bg-[#EDAF3D]/10 transition-colors duration-200">
                        <span className="text-lg font-semibold">{faq.question}</span>
                        <ChevronDown
                          className={`w-5 h-5 text-[#EDAF3D] transform transition-transform duration-200 ${
                            open ? 'rotate-180' : ''
                          }`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-6 py-4 text-gray-400 whitespace-pre-line">
                        {faq.answer}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}