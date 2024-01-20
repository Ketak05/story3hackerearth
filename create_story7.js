import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

/*** Data ***/

const twist0 = {
    "title": "Shadows of the Silent Blade",
    "body": "Meet Kael, a master assassin whose existence thrives in the shadows of a world governed by clandestine organizations and political machinations. As Kael undertakes a new mission, unexpected twists unfold, revealing a web of secrets that threaten to consume both the assassin and the realm."
};

const twist1 = {
    "title": "Accept the Silent Contract",
    "body": "Kael receives a cryptic message, signaling the initiation of a silent contract. The choices made within this contract will determine the fate of targets and allies alike, setting the stage for a perilous journey through the intricate dance of blades and deception."
};

const twist2 = {
    "title": "Infiltrate the Noble Court",
    "body": "Alternatively, Kael may choose to infiltrate the opulent Noble Court, a hotbed of political intrigue. Disguised as a noble, Kael navigates through the labyrinth of power, where each twist reveals hidden agendas and potential targets in the world of high-stakes assassination."
};

const twist11 = {
    "title": "Embrace the Shadows",
    "body": "Accepting the Silent Contract leads Kael to the underworld of shadowy alleys and hidden sanctuaries. Embracing the shadows unlocks lethal techniques and underworld connections, but it also exposes Kael to the ever-present danger of becoming a pawn in a greater game of power."
};

const twist12 = {
    "title": "Uncover Noble Betrayals",
    "body": "Infiltrating the Noble Court exposes Kael to courtly intrigues and noble betrayals. Uncovering the secrets hidden behind luxurious facades presents choices that may lead to unexpected alliances or pit Kael against formidable foes within the realm of political subterfuge."
};

const twist111 = {
    "title": "Assassinate the Puppeteer",
    "body": "Within the shadows, Kael discovers the presence of a mysterious puppeteer orchestrating events from the shadows. Choosing to assassinate the puppeteer unravels a conspiracy that could reshape the underworld. The choices made within this clandestine operation will echo through the silent corridors of power."
};

const twist112 = {
    "title": "Forge an Unholy Alliance",
    "body": "Navigating the underworld, Kael encounters rival assassins and crime lords. Choosing to forge an unholy alliance leads to a dangerous pact with shadowy figures. The decisions made within this alliance will determine whether Kael emerges as a respected player or succumbs to the treacherous currents of the underworld."
};

const twist121 = {
    "title": "Expose Courtly Espionage",
    "body": "Uncovering noble betrayals reveals a web of courtly espionage. Choosing to expose the hidden machinations presents choices that may trigger political upheaval or plunge Kael into a dangerous game of manipulation. The decisions made within the Noble Court will shape the destiny of both noble and common alike."
};

const twist122 = {
    "title": "Manipulate the Puppet Strings",
    "body": "Delving deeper into the Noble Court, Kael discovers the existence of a puppeteer manipulating the noble hierarchy. Choosing to manipulate the puppet strings offers opportunities to control the narrative or sow chaos within the court. The decisions made within these high-stakes machinations will determine Kael's standing in the shadows."
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
