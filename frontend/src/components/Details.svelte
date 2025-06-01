<script lang="ts">
    import type Properties from "../types/properties.svelte.js";
    import SingleDetail from "./SingleDetail.svelte";
    import { locale } from "../internationalisation/i18n";
    import { t } from "../internationalisation/i18n";
    interface Props {
        properties: Properties;
    }

    let { properties }: Props = $props();
    
    const AdjustAmmunition = (ammunition : string) : string => {
        if (ammunition === "") {
            return "—"
        }
        return ammunition;
    } 

</script>

<div class="details">
<SingleDetail name={$t('price.legend', {})} value={properties.getPrice()}/>
<SingleDetail name={$t('damage.legend', {})} value="1{$t('dice.number', {number:properties.damageDie})} {properties.damageType}"/>
<SingleDetail name={$t('bulk.legend', {})} value={properties.getTranslatedBulk($locale)}/>
<SingleDetail name={$t('hands.legend', {})} value={properties.getTranslatedHands($locale)}/>
{#if properties.type == "ranged"}
    <SingleDetail name={$t('range.legend', {})} value={properties.range.toString() + " " + $t('range.ft', {})}/>
{/if}
{#if properties.type == "ranged"}
    <SingleDetail name={$t('reload.legend', {})} value={properties.reload.toString()}/>
{/if}
<SingleDetail name={$t('type.legend', {})} value={properties.getTranslatedType($locale)}/>
<SingleDetail name={$t('category.legend', {})} value={properties.getTranslatedCategory($locale)}/>
<SingleDetail name={$t('group.legend', {})} value={properties.getTranslatedGroup($locale)}/>
{#if properties.type == "ranged"}
    <SingleDetail name={$t('ammunition.legend', {})} value={AdjustAmmunition(properties.ammunition)}/>
{/if}

</div>