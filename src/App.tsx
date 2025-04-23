import React, { useState, useRef } from 'react';
import { Sun, Moon, Shield, ShieldCheck, ShieldAlert, Users, Package, Clock, Award, Lock, Shield as ShieldIcon, Fingerprint, Scan, ShieldOff, KeyRound, Target, Cpu, Brain, Rocket, Users2, Building2, Globe, Mail, User, Calendar, PhoneCall, Handshake, BookOpen } from 'lucide-react';
import { useCountUp } from './hooks/useCountUp';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';
import { Navbar } from './components/Navbar';
import { Catalogue } from './components/Catalogue';
import { Pricing } from './components/Pricing';
import { VideoSection } from './components/VideoSection';
import { Suppliers } from './components/Suppliers';
import { FAQ } from './components/FAQ';
import { Blog } from './components/Blog';
import { Contact } from './components/Contact';
import { Consultation } from './components/Consultation';
import { Downloads } from './components/Downloads';

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

interface Expert {
  title: string;
  icon: typeof Shield;
  description: string;
}

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const statsRef = useRef<HTMLDivElement>(null);
  const isStatsVisible = useIntersectionObserver(statsRef);

  const stats = [
    { label: 'Years of Excellence', value: 7, suffix: '+', icon: Award },
    { label: 'Happy Customers', value: 50, suffix: '+', icon: Users },
    { label: 'Units Ordered', value: 50, suffix: '+', icon: Package },
    { label: 'On-time Delivery', value: 99, suffix: '%', icon: Clock },
  ];

  const counts = stats.map(stat => useCountUp(stat.value, 2000, isStatsVisible));

  const securityIcons = [Lock, ShieldIcon, Fingerprint, Scan, ShieldOff, KeyRound];

  const offerings = [
    "Autonomous Drone Surveillance with night vision & thermal imaging",
    "AI Object Detection (human, firearm, motorcycle, cattle, etc.)",
    "Central Command & Control Dashboard",
    "Real-time alerts & streaming via RTMP or HDMI",
    "Rural-compatible deployment with solar-powered CCCs",
    "Support for local Armed Village Responders (AVRs)",
    "Web-based client interface for orders, support & upgrades"
  ];

  const teamMembers: TeamMember[] = [];

  const technicalSetup = [
    {
      title: 'AI Surveillance Drone(s)',
      image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=800',
      description: 'Advanced drone technology for aerial surveillance'
    },
    {
      title: 'Command & Control Center (CCC)',
      image: '/img/ccc.jpg',
      description: 'Centralized control interface for monitoring'
    },
    {
      title: 'AI Local Server (YOLOv8 Object Detection)',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800',
      description: 'High-performance AI processing server'
    },
    {
      title: 'Workstation PC',
      image: '/img/mac.jpg',
      description: 'Powerful workstation for system operations'
    },
    {
      title: 'Dual Monitors (for AI & Drone Feeds)',
      image: '/img/work.jpeg',
      description: 'Multi-display setup for comprehensive monitoring'
    },
    {
      title: 'Walkie-Talkie Base Station',
      image: '/img/walkie.jpg',
      description: 'Communication system for field operations'
    },
    {
      title: 'Router with Offline/Local Network Setup',
      image: '/img/lan.jpg',
      description: 'Secure local network infrastructure'
    },
    {
      title: 'Solar + UPS Power System (for rural/off-grid deployment)',
      image: '/img/ups.jpg',
      description: 'Reliable power backup solution'
    },
  ];

  const detectionCapabilities = [
    'Humans in jungles/remote terrain',
    'Armed intruders or firearms',
    'Cattle and livestock',
    'Motorcycles',
    'Suspicious movement at night (via thermal cameras)'
  ];

  const experts: Expert[] = [
    {
      title: 'Defense technologists',
      icon: Shield,
      description: 'Experts in defense systems'
    },
    {
      title: 'AI and drone integration specialists',
      icon: Brain,
      description: 'Specialists in AI and drone technology'
    },
    {
      title: 'Security and logistics planners',
      icon: Users2,
      description: 'Planning and logistics experts'
    },
    {
      title: 'Rural electrification consultants',
      icon: Lock,
      description: 'Power systems specialists'
    },
    {
      title: 'Cybersecurity experts and policy advisors',
      icon: ShieldAlert,
      description: 'Security policy experts'
    }
  ];

  const iconPositions = securityIcons.map(() => ({
    x1: -50 + Math.random() * 100,
    y1: -50 + Math.random() * 100,
    x2: -50 + Math.random() * 100,
    y2: -50 + Math.random() * 100,
    x3: -50 + Math.random() * 100,
    y3: -50 + Math.random() * 100,
    x4: -50 + Math.random() * 100,
    y4: -50 + Math.random() * 100,
  }));

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <Navbar isDarkMode={isDarkMode} onThemeToggle={() => setIsDarkMode(!isDarkMode)} />

      {/* Hero Section */}
      <section id="home" className="relative scroll-mt-16">
        {/* Background Pattern */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2% 50%, rgba(237, 175, 61, 0.15) 0%, transparent 25%),
                             radial-gradient(circle at 98% 50%, rgba(237, 175, 61, 0.1) 0%, transparent 25%),
                             linear-gradient(0deg, transparent 0%, ${isDarkMode ? 'rgba(0,0,0,0.7)' : 'rgba(255,255,255,0.7)'} 100%)`
          }}></div>
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zM22.343 0L13.857 8.485 15.272 9.9l9.9-9.9h-2.83zM32 0l-3.486 3.485-1.414 1.414L40.97 0H32zM0 5.373l.828-.83L2.243 5.96 0 8.2V5.374zm0 5.656l.828-.829L5.657 5.373 4.243 3.96 0 8.2v2.83zm0 5.657l.828-.828L8.485 13.03 7.07 11.617 0 18.686v-2zm0 5.657l.828-.828L11.313 18.7l-1.414-1.414L0 24.343v-2.657zm0 5.657l.828-.828L14.142 24.23l-1.414-1.414L0 30v-2.657zm0 5.657l.828-.828L16.97 29.8l-1.414-1.414L0 35.657V33zm0 5.657l.828-.828L19.8 35.485l-1.414-1.414L0 41.314v-2.657zm0 5.657l.828-.828L22.627 41.14l-1.414-1.414L0 47v-2.686zm0 5.657l.828-.828L25.455 46.97l-1.414-1.414L0 52.627V50zm0 5.657l.828-.828L28.283 52.8l-1.414-1.414L0 58.313v-2.656zm0 5.657l.828-.828L31.112 58.63 29.7 57.214 0 64v-2.7zm0 5.657l.828-.828L33.94 64 0 64v-2.657z' fill='%23EDAF3D' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            opacity: 0.5
          }}></div>
        </div>
        
        {/* Animated Security Icons */}
        <div className="absolute inset-0 overflow-hidden">
          {securityIcons.map((Icon, index) => (
            <div
              key={index}
              className="absolute"
              style={{
                animation: `float-${index} 8s linear infinite`,
                opacity: 0.15
              }}
            >
              <Icon
                className="text-[#EDAF3D]"
                style={{
                  width: `${30 + (index * 10)}px`,
                  height: `${30 + (index * 10)}px`,
                  animation: `spin-${index} 6s linear infinite`
                }}
              />
            </div>
          ))}
        </div>

        <style>
          {securityIcons.map((_, index) => {
            const pos = iconPositions[index];
            return `
              @keyframes float-${index} {
                0% {
                  transform: translate(${pos.x1}vw, ${pos.y1}vh);
                }
                25% {
                  transform: translate(${pos.x2}vw, ${pos.y2}vh);
                }
                50% {
                  transform: translate(${pos.x3}vw, ${pos.y3}vh);
                }
                75% {
                  transform: translate(${pos.x4}vw, ${pos.y4}vh);
                }
                100% {
                  transform: translate(${pos.x1}vw, ${pos.y1}vh);
                }
              }
              @keyframes spin-${index} {
                from {
                  transform: rotate(0deg);
                }
                to {
                  transform: rotate(${index % 2 === 0 ? 360 : -360}deg);
                }
              }
            `;
          }).join('\n')}
        </style>

        {/* Content */}
        <div className="container mx-auto px-4 py-24 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl font-bold mb-8 leading-tight">
              Smart Defense{' '}
              <span className="text-[#EDAF3D] relative">
                 Systems
                <span className="absolute -inset-1 bg-[#EDAF3D] opacity-20 blur rounded-lg transform -skew-x-12"></span>
              </span>
            </h1>
            <p className="text-xl mb-12 leading-relaxed max-w-2xl mx-auto">
              Protective Solutions
              {' '}
              <span className="text-[#EDAF3D] font-semibold">Innovative products </span> for ever changing threats.
            </p>
            <div className="flex justify-center gap-6">
              <a 
                href="#contact" 
                className="px-8 py-3 bg-[#EDAF3D] text-black rounded-full hover:bg-opacity-90 transition-all transform hover:scale-105 font-semibold"
              >
                Get a Quote
              </a>
              <button className={`px-8 py-3 border-2 border-[#EDAF3D] rounded-full hover:bg-[#EDAF3D] hover:text-black transition-all transform hover:scale-105 font-semibold ${isDarkMode ? 'text-white' : 'text-black'}`}>
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center transform hover:scale-105 transition-transform">
              <stat.icon className="w-12 h-12 mx-auto mb-4 text-[#EDAF3D]" />
              <div className="text-4xl font-bold mb-2">
                {counts[index]}{stat.suffix}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'} scroll-mt-16`}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">About Us</h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-8">
              {/* About Text */}
              <div className="prose prose-lg">
                <p className="text-lg leading-relaxed text-gray-400">
                  Bigkoko Smart Defense Systems is a cutting-edge defense innovation unit under the umbrella of Bigkoko Transcontinental Gruppen Filial, headquartered in Stockholm, Sweden. We specialize in designing, building, and delivering AI-powered, modular smart defense technologies for rural, remote, and high-risk areas across the globe.
                </p>
                <p className="text-lg leading-relaxed text-gray-400 mt-4">
                  Our flagship product, the Aegis-1 Smart Defense System, integrates autonomous drone surveillance with a secure Command & Control Center (CCC) to create a rapid, intelligent, and mobile security infrastructure.
                </p>
              </div>

              {/* Who We Are */}
              <div>
                <div className="flex items-center mb-6">
                  <User className="w-8 h-8 text-[#EDAF3D] mr-3" />
                  <h3 className="text-2xl font-bold">Who We Are</h3>
                </div>
                <p className="text-lg leading-relaxed text-gray-400">
                  Bigkoko Defense Systems is a pioneering force in AI-powered security solutions. With over 15 years of experience,
                  we've established ourselves as industry leaders in developing cutting-edge defense systems that protect
                  organizations and infrastructure across the globe.
                </p>
              </div>
            </div>

            {/* Drone Image */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#EDAF3D]/20 via-transparent to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img
               src=" /img/abt.jpg"
                alt="Advanced Drone Technology"
                className="w-full h-full object-cover rounded-lg shadow-xl transform group-hover:scale-[1.02] transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg">
                <h4 className="text-xl font-bold text-white">Advanced Aerial Surveillance</h4>
                <p className="text-gray-200">Next-generation drone technology for c security</p>
              </div>
            </div>
          </div>

          {/* Our Vision & Mission */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className={`p-8 rounded-lg ${isDarkMode ? 'bg-black' : 'bg-white'} shadow-lg`}>
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-[#EDAF3D] mr-3" />
                <h3 className="text-2xl font-bold">Our Vision</h3>
              </div>
              <p className="text-lg leading-relaxed">
                To democratize access to modern defense technologies by equipping underserved and vulnerable communities with smart, affordable, and autonomous defense systems.
              </p>
            </div>
            <div className={`p-8 rounded-lg ${isDarkMode ? 'bg-black' : 'bg-white'} shadow-lg`}>
              <div className="flex items-center mb-6">
                <Rocket className="w-8 h-8 text-[#EDAF3D] mr-3" />
                <h3 className="text-2xl font-bold">Our Mission</h3>
              </div>
              <p className="text-lg leading-relaxed">
                To provide scalable, AI-enabled surveillance and response tools that bridge the gap between traditional defense systems and the urgent 
                security needs of rural and remote populations.
              </p>
            </div>
          </div>

          {/* What We Offer */}
          <div className="mb-20">
            <div className="flex items-center mb-8 justify-center">
              <Package className="w-8 h-8 text-[#EDAF3D] mr-3" />
              <h3 className="text-2xl font-bold">What We Offer</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {offerings.map((offering, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <ShieldCheck className="w-5 h-5 text-[#EDAF3D] mt-1 flex-shrink-0" />
                  <p className="text-lg">{offering}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Our Team & Leadership */}
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center mb-8">
                <Users2 className="w-8 h-8 text-[#EDAF3D] mr-3" />
                <h3 className="text-2xl font-bold">Our Team</h3>
              </div>
              <p className="text-lg leading-relaxed mb-6">
                At Bigkoko Smart Defense Systems, we are powered by a lean, agile, and highly skilled international team, with our operational headquarters in Stockholm, Sweden. Our mission is to develop and deploy practical, intelligent, and locally adaptable security solutions through advanced drone surveillance and AI technologies.
                We combine global technical expertise with Swedish precision, working with certified Swedish suppliers and technology partners to ensure quality, durability, and compliance in every Aegis-1 deployment.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {teamMembers.map((member) => (
                  <div key={member.name} className="text-center">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto mb-3 object-cover"
                    />
                    <h4 className="font-semibold">{member.name}</h4>
                    <p className="text-sm text-gray-400">{member.role}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="flex items-center mb-8">
                <Brain className="w-8 h-8 text-[#EDAF3D] mr-3" />
                <h3 className="text-2xl font-bold">Leadership & Vision</h3>
              </div>
              <p className="text-lg leading-relaxed mb-6">
              Emmanuel Emeka Ogbuanu ~ Managing Director & Project Supervisor. A business developer and AI engineer, Emmanuel leads the innovation behind Aegis-1. 
                With a vision for decentralized defense and technology-enabled 
                community safety, he oversees strategy, product development, and client relationships.
              </p>
              <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-black' : 'bg-white'} shadow-lg`}>
                <h4 className="text-xl font-semibold mb-4">Core Values</h4>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Shield className="w-5 h-5 text-[#EDAF3D] mr-3" />
                    <span>Unwavering commitment to security</span>
                  </li>
                  <li className="flex items-center">
                    <Cpu className="w-5 h-5 text-[#EDAF3D] mr-3" />
                    <span>Continuous innovation</span>
                  </li>
                  <li className="flex items-center">
                    <Users className="w-5 h-5 text-[#EDAF3D] mr-3" />
                    <span>Client-centric approach</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local & Regional Customization Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Local & Regional Customization</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1200"
                alt="Global Operations"
                className="rounded-lg shadow-xl mb-8"
              />
              <h3 className="text-2xl font-bold mb-6">Our consultancy services are deeply local-context aware. We work with:</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-[#EDAF3D] mt-1" />
                  <span>Swedish and EU-based suppliers to ensure hardware reliability and regulatory compliance.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Users2 className="w-5 h-5 text-[#EDAF3D] mt-1" />
                  <span>Local partners in Africa and beyond to ensure culturally and logistically sensitive deployment.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Brain className="w-5 h-5 text-[#EDAF3D] mt-1" />
                  <span>Open-source AI ecosystems to reduce costs and maintain agility.</span>
                </li>
              </ul>
            </div>

            <div>
              <div className="bg-black/40 backdrop-blur-sm border border-[#EDAF3D]/20 rounded-lg p-8 mb-8">
                <h3 className="text-2xl font-bold mb-6">Our Experts</h3>
                <h4 className="text-1xl font-normal mb-6">
                  We assign a dedicated consultant to every project, ensuring personal attention and coordinated rollout.
                </h4>
                <div className="grid grid-cols-2 gap-6">
                  {experts.map((expert) => (
                    <div key={expert.title} className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 bg-[#EDAF3D]/10 rounded-full flex items-center justify-center">
                        <expert.icon className="w-8 h-8 text-[#EDAF3D]" />
                      </div>
                      <h4 className="font-semibold mb-2">{expert.title}</h4>
                      <p className="text-sm text-gray-400">{expert.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-black/40 backdrop-blur-sm border border-[#EDAF3D]/20 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-6">Let's Talk</h3>
                <p className="text-gray-400 mb-6">
                  Want to explore how Bigkoko can help you build a smart security system 
                  for your region? Book a free consultation session with our team.
                </p>
                <div className="space-y-4">
                  <a 
                    href="https://sds.bigkokogroup.com" 
                    className="flex items-center gap-2 text-[#EDAF3D] hover:text-[#EDAF3D]/80"
                  >
                    <Globe className="w-5 h-5" />
                    Visit our website
                  </a>
                  <a 
                    href="mailto:sds@bigkokogroup.com"
                    className="flex items-center gap-2 text-[#EDAF3D] hover:text-[#EDAF3D]/80"
                  >
                    <Mail className="w-5 h-5" />
                    Email us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Technical Setup Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-6">Technical Setup</h2>
          <h4 className="text-1xl font-normal text-center mb-16">What are the core components of the system?</h4>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="grid grid-cols-2 gap-6">
                {technicalSetup.map((item) => (
                  <div 
                    key={item.title}
                    className="bg-black/40 backdrop-blur-sm border border-[#EDAF3D]/20 rounded-lg p-6"
                  >
                    <div className="relative aspect-video mb-4 overflow-hidden rounded-lg">
                      <img 
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-black/40 backdrop-blur-sm border border-[#EDAF3D]/20 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-6">Detection Capabilities</h3>
                <div className="space-y-4">
                  {detectionCapabilities.map((capability) => (
                    <div key={capability} className="flex items-center gap-3">
                      <Shield className="w-5 h-5 text-[#EDAF3D]" />
                      <span>{capability}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Drone Image */}
              <div className="relative overflow-hidden rounded-lg aspect-video">
                <img 
                  src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&q=80&w=2070"
                  alt="Surveillance Drone in Action"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4">
                    <h4 className="text-white text-lg font-semibold">Advanced Aerial Surveillance</h4>
                    <p className="text-gray-200 text-sm">24/7 monitoring with AI-powered detection</p>
                  </div>
                </div>
              </div>

              {/* Ana Image */}
              <div className="relative overflow-hidden rounded-lg aspect-video">
                <img 
                  src="/img/ana.jpeg"
                  alt="Analytics Dashboard"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4">
                    <h4 className="text-white text-lg font-semibold">Advanced Analytics</h4>
                    <p className="text-gray-200 text-sm">Real-time threat analysis and response coordination</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the sections remain unchanged */}

      <Catalogue />
      <Downloads />
      <VideoSection />
      <Suppliers />
      <Consultation />
      <Pricing />
      <FAQ />
      <Blog />
      <Contact />
   {/* Footer */}
      <footer className={`${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'} py-16`}>
        <div className="container mx-auto px-4">
          {/* Business Information Section */}
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Business Inquiries */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-6 h-6 text-[#EDAF3D]" />
                <h3 className="text-xl font-bold">Business Inquiries & Orders</h3>
              </div>
              <p className="text-gray-400">
                Have questions about the Aegis-1 Smart Defense System or need a custom quote?
              </p>
              <div className="flex items-center gap-2 text-[#EDAF3D]">
                <Mail className="w-5 h-5" />
                <a href="mailto:info@bigkokogroup.com" className="hover:underline">
                info@bigkokogroup.com
                </a>
              </div>
            </div>

            {/* Consultation */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-6 h-6 text-[#EDAF3D]" />
                <h3 className="text-xl font-bold">Book a Consultation</h3>
              </div>
              <p className="text-gray-400">
                Want to explore a solution tailored to your community or territory?
              </p>
              <p className="text-gray-400">
                Schedule a free 30-minute strategy call
              </p>
              <a 
                href="#"
                className="inline-flex items-center gap-2 px-6 py-2 bg-[#EDAF3D] text-black rounded-full hover:bg-opacity-90 transition-all transform hover:scale-105 font-semibold"
              >
                <BookOpen className="w-5 h-5" />
                Book Here
              </a>
            </div>

            {/* Collaboration */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <Handshake className="w-6 h-6 text-[#EDAF3D]" />
                <h3 className="text-xl font-bold">Let's Collaborate</h3>
              </div>
              <p className="text-gray-400 mb-4">We welcome partnerships with:</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-gray-400">
                  <Shield className="w-5 h-5 text-[#EDAF3D]" />
                  Local security providers & armed responders
                </li>
                <li className="flex items-center gap-2 text-gray-400">
                  <Building2 className="w-5 h-5 text-[#EDAF3D]" />
                  Governments and donor agencies
                </li>
                <li className="flex items-center gap-2 text-gray-400">
                  <Cpu className="w-5 h-5 text-[#EDAF3D]" />
                  Technology integrators & distributors
                </li>
                <li className="flex items-center gap-2 text-gray-400">
                  <Users2 className="w-5 h-5 text-[#EDAF3D]" />
                  NGOs focused on rural development or anti-banditry programs
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center pt-8 border-t border-gray-800">
            <p>&copy; 2025 Bigkoko Smart Defense Systems. All rights reserved.</p>
          </div>
        </div>
      </footer>
    
    </div>
  );
}

export default App;