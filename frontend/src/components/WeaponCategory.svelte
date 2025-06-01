<script lang="ts">
  import { t } from "../internationalisation/i18n";
  import Radio from "@smui/radio";
  import FormField from "@smui/form-field";

  interface Props {
    weaponCategory: string;
  }

  let { weaponCategory = $bindable() }: Props = $props();

  const options = (_: any) => {
    return [
      {
        value: "simple",
        label: $t("weaponCategory.simple", {}),
      },
      {
        value: "martial",
        label: $t("weaponCategory.martial", {}),
      },
      {
        value: "advanced",
        label: $t("weaponCategory.advanced", {}),
      },
    ];
  };
</script>

<div class="radio">
  <b>{$t("weaponCategory.legend", {})}</b>
  {#each options($t) as option}
    <FormField>
      <Radio bind:group={weaponCategory} value={option.value} />
      {#snippet label()}
        {option.label}
      {/snippet}
    </FormField>
  {/each}
</div>

<style>

</style>
