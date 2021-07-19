<script>
  import successkid from 'images/successkid.jpg';
</script>

<svelte:head>
  <title>nukopy's dev</title>
</svelte:head>

<div id="welcome">
  <h1>Thanks for visiting nukopy's portfolio!</h1>
</div>

<!-- <figure>
  <img alt="Success Kid" src={successkid} />
  <figcaption>Have fun with Sapper!</figcaption>
</figure>
-->
<style>
  #welcome {
    display: flex;
    align-items: center;
    min-height: 80vh;
    margin: 0 2rem;
  }
  /* figure, */
  /* p, */
  h1 {
    text-align: center;
    margin: 0 auto;
  }

  h1 {
    font-size: 4em;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  /* figure {
    margin: 0 0 1em 0;
  }

  img {
    width: 100%;
    max-width: 400px;
    margin: 0 0 1em 0;
  }

  p {
    margin: 1em auto;
  } */

  /* @media (min-width: 300px) {
    h1 {
      font-size: 2em;
    }
  } */
</style>
