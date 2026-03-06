import api from "@/lib/api";
import type { Comment, CreateCommentPayload } from "@/types/api";

export const commentService = {
      async getCommentsByBlog(
            blogId: string,
            page = 1,
            limit = 10
      ): Promise<{ docs: Comment[]; totalDocs: number; totalPages: number }> {
            const response = await api.get(
                  `/comments/blog/${blogId}?page=${page}&limit=${limit}`
            );
            return (
                  response as unknown as {
                        data: { docs: Comment[]; totalDocs: number; totalPages: number };
                  }
            ).data;
      },

      async getCommentById(commentId: string): Promise<Comment> {
            const response = await api.get(`/comments/${commentId}`);
            return (response as unknown as { data: Comment }).data;
      },

      async createComment(data: CreateCommentPayload): Promise<Comment> {
            const response = await api.post("/comments", data);
            return (response as unknown as { data: Comment }).data;
      },

      async updateComment(
            commentId: string,
            content: string
      ): Promise<Comment> {
            const response = await api.put(`/comments/${commentId}`, { content });
            return (response as unknown as { data: Comment }).data;
      },

      async deleteComment(commentId: string): Promise<void> {
            await api.delete(`/comments/${commentId}`);
      },
};
