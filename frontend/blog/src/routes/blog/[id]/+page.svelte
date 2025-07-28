<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<h1>{data.blogs.title}</h1> by <i>{data.blogs.author}</i>
<div>{@html data.blogs.text}</div>
