<script lang="ts">
    import { t } from "../internationalisation/i18n";
    import Radio from "@smui/radio";
    import FormField from "@smui/form-field";
    interface Props {
        type: string;
    }

    let { type = $bindable() }: Props = $props();
    const options = (_: any) => {
            return [{
            value: 'melee',
            label: $t("type.melee", {}),
        }, {
            value: 'ranged',
            label: $t("type.ranged", {}),
        }];
    };
</script>

<div class="radio">
  <b>{$t("type.legend", {})}</b>
  {#each options($t) as option}
    <FormField>
      <Radio bind:group={type} value={option.value} />
      {#snippet label()}
        {option.label}
      {/snippet}
    </FormField>
  {/each}
</div>

<style>

</style>