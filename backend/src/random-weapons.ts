import { WeaponProperties } from "./types/weapon-properties";

const weapons : WeaponProperties[] = [
    {
        name: "Club",
        level: 0,
        description: "This is a piece of stout wood shaped or repurposed to bludgeon an enemy. Clubs can be intricately carved pieces of martial art or as simple as a tree branch or piece of wood.",
        priceCp: 0,
        damageDie: 6,
        damageType: 'B',
        bulk: 1,
        hands: '1',
        range:  10,
        reload:  1,
        type: 'melee',
        category: 'simple',
        group: 'club',
        ammunition: '',
        traits: {
            rarity: 'common',
            traits: ['thrown']
        }
    },
    {
        name: "Gill Hook",
        level: 0,
        description: "This spear has a specialized hook just before the tip that can catch on the gills of large fish. Azarketis primarily use this to hunt sharks, but it can also be used to hook flesh or armor. This weapon is common on the Isle of Kortos and within azarketi settlements.",
        priceCp: 200,
        damageDie: 10,
        damageType: 'P',
        bulk: 2,
        hands: '2',
        range:  0,
        reload:  0,
        type: 'melee',
        category: 'martial',
        group: 'spear',
        ammunition: '',
        traits: {
            rarity: 'uncommon',
            traits: ['grapple', 'reach']
        }
    },
    {
        name: "Composite Longbow",
        level: 1,
        description: "This projectile weapon is made from horn, wood, and sinew laminated together to increase the power of its pull and the force of its projectile. Like all longbows, its great size also increases the bow's range and power. You must use two hands to fire it, and it cannot be used while mounted. Any time an ability is specifically restricted to a longbow, such as Erastil's favored weapon, it also applies to composite longbows unless otherwise stated.",
        priceCp: 2000,
        damageDie: 8,
        damageType: 'P',
        bulk: 2,
        hands: '1+',
        range:  100,
        reload:  0,
        type: 'ranged',
        category: 'martial',
        group: 'bow',
        ammunition: 'Arrows',
        traits: {
            rarity: 'common',        
            traits: ['propulsive', 'volley30ft']
        }
    },
    {
        name: "Clockwork Macuahuitl",
        level: 8,
        description: "This finely-made wooden club has a beautiful, lacquered finish that gleams in the sunlight. A heavy ring of gears lined with sharpened pieces of obsidian automatically and constantly spin around the bulk of the wooden club lengthwise. Striking a foe digs the obsidian gears into the enemy's flesh and tears it with its blades. The ever-turning gears also help to dislodge an enemy's defensive position against the weapon.",
        priceCp: 55000,
        damageDie: 10,
        damageType: 'S',
        bulk: 1,
        hands: '2',
        range:  0,
        reload:  0,
        type: 'melee',
        category: 'advanced',
        group: 'club',
        ammunition: '',
        traits: {
            rarity: 'rare',
            traits: ['agile', 'backswing', 'finesse']
        }
    }  
];

const GetRandomWeapon = () : WeaponProperties => {
    return weapons[Math.floor((Math.random() * weapons.length))];
}

export default GetRandomWeapon;