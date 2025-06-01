<script lang="ts">
  import { t } from "../internationalisation/i18n";
  import Textfield from "@smui/textfield";
  interface Props {
    range?: number;
  }

  let { range = $bindable(0) }: Props = $props();
</script>

<div>
  <b class="container">{$t("range.legend", {})}</b>
  <div class="inline-group">
    <Textfield updateInvalid bind:value={range} type="number" input$min="10" input$max="200" /> 
    {$t("range.ft", {})}
  </div>
  
</div>

<style>
  .container {
      margin-right: 1em;
  }
  .inline-group {
    display: inline-flex;
    align-items: center;
    flex-wrap: nowrap; /* ZABEZPIECZENIE przed łamaniem do nowej linii */
  }
</style>
