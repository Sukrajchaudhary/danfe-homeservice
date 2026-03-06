
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const API_BASE_URL =
      process.env.NEXT_PUBLIC_API_URL ||
      "https://api.payitforwardjpn.com/api/v1/user";

export async function POST(request: Request) {
      try {
            const body = await request.json();

            const response = await fetch(`${API_BASE_URL}/users/login`, {
                  method: "POST",
                  headers: {
                        "Content-Type": "application/json",
                  },
                  body: JSON.stringify(body),
            });

            const data = await response.json();

            if (!response.ok) {
                  return NextResponse.json(data, { status: response.status });
            }

            if (data.success && data.token) {
                  const cookieStore = await cookies();

                  // Calculate expiration
                  // API returns "expiresAt": "2026-02-17T17:24:38.000Z"
                  let expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // Default 7 days
                  if (data.expiresAt) {
                        expires = new Date(data.expiresAt);
                  }

                  cookieStore.set("token", data.token, {
                        httpOnly: true,
                        secure: process.env.NODE_ENV === "production",
                        sameSite: "lax",
                        path: "/",
                        expires: expires,
                  });
            }

            return NextResponse.json(data, { status: 200 });
      } catch (error: any) {
            return NextResponse.json(
                  { success: false, message: error.message || "Internal Server Error" },
                  { status: 500 }
            );
      }
}
