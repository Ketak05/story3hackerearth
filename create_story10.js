import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

/*** Data ***/

const twist0 = {
    "title": "A Brush with the Unexplained",
    "body": "In the bustling city of Metroville, where the city lights never slept and the streets echoed with the symphony of urban life, Alex found himself entangled in a peculiar and unsettling mystery. One ordinary evening, as he commuted home through the crowded subway, an inexplicable event occurred. In a fraction of a second, Alex felt a sudden jolt, as if reality itself had glitched. Bewildered and disoriented, he found himself standing on the same subway platform, alive and intact, yet utterly mystified by the unexplained lapse in time."
};

const twist1 = {
    "title": "Navigate the Shadows of Metroville",
    "body": "Perplexed by his inexplicable experience, Alex decided to navigate the shadows of Metroville in search of answers. The choices he made within the city's bustling streets, neon-lit alleys, and hidden corners would either lead him to unravel the mystery or leave him stranded in the enigma of the modern urban landscape."
};

const twist2 = {
    "title": "Investigate the Anomalies",
    "body": "Alternatively, Alex could choose to investigate the anomalies that plagued the city. From mysterious occurrences in technology to whispers of a secret organization, the choices made within this investigation would determine whether Alex could expose the hidden layers of Metroville or become entangled in a web of modern conspiracies."
};

const twist11 = {
    "title": "Follow the Electronic Trails",
    "body": "Venturing through Metroville's bustling streets, Alex followed the electronic trails of anomalies in technology. The choices made within the digital labyrinth would guide him to clandestine chat rooms, encrypted messages, and the hidden world where bits and bytes held the keys to the city's unexplained phenomena."
};

const twist12 = {
    "title": "Meet the Enigmatic Informant",
    "body": "Embarking on an investigation, Alex encountered an enigmatic informant who claimed to have insights into the city's anomalies. The choices made within the informant's world of coded messages and shadowy meetings would either lead Alex closer to the truth or plunge him into a realm of uncertainty and mistrust."
};

const twist111 = {
    "title": "Decrypt the Cybernetic Cipher",
    "body": "Following the electronic trails unveiled a cybernetic cipher, a code that held the city's deepest secrets. Choosing to decrypt this digital enigma would expose Alex to a world of corporate espionage, high-tech intrigue, and a conspiracy that reached the highest echelons of Metroville's power structure."
};

const twist112 = {
    "title": "Navigate the Underground Network",
    "body": "Meeting the enigmatic informant revealed the existence of an underground network operating beneath Metroville's glossy surface. Choosing to navigate this clandestine network would lead Alex to encounters with hackers, whistleblowers, and a shadowy resistance that sought to reveal the city's hidden truths."
};

const twist121 = {
    "title": "Expose Corporate Machinations",
    "body": "Deciphering the cybernetic cipher exposed corporate machinations that manipulated the city's technological landscape. Choosing to expose these machinations would set in motion a chain of events that could either liberate Metroville from corporate control or plunge it into a digital dystopia."
};

const twist122 = {
    "title": "Uncover Government Intrigue",
    "body": "Navigating the underground network uncovered government intrigue and covert operations within Metroville. Choosing to delve into this labyrinth of secrets would reveal a web of political conspiracies, surveillance programs, and the blurred lines between security and infringement of personal freedom."
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
