import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

/*** Data ***/

const twist0 = {
    "title": "The Forgotten Kingdom",
    "body": "In the age of myths, you embark on a quest to rediscover the forgotten kingdom, a land steeped in ancient magic and mysteries. Your journey will be fraught with choices, and the decisions you make will shape the destiny of this once-majestic realm."
};

const twist1 = {
    "title": "Through the Enchanted Forest",
    "body": "Your journey begins in the heart of the enchanted forest, where ancient trees whisper tales of old. Illuminated by the soft glow of magical flora, the forest presents you with myriad paths. Each twist in this mystical realm unveils secrets and challenges that will test your courage and wit."
};

const twist2 = {
    "title": "Across the Desert Sands",
    "body": "Alternatively, you may choose to traverse the unforgiving desert sands, where the scorching sun casts an unyielding heat. The whispers of the wind carry tales of hidden treasures and ancient ruins buried beneath the dunes. The twists in this arid expanse promise both danger and opportunity."
};

const twist11 = {
    "title": "Follow the Luminescent Butterflies",
    "body": "In the heart of the enchanted forest, you encounter luminescent butterflies that dance through the air. Mesmerized by their graceful movements, you decide to follow their ethereal glow. The path leads you deeper into the mystical woods, revealing a hidden realm of ancient magic and elusive creatures."
};

const twist12 = {
    "title": "Confront the Forest Guardian",
    "body": "Choosing the enchanted forest leads to a confrontation with the guardian, a majestic being bound to protect the ancient woodland. A battle ensues, and your choices will determine whether you earn the guardian's trust or face the consequences of defiance in this enchanted realm."
};

const twist21 = {
    "title": "Discover the Oasis",
    "body": "Crossing the desert, your weary steps lead you to a hidden oasis, a sanctuary amidst the harsh sands. The oasis harbors ancient waters with mystical properties, and its shores hide secrets that may aid your quest for the forgotten kingdom."
};

const twist22 = {
    "title": "Survive the Sandstorm",
    "body": "Facing the desert sands, a fierce sandstorm tests your determination. Blinded by the swirling tempest, you navigate through the dunes, relying on your survival instincts. Success will bring you closer to the heart of the forgotten kingdom, but failure may lead to a perilous fate."
};

const twist111 = {
    "title": "Enter the Faerie Realm",
    "body": "Following the luminescent butterflies leads you to the entrance of the faerie realm. The air shimmers with enchantment as you step into a world where time flows differently. The fae, curious about your presence, offer guidance and present you with a choice that will echo through the corridors of destiny."
};

const twist112 = {
    "title": "Harness Nature's Magic",
    "body": "Confronting the forest guardian reveals ancient magic embedded in the heart of the enchanted forest. You face a pivotal choice – whether to harness the primal forces of nature. Embracing this power unlocks potential beyond imagination, but it also comes with a responsibility that will shape the course of your journey."
};

const twist221 = {
    "title": "Reveal the Lost City",
    "body": "Surviving the sandstorm uncovers the silhouette of a lost city in the distance. As you approach, the mirage solidifies into a hidden realm of forgotten wonders. The lost city holds secrets that may illuminate the path to the heart of the forgotten kingdom, but the truth may be more elusive than it seems."
};

const twist222 = {
    "title": "Face the Guardian of the Kingdom",
    "body": "Conquering the desert brings you face to face with the guardian, a formidable entity that protects the entrance to the heart of the forgotten kingdom. A battle of wits and strength ensues, and your success determines whether you gain passage to the next stage of your journey or face the consequences of a formidable foe."
};

/*** Main Function ***/

async function main() {
    const token = 'am02NHpKM2JZcG9ZUmVXNTpmOGJmMGJlMTBkM2VkZTljMTU0ZTBiZjgxMTYxODc3YTkwYmU3ODM1M2YyNDY0OTA3OTEzMWQ0ZDgyNTYyNDJl';

    const twist0res = await axios.post(
        'https://story3.com/api/v2/stories',
        twist0,
        { headers: { 'x-auth-token': token } }
    );
    const rootHashId = twist0res.data.hashId;

    const twist1res = await axios.post(
        'https://story3.com/api/v2/twists',
        { ...twist1, "hashParentId": rootHashId },
        { headers: { 'x-auth-token': token } }
    );

    const twist2res = await axios.post(
        'https://story3.com/api/v2/twists',
        { ...twist2, "hashParentId": rootHashId },
        { headers: { 'x-auth-token': token } }
    );

    const twist11res = await axios.post(
        'https://story3.com/api/v2/twists',
        { ...twist11, "hashParentId": twist1res.data.hashId },
        { headers: { 'x-auth-token': token } }
    );

    const twist12res = await axios.post(
        'https://story3.com/api/v2/twists',
        { ...twist12, "hashParentId": twist1res.data.hashId },
        { headers: { 'x-auth-token': token } }
    );

    const twist21res = await axios.post(
        'https://story3.com/api/v2/twists',
        { ...twist21, "hashParentId": twist2res.data.hashId },
        { headers: { 'x-auth-token': token } }
    );

    const twist22res = await axios.post(
        'https://story3.com/api/v2/twists',
        { ...twist22, "hashParentId": twist2res.data.hashId },
        { headers: { 'x-auth-token': token } }
    );

    const twist111res = await axios.post(
        'https://story3.com/api/v2/twists',
        { ...twist111, "hashParentId": twist11res.data.hashId },
        { headers: { 'x-auth-token': token } }
    );

    const twist112res = await axios.post(
        'https://story3.com/api/v2/twists',
        { ...twist112, "hashParentId": twist11res.data.hashId },
        { headers: { 'x-auth-token': token } }
    );

    const twist221res = await axios.post(
        'https://story3.com/api/v2/twists',
        { ...twist221, "hashParentId": twist22res.data.hashId },
        { headers: { 'x-auth-token': token } }
    );

    const twist222res = await axios.post(
        'https://story3.com/api/v2/twists',
        { ...twist222, "hashParentId": twist22res.data.hashId },
        { headers: { 'x-auth-token': token } }
    );

    // Publish each twist at the 1st and 2nd level
    for (const res of [twist0res, twist1res, twist2res, twist11res, twist12res, twist21res, twist22res, twist111res, twist112res, twist221res, twist222res]) {
        await axios.post(
            `https://story3.com/api/v2/twists/${res.data.hashId}/publish`,
            null,
            { headers: { 'x-auth-token': token } }
        );
    }
}

// Call the main function
main()
    .catch(e => console.error(e));
