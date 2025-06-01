<script lang="ts">
    import Checkbox from '@smui/checkbox';
    import FormField from '@smui/form-field';
    
    function removeItem(arr: Array<string>, value: string): Array<string> {
        const index = arr.indexOf(value);
        if (index > -1) {
            arr.splice(index, 1);
        }
        return arr;
    }


  interface Props {
    options?: { label: string; value: string; }[];
    selectedOptions?: string[];
  }

  let { options = [], selectedOptions = $bindable([]) }: Props = $props();

    function changeTrait (event : Event) {
        const target = event.target as HTMLInputElement;
        if (!selectedOptions.includes(target.value)) {
            selectedOptions = selectedOptions.concat([target.value])
        }
        else {
            selectedOptions = removeItem(selectedOptions, target.value);
        }
        console.log(target.value)
        console.log(selectedOptions)
    }
</script>



  {#each options as option}
    <FormField>
      <Checkbox
        bind:group={selectedOptions}
        value={option.value}
      />
      {#snippet label()}
        {option.label}
      {/snippet}
    </FormField>
  {/each}
