import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

/*** Data ***/

const twist0 = {
    "title": "The Silent Asylum",
    "body": "In the outskirts of a forgotten town, where time seemed to stand still and the whispers of the past echoed through the desolate halls, Dr. Emily Harris, a renowned psychologist, received an unsettling invitation. The decaying remnants of St. Agnes Asylum, long abandoned and shrouded in local legends, harbored the secrets of a dark experiment. Determined to unravel the truth, Dr. Harris embarked on a journey that would blur the line between sanity and the paranormal."
};

const twist1 = {
    "title": "Explore the Abandoned Halls",
    "body": "To uncover the asylum's secrets, Dr. Harris decided to explore its abandoned halls. The choices made within the dilapidated corridors would determine whether she could confront the lingering spirits of the past or succumb to the psychological horrors that lurked in the shadows."
};

const twist2 = {
    "title": "Analyze the Haunting Records",
    "body": "Alternatively, Dr. Harris could choose to analyze the haunting records left behind. The choices made within the cryptic case files and the remnants of patient logs would either unveil a sinister truth or plunge her into a realm where the line between reality and the supernatural blurred."
};

const twist11 = {
    "title": "Confront the Tormented Spirits",
    "body": "Exploring the abandoned halls, Dr. Harris confronted tormented spirits of former patients. The choices made within these spectral encounters would either offer solace to the restless souls or entangle her in the malevolent energy that permeated the asylum's decaying walls."
};

const twist12 = {
    "title": "Face the Psychological Horrors",
    "body": "Choosing to analyze the haunting records, Dr. Harris delved into the twisted minds of the asylum's former inhabitants. The choices made within the psychological depths would either provide clarity to the asylum's dark history or lead her into a nightmarish descent into madness."
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

    // Publish each twist at the 1st and 2nd level
    for (const res of [twist0res, twist1res, twist2res, twist11res, twist12res]) {
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
