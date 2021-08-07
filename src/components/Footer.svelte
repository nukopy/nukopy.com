<script>
  import Icon from 'svelte-awesome';
  import { github, linkedin } from 'svelte-awesome/icons';

  import SnsIcon from './SnsIcon.svelte';

  const ICON_SCALE = 1.5;
</script>

<footer>
  <!-- Font Awesome: https://fontawesome.com/v5.15/icons?d=gallery&p=2&q=github -->
  <!-- svelte-awesome: https://github.com/RobBrazier/svelte-awesome -->
  <!-- todo: 色々落ち着いたら、LinkedIn のアカウントへのリンクを貼る -->
  <p>
    <SnsIcon link="https://www.linkedin.com/feed/" data={linkedin} />
    <SnsIcon link="https://github.com/nukopy" data={github} />
  </p>

  <!-- copyright -->
  &copy; 2021 nukopy. Made with Svelte / Sapper.
</footer>

<style lang="scss">
  footer {
    // background-color: rgb(177, 173, 173);
    font-size: 0.8em;
    text-align: center;
  }
</style>
