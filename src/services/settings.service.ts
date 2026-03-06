import api from "@/lib/api";
import type {
      Settings,
      Logo,
      ContactInfo,
      SocialMedia,
} from "@/types/api";

export const settingsService = {
      async getAllSettings(): Promise<Settings> {
            const response = await api.get("/settings");
            return (response as unknown as { data: Settings }).data;
      },

      async getCompanyLogos(): Promise<Logo[]> {
            const response = await api.get("/settings/logos");
            return (response as unknown as { data: Logo[] }).data;
      },

      async getLogoById(logoId: string): Promise<Logo> {
            const response = await api.get(`/settings/logos/${logoId}`);
            return (response as unknown as { data: Logo }).data;
      },

      async getContactInfo(): Promise<ContactInfo> {
            const response = await api.get("/settings/contact");
            return (response as unknown as { data: ContactInfo }).data;
      },

      async getSocialMediaLinks(): Promise<SocialMedia[]> {
            const response = await api.get("/settings/social-media");
            return (response as unknown as { data: SocialMedia[] }).data;
      },

      async getSocialMediaLinkById(socialMediaId: string): Promise<SocialMedia> {
            const response = await api.get(
                  `/settings/social-media/${socialMediaId}`
            );
            return (response as unknown as { data: SocialMedia }).data;
      },
};
