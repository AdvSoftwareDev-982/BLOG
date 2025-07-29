import type { Actions } from "./$types";
import { backendUrl } from '$lib/config';

export const actions = {
  default: async ({ cookies, request }) => {
    const data = await request.formData();
    const email = data.get("email");
    const password = data.get("password");

    const res = await fetch(`${backendUrl}/auth/jwt/login`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        username: email,
        password: password,
      }).toString(),
    });

    const token = await res.json();
    cookies.set("jwt", token.access_token, { path: "/", secure: false });

    return { success: true };
  },
} satisfies Actions;
