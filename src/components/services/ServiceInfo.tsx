"use client";

import { CheckCircle2, Share2, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServiceInfoProps {
  description: string;
  price: number;
  unit: string;
  features?: string[];
}

export function ServiceInfo({ description, price, unit, features }: ServiceInfoProps) {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div className="space-y-4">
          <p className="text-sm md:text-lg font-semibold text-gray-900 leading-relaxed">
            {description}
          </p>
          <p className="flex items-center gap-2 text-base text-orange-600 font-semibold">
            👉 Now at just Rs. {price.toFixed(0)} per {unit.toLowerCase()}.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="icon" className="rounded-full shadow-sm">
            <Share2 className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full shadow-sm text-red-500 hover:text-red-600 hover:bg-red-50 border-red-100">
            <Heart className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="grid gap-3">
        {features?.map((feature, idx) => (
          <div key={idx} className="flex items-center gap-3 text-gray-700">
            <div className="shrink-0 bg-green-500 rounded-full p-1">
              <CheckCircle2 className="w-4 h-4 text-white" />
            </div>
            <span className="font-medium text-sm">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
