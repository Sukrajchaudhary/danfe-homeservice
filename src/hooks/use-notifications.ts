"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { notificationService } from "@/services/notification.service";

export function useNotifications() {
      return useQuery({
            queryKey: ["notifications"],
            queryFn: () => notificationService.getMyNotifications(),
      });
}

export function useUnreadCount() {
      return useQuery({
            queryKey: ["notifications", "unreadCount"],
            queryFn: () => notificationService.getUnreadCount(),
            refetchInterval: 30000,
      });
}

export function useMarkAllAsRead() {
      const queryClient = useQueryClient();
      return useMutation({
            mutationFn: () => notificationService.markAllAsRead(),
            onSuccess: () => {
                  queryClient.invalidateQueries({ queryKey: ["notifications"] });
            },
      });
}

export function useMarkAsRead() {
      const queryClient = useQueryClient();
      return useMutation({
            mutationFn: (notificationId: string) =>
                  notificationService.markAsRead(notificationId),
            onSuccess: () => {
                  queryClient.invalidateQueries({ queryKey: ["notifications"] });
            },
      });
}

export function useDeleteNotification() {
      const queryClient = useQueryClient();
      return useMutation({
            mutationFn: (notificationId: string) =>
                  notificationService.deleteNotification(notificationId),
            onSuccess: () => {
                  queryClient.invalidateQueries({ queryKey: ["notifications"] });
            },
      });
}
