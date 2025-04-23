import React from 'react';
import ReactPlayer from 'react-player';
import { Play } from 'lucide-react';

interface Video {
  title: string;
  description: string;
  thumbnail: string;
  url: string;
}

export function VideoSection() {
  const videos: Video[] = [
    {
      title: 'Drone Surveillance in Action',
      description: '',
      thumbnail: '/img/d1.jpg',
      url: 'https://www.youtube.com/watch?v=NDp2cHv2xPs'
    },
    {
      title: 'Drone Applications',
      description: '',
      thumbnail: '/img/d2.jpg',
      url: 'https://www.youtube.com/watch?v=xlZXMYQVJG0'
    },
    {
      title: 'Intelligent flights',
      description: '',
      thumbnail: '/img/d3.jpg',
      url: 'https://www.youtube.com/watch?v=XDiWQps-Rxc'
    }
  ];

  const [playing, setPlaying] = React.useState<string | null>(null);

  return (
    <section id="videos" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Product Videos</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div key={video.title} className="relative group">
              <div className="relative overflow-hidden rounded-lg">
                {playing === video.title ? (
                  <div className="aspect-video">
                    <ReactPlayer
                      url={video.url}
                      width="100%"
                      height="100%"
                      playing
                      controls
                    />
                  </div>
                ) : (
                  <>
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full aspect-video object-cover rounded-lg transform transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button
                        onClick={() => setPlaying(video.title)}
                        className="bg-[#EDAF3D] p-4 rounded-full transform transition-transform duration-300 hover:scale-110"
                      >
                        <Play className="w-8 h-8 text-black" />
                      </button>
                    </div>
                  </>
                )}
              </div>
              <h3 className="text-xl font-bold mt-4">{video.title}</h3>
              <p className="text-gray-400">{video.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}