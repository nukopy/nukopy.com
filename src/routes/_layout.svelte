<script lang="ts">
  import { onMount } from 'svelte';
  import Nav from '../components/Nav.svelte';
  import Footer from '../components/Footer.svelte';

  export let segment: string;

  const setFillHeight = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    // re-calculate when screen size change
    window.addEventListener('resize', setFillHeight);
  };

  onMount(() => {
    setFillHeight();
  });
</script>

<div id="container">
  <Nav {segment} />

  <main>
    <slot />
  </main>

  <Footer />
</div>

<style lang="scss" global>
  @import '../styles/global.scss';
  @import '../styles/variables.scss';
  @import '../styles/theme.scss';

  #container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    min-height: calc(var(--vh, 1vh) * 100);
  }
</style>
