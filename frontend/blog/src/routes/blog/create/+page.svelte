<script lang="ts">
  import type { PageProps } from './$types';

  let { data }: PageProps = $props();
</script>

{#if data.jwt}
<div class="container">
  <form method="POST">
    <input type="text" name="title" placeholder="Title" required>
    <textarea name="text" placeholder="Write your blog here..." rows=30></textarea>
    <button type="submit">Submit</button>
  </form>
</div>
{:else}
<p>Login first!</p>
{/if}
