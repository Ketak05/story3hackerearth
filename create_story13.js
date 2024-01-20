import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

/*** Data ***/

const twist0 = {
    "title": "The Whispering Shadows",
    "body": "In the mysterious town of Shadowhaven, where dusk lingered a little longer and the shadows seemed to have a life of their own, lived a curious soul named Amelia. One peculiar night, as she strolled through the ancient alleyways, the shadows began whispering secrets, unraveling tales lost to time. Each whisper carried a fragment of forgotten knowledge, and Amelia found herself drawn into a web of mysteries that transcended the boundary between reality and the ethereal realm."
};

const twist1 = {
    "title": "Follow the Shadowy Trail",
    "body": "Intrigued by the whispers, Amelia decided to follow the shadowy trail that meandered through the labyrinthine streets of Shadowhaven. The choices she made within the inky darkness would determine whether she could unveil the town's hidden history or become entwined in the enigmatic dance of the whispering shadows."
};

const twist2 = {
    "title": "Confront the Ghosts of the Past",
    "body": "Alternatively, Amelia could choose to confront the ghosts of the past, entities that lingered in the shadows, yearning to share tales of bygone eras. The choices made within these encounters would either reveal the town's untold stories or shroud Amelia in the haunting mysteries of Shadowhaven."
};

const twist11 = {
    "title": "Decode the Cryptic Symbols",
    "body": "Following the shadowy trail led Amelia to cryptic symbols etched onto ancient walls. The choices made within the deciphering of these symbols would unlock forgotten truths and reveal the purpose behind the whispering shadows' cryptic messages."
};

const twist12 = {
    "title": "Commune with the Spectral Guides",
    "body": "Confronting the ghosts of the past, Amelia encountered spectral guides who offered glimpses into the town's history. The choices made within the communion with these ethereal entities would either guide her to the heart of Shadowhaven's secrets or leave her wandering in the eternal twilight of the unknown."
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