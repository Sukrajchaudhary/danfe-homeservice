"use client";

import { useQuery } from "@tanstack/react-query";
import { tripService } from "@/services/trip.service";

export function useTrips(page = 1, limit = 10) {
      return useQuery({
            queryKey: ["trips", page, limit],
            queryFn: () => tripService.getAllTrips(page, limit),
      });
}

export function useFeaturedTrips() {
      return useQuery({
            queryKey: ["trips", "featured"],
            queryFn: () => tripService.getFeaturedTrips(),
      });
}

export function useTripsByCategory(categoryId: string) {
      return useQuery({
            queryKey: ["trips", "category", categoryId],
            queryFn: () => tripService.getTripsByCategory(categoryId),
            enabled: !!categoryId,
      });
}

export function useTripsByPriceRange(minPrice: number, maxPrice: number) {
      return useQuery({
            queryKey: ["trips", "priceRange", minPrice, maxPrice],
            queryFn: () => tripService.getTripsByPriceRange(minPrice, maxPrice),
      });
}

export function useTripBySlug(slug: string) {
      return useQuery({
            queryKey: ["trip", "slug", slug],
            queryFn: () => tripService.getTripBySlug(slug),
            enabled: !!slug,
      });
}

export function useTripById(tripId: string) {
      return useQuery({
            queryKey: ["trip", tripId],
            queryFn: () => tripService.getTripById(tripId),
            enabled: !!tripId,
      });
}
