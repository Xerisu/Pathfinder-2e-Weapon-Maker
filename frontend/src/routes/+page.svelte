<script lang="ts">
  import Properties from "../types/properties.svelte";
  import WeaponCategory from "../components/WeaponCategory.svelte";
  import Preview from "../components/Preview.svelte";
  import Price from "../components/Price.svelte";
  import Group from "../components/Group.svelte";
  import Hands from "../components/Hands.svelte";
  import Type from "../components/Type.svelte";
  import Range from "../components/Range.svelte";
  import Reload from "../components/Reload.svelte";
  import Ammunition from "../components/Ammunition.svelte";
  import Bulk from "../components/Bulk.svelte";
  import DamageDie from "../components/DamageDie.svelte";
  import DamageType from "../components/DamageType.svelte";
  import Rarity from "../components/Rarity.svelte";
  import WeaponTraits from "../components/WeaponTraits.svelte";
  import Traits from "../types/traits.svelte.js";
  import { t } from "../internationalisation/i18n";
  import Randomweapon from "../components/RandomWeapon.svelte";
  import Dialog, { Title, Content, Actions } from '@smui/dialog';
  import Button, { Label } from '@smui/button';
  import ExportWeapon from "../components/ExportWeapon.svelte";

  const traitsUniversal = (_: any) => {
    return [{ 
        label: $t("traits.agile", {}), 
        value: "agile",
      }, { 
        label: $t("traits.backswing", {}), 
        value: "backswing",
      }, { 
        label: $t("traits.monk", {}),
        value: "monk",
      }, { 
        label: $t("traits.twin", {}), 
        value: "twin",
      },];
  };

  const traitsMelee = (_: any) => {
    return [
      { label: $t("traits.finesse", {}), value: "finesse" },
      { label: $t("traits.grapple", {}), value: "grapple" },
      { label: $t("traits.reach", {}), value: "reach" },
      { label: $t("traits.thrown", {}), value: "thrown" },
    ];
  };

  const traitsRanged = (_: any) => {
    return [
      { label: $t("traits.propulsive", {}), value: "propulsive" },
      { label: $t("traits.volley30ft", {}), value: "volley30ft" },
    ];
  };

  let errorDialogOpen = $state(false);
  let errorDialogMessage = $state("?");

  let properties = $state(new Properties());
  let chosenUniversalTraits: string[] = $state([]);
  let chosenMeleeTraits: string[] = $state([]);
  let chosenRangedTraits: string[] = $state([]);
  let rarity = $state("rare" as "common" | "uncommon" | "rare" | "unique");
</script>

<Dialog
  bind:open={errorDialogOpen}
  scrimClickAction=""
  escapeKeyAction=""
  aria-labelledby="mandatory-title"
  aria-describedby="mandatory-content"
>
  <Title id="mandatory-title">{$t("error.dialogTitle")}</Title>
  <Content id="mandatory-content">
    {errorDialogMessage}
  </Content>
  <Actions>
    <Button>
      <Label>{$t("error.dialogConfirmationButton")}</Label>
    </Button>
  </Actions>
</Dialog>

<div class="wrapper">
  <div class="choices">
    <Type bind:type={properties.type} />
    <Rarity bind:rarity={rarity} />
    <Price bind:price={properties.priceCp} />
    <WeaponCategory bind:weaponCategory={properties.category} />
    <Bulk bind:bulk={properties.bulk} />
    <DamageDie bind:damageDie={properties.damageDie} />
    <DamageType bind:damageType={properties.damageType} />
    <Hands bind:hands={properties.hands} />
    {#if properties.type == "ranged"}
    <div class="ranged">
      <Range bind:range={properties.range} />
      <Reload bind:reload={properties.reload} />
      <Ammunition bind:ammunition={properties.ammunition} />
    </div>
    {/if}
    <Group bind:selected={properties.group} />
  </div>

  <div class="split"></div>

  <div class="choices-2">
    <Preview
      bind:properties={properties}
      traits={new Traits(rarity, chosenUniversalTraits, chosenMeleeTraits, chosenRangedTraits, properties.type)}
    />

    <ExportWeapon
      weaponProperties={properties} 
      traits={new Traits(rarity, chosenUniversalTraits, chosenMeleeTraits, chosenRangedTraits, properties.type)}
      bind:errorDialogOpen={errorDialogOpen} 
      bind:errorDialogMessage={errorDialogMessage} 
    />

    <Randomweapon 
      bind:weaponProperties={properties} 
      bind:universalTraits={chosenUniversalTraits} 
      bind:meeleTraits={chosenMeleeTraits} 
      bind:rangedTraits={chosenRangedTraits} 
      bind:rarity={rarity} 
      bind:errorDialogOpen={errorDialogOpen} 
      bind:errorDialogMessage={errorDialogMessage} 
    />
    
    <div class="traits">
      <div class="choices">
        <b>{$t("traits.legend.universal", {})}</b>
        <WeaponTraits options={traitsUniversal($t)} bind:selectedOptions={chosenUniversalTraits} />
      </div>

      {#if properties.type == "melee"}
      <div class="choices">
        <b>{$t("traits.legend.melee", {})}</b>
        <WeaponTraits options={traitsMelee($t)} bind:selectedOptions={chosenMeleeTraits} />
      </div>
      {/if}
      {#if properties.type == "ranged"}
        <div class="choices">
          <b>{$t("traits.legend.ranged", {})}</b>
          <WeaponTraits options={traitsRanged($t)} bind:selectedOptions={chosenRangedTraits} />
        </div>
      {/if} 
    </div>

  </div>
</div>

<style>
  .wrapper {
    margin-left: 50px;
    display: grid;
    grid-template-columns: 1fr 50px 1fr;
    margin-right: 50px;
  }
  .choices, .choices-2 {
    display: flex;
    flex-direction: column;
    gap: 2em;
  }
  .traits {
    display: grid;
    grid-template-columns: 50% 50%;
  }
  .ranged {
    display: grid;
    column-gap: 8px;
    grid-template-columns: 23% 20% 1fr;    
  }

  @media(max-width: 768px){ 
    .wrapper {
      margin-left: 10px;
      margin-right: 10px;
      display: flex;
      flex-direction: column;
    }

    .split {
      min-height: 2em;
    }

    .choices-2 {
      display: flex;
      flex-direction: column-reverse;
      gap: 2em;
    }
  }
</style>
