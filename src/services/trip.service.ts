import api from "@/lib/api";
import type { Trip } from "@/types/api";

export const tripService = {
      async getAllTrips(
            page = 1,
            limit = 10
      ): Promise<{ docs: Trip[]; totalDocs: number; totalPages: number }> {
            const response = await api.get(`/trips?page=${page}&limit=${limit}`);
            return (
                  response as unknown as {
                        data: { docs: Trip[]; totalDocs: number; totalPages: number };
                  }
            ).data;
      },

      async getFeaturedTrips(): Promise<Trip[]> {
            const response = await api.get("/trips/featured");
            return (response as unknown as { data: Trip[] }).data;
      },

      async getTripsByCategory(categoryId: string): Promise<Trip[]> {
            const response = await api.get(`/trips/category/${categoryId}`);
            return (response as unknown as { data: Trip[] }).data;
      },

      async getTripsByPriceRange(
            minPrice: number,
            maxPrice: number
      ): Promise<Trip[]> {
            const response = await api.get(
                  `/trips/price-range?minPrice=${minPrice}&maxPrice=${maxPrice}`
            );
            return (response as unknown as { data: Trip[] }).data;
      },

      async getTripBySlug(slug: string): Promise<Trip> {
            const response = await api.get(`/trips/slug/${slug}`);
            return (response as unknown as { data: Trip }).data;
      },

      async getTripById(tripId: string): Promise<Trip> {
            const response = await api.get(`/trips/${tripId}`);
            return (response as unknown as { data: Trip }).data;
      },
};
