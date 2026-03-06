import api from "@/lib/api";
import type { Notification } from "@/types/api";

export const notificationService = {
      async getMyNotifications(): Promise<Notification[]> {
            const response = await api.get("/notifications/me");
            return (response as unknown as { data: Notification[] }).data;
      },

      async getUnreadCount(): Promise<{ count: number }> {
            const response = await api.get("/notifications/me/unread-count");
            return (response as unknown as { data: { count: number } }).data;
      },

      async markAllAsRead(): Promise<void> {
            await api.put("/notifications/me/read-all");
      },

      async markAsRead(notificationId: string): Promise<void> {
            await api.put(`/notifications/me/${notificationId}/read`);
      },

      async deleteNotification(notificationId: string): Promise<void> {
            await api.delete(`/notifications/me/${notificationId}`);
      },
};
