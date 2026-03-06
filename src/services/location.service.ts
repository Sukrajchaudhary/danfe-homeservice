import api from "@/lib/api";
import type {
      Location,
      CreateLocationPayload,
      UpdateLocationPayload,
} from "@/types/api";

export const locationService = {
      async createLocation(data: CreateLocationPayload): Promise<Location> {
            const response = await api.post("/locations", data);
            return (response as unknown as { data: Location }).data;
      },

      async getMyLocations(): Promise<Location[]> {
            const response = await api.get("/locations");
            return (response as unknown as { data: Location[] }).data;
      },

      async getLocationById(locationId: string): Promise<Location> {
            const response = await api.get(`/locations/${locationId}`);
            return (response as unknown as { data: Location }).data;
      },

      async updateLocation(
            locationId: string,
            data: UpdateLocationPayload
      ): Promise<Location> {
            const response = await api.put(`/locations/${locationId}`, data);
            return (response as unknown as { data: Location }).data;
      },

      async deleteLocation(locationId: string): Promise<void> {
            await api.delete(`/locations/${locationId}`);
      },
};
