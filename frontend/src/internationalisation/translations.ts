import type { Component } from 'svelte';

import Pl from "$lib/assets/pl.svelte"
import Gb from "$lib/assets/gb.svelte"

const en = {
  "preview.weaponName.placeholder": "Weapon Name",
  "preview.weapon": "Weapon",
  "preview.weaponDescription.placeholder": "Type your weapon description",
  "ammunition.legend": "Ammunition",
  "bulk.legend": "Bulk",
  "bulk.enterCustom": "Enter custom bulk number",
  "bulk.negligible": "Negligible",
  "bulk.light": "Light",
  "bulk.number": "Number",
  "category.legend": "Category",
  "dice.number": "d{{number}}",
  "damage.legend": "Damage",
  "damageDie.legend": "Damage Die",
  "damageType.bludgeoning": "Bludgeoning",
  "damageType.slashing": "Slashing",
  "damageType.piercing": "Piercing",
  "damageType.legend": "Damage Type",
  "group.axe": "Axe",
  "group.axe.description": "Choose one creature adjacent to the initial target and within reach. If its AC is lower than your attack roll result for the critical hit, you deal damage to that creature equal to the result of the weapon damage die you rolled (including extra dice for its potency rune, if any). This amount isn\'t doubled, and no bonuses or other additional dice apply to this damage.",
  "group.bomb": "Bomb",
  "group.bomb.description": "Increase the radius of the bomb\'s splash damage (if any) to 10 feet.",
  "group.bow": "Bow",
  "group.bow.description": "If the target of the critical hit is adjacent to a surface, it gets stuck to that surface by the missile. The target is immobilized and must spend an Interact action to attempt a DC 10 Athletics check to pull the missile free; it can\'t move from its space until it succeeds. The creature doesn\'t become stuck if it is incorporeal, is liquid (like a water elemental or some oozes), or could otherwise escape without effort.",
  "group.brawling": "Brawling",
  "group.brawling.description": "The target must succeed at a Fortitude save against your class DC or be slowed 1 until the end of your next turn.",
  "group.club": "Club",
  "group.club.description": "You knock the target away from you up to 10 feet (you choose the distance). This is forced movement.",
  "group.crossbow": "Crossbow",
  "group.crossbow.description": "The target takes 1d8 persistent bleed damage. You gain an item bonus to this bleed damage equal to the weapon\'s item bonus to attack rolls.",
  "group.dart": "Dart",
  "group.dart.description": "The target takes 1d6 persistent bleed damage. You gain an item bonus to this bleed damage equal to the weapon\'s item bonus to attack rolls.",
  "group.firearm": "Firearm",
  "group.firearm.description": "The target must succeed at a Fortitude save against your class DC or be stunned 1.",
  "group.flail": "Flail",
  "group.flail.description": "The target is knocked prone unless they succeed at a Reflex save against your class DC.",
  "group.hammer": "Hammer",
  "group.hammer.description": "The target is knocked prone unless they succeed at a Reflex save against your class DC.",
  "group.knife": "Knife",
  "group.knife.description": "The target takes 1d6 persistent bleed damage. You gain an item bonus to this bleed damage equal to the weapon\'s item bonus to attack rolls.",
  "group.pick": "Pick",
  "group.pick.description": "The weapon viciously pierces the target, who takes 2 additional damage per weapon damage die.",
  "group.polearm": "Polearm",
  "group.polearm.description": "The target is moved 5 feet in a direction of your choice. This is forced movement.",
  "group.shield": "Shield",
  "group.shield.description": "You knock the target back from you 5 feet. This is forced movement.",
  "group.sling": "Sling",
  "group.sling.description": "The target must succeed at a Fortitude save against your class DC or be stunned 1.",
  "group.spear": "Spear",
  "group.spear.description": "The weapon pierces the target, weakening its attacks. The target is clumsy 1 until the start of your next turn.",
  "group.sword": "Sword",
  "group.sword.description": "The target is made off-balance by your attack, becoming flat-footed until the start of your next turn.",
  "group.legend": "Group",
  "group.critSpec": "Critical specialization effect",
  "hands.unarmed": "Unarmed",
  "hands.legend": "Hands",
  "range.legend": "Range",
  "range.ft": "ft",
  "price.legend": "Price",
  "rarity.common": "Common",
  "rarity.uncommon": "Uncommon",
  "rarity.rare": "Rare",
  "rarity.unique": "Unique",
  "rarity.legend": "Rarity",
  "reload.legend": "Reload",
  "type.melee": "Melee",
  "type.ranged": "Ranged",
  "type.legend": "Type",
  "weaponCategory.simple": "Simple",
  "weaponCategory.martial": "Martial",
  "weaponCategory.advanced": "Advanced",  
  "weaponCategory.legend": "Weapon Category",
  "traits.agile": "Agile",
  "traits.backswing": "Backswing",
  "traits.monk": "Monk",  
  "traits.twin": "Twin",
  "traits.finesse": "Finesse",
  "traits.grapple": "Grapple",
  "traits.reach": "Reach",
  "traits.thrown": "Thrown",
  "traits.propulsive": "Propulsive",
  "traits.volley30ft": "Volley 30 ft", // To out jak zrobię sensowne Volley
  "traits.legend.universal": "Universal weapon traits",
  "traits.legend.melee": "Melee weapon traits",
  "traits.legend.ranged": "Ranged weapon traits",  
  "layout.title": "Create your own Pathfinder 2e Weapon",
  "error.unknown": "Unknown error. Try again later!",
  "error.fromBackendMessage": "Server has responded with the following error: {{error}}",
  "error.dialogTitle": "Error",
  "error.dialogConfirmationButton": "OK",
  "randomWeapon.label": "Get random weapon!",
  "randomWeapon.label.loading": "Loading...",
  "randomWeapon.confirmation": "Confirmation",
  "randomWeapon.confirmation.message": "Are you sure? This operation will overwrite your current weapon!",
  "exportWeapon.label": "Export weapon to FoundryVTT",
  "exportWeapon.label.loading": "Loading...",
  "dialog.yes": "Yes",
  "dialog.no": "No",
};

const pl : typeof en = {
  "preview.weaponName.placeholder": "Nazwa broni",
  "preview.weapon": "Broń",
  "preview.weaponDescription.placeholder": "Wpisz opis broni",
  "ammunition.legend": "Amunicja",
  "bulk.legend": "Ciężar",
  "bulk.enterCustom": "Wprowadź własną wartość ciężaru",
  "bulk.negligible": "Znikomy",
  "bulk.light": "Lekki",
  "bulk.number": "Liczba",
  "category.legend": "Kategoria",
  "dice.number": "k{{number}}",
  "damage.legend": "Obrażenia",
  "damageDie.legend": "Kość obrażeń",
  "damageType.bludgeoning": "Obuchowe",
  "damageType.slashing": "Cięte",
  "damageType.piercing": "Kłute",
  "damageType.legend": "Typ obrażeń",
  "group.axe": "Topór",
  "group.axe.description": "Wybierz jedną istotę sąsiadującą z pierwotnym celem i znajdującą się w zasięgu. Jeśli jej KP jest niższe niż wynik twojego ataku krytycznego, zadajesz jej obrażenia równe wynikowi rzutu kością obrażeń broni (wliczając dodatkowe kości z runy mocy, jeśli występują). Ta wartość nie jest podwajana i nie dodaje się do niej premii ani dodatkowych kości.",
  "group.bomb": "Bomba",
  "group.bomb.description": "Zwiększasz promień obrażeń rozpryskowych bomby (jeśli występują) do 10 stóp.",
  "group.bow": "Łuk",
  "group.bow.description": "Jeśli cel trafienia krytycznego znajduje się przy powierzchni, zostaje do niej przybity pociskiem. Cel jest unieruchomiony i musi wykonać akcję Interakcji, aby spróbować testu Atletyki (ST 10), by się uwolnić; dopóki tego nie zrobi, nie może się poruszyć. Istota nie zostaje przybita, jeśli jest niematerialna, zbudowana z cieczy (jak wodny żywiołak lub niektóre szlamy), lub w inny sposób mogłaby się łatwo uwolnić.",
  "group.brawling": "Awanturnicza",
  "group.brawling.description": "Cel musi zdać rzut obronny na Wytrwałość przeciwko ST twojej klasy, w przeciwnym razie jest spowolniony 1 do końca twojej następnej tury.",
  "group.club": "Maczuga",
  "group.club.description": "Odpychasz cel do 10 stóp od siebie (ty wybierasz odległość). To wymuszone przesunięcie.",
  "group.crossbow": "Kusza",
  "group.crossbow.description": "Cel otrzymuje 1k8 trwałych obrażeń od krwawienia. Otrzymujesz premię przedmiotową do tych obrażeń równą premii przedmiotowej do ataków tej broni.",
  "group.dart": "Rzutka",
  "group.dart.description": "Cel otrzymuje 1k6 trwałych obrażeń od krwawienia. Otrzymujesz premię przedmiotową do tych obrażeń równą premii przedmiotowej do ataków tej broni.",
  "group.firearm": "Broń palna",
  "group.firearm.description": "Cel musi zdać rzut obronny na Wytrwałość przeciwko ST twojej klasy, w przeciwnym razie jest oszołomiony 1.",
  "group.flail": "Cep",
  "group.flail.description": "Cel zostaje powalony, chyba że zda rzut obronny na Refleks przeciwko ST twojej klasy.",
  "group.hammer": "Młot",
  "group.hammer.description": "Cel zostaje powalony, chyba że zda rzut obronny na Refleks przeciwko ST twojej klasy.",
  "group.knife": "Nóż",
  "group.knife.description": "Cel otrzymuje 1k6 trwałych obrażeń od krwawienia. Otrzymujesz premię przedmiotową do tych obrażeń równą premii przedmiotowej do ataków tej broni.",
  "group.pick": "Czekan",
  "group.pick.description": "Broń brutalnie przebija cel, który otrzymuje dodatkowe 2 obrażenia za każdą kość obrażeń broni.",
  "group.polearm": "Broń drzewcowa",
  "group.polearm.description": "Przemieszczasz cel o 5 stóp w wybranym kierunku. To wymuszone przesunięcie.",
  "group.shield": "Tarcza",
  "group.shield.description": "Odpychasz cel o 5 stóp od siebie. To wymuszone przesunięcie.",
  "group.sling": "Proca",
  "group.sling.description": "Cel musi zdać rzut obronny na Wytrwałość przeciwko ST twojej klasy, w przeciwnym razie jest oszołomiony 1.",
  "group.spear": "Włócznia",
  "group.spear.description": "Broń przebija cel, osłabiając jego ataki. Cel staje się niezdarny 1 do początku twojej następnej tury.",
  "group.sword": "Miecz",
  "group.sword.description": "Cel traci równowagę po twoim ataku i staje się zaskoczony do początku twojej następnej tury.",
  "group.legend": "Grupa",
  "group.critSpec": "Efekt specjalizacji krytycznej",
  "hands.unarmed": "Bez broni",
  "hands.legend": "Ręce",
  "range.legend": "Zasięg",
  "range.ft": "stóp",
  "price.legend": "Cena",
  "rarity.common": "Powszechna",
  "rarity.uncommon": "Niepospolita",
  "rarity.rare": "Rzadka",
  "rarity.unique": "Unikalna",
  "rarity.legend": "Rzadkość",
  "reload.legend": "Przeład.",
  "type.melee": "Walka wręcz",
  "type.ranged": "Dystansowa",
  "type.legend": "Typ",
  "weaponCategory.simple": "Prosta",
  "weaponCategory.martial": "Wojskowa",
  "weaponCategory.advanced": "Zaawansowana",  
  "weaponCategory.legend": "Kategoria broni",
  "traits.agile": "Zwinna",
  "traits.backswing": "Zamach",
  "traits.monk": "Mnich",  
  "traits.twin": "Bliźniacza",
  "traits.finesse": "Finezyjna",
  "traits.grapple": "Chwyt",
  "traits.reach": "Zasięg",
  "traits.thrown": "Rzucana",
  "traits.propulsive": "Napędowa",
  "traits.volley30ft": "Salwa 30 stóp",
  "traits.legend.universal": "Uniwersalne cechy broni",
  "traits.legend.melee": "Cechy broni do walki wręcz",
  "traits.legend.ranged": "Cechy broni dystansowej",
  "layout.title": "Stwórz swoją broń do 2 edycji Pathfindera",
  "error.unknown": "Nieznany błąd. Spróbuj ponownie później!",
  "error.fromBackendMessage": "Serwer zwrócił następujący błąd: {{error}}",
  "error.dialogTitle": "Błąd",
  "error.dialogConfirmationButton": "OK",
  "randomWeapon.label": "Pobierz losową broń!",
  "randomWeapon.label.loading": "Ładowanie...",
  "randomWeapon.confirmation": "Potwierdzenie",
  "randomWeapon.confirmation.message": "Czy jesteś pewien? Ta operacja nadpisze twoją obecną broń!",
  "exportWeapon.label": "Eksportuj broń do Foundry VTT",
  "exportWeapon.label.loading": "Ładowanie...",
  "dialog.yes": "Tak",
  "dialog.no": "Nie",
}

export const translations = {
  en: en,
  pl: pl
}

export const GetCounryIconBasedOnLocale = (locale: ApplicationLanguage) : Component => {
  switch(locale) {
    case "en":
      return Gb;
    case "pl":
      return Pl;
  }
}


declare global {
  type ApplicationLanguage = keyof typeof translations;
  type TranslationKey = keyof typeof en;
}