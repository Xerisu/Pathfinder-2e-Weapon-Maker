<script lang="ts">
    import { t } from "../internationalisation/i18n";
    import Textfield from "@smui/textfield";
    interface Props {
        ammunition?: string;
    }

    let { ammunition = $bindable('') }: Props = $props();
</script>

<div>
<b class="container">{$t('ammunition.legend', {})}</b>
<Textfield updateInvalid bind:value={ammunition} type="string" input$maxlength="20" />
</div>

<style>
    .container {
        margin-right: 1em;
    }
</style>