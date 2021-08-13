<svelte:head>
  <title>nukopy's portfolio</title>
</svelte:head>

<div id="welcome">
  <h1>Thanks for<br />visiting<br />nukopy's portfolio!</h1>
</div>

<style type="text/scss">
  #welcome {
    margin: auto 1rem;
    height: 70vh;

    // 左右中央寄せ
    text-align: center;
    display: table;
  }

  h1 {
    // 上下中央寄せ
    // hoge
    display: table-cell;
    vertical-align: middle;

    // font
    font-size: 6em;
    text-transform: uppercase;
    font-weight: 700;
  }

  @media screen and (max-width: 1000px) {
    h1 {
      font-size: 5rem;
    }
  }

  @media screen and (max-width: 768px) {
    h1 {
      font-size: 5rem;
    }
  }

  @media screen and (max-width: 400px) {
    #welcome {
      height: 60vh;
    }

    h1 {
      font-size: 3rem;
    }
  }
</style>
