import api from "@/lib/api";
import type { Comment, CreateCommentPayload, ApiResponse, PaginatedResponse } from "@/types/api";

export const commentService = {
      async getCommentsByBlog(
            blogId: string,
            page = 1,
            limit = 10
      ): Promise<{ docs: Comment[]; totalDocs: number; totalPages: number }> {
            const response = await api.get<PaginatedResponse<Comment>>(
                  `/comments/blog/${blogId}?page=${page}&limit=${limit}`
            );
            return response.data;
      },

      async getCommentById(commentId: string): Promise<Comment> {
            const response = await api.get<ApiResponse<Comment>>(`/comments/${commentId}`);
            return response.data;
      },

      async createComment(data: CreateCommentPayload): Promise<Comment> {
            const response = await api.post<ApiResponse<Comment>>("/comments", data);
            return response.data;
      },

      async updateComment(
            commentId: string,
            content: string
      ): Promise<Comment> {
            const response = await api.put<ApiResponse<Comment>>(`/comments/${commentId}`, { content });
            return response.data;
      },

      async deleteComment(commentId: string): Promise<void> {
            await api.delete(`/comments/${commentId}`);
      },
};
