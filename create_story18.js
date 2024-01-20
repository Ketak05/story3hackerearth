import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

/*** Data ***/

const twist0 = {
    "title": "Echoes of Revolution",
    "body": "In the turbulent times of a bygone era, where the air was charged with the spirit of change, you find yourself at the heart of a brewing revolution. The choices you make will shape the course of history, intertwining your fate with the echoes of a nation on the brink."
};

const twist1 = {
    "title": "Join the Revolutionary Vanguard",
    "body": "Inspired by the call for change, you decide to join the ranks of the revolutionary vanguard. The choices made within this faction would determine whether you rise as a leader or navigate the delicate balance between ideology and pragmatism."
};

const twist2 = {
    "title": "Support the Royalists",
    "body": "Opting for a different path, you pledge allegiance to the royalists, seeking to preserve the existing order. The choices made within the royalist faction would determine whether you become a trusted advisor to the monarchy or face the consequences of loyalty in a changing world."
};

const twist3 = {
    "title": "Navigate the Shadows as a Spy",
    "body": "Preferring a covert approach, you choose the life of a spy, navigating the shadows between the revolutionaries and the royalists. The choices made within the clandestine world of espionage would determine whether you become a master manipulator or risk being exposed as a double agent."
};

const twist11 = {
    "title": "Lead the Vanguard's Charge",
    "body": "Within the revolutionary vanguard, you rise as a charismatic leader, spearheading the charge for change. The choices made within the battlefield of ideals would determine whether your vision of a new era becomes a reality or if the cost of revolution proves too high."
};

const twist12 = {
    "title": "Negotiate for Compromise",
    "body": "Balancing ideology with practicality, you choose to negotiate for compromise within the revolutionary vanguard. The choices made within the delicate art of diplomacy would determine whether a middle ground can be found or if the revolution descends into internal strife."
};

const twist21 = {
    "title": "Advise the Monarchy Strategically",
    "body": "As a loyal supporter of the royalists, you become a trusted advisor, providing strategic counsel to the monarchy. The choices made within the royal court would determine whether your guidance strengthens the throne or if the winds of change sweep away the traditional order."
};

const twist22 = {
    "title": "Suppress Dissent with Force",
    "body": "Embracing a hardline stance, you advocate for suppressing dissent within the royalist faction, using force to quell the revolutionary fervor. The choices made within this path of authority would determine whether you maintain control or if the seeds of rebellion grow stronger."
};

const twist31 = {
    "title": "Uncover Revolutionary Secrets",
    "body": "Operating in the shadows, you excel as a spy, uncovering valuable revolutionary secrets. The choices made within the world of espionage would determine whether your information alters the course of the revolution or if the truth becomes a weapon that backfires."
};

const twist32 = {
    "title": "Manipulate Both Sides",
    "body": "Mastering the art of manipulation, you play both sides, sowing discord between the revolutionaries and royalists. The choices made within this web of deception would determine whether you emerge as a puppet master or if your tangled schemes lead to your own downfall."
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

    const twist3res = await axios.post(
        'https://story3.com/api/v2/twists',
        { ...twist3, "hashParentId": rootHashId },
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

    const twist31res = await axios.post(
        'https://story3.com/api/v2/twists',
        { ...twist31, "hashParentId": twist3res.data.hashId },
        { headers: { 'x-auth-token': token } }
    );

    const twist32res = await axios.post(
        'https://story3.com/api/v2/twists',
        { ...twist32, "hashParentId": twist3res.data.hashId },
        { headers: { 'x-auth-token': token } }
    );

    // Publish each twist at the 1st and 2nd level
    for (const res of [twist0res, twist1res, twist2res, twist3res, twist11res, twist12res, twist21res, twist22res, twist31res, twist32res,]) {
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
