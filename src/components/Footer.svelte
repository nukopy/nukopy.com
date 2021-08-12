<script>
  import { github, linkedin, medium } from 'svelte-awesome/icons';
  import Icon from './Icon.svelte';
</script>

<footer>
  <!-- Font Awesome: https://fontawesome.com/v5.15/icons?d=gallery&p=2&q=github -->
  <!-- svelte-awesome: https://github.com/RobBrazier/svelte-awesome -->
  <!-- todo: 定職に就いて落ち着いたら、LinkedIn のアカウントへのリンクを貼る -->
  <p>
    <Icon link="https://www.linkedin.com/feed/" data={linkedin} />
    <Icon link="https://github.com/nukopy" data={github} />
    <Icon link="https://medium.com/@nukopy" data={medium} />
  </p>

  <!-- copyright -->
  &copy; 2021 nukopy. Made with Svelte / Sapper.
</footer>

<style>
  footer {
    /* background-color: rgb(177, 173, 173); */
    font-size: 1em;

    /* 左右中央寄せ */
    text-align: center;
    /* 上下中央寄せ */
    margin-top: auto;
    margin-bottom: 1em;
  }
</style>
