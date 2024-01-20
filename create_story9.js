import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

/*** Data ***/

const twist0 = {
    "title": "Ephemeral Shadows",
    "body": "In the clandestine realm of covert operations, where shadows dance in symphony with the echoes of secrets, a seasoned operative named Damien finds himself entangled in a web of enigma. Little does he know, a mysterious organization known as the Umbra Syndicate is orchestrating a grand conspiracy that threatens to plunge the world into chaos. As Damien delves deeper into the shadows, choices unfold like a delicate dance between light and darkness, each step leading him closer to the heart of the elusive Umbra Syndicate."
};

const twist1 = {
    "title": "Accept the Umbra Assignment",
    "body": "Damien receives a cryptic message, an invitation to accept the Umbra Assignment. The choices made within this covert mission will determine not only Damien's fate but the fate of nations entwined in the machinations of the Umbra Syndicate. As he steps into the clandestine world of espionage, shadows whisper tales of intrigue and danger."
};

const twist2 = {
    "title": "Infiltrate the Umbra Nexus",
    "body": "Alternatively, Damien may choose to infiltrate the Umbra Nexus, the elusive headquarters of the Umbra Syndicate. Within its fortified walls lie secrets that could unravel the organization's grand design. Navigating through a labyrinth of deception, the choices made within the Umbra Nexus will unveil the true face of the shadowy puppeteers pulling the strings of the world."
};

const twist11 = {
    "title": "Uncover the Phantom Operatives",
    "body": "Accepting the Umbra Assignment leads Damien to uncover the existence of Phantom Operatives, elite agents with veiled identities. The choices made within the covert operations will decide whether Damien exposes the Phantom Operatives or manipulates them as pawns in the larger game of espionage, blurring the line between friend and foe."
};

const twist12 = {
    "title": "Decrypt the Umbra Codex",
    "body": "Infiltrating the Umbra Nexus reveals the existence of the Umbra Codex, a cryptic dossier containing the Syndicate's grand design. Decrypting the Umbra Codex presents choices that could either unveil the Syndicate's plan to the world or manipulate it for personal gain, setting the stage for a high-stakes game of espionage."
};

const twist111 = {
    "title": "Expose the Umbra Conspiracy",
    "body": "Uncovering the Phantom Operatives leads Damien to the heart of the Umbra Conspiracy. Choosing to expose the Syndicate's grand design unravels a chain of events that could shake the foundations of world powers. The choices made within this revelation will determine whether Damien becomes a hero or a pawn in the global chessboard of espionage."
};

const twist112 = {
    "title": "Manipulate the Operative Strings",
    "body": "Deciphering the Umbra Codex grants Damien the ability to manipulate the Phantom Operatives from the shadows. Choosing to pull the strings of the operatives presents opportunities to influence the Syndicate's actions, but it also risks Damien becoming entangled in a web of deceit. The decisions made within this delicate dance will determine whether Damien emerges as a puppeteer or a puppet in the game of shadows."
};

const twist121 = {
    "title": "Trigger Umbra Dissension",
    "body": "Exposing the Umbra Conspiracy triggers dissension within the Syndicate's ranks. Choosing to exploit the internal strife presents choices that may either bring down the Umbra Syndicate or lead to a more formidable and ruthless organization rising from its ashes. The decisions made within this power struggle will shape the future of clandestine operations."
};

const twist122 = {
    "title": "Master the Umbra Arsenal",
    "body": "Manipulating the Operative Strings grants Damien access to the Umbra Arsenal, a clandestine cache of advanced weaponry and technology. Choosing to master this arsenal offers strategic advantages, but it also draws the attention of rival organizations. The choices made within the Umbra Arsenal will determine whether Damien becomes a guardian of balance or a harbinger of technological warfare."
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