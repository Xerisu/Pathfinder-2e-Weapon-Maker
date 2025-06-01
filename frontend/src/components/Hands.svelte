<script lang="ts">
    import { t } from "../internationalisation/i18n";
    import Radio from "@smui/radio";
    import FormField from "@smui/form-field";
    interface Props {
        hands: string;
    }

    let { hands = $bindable() }: Props = $props();
    const options = (_: any) => {
		return [{
        value: 'unarmed',
        label: $t("hands.unarmed", {}),
    }, {
        value: '0',
        label: '0',
    }, {
        value: '1',
        label: '1',
    }, {
        value: '1+',
        label: '1+',
    }, {
        value: '2',
        label: '2',
    }];
};
</script>

<div class="radio">
  <b>{$t("hands.legend", {})}</b>
  {#each options($t) as option}
    <FormField>
      <Radio bind:group={hands} value={option.value} />
      {#snippet label()}
        {option.label}
      {/snippet}
    </FormField>
  {/each}
</div>

<style>

</style>