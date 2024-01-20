import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

/*** data ***/

// title should be from 1 to 80 chars
// body should be from 40 to 1200 chars

const twist0 = {
    "title": "Shadows of Deceit: A Crime Fiction Saga",
    "body": "Detective Olivia Kane's sharp eyes scanned the dimly lit alley, the cold wind carrying a sense of foreboding. The crime scene before her spoke of deception and hidden motives. Determined, she stepped into the labyrinth of secrets, vowing to uncover the truth lurking in the shadows."
};

const twist1 = {
    "title": "Mysterious Crime Scene",
    "body": "Olivia examined the crime scene meticulously. A cryptic symbol left at the scene hinted at a sinister motive behind the murder. As she delved deeper into the investigation, she realized that this was no ordinary crime – it was part of a larger, more complex web of criminal activity."
};

const twist2 = {
    "title": "Underworld Connections",
    "body": "Olivia's investigation led her to the city's underworld, where she discovered a network of crime lords with their own agendas. As she navigated the dangerous territory, she found herself entangled in a game of cat and mouse, with each twist revealing more about the dark forces at play."
};

const twist3 = {
    "title": "Betrayal Within the Force",
    "body": "In a shocking turn of events, Olivia uncovered a traitor within her own police force. The revelation sent shockwaves through the department, casting doubt on her allies. Now, Olivia must navigate the treacherous waters of both the criminal underworld and the very organization sworn to uphold justice."
};

const twist11 = {
    "title": "Witness Tampering",
    "body": "Olivia discovers that crucial witnesses are being intimidated to silence. As she attempts to unravel the truth, she faces increasing threats against those who hold the key to solving the case. The line between right and wrong becomes blurred as Olivia fights to protect the integrity of the investigation."
};

const twist12 = {
    "title": "Coded Messages",
    "body": "Amidst the chaos, Olivia deciphers a series of coded messages that lead her to a clandestine meeting. Unraveling the hidden meanings, she realizes the messages unveil a deeper conspiracy. Racing against time, Olivia follows the trail, uncovering a web of corruption that goes beyond what she could have imagined."
};

const twist21 = {
    "title": "False Alibis",
    "body": "As Olivia interrogates suspects, she uncovers a web of false alibis designed to mislead the investigation. Each suspect becomes a pawn in a larger game, and Olivia must sift through the lies to expose the truth. The quest for justice intensifies as she navigates the intricate layers of deception."
};

const twist22 = {
    "title": "Confrontation with a Crime Lord",
    "body": "Olivia confronts a powerful crime lord who holds critical information. The high-stakes confrontation pushes her to the brink as she negotiates a delicate balance between coercion and diplomacy. The outcome of this encounter could either break the case wide open or plunge Olivia into an even darker abyss."
};

const twist31 = {
    "title": "Unlikely Partnership",
    "body": "Faced with betrayal, Olivia forms an unlikely alliance with a former adversary. Together, they work to expose the corruption within the police force and dismantle the criminal syndicate orchestrating the chaos. As tensions rise, Olivia must trust her instincts and the newfound partnership to survive."
};

const twist32 = {
    "title": "Dark Family Secrets",
    "body": "Digging deeper into the criminal underworld, Olivia stumbles upon a revelation that hits close to home. Family secrets long buried resurface, intertwining her personal history with the unfolding investigation. The lines between right and wrong blur as Olivia grapples with the shadows of her own past."
};

/*** /data ***/

// ... (similar to the previous code, creating and publishing twists)

async function mainCrimeFiction() {
    // Get api token on https://story3.com/profile
    // please DO NOT COMMIT your token, keep it safe
    // if token was leaked you can refresh it using API endpoint `/api/v2/users/me/api_key`
    const token = 'am02NHpKM2JZcG9ZUmVXNTpmOGJmMGJlMTBkM2VkZTljMTU0ZTBiZjgxMTYxODc3YTkwYmU3ODM1M2YyNDY0OTA3OTEzMWQ0ZDgyNTYyNDJl';

    const twist0res = await axios.post(
        'https://story3.com/api/v2/stories',
        twist0,
        {
            headers: {
                'x-auth-token': token
            }
        }
    );
    const rootHashId = twist0res.data.hashId;

    const twist1res = await axios.post(
        'https://story3.com/api/v2/twists',
        {
            ...twist1,
            "hashParentId": rootHashId
        },
        {
            headers: {
                'x-auth-token': token
            }
        }
    );

    const twist11res = await axios.post(
        'https://story3.com/api/v2/twists',
        {
            ...twist11,
            "hashParentId": twist1res.data.hashId
        },
        {
            headers: {
                'x-auth-token': token
            }
        }
    );

    const twist12res = await axios.post(
        'https://story3.com/api/v2/twists',
        {
            ...twist12,
            "hashParentId": twist1res.data.hashId
        },
        {
            headers: {
                'x-auth-token': token
            }
        }
    );

    const twist2res = await axios.post(
        'https://story3.com/api/v2/twists',
        {
            ...twist2,
            "hashParentId": rootHashId
        },
        {
            headers: {
                'x-auth-token': token
            }
        }
    );

    const twist21res = await axios.post(
        'https://story3.com/api/v2/twists',
        {
            ...twist21,
            "hashParentId": twist2res.data.hashId
        },
        {
            headers: {
                'x-auth-token': token
            }
        }
    );

    const twist22res = await axios.post(
        'https://story3.com/api/v2/twists',
        {
            ...twist22,
            "hashParentId": twist2res.data.hashId
        },
        {
            headers: {
                'x-auth-token': token
            }
        }
    );

    const twist3res = await axios.post(
        'https://story3.com/api/v2/twists',
        {
            ...twist3,
            "hashParentId": rootHashId
        },
        {
            headers: {
                'x-auth-token': token
            }
        }
    );

    const twist31res = await axios.post(
        'https://story3.com/api/v2/twists',
        {
            ...twist31,
            "hashParentId": twist3res.data.hashId
        },
        {
            headers: {
                'x-auth-token': token
            }
        }
    );

    const twist32res = await axios.post(
        'https://story3.com/api/v2/twists',
        {
            ...twist32,
            "hashParentId": twist3res.data.hashId
        },
        {
            headers: {
                'x-auth-token': token
            }
        }
    );

    for (const res of [twist0res, twist1res, twist2res, twist3res, twist31res, twist32res, twist11res, twist12res, twist21res, twist22res]) {
        await axios.post(
            `https://story3.com/api/v2/twists/${res.data.hashId}/publish`,
            null,
            {
                headers: {
                    'x-auth-token': token
                }
            }
        );
    }
}

mainCrimeFiction()
    .catch(e => console.error(e));