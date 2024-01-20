import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

/*** Data ***/

const twist0 = {
    "title": "Cipher Protocol",
    "body": "In the heart of the neon-lit metropolis known as Cipher City, where skyscrapers touched the heavens and the pulse of the city resonated with an undercurrent of intrigue, a skilled operative named Alex Cipher found themselves thrust into a high-stakes mission. A mysterious organization, known only as 'The Black Cipher,' had unleashed chaos, and the city's fate hung in the balance. Armed with cutting-edge technology and a relentless determination, Alex Cipher embarked on a mission to unravel the enigma behind The Black Cipher's nefarious plans."
};

const twist1 = {
    "title": "Infiltrate the Neon Nexus",
    "body": "To dismantle The Black Cipher's operations, Alex decided to infiltrate the Neon Nexus, an underground labyrinth where the organization's elusive leaders schemed. The choices made within the covert operation would determine whether Alex could navigate the shadows and extract vital intel or be swallowed by the darkness of the criminal underworld."
};

const twist2 = {
    "title": "Decipher the Quantum Encryption",
    "body": "Alternatively, Alex could choose to decipher the quantum encryption that shielded The Black Cipher's communications. The choices made within this digital battlefield would either expose the organization's plans or plunge Alex into a virtual war where every keystroke could be a matter of life or death."
};

const twist11 = {
    "title": "Navigate the Underworld",
    "body": "Infiltrating the Neon Nexus, Alex navigated the treacherous underworld of Cipher City. The choices made within the labyrinthine alleys and secret meeting spots would either lead to crucial allies or pit Alex against ruthless adversaries, each with their own agenda in the city's shadowy depths."
};

const twist12 = {
    "title": "Outsmart the Quantum Guardians",
    "body": "Choosing to decipher the quantum encryption, Alex faced off against the Quantum Guardians, The Black Cipher's elite digital enforcers. The choices made within this virtual battleground would test Alex's hacking skills and strategic prowess against an enemy that existed in the realm of ones and zeros."
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
