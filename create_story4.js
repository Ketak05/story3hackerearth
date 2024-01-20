import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

/*** Data ***/

const twist0 = {
    "title": "The Celestial Nexus",
    "body": "In a realm beyond the stars, you embark on a quest to find the Celestial Nexus, a mystical artifact said to hold unimaginable power. Your journey will take you through cosmic wonders and perilous choices."
};

const twist1 = {
    "title": "Through the Starlit Portal",
    "body": "Your journey begins as you step through a shimmering starlit portal. Twists unfold in the cosmic expanse, and the first choice awaits you amidst the constellations."
};

const twist2 = {
    "title": "Into the Nebula Veil",
    "body": "Alternatively, you may choose to navigate through the Nebula Veil, a breathtaking celestial phenomenon. The twists within the nebula promise both enlightenment and cosmic challenges."
};

const twist11 = {
    "title": "Follow the Guiding Comet",
    "body": "In the starlit realm, a guiding comet streaks across the cosmic canvas. Intrigued by its luminance, you decide to follow its path. The journey leads you to unexpected cosmic phenomena and choices that defy the laws of space and time."
};

const twist12 = {
    "title": "Challenge the Galactic Guardians",
    "body": "Choosing the starlit portal leads to a confrontation with the Galactic Guardians, ancient beings tasked with protecting the celestial realms. A cosmic battle ensues, and your decisions will determine whether you earn their favor or face the consequences of cosmic defiance."
};

const twist21 = {
    "title": "Navigate the Celestial Labyrinth",
    "body": "Venturing into the Nebula Veil, you encounter the Celestial Labyrinth—a mesmerizing maze of swirling lights and ethereal pathways. Each twist within the labyrinth presents choices that test your cosmic intuition and courage."
};

const twist22 = {
    "title": "Commune with Cosmic Entities",
    "body": "Within the Nebula Veil, you come across cosmic entities that exist beyond mortal comprehension. They offer insights and challenges, and your interactions with them will shape the cosmic narrative of your quest."
};

const twist111 = {
    "title": "Discover the Starforge",
    "body": "Following the guiding comet leads you to the Starforge, a celestial forge where stars are born. The energy within is both awe-inspiring and perilous. Your choices within the Starforge will determine the nature of the power you wield on your quest."
};

const twist112 = {
    "title": "Unlock the Cosmic Harmony",
    "body": "Confronting the Galactic Guardians unveils the secrets of cosmic harmony. They present you with a choice—to attune yourself to the celestial balance or challenge the established order. Your decision will echo across the cosmos."
};

const twist221 = {
    "title": "Decode the Nebula Cipher",
    "body": "Navigating the Celestial Labyrinth unveils the Nebula Cipher, a cosmic code that holds the key to the Celestial Nexus. Deciphering its intricacies requires a keen mind and intuitive understanding. Your mastery of the Nebula Cipher will determine your progress in the quest."
};

const twist222 = {
    "title": "Merge with Nebula Essence",
    "body": "Communing with cosmic entities offers the opportunity to merge with Nebula Essence—a powerful force that transcends physical form. Embracing this essence opens new realms of perception, but it also comes with challenges as you navigate the cosmos in an altered state."
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