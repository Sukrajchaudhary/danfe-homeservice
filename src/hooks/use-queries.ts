"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { queryService } from "@/services/query.service";
import { locationService } from "@/services/location.service";
import type {
      CreateQueryPayload,
      CreateLocationPayload,
      UpdateLocationPayload,
} from "@/types/api";

// Queries (Contact)
export function useCreateQuery() {
      return useMutation({
            mutationFn: (data: CreateQueryPayload) => queryService.createQuery(data),
      });
}

// Locations
export function useMyLocations() {
      return useQuery({
            queryKey: ["locations"],
            queryFn: () => locationService.getMyLocations(),
      });
}

export function useLocationById(locationId: string) {
      return useQuery({
            queryKey: ["location", locationId],
            queryFn: () => locationService.getLocationById(locationId),
            enabled: !!locationId,
      });
}

export function useCreateLocation() {
      const queryClient = useQueryClient();
      return useMutation({
            mutationFn: (data: CreateLocationPayload) =>
                  locationService.createLocation(data),
            onSuccess: () => {
                  queryClient.invalidateQueries({ queryKey: ["locations"] });
            },
      });
}

export function useUpdateLocation() {
      const queryClient = useQueryClient();
      return useMutation({
            mutationFn: ({
                  locationId,
                  data,
            }: {
                  locationId: string;
                  data: UpdateLocationPayload;
            }) => locationService.updateLocation(locationId, data),
            onSuccess: () => {
                  queryClient.invalidateQueries({ queryKey: ["locations"] });
            },
      });
}

export function useDeleteLocation() {
      const queryClient = useQueryClient();
      return useMutation({
            mutationFn: (locationId: string) =>
                  locationService.deleteLocation(locationId),
            onSuccess: () => {
                  queryClient.invalidateQueries({ queryKey: ["locations"] });
            },
      });
}
