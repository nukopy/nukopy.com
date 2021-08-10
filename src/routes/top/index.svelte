<svelte:head>
  <title>nukopy's portfolio</title>
</svelte:head>

<div id="welcome">
  <h1>Thanks for visiting nukopy's portfolio!</h1>
</div>

<style type="text/scss">
  #welcome {
    margin: 0 1rem;
    // 上下中央揃え
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h1 {
    // 左右中央揃え
    text-align: center;
    margin: 0 auto;
    // font
    font-size: 4em;
    text-transform: uppercase;
    font-weight: 700;
  }

  @media screen and (max-width: 1000px) {
    h1 {
      font-size: 3rem;
    }
  }

  @media screen and (max-width: 768px) {
    h1 {
      font-size: 3rem;
    }
  }

  @media screen and (max-width: 400px) {
    h1 {
      font-size: 3rem;
    }
  }
</style>
