<script lang="ts">
    import Radio from "@smui/radio";
    import FormField from "@smui/form-field";
    import { t } from "../internationalisation/i18n";
    interface Props {
        damageDie: number;
    }

    let { damageDie = $bindable() }: Props = $props();
    const options = (_: any) => {
		return [{
            value: 4,
            label: $t('dice.number', {number:"4"}),
        }, {
            value: 6,
            label: $t('dice.number', {number:"6"}),
        }, {
            value: 8,
            label: $t('dice.number', {number:"8"}),
        }, {
            value: 10,
            label: $t('dice.number', {number:"10"}),
        }, {
            value: 12,
            label: $t('dice.number', {number:"12"}),
        }]
	};
</script>

<div class="radio">
  <b>{$t("damageDie.legend", {})}</b>
  {#each options($t) as option}
    <FormField>
      <Radio bind:group={damageDie} value={option.value} />
      {#snippet label()}
        {option.label}
      {/snippet}
    </FormField>
  {/each}
</div>

<style>

</style>



