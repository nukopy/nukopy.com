<script>
  import Icon from 'svelte-awesome';

  const ICON_SCALE = 1.5;

  export let link;
  export let data;
</script>

<a href={link} target="_black" rel="noopener noreferrer" class="sns-icon">
  <Icon {data} scale={ICON_SCALE} />
</a>

<style>
  .sns-icon {
    padding: 0.2em;
    color: inherit;
  }
</style>
