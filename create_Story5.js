import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

/*** Data ***/

const twist0 = {
    "title": "The Chronicles of Eternity",
    "body": "In the realm of timeless wonders, you embark on an epic journey in search of the Chronicles of Eternity, a legendary tome said to hold the secrets of existence. Prepare for a quest where every choice shapes the fabric of reality itself."
};

const twist1 = {
    "title": "Ascend the Celestial Spire",
    "body": "Your journey commences by ascending the Celestial Spire, a towering structure that pierces the very heavens. As you climb, each twist reveals celestial vistas and cosmic challenges, setting the stage for your cosmic odyssey."
};

const twist2 = {
    "title": "Descend into the Abyssal Depths",
    "body": "Alternatively, you may choose to descend into the Abyssal Depths, an otherworldly chasm that stretches into the unknown. The twists within the abyss promise encounters with ancient entities and choices that resonate with the echoes of eternity."
};

const twist11 = {
    "title": "Embrace the Starlight Serenity",
    "body": "As you ascend, a serene aura of starlight envelopes you. The Starlight Serenity offers glimpses into celestial harmonies and whispers of astral wisdom. Your choices within this ethereal realm will determine the nature of your cosmic affinity."
};

const twist12 = {
    "title": "Challenge the Celestial Guardians",
    "body": "Choosing to ascend leads to a meeting with the Celestial Guardians, ancient beings tasked with safeguarding the Celestial Spire. A cosmic trial awaits, and your decisions will echo through the astral planes, shaping the very destiny of the spire and beyond."
};

const twist21 = {
    "title": "Confront the Void's Embrace",
    "body": "Descending into the Abyssal Depths, you confront the Void's Embrace—a cosmic force that seeks to consume all. The twists within the abyss present choices that test your resolve against the encroaching darkness, revealing the cosmic consequences of your decisions."
};

const twist22 = {
    "title": "Forge Alliances with Astral Entities",
    "body": "Within the Abyssal Depths, you encounter astral entities that dwell in the cosmic shadows. Forming alliances with these enigmatic beings presents choices that may unveil hidden truths or plunge you into the depths of cosmic intrigue."
};

const twist111 = {
    "title": "Attune to the Cosmic Harmony",
    "body": "Embracing the Starlight Serenity allows you to attune to the Cosmic Harmony—a state where the rhythms of the cosmos become your guide. Your choices within this celestial symphony will influence the cosmic resonances that shape your journey."
};

const twist112 = {
    "title": "Unleash the Astral Nova",
    "body": "Confronting the Celestial Guardians unveils the secret of the Astral Nova—a celestial energy of immense power. Choosing to unleash this astral force comes with cosmic repercussions, as the very fabric of reality shifts with each unleashed nova."
};

const twist221 = {
    "title": "Master the Abyssal Whispers",
    "body": "Confronting the Void's Embrace allows you to master the Abyssal Whispers—a cryptic language of the cosmos. Your choices within the whispers may reveal ancient prophecies or unravel cosmic enigmas that shape your journey through the Abyssal Depths."
};

const twist222 = {
    "title": "Navigate the Cosmic Nexus",
    "body": "Forging alliances with astral entities grants you access to the Cosmic Nexus—a crossroads of cosmic energies. Navigating the nexus presents choices that intertwine destinies, forging paths that lead to both enlightenment and cosmic uncertainty."
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
