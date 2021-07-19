<script lang="ts">
  import Nav from '../components/Nav.svelte';
  import Footer from '../components/Footer.svelte';

  export let segment: string;
</script>

<div id="container">
  <Nav {segment} />

  <main>
    <slot />
  </main>

  <Footer />
</div>
