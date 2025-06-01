<script lang="ts">
  import { locale, locales } from "../internationalisation/i18n";
  import Button from '@smui/button';
  import { GetCounryIconBasedOnLocale } from "../internationalisation/translations";
</script>

<div>
  {#each locales as l}
    <Button onclick={() => $locale = l}>
      <svelte:component this={GetCounryIconBasedOnLocale(l)} />
    </Button>
  {/each}
</div>

<style>

</style>