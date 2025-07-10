import type { Actions } from "./$types";
import { backendUrl } from '$lib/config';

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const email = data.get("email");
    const password = data.get("password");

    const res = await fetch(`${backendUrl}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    const user = await res.json();

    return { user };
  },
} satisfies Actions;
