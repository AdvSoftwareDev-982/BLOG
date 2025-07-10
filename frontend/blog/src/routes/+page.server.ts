import type { PageLoad } from "./$types";
import { backendUrl } from '$lib/config';

export const load: PageLoad = async ({}) => {
  const res = await fetch(`${backendUrl}/blog`);
  const blogs = await res.json();

  return { blogs };
};
