import api from "@/lib/api";
import type {
      User,
      Certificate,
      PortfolioProject,
      UpdateUserPayload,
      UpdateProfilePhotosPayload,
      UpdateAboutMePayload,
      AddCertificatePayload,
      AddPortfolioPayload,
      UpdateAddressPayload,
      ChangePasswordPayload,
      ApiResponse,
} from "@/types/api";

export const userService = {
      async getMyProfile(): Promise<User> {
            const response = await api.get<ApiResponse<User>>("/users/me/profile");
            return response.data;
      },

      async getUserById(userId: string): Promise<User> {
            const response = await api.get<ApiResponse<User>>(`/users/${userId}`);
            return response.data;
      },

      async updateUser(userId: string, data: UpdateUserPayload): Promise<User> {
            const response = await api.put<ApiResponse<User>>(`/users/${userId}`, data);
            return response.data;
      },

      async updateProfilePhotos(
            userId: string,
            data: UpdateProfilePhotosPayload
      ): Promise<User> {
            const response = await api.put<ApiResponse<User>>(`/users/${userId}/profile-photos`, data);
            return response.data;
      },

      async updateAboutMe(
            userId: string,
            data: UpdateAboutMePayload
      ): Promise<User> {
            const response = await api.put<ApiResponse<User>>(`/users/${userId}/about-me`, data);
            return response.data;
      },

      async addCertificate(
            userId: string,
            data: AddCertificatePayload
      ): Promise<Certificate> {
            const response = await api.post<ApiResponse<Certificate>>(`/users/${userId}/certificates`, data);
            return response.data;
      },

      async removeCertificate(
            userId: string,
            certificateId: string
      ): Promise<void> {
            await api.delete(`/users/${userId}/certificates/${certificateId}`);
      },

      async addPortfolioProject(
            userId: string,
            data: AddPortfolioPayload
      ): Promise<PortfolioProject> {
            const response = await api.post<ApiResponse<PortfolioProject>>(`/users/${userId}/portfolio`, data);
            return response.data;
      },

      async updatePortfolioProject(
            userId: string,
            projectId: string,
            data: Partial<AddPortfolioPayload>
      ): Promise<PortfolioProject> {
            const response = await api.put<ApiResponse<PortfolioProject>>(
                  `/users/${userId}/portfolio/${projectId}`,
                  data
            );
            return response.data;
      },

      async removePortfolioProject(
            userId: string,
            projectId: string
      ): Promise<void> {
            await api.delete(`/users/${userId}/portfolio/${projectId}`);
      },

      async updateAddress(
            userId: string,
            data: UpdateAddressPayload
      ): Promise<User> {
            const response = await api.put<ApiResponse<User>>(`/users/${userId}/address`, data);
            return response.data;
      },

      async getTrialStatus(
            userId: string
      ): Promise<{ isTrialActive: boolean; trialEndDate: string }> {
            const response = await api.get<ApiResponse<{ isTrialActive: boolean; trialEndDate: string }>>(
                  `/users/${userId}/trial-status`
            );
            return response.data;
      },

      async changePassword(
            userId: string,
            data: ChangePasswordPayload
      ): Promise<void> {
            await api.put(`/users/${userId}/change-password`, data);
      },
};
