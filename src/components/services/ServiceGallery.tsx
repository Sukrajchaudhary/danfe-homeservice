"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ServiceGalleryProps {
  images?: string[];
  title: string;
}

export function ServiceGallery({ images, title }: ServiceGalleryProps) {
  const [activeImage, setActiveImage] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="relative aspect-video rounded-md overflow-hidden border border-gray-100 shadow-sm bg-gray-50 flex items-center justify-center text-gray-300">
        No image available
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="relative aspect-video rounded-md overflow-hidden group border border-gray-100 shadow-sm bg-gray-50">
        <Image
          src={images[activeImage]}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 hover:scale-105"
          priority
        />
        
        {/* Navigation Arrows */}
        {images.length > 1 && (
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={() => setActiveImage((prev) => (prev > 0 ? prev - 1 : images.length - 1))}
              className="p-2 rounded-full bg-white/90 shadow-lg text-gray-800 hover:bg-white transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => setActiveImage((prev) => (prev < images.length - 1 ? prev + 1 : 0))}
              className="p-2 rounded-full bg-white/90 shadow-lg text-gray-800 hover:bg-white transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        )}

        {/* Thumbnails Overlay */}
        {images.length > 1 && (
          <div className="absolute bottom-6 left-6 flex gap-3">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImage(idx)}
                className={`relative w-20 h-14 rounded-sm overflow-hidden border-2 transition-all ${
                  activeImage === idx ? 'border-white scale-110 shadow-xl' : 'border-transparent opacity-70'
                }`}
              >
                <Image src={img} alt="" fill className="object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
