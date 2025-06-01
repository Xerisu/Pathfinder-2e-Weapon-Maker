<script lang="ts">
  	import { Textarea } from "@smui/textfield";
	// Na później: ogarnąć że jak najedziesz na broń to pokazuje ci się kryt specka
	import Select, { Option } from '@smui/select';
    import { t } from "../internationalisation/i18n";
	const options = (_: any) => {
		return {
			axe: {
				label: $t("group.axe", {}),
				description: $t("group.axe.description", {})
			},
			bomb: {
				label: $t("group.bomb", {}),
				description: $t("group.bomb.description", {}),
			},
			bow: {
				label: $t("group.bow", {}),
				description: $t("group.bow.description", {}), 
			},
			brawling: {
				label: $t("group.brawling", {}),
				description: $t("group.brawling.description", {})
			},
			club: {
				label: $t("group.club", {}),
				description: $t("group.club.description", {})
			},
			crossbow: {
				label: $t("group.crossbow", {}),
				description: $t("group.crossbow.description", {})
			},
			dart: {
				label: $t("group.dart", {}),
				description: $t("group.dart.description", {})
			},
			firearm: {
				label: $t("group.firearm", {}),
				description: $t("group.firearm.description", {})
			},
			flail: {
				label: $t("group.flail", {}),
				description: $t("group.flail.description", {}),
			},
			hammer: {
				label: $t("group.hammer", {}),
				description: $t("group.hammer.description", {}),
			},
			knife: {
				label: $t("group.knife", {}),
				description: $t("group.knife.description", {}),
			},
			pick: {
				label: $t("group.pick", {}),
				description: $t("group.pick.description", {}),
			},
			polearm: {
				label: $t("group.polearm", {}),
				description: $t("group.polearm.description", {}),
			},
			shield: {
				label: $t("group.shield", {}),
				description: $t("group.shield.description", {}),
			},
			sling: {
				label: $t("group.sling", {}),
				description: $t("group.sling.description", {}),
			},
			spear: {
				label: $t("group.spear", {}),
				description: $t("group.spear.description", {}),
			},
			sword: {
				label: $t("group.sword", {}),
				description: $t("group.sword.description", {}),
			}
		}
	};
	type WeaponGroups = keyof ReturnType<typeof options>;

    function GetOptionsKeys(_: any) : WeaponGroups[] {
        return Object.keys(options(_)) as WeaponGroups[]
    }

    function StringToOptionsKey(str : string) : WeaponGroups {
        return str as WeaponGroups;
    }

	interface Props {
		selected?: string;
	}

	let { selected = $bindable(GetOptionsKeys(undefined)[0] as string) }: Props = $props();
</script>


<div>
<b class="container">{$t("group.legend", {})}</b>

<Select bind:value={selected} >
	{#each GetOptionsKeys($t) as key}
		<Option value={key}>{options($t)[key].label}</Option>
	{/each}
</Select>
<br>
<br>
<b>{$t("group.critSpec", {})}</b>
<br>
<textarea readonly rows="4" id="description">{options($t)[StringToOptionsKey(selected)].description}</textarea>
</div>


<style>
    #description {
        resize: none;
        width: 100%;
        font-family: inherit;
        font-size: inherit;
        text-transform: inherit;
        color: inherit;
        background-color: inherit;
        border: none;
        outline: none;
    }
    .container {
        margin-right: 1em;
    }

</style>
