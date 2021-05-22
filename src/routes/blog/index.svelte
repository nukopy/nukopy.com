<script context="module" lang="ts">
	export function preload() {
		return this.fetch(`blog.json`)
		    .then(res => res.json())
			.then(res => {
				// console.log(res);
				return res;
			});
	}
</script>

<script lang="ts">
	export let contents: {
		id: string,
		title: string,
		tags: string[],
		html: HTMLElement
	}[];
</script>

<style>
	ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
	}
</style>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<h1>Recent posts</h1>

<ul>
	{#each contents as content}
		<!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
		<li><a rel="prefetch" href="blog/{content.id}">{content.title}</a></li>
	{/each}
</ul>
