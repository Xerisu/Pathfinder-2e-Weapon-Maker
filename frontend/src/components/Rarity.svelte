<script lang="ts">
    import { t } from "../internationalisation/i18n";
    import Radio from "@smui/radio";
    import FormField from "@smui/form-field";
    interface Props {
        rarity: string;
    }

    let { rarity = $bindable() }: Props = $props();
    const options = (_: any) => {
		return [{
            value: 'common',
            label: $t("rarity.common", {}),
        }, {
            value: 'uncommon',
            label: $t("rarity.uncommon", {}),
        }, {
            value: 'rare',
            label: $t("rarity.rare", {}),
        }, {
            value: 'unique',
            label: $t("rarity.unique", {}),
        }];
    };
</script>

<div class="radio">
  <b>{$t("rarity.legend", {})}</b>
  {#each options($t) as option}
    <FormField>
      <Radio bind:group={rarity} value={option.value} />
      {#snippet label()}
        {option.label}
      {/snippet}
    </FormField>
  {/each}
</div>

<style>

</style>