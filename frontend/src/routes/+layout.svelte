<script lang="ts">
    import { t } from "../internationalisation/i18n";
    import LanguageButtons from "../components/LanguageButtons.svelte";
    interface Props {
        children?: import('svelte').Snippet;
    }

    let { children }: Props = $props();
</script>


<div class="wrapper">
<h1>{$t("layout.title", {})}!</h1> 
<div class="right"><LanguageButtons/></div>
</div>
{@render children?.()}
<footer>
    <br/>
    <div class="smaller-text">
    This website uses trademarks and/or copyrights owned by Paizo Inc., used under Paizo's 
    <a href="https://paizo.com/licenses/communityuse" target="_blank" rel="noopener noreferrer">Community Use Policy</a>. 
    We are expressly prohibited from charging you to use or access this content. 
    This website is not published, endorsed, or specifically approved by Paizo. 
    For more information about Paizo Inc. and Paizo products, visit 
    <a href="https://paizo.com/" target="_blank" rel="noopener noreferrer">paizo.com</a>.
    </div>
</footer>

<style>
    .wrapper {
        margin-left: 50px;
		display: grid;
		grid-template-columns: 70% 30%;
        margin-right: 50px;
    }
    .right {
        display: flex;
        flex-direction: row-reverse;
    }
    :global(body) {
		font-family: 'Roboto', sans-serif;
	}
    .smaller-text {
        font-size: 0.8em; /* 80% wielkości rodzica */
    }

    @media(max-width: 768px){ 
    .wrapper {
      margin-left: 10px;
      margin-right: 10px;
      display: grid;
	  grid-template-columns: 70% 30%;
    }
  }
</style>