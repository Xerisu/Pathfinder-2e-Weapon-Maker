import { translate } from "../internationalisation/i18n";

export default class Properties {
	name: string | undefined;
	description: string | undefined;
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

	constructor() {
		this.name = $state(undefined);
		this.description = $state(undefined);
		this.priceCp = $state(0);
		this.damageDie = $state(4);
		this.damageType = $state('B');
		this.bulk = $state('negligible');
		this.hands = $state('0');
		this.range = $state(30);
		this.reload = $state(0);
		this.type = $state('melee');
		this.category = $state('simple');
		this.group = $state('brawling');
		this.ammunition = $state('');
	}

	getTranslatedBulk(locale : ApplicationLanguage) : string {
		if (this.bulk == 'negligible') {
			return translate(locale, 'bulk.negligible',{});
		}
		return this.bulk.toString();
	}
	getTranslatedHands(locale: ApplicationLanguage) : string {
		if (this.hands == 'unarmed') {
			return translate(locale, 'hands.unarmed',{}).toLowerCase();
		}
		return this.hands.toString();
	}
	getTranslatedType(locale: ApplicationLanguage) : string {
		if (this.type == "melee") {
			return translate(locale, 'type.melee', {}).toLowerCase();
		}
		return translate(locale, 'type.ranged', {}).toLowerCase();
	}
	getTranslatedCategory(locale: ApplicationLanguage) : string {
		let word : TranslationKey = 'weaponCategory.' + this.category as TranslationKey; 
		return translate(locale, word, {}).toLowerCase()
	}
	getTranslatedGroup(locale: ApplicationLanguage) : string {
		let word : TranslationKey = 'group.' + this.group as TranslationKey; 
		return translate(locale, word, {}).toLowerCase()
	}

	getPrice(): string {
		if (!this.priceCp) return 0 + ' cp';
		if (this.priceCp > 250) return Math.floor(this.priceCp / 100) + ' gp';
		if (this.priceCp > 25) return Math.floor(this.priceCp / 10) + ' sp';
		return this.priceCp + ' cp';
	}

	isExpensive(): boolean {
		return this.priceCp >= 1000;
	}
}

export {};
