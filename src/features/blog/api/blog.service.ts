import api from "@/lib/api";
import type { Blog, ApiResponse, PaginatedResponse } from "@/types/api";

export const blogService = {
      async getAllBlogs(
            page = 1,
            limit = 10
      ): Promise<{ docs: Blog[]; totalDocs: number; totalPages: number }> {
            const response = await api.get<PaginatedResponse<Blog>>(`/blogs?page=${page}&limit=${limit}`);
            return response.data;
      },

      async getBlogById(blogId: string): Promise<Blog> {
            const response = await api.get<ApiResponse<Blog>>(`/blogs/${blogId}`);
            return response.data;
      },

      async getBlogBySlug(slug: string): Promise<Blog> {
            const response = await api.get<ApiResponse<Blog>>(`/blogs/slug/${slug}`);
            return response.data;
      },

      async likeBlog(blogId: string): Promise<void> {
            await api.post(`/blogs/${blogId}/like`);
      },

      async unlikeBlog(blogId: string): Promise<void> {
            await api.delete(`/blogs/${blogId}/like`);
      },

      async getLikedUsers(blogId: string): Promise<{ users: string[] }> {
            const response = await api.get<ApiResponse<{ users: string[] }>>(`/blogs/${blogId}/likes`);
            return response.data;
      },

      async getMyLikedBlogs(): Promise<Blog[]> {
            const response = await api.get<ApiResponse<Blog[]>>("/blogs/likes/my-likes");
            return response.data;
      },
};

export const blogLikeService = {
      async likeBlog(blogId: string): Promise<void> {
            await api.post(`/blog-likes/${blogId}/like`);
      },

      async unlikeBlog(blogId: string): Promise<void> {
            await api.delete(`/blog-likes/${blogId}/like`);
      },

      async getMyLikedBlogs(): Promise<Blog[]> {
            const response = await api.get<ApiResponse<Blog[]>>("/blog-likes/likes/my-likes");
            return response.data;
      },
};
