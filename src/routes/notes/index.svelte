<script lang="ts">
  import NotionIcon from '../../components/icons/Notion.svelte';
  import ScrapboxIcon from '../../components/icons/Scrapbox.svelte';
</script>

<svelte:head>
  <title>Notes</title>
</svelte:head>

<h1>Notes</h1>

<p> My notes are managed on Notion and Scrapbox.</p>

<ul>
  <li>
    <div class="align">
      <a
        href="https://nukopy.notion.site/Wiki-for-Study-720124b9661c40b98805429142401f4a"
      >
        Wiki for Study on <NotionIcon />
      </a>
    </div>
  </li>
  <li>
    <div class="align">
      <a href="https://scrapbox.io/nukopy-scrap/"
        >Scraps on <ScrapboxIcon />
      </a>
    </div>
  </li>
</ul>

<!-- todo: Scrapbox の tech-notes の API からスクラップを取ってくる -->
<style>
  ul {
    list-style-type: circle;
    padding-left: 2rem;
  }

  .align {
    display: flex;
    align-items: center;
  }
</style>
