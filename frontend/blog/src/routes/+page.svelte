<script lang="ts">
  import type { PageProps } from './$types';

  let { data }: PageProps = $props();
</script>

<br>
{#each data.blogs.data as blog}
<a href="/blog/{blog.id}"><h1>{blog.title}</h1></a>
<div>{@html blog.text}</div>
<br><br><br>
{/each}

<p>Blog count: {data.blogs.total_count}</p>
