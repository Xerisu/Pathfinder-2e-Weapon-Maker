<script lang="ts">
    import { t } from "../internationalisation/i18n";
    import Radio from "@smui/radio";
    import FormField from "@smui/form-field"; 
    interface Props {
        damageType: string;
    }

    let { damageType = $bindable() }: Props = $props();
    const options = (_: any) => {
		return [{
            value: 'B',
            label: $t('damageType.bludgeoning', {}),
        }, {
            value: 'S',
            label: $t('damageType.slashing', {}),
        }, {
            value: 'P',
            label: $t('damageType.piercing', {}),
        }]; 
    };
</script>

<div class="radio">
  <b>{$t("damageType.legend", {})}</b>
  {#each options($t) as option}
    <FormField>
      <Radio bind:group={damageType} value={option.value} />
      {#snippet label()}
        {option.label}
      {/snippet}
    </FormField>
  {/each}
</div>

<style>

</style>