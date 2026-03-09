"use client";

import Image from "next/image";
import { Star, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export interface ServiceItem {
      image: string;
      title: string;
      provider: string;
      rating: number;
      reviewCount: number;
      price: number;
      unit: string;
      description: string;
      isVerified?: boolean;
}

interface ServiceCardProps extends ServiceItem {
      className?: string;
}

export function ServiceCard({
      image,
      title,
      provider,
      rating,
      reviewCount,
      price,
      unit,
      description,
      isVerified = true,
      className = "",
}: ServiceCardProps) {
      return (
            <Card className={`overflow-hidden border-none shadow-none group cursor-pointer transition-all bg-transparent ${className}`}>
                  <div className="relative aspect-4/3 rounded-2xl overflow-hidden mb-4 border border-slate-100 shadow-sm">

                        <Image
                              src={image}
                              alt={title}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                  </div>
                  <CardContent className="p-0 space-y-2">
                        <div className="flex flex-col gap-1">
                              <div className="flex items-center justify-between gap-2">
                                    <h3 className="font-bold text-lg text-slate-900 group-hover:text-[#006767] transition-colors line-clamp-1 leading-snug">
                                          {title}
                                    </h3>
                              </div>

                              <div className="flex items-center justify-between text-sm">
                                    <div className="flex items-center gap-1.5 min-w-0">
                                          <span className="font-medium text-slate-700 truncate">{provider}</span>
                                          {isVerified && (
                                                <div className="flex items-center justify-center bg-[#f97316] rounded-full p-0.5">
                                                      <CheckCircle2 className="h-2.5 w-2.5 text-white" />
                                                </div>
                                          )}
                                    </div>
                                    <div className="flex items-center gap-1 shrink-0">
                                          <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                                          <span className="font-bold text-slate-900">{rating.toFixed(1)}</span>
                                          <span className="text-slate-400">({reviewCount})</span>
                                    </div>
                              </div>

                              <div className="mt-1 flex items-baseline gap-1">
                                    <span className="text-[#f97316] font-bold text-xl">Rs. {price.toLocaleString()}</span>
                                    <span className="text-slate-500 text-sm font-medium"> / {unit}</span>
                              </div>

                              <p className="text-sm text-slate-500 line-clamp-2 leading-relaxed mt-1 font-normal">
                                    {description}
                              </p>
                        </div>
                  </CardContent>
            </Card>
      );
}
