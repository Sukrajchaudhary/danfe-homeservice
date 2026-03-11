"use client";

import { Star } from "lucide-react";

interface ServiceReviewsProps {
  rating: number;
  reviewCount: number;
}

export function ServiceReviews({ rating, reviewCount }: ServiceReviewsProps) {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-gray-900">
          Reviews <span className="text-gray-400 font-normal text-base">({reviewCount} reviews for this service)</span>
        </h3>
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200'}`} 
              />
            ))}
          </div>
          <span className="font-bold text-lg">{rating.toFixed(1)}</span>
        </div>
      </div>

      <div className="max-w-md space-y-3">
        {[5, 4, 3, 2, 1].map((stars) => (
          <div key={stars} className="flex items-center gap-4">
            <span className="text-sm font-medium text-gray-600 w-12">{stars} Stars</span>
            <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-emerald-500 rounded-full"
                style={{ width: `0%` }}
              />
            </div>
            <span className="text-sm font-medium text-gray-400 w-8">(0)</span>
          </div>
        ))}
      </div>
    </div>
  );
}
