<script lang="ts">
  import { capitalizeFirstLetter } from '../utils';

  export let segment: string;
  const contents = [
    'top',
    'about',
    'works',
    'blog',
    // 'study',
    // 'reading',
    // 'scrap',
    'notes',
  ];
</script>

<nav>
  <ul>
    {#each contents as content}
      <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
    the blog data when we hover over the link or tap it on a touchscreen -->
      <li>
        <a
          aria-current={segment === content ? 'page' : undefined}
          href={content}
        >
          {capitalizeFirstLetter(content)}
        </a>
      </li>
    {/each}
  </ul>
</nav>

<style lang="scss">
  @import '../styles/theme.scss';

  $nav-border-color: rgba(255, 62, 0, 0.1);
  $nav-font-weight: 500;

  nav {
    font-weight: $nav-font-weight;
    border-bottom: 1px solid $nav-border-color;
    padding: 0 1em;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  /* clearfix */
  ul::after {
    content: '';
    display: flex;
    clear: both;
  }

  li {
    display: inline-flex;
    float: left;
  }

  [aria-current] {
    position: relative;
    display: inline-block;
  }

  [aria-current]::after {
    position: absolute;
    content: '';
    width: calc(100% - 1em);
    height: 2px;
    background-color: $primary-color;
    display: block;
    bottom: -1px;
  }

  a {
    text-decoration: none;
    padding: 1em 0.5em;
  }
</style>
