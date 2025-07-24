<script lang="ts">
  import type { PageProps } from './$types';

  let { data }: PageProps = $props();
</script>

{#each data.blogs.data as blog}
<div class="container">
  <a href="/blog/{blog.id}"><h1>{blog.title}</h1></a>
  <div>{@html blog.summary}</div>
  <br><br>
</div>
{/each}

<p>Blog count: {data.blogs.total_count}</p>
