<script lang="ts">
    import Properties from "../types/properties.svelte";
    import Traits from "../types/traits.svelte";
    import Details from "./Details.svelte";
    import Tags from "./Tags.svelte";
    import { t } from "../internationalisation/i18n";

    interface Props {
        traits: Traits;
        properties: Properties;
    }

    let {
        traits,
        properties = $bindable<Properties>(undefined)
    }: Props = $props();
</script>

<div class="preview">
	<div class="itemHeader">
		<div style="float: left"><input type="text" id="Name" name="Name" bind:value={properties.name} class="inputInherit customImput" placeholder={$t("preview.weaponName.placeholder", {})}></div>
        <div style="float: right">{$t("preview.weapon", {})} 0</div>
        <div style="clear: both;"></div>
	</div>
    <hr>
    <Tags traits = {traits}/>
    <Details properties = {properties}/>
	<hr>
    <textarea 
        id="Description" 
        name="Name" 
        rows={properties.type === "melee" ? 10 : 7} 
        style="resize: vertical;" 
        class="inputInherit customImput description" 
        placeholder="{$t("preview.weaponDescription.placeholder", {})}..." 
        bind:value={properties.description}>
    </textarea>
</div>

<style>
	/* Fonts */
	@import url('https://fonts.googleapis.com/css?family=Eczar:800|Roboto+Condensed|Tauri|Teko:500|Changa+One|Gelasio|DM+Serif+Text:400i&display=swap');

	.preview {
        display: flex;
        flex-direction: column;
	}

	/* HEADERS */
	.itemHeader {
		font-family: Tauri;
		text-transform: uppercase;
        font-size: 1.5em;
	}

    .inputInherit {
        font-family: inherit;
        font-size: inherit;
        text-transform: inherit;
        color: inherit;
        background-color: inherit;
    }
    .customImput {
        border: none;
        outline: none;
    }
    .customImput:hover {
        outline: 1px solid grey;
    }
    .customImput:focus {
        outline: 1px solid black;
    }
    

	.preview hr {
		display: block;
		visibility: visible;
		width: 100%;
		border: 0px;
		border-bottom: 1px solid black;
		margin: 3px 0px;
	}
    .description {
        font-family: 'Century Gothic';
        resize: horizontal;
        width: 99.5%;
    }

</style>
