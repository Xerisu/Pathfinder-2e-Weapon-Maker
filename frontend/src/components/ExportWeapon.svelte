<script lang="ts">
  import Button, { Label } from '@smui/button';
  import { t } from "../internationalisation/i18n";
  import Properties from '../types/properties.svelte';
  import type { WeaponPropertiesModel } from '../backend-model/weapon-properties';
  import type Traits from '../types/traits.svelte';

  interface Props {
    weaponProperties: Properties
    traits: Traits
    errorDialogOpen: boolean
    errorDialogMessage: string
  }

  let { 
    weaponProperties,
    traits,
    errorDialogOpen = $bindable<boolean>(undefined),
    errorDialogMessage = $bindable<string>(undefined),
  }: Props = $props();

  let loading = $state(false)

  const ExportWeapon = async () => {
    loading = true;

    let error : string | undefined = undefined;
    const apiDomain = "https://api.kasia2.lank891.pl"
    //const apiDomain = "http://localhost:3000"

    try {
      const body : WeaponPropertiesModel = {
        name: weaponProperties.name ?? "New Weapon",
        level: 0,
        description: weaponProperties.description ?? "",
        priceCp: weaponProperties.priceCp,
        damageDie: weaponProperties.damageDie,
        damageType: weaponProperties.damageType,
        bulk: weaponProperties.bulk,
        hands: weaponProperties.hands,
        range: weaponProperties.range,
        reload: weaponProperties.reload,
        type: weaponProperties.type,
        category: weaponProperties.category,
        group: weaponProperties.group,
        ammunition: weaponProperties.ammunition,
        traits: {
          rarity: traits.rarity,
          traits: traits.traits
        }
      }

      const res : Response = await fetch(`${apiDomain}/create-weapon`, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      });

      if(res.ok) {
        const disposition = res.headers.get("content-disposition");
        let filename = disposition?.split(/;(.+)/)[1].split(/=(.+)/)[1] ?? "weapon.json";
        if (filename.toLowerCase().startsWith("utf-8''"))
            filename = decodeURIComponent(filename.replace(/utf-8''/i, ''));
        else
            filename = filename.replace(/['"]/g, '');

        const blob = await res.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = filename;
        a.click();
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


<Button onclick={ExportWeapon} variant="raised" disabled={loading}>
  <Label>{loading ? $t("exportWeapon.label.loading") : $t("exportWeapon.label")}</Label>
</Button>


<style>

</style>