import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

/*** Data ***/

const twist0 = {
    "title": "A Symphony of Sunflowers",
    "body": "In the quiet countryside of Harmony Grove, where time flowed gracefully like a meandering river, lived a young woman named Lily. Surrounded by fields of golden sunflowers, Lily found solace in their cheerful faces that mirrored the warmth of the sun. One day, as she strolled through the sun-kissed meadows, Lily discovered a hidden glade where a symphony of sunflowers awaited, each petal humming a melody that resonated with the beating heart of nature."
};

const twist1 = {
    "title": "Dance with the Petals",
    "body": "Captivated by the enchanting symphony, Lily decided to dance with the sunflowers' petals. The choices she made within the rhythmic dance would intertwine her spirit with the floral notes, creating a harmonious connection between the human and natural worlds."
};

const twist2 = {
    "title": "Paint the Sunset Canvas",
    "body": "Alternatively, Lily could choose to paint the sunset canvas using the sunflowers as her palette. The choices made within each brushstroke would weave a masterpiece that captured the ephemeral beauty of the setting sun, immortalizing the moment in strokes of vibrant hues."
};

const twist11 = {
    "title": "Embrace the Melody of Joy",
    "body": "Dancing among the sunflowers, Lily embraced the melody of joy. The choices made within each twirl and sway allowed her to communicate with the floral symphony, creating a bond that transcended the boundaries of sound and silence."
};

const twist12 = {
    "title": "Capture the Essence of Sunlight",
    "body": "Choosing to paint the sunset canvas, Lily endeavored to capture the essence of sunlight on her canvas. The choices made within the delicate strokes and bold splashes would reflect the vibrant energy of the sunflowers, turning the canvas into a portal to the tranquil realm of Harmony Grove."
};

const twist111 = {
    "title": "Commune with Nature's Heartbeat",
    "body": "As Lily embraced the melody of joy, she felt a connection with the heartbeat of nature. Choosing to commune with this heartbeat allowed her to understand the language of the sunflowers, making her an integral part of the symphony that echoed through the meadows."
};

const twist112 = {
    "title": "Share the Dance with Kindred Spirits",
    "body": "In the dance with the sunflowers, Lily discovered kindred spirits – ethereal beings that joined her in the celebration of life. Choosing to share the dance with these spirits opened a gateway to a realm where the boundaries between the physical and spiritual worlds dissolved into pure harmony."
};

const twist121 = {
    "title": "Eternalize the Sunset Symphony",
    "body": "Painting the sunset canvas, Lily aimed to eternalize the sunset symphony. The choices made within the strokes of her brush allowed her to capture not just a moment but the essence of the sunflowers' song, creating a timeless masterpiece that would resonate through the ages."
};

const twist122 = {
    "title": "Gift the Painting to the Earth",
    "body": "Choosing to paint the sunset canvas as an offering, Lily decided to gift her masterpiece to the Earth. The choices made within this act of selflessness transformed the painting into a source of inspiration for the sunflowers, bringing renewed vitality to the meadows of Harmony Grove."
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
