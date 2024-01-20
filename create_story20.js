import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

/*** Data ***/

const twist0 = {
    "title": "The Enigmatic Wilderness",
    "body": "In the heart of an enigmatic wilderness lies a mystery waiting to be unveiled. You, a daring adventurer, embark on a perilous journey to discover the truth hidden in the dense foliage and mysterious ruins."
};

const twist1 = {
    "title": "Navigate the Overgrown Path",
    "body": "Your journey begins as you navigate the overgrown path, where vines hang like curtains and the sounds of exotic creatures echo through the foliage. The twists in this labyrinth promise both challenges and untold wonders."
};

const twist2 = {
    "title": "Descend into the Forgotten Caverns",
    "body": "Alternatively, you may choose to descend into the forgotten caverns beneath the jungle floor. Ancient relics and hidden chambers await those who dare to explore the depths. Your choices in the subterranean darkness will shape the outcome of your adventure."
};

const twist11 = {
    "title": "Follow the Whispering Breeze",
    "body": "In the overgrown path, a whispering breeze guides your way. The rustle of leaves hints at hidden treasures and potential dangers. Your choices in response to the mysterious whispers will determine your fate in this verdant maze."
};

const twist12 = {
    "title": "Confront the Guardian Serpent",
    "body": "Choosing the overgrown path leads to a confrontation with the Guardian Serpent, a mythical creature that protects the heart of the jungle. A battle of wits ensues, and your decisions will either earn the serpent's trust or provoke its wrath."
};

const twist21 = {
    "title": "Illuminate the Bioluminescent Caverns",
    "body": "Venturing into the forgotten caverns, you discover bioluminescent wonders illuminating the subterranean world. The twists within the caverns present choices that involve deciphering ancient glyphs and understanding the mystical energy that permeates the air."
};

// Twist 22 and further twists are omitted for brevity.

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

    // Twist 22 and further twists are omitted for brevity.

    // Publish each twist at the 1st level
    for (const res of [twist0res, twist1res, twist2res, twist11res, twist12res, twist21res]) {
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
