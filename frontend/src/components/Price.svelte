<script lang="ts">
    import { t } from "../internationalisation/i18n";
    import Textfield from '@smui/textfield';
    
    interface Props {
        price: number;
    }

    let { 
        price = $bindable(0) 
    }: Props = $props();

    const enforceMinimum = (event: Event) => {
        console.log(event);
        const inputField = event.target as HTMLInputElement;
        if(inputField.valueAsNumber < 0) {
            inputField.valueAsNumber = 0;
            price = 0;
        }
    }

</script>

<div>
<b class="container">{$t("price.legend", {})}</b>
<Textfield updateInvalid bind:value={price} type="number" input$min=0 input$onchange={enforceMinimum} /> cp
</div>

<style>
    .container {
        margin-right: 1em;
    }
</style>