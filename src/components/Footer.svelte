<script>
  import { github, linkedin, medium } from 'svelte-awesome/icons';
  import SnsIcon from './SnsIcon.svelte';
</script>

<footer>
  <!-- Font Awesome: https://fontawesome.com/v5.15/icons?d=gallery&p=2&q=github -->
  <!-- svelte-awesome: https://github.com/RobBrazier/svelte-awesome -->
  <!-- todo: 定職に就いて落ち着いたら、LinkedIn のアカウントへのリンクを貼る -->
  <p>
    <SnsIcon link="https://www.linkedin.com/feed/" data={linkedin} />
    <SnsIcon link="https://github.com/nukopy" data={github} />
    <SnsIcon link="https://medium.com/@nukopy" data={medium} />
  </p>

  <!-- copyright -->
  &copy; 2021 nukopy. Made with Svelte / Sapper.
</footer>

<style>
  footer {
    /* background-color: rgb(177, 173, 173); */
    font-size: 1em;
    text-align: center;
  }
</style>
