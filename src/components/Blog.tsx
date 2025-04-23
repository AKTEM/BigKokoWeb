import React, { useState } from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { BlogPost } from './BlogPost';

export function Blog() {
  const [selectedPost, setSelectedPost] = useState<string | null>(null);

  const posts = [
    {
      id: 'ai-security',
      title: 'The Future of AI in Security Systems',
      excerpt: 'Exploring how artificial intelligence is revolutionizing the security industry with predictive analytics and autonomous response capabilities.',
      content: `Artificial intelligence is fundamentally transforming the security landscape, introducing unprecedented capabilities in threat detection, response automation, and predictive analytics. This evolution marks a significant shift from traditional security approaches to more sophisticated, intelligent systems.

      Modern AI-powered security systems can process vast amounts of data in real-time, identifying patterns and anomalies that might escape human observation. These systems leverage machine learning algorithms to continuously improve their accuracy and effectiveness, adapting to new threats as they emerge.

      One of the most significant advantages of AI in security is its ability to operate 24/7 without fatigue, maintaining consistent vigilance across multiple monitoring points simultaneously. This capability is particularly valuable in large-scale security operations where human resources might be limited.

      Predictive analytics represents another crucial advancement in AI security applications. By analyzing historical data and identifying patterns, these systems can anticipate potential security breaches before they occur, allowing for proactive rather than reactive security measures.

      The integration of AI with existing security infrastructure, such as surveillance cameras and access control systems, creates a comprehensive security ecosystem. This integration enables more efficient resource allocation and faster response times to security incidents.

      Looking ahead, the continued evolution of AI technology promises even more sophisticated security solutions. Developments in areas such as natural language processing and computer vision will further enhance the capabilities of security systems, making them more intuitive and effective in protecting assets and individuals.`,
      author: 'Dr. Sarah Chen',
      date: 'March 15, 2025',
      image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'perimeter-protection',
      title: 'Advanced Perimeter Protection Strategies',
      excerpt: 'A comprehensive guide to modern perimeter security solutions and their implementation in high-security facilities.',
      content: `Modern perimeter protection has evolved far beyond traditional physical barriers, incorporating multiple layers of sophisticated technology to create comprehensive security solutions. This article explores the latest strategies and technologies in perimeter security.

      The foundation of effective perimeter protection lies in the integration of multiple security layers. These typically include physical barriers, electronic surveillance, intrusion detection systems, and advanced analytics. Each layer contributes to a robust security posture that becomes increasingly difficult to breach.

      Modern sensor technologies play a crucial role in perimeter security. Advanced systems now incorporate thermal imaging, laser detection, fiber optic sensing, and radar technology. These sensors provide continuous monitoring and can detect potential threats under various environmental conditions.

      Artificial intelligence and machine learning have revolutionized perimeter security by enabling more accurate threat detection and reducing false alarms. These systems can distinguish between genuine security threats and harmless activities, improving operational efficiency.

      The integration of drone technology has added a new dimension to perimeter security. Autonomous drones can patrol large areas, provide aerial surveillance, and respond quickly to potential security breaches. This capability is particularly valuable for facilities with extensive perimeters.

      Communication and response systems are equally important components of perimeter security. Modern systems enable rapid information sharing and coordination between security personnel, ensuring quick and effective responses to security incidents.`,
      author: 'Michael Okonkwo',
      date: 'March 10, 2025',
      image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'iot-defense',
      title: 'Integration of IoT in Defense Systems',
      excerpt: 'How Internet of Things technology is enhancing security system capabilities and enabling smart facility management.',
      content: `The Internet of Things (IoT) is revolutionizing defense systems by creating interconnected networks of smart devices that enhance security, improve monitoring capabilities, and enable more efficient facility management. This integration represents a significant advancement in modern security infrastructure.

      IoT devices in defense systems range from smart sensors and cameras to automated access control systems and environmental monitors. These devices work together to create a comprehensive security ecosystem that provides real-time monitoring and response capabilities.

      One of the key advantages of IoT integration is the ability to collect and analyze vast amounts of data in real-time. This capability enables better decision-making and allows security systems to adapt to changing conditions and emerging threats automatically.

      Smart sensors and actuators form the backbone of IoT-enabled defense systems. These devices can detect various types of threats, from unauthorized access attempts to environmental hazards, and trigger appropriate responses automatically.

      The integration of IoT technology also enables predictive maintenance of security systems. By monitoring system performance and component health, organizations can address potential issues before they lead to system failures or security vulnerabilities.

      However, the implementation of IoT in defense systems also requires careful consideration of cybersecurity. As these systems become more connected, protecting them from cyber threats becomes increasingly important.`,
      author: 'David Park',
      date: 'March 5, 2025',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800'
    }
  ];

  const selectedPostData = posts.find(post => post.id === selectedPost);

  if (selectedPost && selectedPostData) {
    return (
      <BlogPost
        title={selectedPostData.title}
        content={selectedPostData.content}
        author={selectedPostData.author}
        date={selectedPostData.date}
        image={selectedPostData.image}
        onBack={() => setSelectedPost(null)}
      />
    );
  }

  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Latest Insights</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group rounded-lg overflow-hidden bg-black/40 backdrop-blur-sm border border-[#EDAF3D]/20"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                <button
                  onClick={() => setSelectedPost(post.id)}
                  className="inline-flex items-center text-[#EDAF3D] hover:text-[#EDAF3D]/80 transition-colors"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}