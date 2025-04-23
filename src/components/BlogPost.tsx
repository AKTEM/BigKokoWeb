import React from 'react';
import { ArrowLeft, Calendar, User, Share2 } from 'lucide-react';

interface BlogPostProps {
  title: string;
  content: string;
  author: string;
  date: string;
  image: string;
  onBack: () => void;
}

export function BlogPost({ title, content, author, date, image, onBack }: BlogPostProps) {
  return (
    <article className="py-20">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center text-[#EDAF3D] hover:text-[#EDAF3D]/80 mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Blog
        </button>

        {/* Hero Image */}
        <div className="relative aspect-[21/9] mb-12">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Article Header */}
        <div className="max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl font-bold mb-6">{title}</h1>
          <div className="flex items-center gap-6 text-gray-400 mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <span>{author}</span>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="max-w-4xl mx-auto prose prose-lg prose-invert">
          {content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-6 text-gray-300 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Share Section */}
        <div className="max-w-4xl mx-auto mt-12 pt-8 border-t border-gray-800">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Share2 className="w-5 h-5 text-[#EDAF3D]" />
              <span className="text-gray-400">Share this article</span>
            </div>
            <div className="flex gap-4">
              <button className="p-2 rounded-full hover:bg-[#EDAF3D]/10 transition-colors">
                <img src="/img/twitter.svg" alt="Twitter" className="w-5 h-5" />
              </button>
              <button className="p-2 rounded-full hover:bg-[#EDAF3D]/10 transition-colors">
                <img src="/img/linkedin.svg" alt="LinkedIn" className="w-5 h-5" />
              </button>
              <button className="p-2 rounded-full hover:bg-[#EDAF3D]/10 transition-colors">
                <img src="/img/facebook.svg" alt="Facebook" className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}