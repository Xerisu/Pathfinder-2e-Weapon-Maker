<script lang="ts">
    import { t } from "../internationalisation/i18n";
    import Textfield from "@smui/textfield";
    interface Props {
        reload?: number;
    }

    let { reload = $bindable(0) }: Props = $props();
</script>

<div>
<b class="container">{$t("reload.legend", {})}</b>
<Textfield updateInvalid bind:value={reload} type="number" input$min="0" input$max="3" />

</div>

<style>
    .container {
        margin-right: 1em;
    }
</style>