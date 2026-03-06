
import { z } from "zod";

export const loginSchema = z.object({
      email: z
            .string()
            .min(1, { message: "Email is required" })
            .email({ message: "Invalid email address" }),
      password: z
            .string()
            .min(1, { message: "Password is required" })
            .min(6, { message: "Password must be at least 6 characters" }),
});


export const registerSchema = z
      .object({
            username: z
                  .string()
                  .min(3, { message: "Username must be at least 3 characters" })
                  .max(30, { message: "Username must be less than 30 characters" }),
            fullName: z.string().min(1, { message: "Full name is required" }),
            email: z
                  .string()
                  .min(1, { message: "Email is required" })
                  .email({ message: "Invalid email address" }),
            mobileNumber: z
                  .string()
                  .min(1, { message: "Mobile number is required" })
                  .regex(/^\+?[1-9]\d{1,14}$/, { message: "Invalid mobile number format" }),
            password: z
                  .string()
                  .min(1, { message: "Password is required" })
                  .min(8, { message: "Password must be at least 8 characters" })
                  .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
                  .regex(/[0-9]/, { message: "Password must contain at least one number" }),
            confirmPassword: z.string().min(1, { message: "Confirm Password is required" }),
      })
      .refine((data) => data.password === data.confirmPassword, {
            message: "Passwords do not match",
            path: ["confirmPassword"],
      });

export type LoginFormValues = z.infer<typeof loginSchema>;
export type RegisterFormValues = z.infer<typeof registerSchema>;


