import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

/*** Data ***/

const twist0 = {
    "title": "Operation Midnight Escape",
    "body": "In the dimly lit alleys of a bustling city, where secrets exchanged hands and shadows concealed the unseen, Mark Harris, a former intelligence operative, found himself entangled in a web of deceit. A critical piece of information, hidden in the encrypted files of a powerful organization, held the key to exposing a network of corruption. With his cover blown, Mark had only one option – execute 'Operation Midnight Escape' to retrieve the evidence and bring the truth to light."
};

const twist1 = {
    "title": "Infiltrate the Corporate Tower",
    "body": "To access the encrypted files, Mark decided to infiltrate the towering headquarters of the organization. The choices made within the covert mission would determine whether Mark could outsmart security measures and reach the heavily guarded server room or face the consequences of a high-stakes infiltration in the heart of corporate power."
};

const twist2 = {
    "title": "Covert Cyber Extraction",
    "body": "Alternatively, Mark could choose a covert cyber extraction, hacking into the organization's secure servers from the shadows. The choices made within the digital realm would either lead to a seamless extraction of the evidence or alert the organization's tech-savvy enforcers, initiating a virtual manhunt."
};

const twist11 = {
    "title": "Navigate the Executive Suites",
    "body": "Infiltrating the Corporate Tower, Mark navigated the opulent executive suites and boardrooms. The choices made within the corporate labyrinth would either lead to discovering crucial intel or pit Mark against the organization's high-ranking officials, each with their own agenda to protect."
};

const twist12 = {
    "title": "Hack the Firewall",
    "body": "Choosing the covert cyber extraction, Mark delved into the digital maze, hacking through layers of security. The choices made within the cyber realm would test Mark's hacking skills against the organization's sophisticated firewall, with every line of code bringing him closer to either success or detection."
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
