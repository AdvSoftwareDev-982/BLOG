import type { PageLoad, Actions } from "./$types";
import { backendUrl } from '$lib/config';

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const title = data.get("title");
    const text = data.get("text");

    const res = await fetch(`${backendUrl}/blog`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: title,
        text: text,
      }),
    });

    const user = await res.json();

    return { user };
  },
} satisfies Actions;


export const load: PageLoad = async ({ cookies }) => {
  const jwt = cookies.get("jwt");

  return { jwt: jwt !== undefined };
};
