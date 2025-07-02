
import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ params }) => {
  const res = await fetch("http://172.17.0.1:8080/blog/" + params.id);
  const blogs = await res.json();
  return { blogs };
};
