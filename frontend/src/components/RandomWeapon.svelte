<script lang="ts">
  import Button, { Label } from '@smui/button';
  import { t } from "../internationalisation/i18n";
  import Properties from '../types/properties.svelte';
  import type { WeaponPropertiesModel } from '../backend-model/weapon-properties';

  const allowedUniversalTraits = ['agile', 'backswing', 'monk', 'twin']

  interface Props {
    weaponProperties: Properties
    universalTraits: string[]
    meeleTraits: string[]
    rangedTraits: string[]
    rarity: "common" | "uncommon" | "rare" | "unique"
    errorDialogOpen: boolean
    errorDialogMessage: string
  }

  let { 
    weaponProperties = $bindable<Properties>(undefined),
    universalTraits = $bindable<string[]>(undefined),
    meeleTraits = $bindable<string[]>(undefined),
    rangedTraits = $bindable<string[]>(undefined),
    rarity = $bindable<"common" | "uncommon" | "rare" | "unique">(undefined),
    errorDialogOpen = $bindable<boolean>(undefined),
    errorDialogMessage = $bindable<string>(undefined),
  }: Props = $props();

  let loading = $state(false)

  const GenerateWeapon = async () => {
    loading = true;

    let error : string | undefined = undefined;
    const apiDomain = "api.kasia2.lank891.pl"

    try {
      const res : Response = await fetch(`http://${apiDomain}/weapons/random`);

      if(res.ok) {
        const json = (await res.json()) as WeaponPropertiesModel;

        weaponProperties.ammunition = json.ammunition;
        weaponProperties.bulk = json.bulk;
        weaponProperties.category = json.category;
        weaponProperties.damageDie = json.damageDie;
        weaponProperties.damageType = json.damageType;
        weaponProperties.description = json.description;
        weaponProperties.group = json.group;
        weaponProperties.hands = json.hands;
        weaponProperties.name = json.name;
        weaponProperties.priceCp = json.priceCp;
        weaponProperties.range = json.range;
        weaponProperties.reload = json.reload;
        weaponProperties.type = json.type;

        rarity = json.traits.rarity;

        const newUniversalTraits = []
        const newTypeTraits = []
        for(const trait of json.traits.traits) {
          if(allowedUniversalTraits.includes(trait)) {
            newUniversalTraits.push(trait);
          } else {
            newTypeTraits.push(trait);
          }
        }

        universalTraits = newUniversalTraits;
        if(json.type === "melee") {
          meeleTraits = newTypeTraits;
        } else {
          rangedTraits = newTypeTraits;
        }

      }
      else {
        const errorMessage = await res.text()
        error = $t("error.fromBackendMessage", {error: errorMessage})
      }
      
    }
    catch {
      error = $t("error.unknown");
    }
    finally {
      loading = false;

      if(error) {
        errorDialogOpen = true;
        errorDialogMessage = error;
      }
    }
  }

     
</script>


<Button onclick={GenerateWeapon} variant="raised" disabled={loading}>
  <Label>{loading ? $t("randomWeapon.label.loading") : $t("randomWeapon.label")}</Label>
</Button>


<style>

</style>