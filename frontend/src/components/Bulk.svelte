<script lang="ts">
	import { run } from 'svelte/legacy';
    import { t } from "../internationalisation/i18n";
	import Textfield from "@smui/textfield";
	import Radio from "@smui/radio";
	import FormField from "@smui/form-field";

	interface Props {
		bulk: string | number;
	}

	let { bulk = $bindable() }: Props = $props();

	const options = (_: any) => {
		return [{ 
			value: 'negligible',
			label: $t('bulk.negligible', {})
		}, { 
			value: 'L', 
			label: $t('bulk.light', {})
		}, { 
			value: 'number', 
			label: $t('bulk.number', {})
		}]
	};

	let selectedOption: string = $state(typeof bulk === 'number' ? 'number' : bulk);
	let customNumber: number = $state(typeof bulk === 'number' ? bulk : 1);

    const changeBulk = (event: Event) => {
        const inputField = event.target as HTMLInputElement;
        if(inputField.valueAsNumber < 1) {
            inputField.valueAsNumber = 1;
            bulk = 1;
			customNumber = 1;
        }
		else if(inputField.valueAsNumber > 10) {
			inputField.valueAsNumber = 10;
            bulk = 10;
			customNumber = 10;
		}
		else {
			bulk = customNumber
		}
    }
	
	const changeBulkRadio = (event: Event) => {
		const inputField = event.target as HTMLInputElement;
		if (inputField.value != 'number') {
			bulk = selectedOption;
		}
		else {
			bulk = customNumber;
		}
        
    }


</script>

<div class="radio">
  <b>{$t("bulk.legend", {})}</b>
  {#each options($t) as option}
    <FormField>
      <Radio bind:group={selectedOption} value={option.value} input$onchange={changeBulkRadio} />
      {#snippet label()}
        {option.label}
      {/snippet}
    </FormField>
  {/each}
</div>


{#if selectedOption === 'number'}
<div>
	<Textfield updateInvalid bind:value={customNumber} type="number" label={$t('bulk.enterCustom', {})} input$min=1 input$max=10 input$onchange={changeBulk} style="width: 10em"/> 
</div>
{/if}



