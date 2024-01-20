// Define twists for your second story
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const twist0 = {
    "title": "The Quest for the Magical Artifact",
    "body": "You embark on a perilous journey to find the legendary Magical Artifact. The path is full of twists, and your choices will determine the outcome of your quest."
};

const twist1 = {
    "title": "The Forest of Shadows",
    "body": "Your journey begins in the mysterious Forest of Shadows. Twists are arranged in a tree-like structure, and the first choice awaits you."
};

const twist2 = {
    "title": "The Desert of Whispers",
    "body": "Alternatively, you may choose to traverse the scorching Desert of Whispers. The twists in this desert hold secrets and challenges."
};

const twist11 = {
    "title": "Follow the Enchanted Trail",
    "body": "If you chose the Forest of Shadows, you discover an enchanted trail leading deeper into the woods. Your adventure takes an unexpected turn."
};

const twist12 = {
    "title": "Confront the Shadow Creatures",
    "body": "In the Forest of Shadows, you encounter shadow creatures. A battle ensues, and your choices will determine the outcome of this confrontation."
};

const twist21 = {
    "title": "Unearth the Ancient Oasis",
    "body": "If you chose the Desert of Whispers, you stumble upon an ancient oasis. Its waters hide ancient secrets that may aid you on your quest."
};

const twist22 = {
    "title": "Face the Sandstorm",
    "body": "Choosing the Desert of Whispers brings you face to face with a raging sandstorm. Your survival skills will be put to the test as you navigate through it."
};

const twist111 = {
    "title": "Discover the Elven Sanctuary",
    "body": "Following the enchanted trail leads you to a hidden Elven Sanctuary. The elves offer guidance and present you with a choice that will shape your destiny."
};

const twist112 = {
    "title": "Uncover the Dark Sorcery",
    "body": "Your confrontation with the shadow creatures reveals dark sorcery at play. You must decide whether to embrace or resist the mysterious powers presented to you."
};

const twist221 = {
    "title": "Reveal the Mirage City",
    "body": "Surviving the sandstorm reveals a mirage city in the distance. Is it real, or is it just a trick of the desert? Your decisions will lead to the truth."
};

const twist222 = {
    "title": "Conquer the Desert Guardian",
    "body": "Facing the sandstorm was a test, and now you encounter the Desert Guardian. A battle of wits and strength awaits as you seek passage to the next stage of your journey."
};

// Modify the main function to use your twists
async function main() {
    // ... (unchanged code for getting the token)
    const token = 'am02NHpKM2JZcG9ZUmVXNTpmOGJmMGJlMTBkM2VkZTljMTU0ZTBiZjgxMTYxODc3YTkwYmU3ODM1M2YyNDY0OTA3OTEzMWQ0ZDgyNTYyNDJl';
    // Use your twists in the POST requests
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
