import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

/*** Data ***/

const twist0 = {
    "title": "Echoes of the Forgotten Kingdom",
    "body": "Amelia, an archaeologist with a passion for unraveling mysteries, stumbles upon an ancient artifact that leads her to the forgotten kingdom of Eldoria. Little does she know, the echoes of a once-thriving civilization are about to awaken, unveiling secrets that have been buried for centuries."
};

const twist1 = {
    "title": "Unearth the Cryptic Artifact",
    "body": "Amelia begins her journey by unearthing a cryptic artifact in a remote archaeological site. As she examines the relic, mysterious symbols illuminate, revealing a hidden map that points to the long-lost kingdom of Eldoria. The choices she makes will shape the destiny of this ancient realm."
};

const twist2 = {
    "title": "Follow the Whispering Woods",
    "body": "Alternatively, Amelia can choose to follow the Whispering Woods, an enchanted forest rumored to be the gateway to Eldoria. As she delves into the heart of the woods, ethereal voices guide her through mystical paths, leading to a realm untouched by time."
};

const twist11 = {
    "title": "Decipher the Royal Code",
    "body": "Following the artifact's map, Amelia discovers a hidden chamber within the ancient ruins. Deciphering the Royal Code inscribed on the walls unveils the kingdom's history and its rulers. The choices made within the royal chamber will determine how the forgotten kingdom perceives its rediscoverer."
};

const twist12 = {
    "title": "Confront the Guardian Spirits",
    "body": "Venturing into the Whispering Woods, Amelia encounters Guardian Spirits who protect the secrets of Eldoria. To gain passage, she must face challenges that test her determination and respect for the ancient land. The decisions made within the woods will shape her connection with Eldoria's spiritual guardians."
};

const twist111 = {
    "title": "Revive the Kingdom's Legacy",
    "body": "Deciphering the Royal Code reveals a forgotten ritual that could revive Eldoria's legacy. Amelia faces a choice: whether to perform the ancient ceremony and bring life back to the kingdom or respect the past and leave the secrets undisturbed, allowing Eldoria to remain a silent monument to history."
};

const twist112 = {
    "title": "Navigate the Timeless Corridors",
    "body": "Mastering the Royal Code opens doorways to the Timeless Corridors, passages that transcend time and space. Amelia's choices within these corridors will lead her to pivotal moments in Eldoria's history, where she must decide whether to reshape destiny or preserve the kingdom's chronicles."
};

const twist121 = {
    "title": "Harmonize with Nature's Spirits",
    "body": "Confronting the Guardian Spirits initiates a communion with nature's elemental forces. Amelia must harmonize with these spirits to gain their trust and access the heart of Eldoria. The choices made within the Whispering Woods will determine whether she becomes a protector or a disruptor of the ancient balance."
};

const twist122 = {
    "title": "Unlock the Eldritch Archive",
    "body": "Eldoria's Guardian Spirits guide Amelia to the Eldritch Archive, a repository of ancient knowledge. Unlocking its secrets presents choices that could either enlighten the world or plunge it into chaos. Amelia must decide whether to preserve the wisdom or wield it for unforeseen consequences."
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

    const twist121res = await axios.post(
        'https://story3.com/api/v2/twists',
        { ...twist121, "hashParentId": twist12res.data.hashId },
        { headers: { 'x-auth-token': token } }
    );

    const twist122res = await axios.post(
        'https://story3.com/api/v2/twists',
        { ...twist122, "hashParentId": twist12res.data.hashId },
        { headers: { 'x-auth-token': token } }
    );

    // Publish each twist at the 1st, 2nd, and 3rd level
    for (const res of [twist0res, twist1res, twist2res, twist11res, twist12res, twist111res, twist112res, twist121res, twist122res]) {
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