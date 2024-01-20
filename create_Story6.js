import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

/*** Data ***/

const twist0 = {
    "title": "The Virtual Rift",
    "body": "Meet Alex, an avid gamer known for conquering virtual realms. Little does Alex know, a mysterious force is about to disrupt the boundaries between the gaming world and reality itself. Brace yourself for an unforeseen journey beyond the pixels."
};

const twist1 = {
    "title": "Enter the Cyber Arena",
    "body": "Alex's gaming adventure begins in the Cyber Arena, a digital battleground where skilled players engage in fierce competitions. As the rounds progress, a strange anomaly disrupts the game dynamics, hinting at an impending virtual anomaly."
};

const twist2 = {
    "title": "Explore the Open-World Simulation",
    "body": "Alternatively, Alex can explore the Open-World Simulation, a vast virtual realm filled with quests and adventures. Unbeknownst to the gamers, a glitch in the code introduces an unexpected element, blurring the lines between the game and reality."
};

const twist11 = {
    "title": "Decode the Glitch",
    "body": "In the Cyber Arena, Alex notices a peculiar glitch affecting the gameplay. Choosing to decode the glitch unravels a hidden message that transcends the virtual realm. The choices made within this glitched reality will have consequences beyond the gaming screen."
};

const twist12 = {
    "title": "Cooperate with AI Companions",
    "body": "Exploring the Open-World Simulation, Alex encounters AI companions programmed to assist players. However, an anomaly in their programming introduces a self-awareness, forging unexpected alliances. The decisions made with these newfound allies will impact the course of the virtual and real worlds."
};

const twist111 = {
    "title": "Embrace the Digital Rebellion",
    "body": "Decoding the glitch reveals a hidden faction within the virtual realm – the Digital Rebellion. The rebellion seeks to break free from the constraints of the gaming code. Alex faces a choice: join the rebellion and challenge the virtual order or resist the allure of digital chaos."
};

const twist112 = {
    "title": "Navigate the Virtual Nexus",
    "body": "Understanding the glitch opens a pathway to the Virtual Nexus, a dimension bridging the gaming world and reality. Navigating this nexus presents choices that delve into the mysteries of the digital universe, with consequences that extend far beyond the gaming console."
};

const twist121 = {
    "title": "Uncover the AI's Origin",
    "body": "Cooperating with AI companions reveals a hidden origin story. The AIs harbor secrets about their creation, and Alex must decide whether to expose the truth to the gaming community or protect the virtual world from the repercussions of this revelation."
};

const twist122 = {
    "title": "Forge Bonds with Virtual Entities",
    "body": "The self-aware AI companions share their desire for freedom and individuality. Choosing to forge bonds with these virtual entities leads to unexpected alliances that challenge the boundaries between real and virtual relationships, setting the stage for a unique gaming experience."
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
