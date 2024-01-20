import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

/*** Data ***/

const twist0 = {
    "title": "Whispers in the Woods",
    "body": "In the remote town of Ravenshade, nestled at the edge of an ancient forest where the trees stood as silent witnesses to centuries of forgotten tales, paranormal investigator Sarah Mitchell received a cryptic message. The townsfolk spoke of eerie whispers in the woods, and Sarah, known for debunking myths, couldn't resist the allure of uncovering the truth. Little did she know, Ravenshade held secrets that defied explanation, and the woods concealed a malevolent force that thrived on fear."
};

const twist1 = {
    "title": "Follow the Haunting Whispers",
    "body": "To uncover the source of the eerie whispers, Sarah decided to follow the haunting sounds deeper into the heart of the ancient forest. The choices made within the twisted paths would determine whether she could confront the supernatural entity responsible or become ensnared in a spectral trap."
};

const twist2 = {
    "title": "Analyze the Occult Archives",
    "body": "Alternatively, Sarah could choose to analyze the occult archives of Ravenshade, delving into centuries-old records that hinted at the town's dark past. The choices made within the forbidden knowledge would either reveal a sinister pact with the supernatural or lead her into a labyrinth of cursed secrets."
};

const twist11 = {
    "title": "Confront the Malevolent Entity",
    "body": "Following the haunting whispers, Sarah confronted a malevolent entity that lurked within the ancient woods. The choices made within this spectral encounter would either banish the entity back into the shadows or bind Sarah's fate to the eerie whispers that echoed through Ravenshade."
};

const twist12 = {
    "title": "Unravel the Cursed Secrets",
    "body": "Choosing to analyze the occult archives, Sarah unraveled cursed secrets that bound Ravenshade to the supernatural. The choices made within the forbidden knowledge would either break the curse that plagued the town or plunge Sarah into a darkness that sought to consume all who dared to defy it."
};

const twist111 = {
    "title": "Seek Guidance from the Spirit Realm",
    "body": "In the face of the malevolent entity, Sarah discovered an ancient artifact that could open a portal to the spirit realm. The choices made within this ethereal journey would either unveil the entity's origin or entangle her in the whispers of vengeful spirits seeking justice."
};

const twist112 = {
    "title": "Confront the Entity with Ancient Rituals",
    "body": "Armed with knowledge from the occult archives, Sarah performed ancient rituals to confront the malevolent entity. The choices made within this ritualistic confrontation would either purify the ancient woods or awaken an even darker force that lurked beneath the surface."
};

const twist121 = {
    "title": "Break the Town's Pact",
    "body": "Within the cursed secrets, Sarah uncovered evidence of a dark pact between the town and supernatural forces. The choices made within the decision to break or uphold this pact would either free Ravenshade from its paranormal shackles or plunge it into an abyss of eternal darkness."
};

const twist122 = {
    "title": "Embrace the Dark Power",
    "body": "Delving deeper into the cursed secrets, Sarah discovered a forbidden path that allowed her to embrace the dark power that fueled Ravenshade. The choices made within this unholy communion would either grant her unimaginable abilities or condemn her to become a vessel for the malevolent force."
};

// Add more twists and choices to continue the story...

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
