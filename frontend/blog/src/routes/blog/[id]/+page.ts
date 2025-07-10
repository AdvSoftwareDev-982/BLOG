import type { PageLoad } from "./$types";
import { backendUrl } from '$lib/config';

export const load: PageLoad = async ({ params }) => {
  const res = await fetch(`${backendUrl}/blog/` + params.id);
  const blogs = await res.json();
  return { blogs };
};
