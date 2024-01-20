import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

/*** Data ***/

const twist0 = {
    "title": "Transient Reckoning",
    "body": "In the quaint town of Everhaven, where time seemed to flow at its own leisurely pace, a man named Adrian lived an ordinary life. One peculiar day, as the sun dipped below the horizon, Adrian found himself standing on the edge of a cliff overlooking the mysterious Azure Valley. The air crackled with an otherworldly energy, and before he could comprehend the strangeness of the moment, everything went dark. Adrian couldn't understand anything; he just died, or so it seemed. However, the next moment, he was alive again, standing on the same cliff, bewildered and devoid of any memory of his demise."
};

const twist1 = {
    "title": "The Enigmatic Azure Valley",
    "body": "As Adrian grappled with the inexplicable event, he decided to explore the enigmatic Azure Valley. The choices he made within the valley would unfold the mysteries that surrounded him. The verdant landscapes and surreal phenomena within the valley seemed to hold the key to the transient reckoning that befell Adrian."
};

const twist2 = {
    "title": "Confront the Timeless Guardian",
    "body": "Alternatively, Adrian could choose to confront the Timeless Guardian, a mysterious entity said to be the keeper of the Azure Valley. The choices made within this encounter would determine whether Adrian could unravel the secrets of the valley or remain trapped in the endless cycle of life and death."
};

const twist11 = {
    "title": "Follow the Whispering Breezes",
    "body": "Venturing deeper into the Azure Valley, Adrian followed the mesmerizing whispers of the breezes that seemed to carry tales of forgotten times. The choices made within the whispers would guide him to ancient relics and hidden truths that held the answers to his peculiar predicament."
};

const twist12 = {
    "title": "Unlock the Temporal Gateway",
    "body": "Facing the Timeless Guardian, Adrian discovered the existence of a Temporal Gateway concealed within the Azure Valley. The choices made within this mystical gateway would either release Adrian from the transient reckoning or bind him to an even more profound enigma that spanned across the fabric of time itself."
};

const twist111 = {
    "title": "Unearth the Chrono Relics",
    "body": "Following the whispering breezes led Adrian to the Chrono Relics, ancient artifacts that held the memories of those who traversed the valley before him. Choosing to unearth the relics would grant Adrian glimpses into his own past lives and the reasons behind his recurring demise."
};

const twist112 = {
    "title": "Merge with Temporal Echoes",
    "body": "Within the Temporal Gateway, Adrian encountered the opportunity to merge with the temporal echoes of his past and future selves. Choosing to merge with these echoes would blur the boundaries of his existence, granting him glimpses of alternate realities and the true nature of the Azure Valley."
};

const twist121 = {
    "title": "Master the Time-Locked Arts",
    "body": "Unraveling the secrets of the Temporal Gateway, Adrian gained insight into the Time-Locked Arts—a mystical discipline that could manipulate the flow of time. Choosing to master these arts would empower him to navigate the transient reckoning and reshape the reality within the Azure Valley."
};

const twist122 = {
    "title": "Challenge the Temporal Paradox",
    "body": "Embracing the temporal echoes, Adrian discovered the existence of a looming temporal paradox threatening to unravel the fabric of reality. Choosing to challenge the temporal paradox would lead him into a cosmic confrontation, where the choices made would either stabilize the Azure Valley or plunge it into eternal chaos."
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