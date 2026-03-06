import api from "@/lib/api";
import type { Blog } from "@/types/api";

export const blogService = {
      async getAllBlogs(
            page = 1,
            limit = 10
      ): Promise<{ docs: Blog[]; totalDocs: number; totalPages: number }> {
            const response = await api.get(`/blogs?page=${page}&limit=${limit}`);
            return (
                  response as unknown as {
                        data: { docs: Blog[]; totalDocs: number; totalPages: number };
                  }
            ).data;
      },

      async getBlogById(blogId: string): Promise<Blog> {
            const response = await api.get(`/blogs/${blogId}`);
            return (response as unknown as { data: Blog }).data;
      },

      async getBlogBySlug(slug: string): Promise<Blog> {
            const response = await api.get(`/blogs/slug/${slug}`);
            return (response as unknown as { data: Blog }).data;
      },

      async likeBlog(blogId: string): Promise<void> {
            await api.post(`/blogs/${blogId}/like`);
      },

      async unlikeBlog(blogId: string): Promise<void> {
            await api.delete(`/blogs/${blogId}/like`);
      },

      async getLikedUsers(blogId: string): Promise<{ users: string[] }> {
            const response = await api.get(`/blogs/${blogId}/likes`);
            return response as unknown as { users: string[] };
      },

      async getMyLikedBlogs(): Promise<Blog[]> {
            const response = await api.get("/blogs/likes/my-likes");
            return (response as unknown as { data: Blog[] }).data;
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
            const response = await api.get("/blog-likes/likes/my-likes");
            return (response as unknown as { data: Blog[] }).data;
      },
};
