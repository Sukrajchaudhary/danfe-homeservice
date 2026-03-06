import api from "@/lib/api";
import type { Trip, ApiResponse, PaginatedResponse } from "@/types/api";

export const tripService = {
      async getAllTrips(
            page = 1,
            limit = 10
      ): Promise<{ docs: Trip[]; totalDocs: number; totalPages: number }> {
            const response = await api.get<PaginatedResponse<Trip>>(`/trips?page=${page}&limit=${limit}`);
            return response.data;
      },

      async getFeaturedTrips(): Promise<Trip[]> {
            const response = await api.get<ApiResponse<Trip[]>>("/trips/featured");
            return response.data;
      },

      async getTripsByCategory(categoryId: string): Promise<Trip[]> {
            const response = await api.get<ApiResponse<Trip[]>>(`/trips/category/${categoryId}`);
            return response.data;
      },

      async getTripsByPriceRange(
            minPrice: number,
            maxPrice: number
      ): Promise<Trip[]> {
            const response = await api.get<ApiResponse<Trip[]>>(
                  `/trips/price-range?minPrice=${minPrice}&maxPrice=${maxPrice}`
            );
            return response.data;
      },

      async getTripBySlug(slug: string): Promise<Trip> {
            const response = await api.get<ApiResponse<Trip>>(`/trips/slug/${slug}`);
            return response.data;
      },

      async getTripById(tripId: string): Promise<Trip> {
            const response = await api.get<ApiResponse<Trip>>(`/trips/${tripId}`);
            return response.data;
      },
};
