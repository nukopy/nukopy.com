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

<style lang="scss" global>
  @import '../styles/global.scss';
  @import '../styles/variables.scss';
  @import '../styles/theme.scss';

  /* for fixed-footer*/
  #container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    padding: 1em 2em;
    box-sizing: border-box;
  }

  footer {
    margin-top: auto;
    margin-bottom: 1em;
  }
</style>
