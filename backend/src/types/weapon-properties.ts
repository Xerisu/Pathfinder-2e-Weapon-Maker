import type { Traits } from './traits'

export interface WeaponProperties {
	name: string;
	level: number;
	description: string;
	priceCp: number;
	damageDie: 4 | 6 | 8 | 10 | 12;
	damageType: 'S' | 'P' | 'B';
	bulk: 'negligible' | 'L' | number;
	hands: 'unarmed' | '0' | '1' | '1+' | '2';
	range:  number;
	reload:  0 | 1 | 2 | 3;
	type: 'melee' | 'ranged';
	category: 'simple' | 'martial' | 'advanced';
	group: string;
	ammunition: string; // Może być dowolna
	traits: Traits;
}

export const weaponPropertiesToFoundryJson = (weaponProperties : WeaponProperties) : string | undefined => {
	return JSON.stringify(weaponProperties);
}