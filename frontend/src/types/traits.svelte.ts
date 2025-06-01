import { translate } from "../internationalisation/i18n";

export default class Traits {
	rarity : "common"|"uncommon"|"rare"|"unique";
	traits : string[];

	constructor(rarity : "common"|"uncommon"|"rare"|"unique", traitUniversal : string[], traitMelee : string[], traitRanged : string[], type : "melee" | "ranged") {
		this.rarity = rarity;
		if (type === "melee") {
			this.traits = traitUniversal.concat(traitMelee);
		}
		else {
			this.traits = traitUniversal.concat(traitRanged);
		}
	}

	getTranslatedRarity(locale : ApplicationLanguage) : string {
		let word : TranslationKey = 'rarity.' + this.rarity as TranslationKey; 
		return translate(locale, word, {})
	}
	
	getTranslatedTraits(locale : ApplicationLanguage) : string[] {
		let translatedTraits : string[] = [];
		this.traits.forEach(trait => {
			let word : TranslationKey = 'traits.' + trait as TranslationKey; 
			translatedTraits.push(translate(locale, word, {}))			
		});
		return translatedTraits.sort();
	}
}