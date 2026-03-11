"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface BookingSidebarProps {
  price: number;
  unit: string;
}

const DAYS = ["Wed", "Thu", "Fri", "Sat", "Sun", "Mon", "Tue"];
const DATES = [11, 12, 13, 14, 15, 16, 17];
const TIMES = [
  "8AM - 9AM", "9AM - 10AM", "10AM - 11AM",
  "11AM - 12PM", "12PM - 1PM", "1PM - 2PM",
  "2PM - 3PM", "3PM - 4PM", "4PM - 5PM",
  "5PM - 6PM", "6PM - 7PM", "7PM - 8PM"
];

export function BookingSidebar({ price, unit }: BookingSidebarProps) {
  const [selectedDate, setSelectedDate] = useState(0);
  const [selectedTime, setSelectedTime] = useState("8AM - 9AM");

  return (
    <div className="sticky top-24 bg-white rounded-sm border border-gray-100 shadow-xs p-4  space-y-8">
      <h3 className="text-lg font-bold text-gray-900 mb-6">Book a Service</h3>

      <div className="flex items-baseline justify-between mb-2">
        <span className="text-gray-600 font-medium">Price</span>
        <div className="text-right">
          <span className="text-base font-semibold text-gray-900">Rs. {price.toFixed(2)}</span>
          <span className="text-gray-500 ml-1">/ {unit}</span>
        </div>
      </div>

      <div className="bg-orange-50 border border-orange-100 rounded-sm p-5 flex gap-4">
        <span className="text-orange-600 font-black text-xl">*</span>
        <div className="space-y-1">
          <p className="text-orange-600 font-bold text-sm">Price Description</p>
          <p className="text-orange-600/80 text-sm leading-relaxed">
            This is an per unit {unit.toLowerCase()}. Final amount will be determined according to workload.
          </p>
        </div>
      </div>

      {/* Date Picker */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label className="text-lg font-bold text-gray-900">Select Date</label>
          <span className="text-gray-500 font-medium">Wed, Mar 11</span>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none">
          {DAYS.map((day, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedDate(idx)}
              className={`flex flex-col items-center justify-center min-w-[56px] h-16 rounded-md border transition-all ${selectedDate === idx
                ? 'border-orange-500 bg-orange-50 text-orange-600'
                : 'border-gray-100 text-gray-600 hover:border-gray-200'
                }`}
            >
              <span className="text-[10px] font-bold uppercase tracking-wider">{day}</span>
              <span className="text-base font-black">{DATES[idx]}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Time Selection */}
      <div className="space-y-4">
        <div className="space-y-2">
          <label className="text-lg font-bold text-gray-900 block">Choose a time period</label>
          <p className="text-xs text-gray-500 font-medium">Team will arrive within the selected time</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {TIMES.map((time, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedTime(time)}
              className={`py-2.5 px-2 rounded-full text-[10px] font-bold border transition-all ${selectedTime === time
                ? 'bg-orange-500 border-orange-500 text-white'
                : 'bg-gray-50/50 border-gray-100 hover:border-gray-300'
                }`}
            >
              {time}
            </button>
          ))}
        </div>
      </div>

      {/* Promo Code */}
      <div className="space-y-2">
        <label className="text-lg font-medium text-gray-900 block">Promo Code</label>
        <div className="flex gap-2">
          <Input
            placeholder="eg: FREE20"
            className=" border-gray-100 h-11 rounded-sm focus-visible:ring-orange-500"
          />
          <Button className="h-11 px-6 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-sm shadow-lg shadow-orange-600/20">
            APPLY
          </Button>
        </div>
      </div>

      <Button className="w-full h-11 bg-orange-600 hover:bg-orange-700 text-white text-lg font-black rounded-sm shadow-sm shadow-orange-600/30 transition-transform active:scale-[0.98]">
        Book Now
      </Button>
    </div>
  );
}
