import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

/*** data ***/

//          twist0        //
//         /   |   \      //
//  twist1 twist2 twist3  //
//                   |    //
//                twist31 //

// title should be from 1 to 80 chars
// body should be from 40 to 1200 chars

const twist0 = {
    "title": "Eternal Echoes: A Love Rekindled",
    "body": "Amelia stood at the edge of the pier, the salty breeze tousling her hair as memories of lost love flooded her thoughts. The rhythmic crashing of waves seemed to echo the heartbeat of her longing. Little did she know that fate had a different plan, one that would set her on a path to rediscover a love she thought was forever lost."
};

const twist1 = {
    "title": "Chance Encounter at the Cafe",
    "body": "Amelia decided to take a stroll through the city, hoping to clear her mind. As she entered a quaint cafe, she was captivated by a familiar face. It was Alex, her lost love, sitting alone with a cup of coffee. The air was filled with tension as their eyes met after years of separation."
};

const twist2 = {
    "title": "Rekindling the Flame",
    "body": "Awkward smiles turned into heartfelt conversations as Amelia and Alex revisited the past. The cafe became a haven for their rekindling love, each word and shared laugh reigniting the flame that had never truly extinguished. The world outside seemed to fade away as they embraced the opportunity to start anew."
};

const twist3 = {
    "title": "Unveiling Secrets of the Past",
    "body": "Amelia and Alex delved into the secrets that led to their initial parting. Misunderstandings and unspoken feelings emerged, unraveling the truth behind their separation. With each revelation, their connection deepened, paving the way for a future free from the shackles of the past."
};

const twist11 = {
    "title": "Awkward Tensions",
    "body": "The reunion at the cafe brought forth a mix of emotions. Awkward tensions lingered as Amelia and Alex navigated the delicate balance between the past and the present. Unspoken words hung in the air, creating an atmosphere charged with anticipation."
};

const twist12 = {
    "title": "A Hesitant Invitation",
    "body": "Amelia hesitated before inviting Alex to join her for a walk by the pier. The weight of unspoken history loomed large, but a spark of curiosity and a longing for closure prompted her to extend the invitation. The pier became a backdrop for their journey of rediscovery."
};

const twist21 = {
    "title": "Rediscovering Shared Dreams",
    "body": "As Amelia and Alex shared stories, they discovered dreams and aspirations that still resonated with each other. The realization that their paths had never truly diverged fueled a newfound hope for a shared future. The cafe transformed into a sanctuary where dreams could be pursued together."
};

const twist22 = {
    "title": "Fear of Vulnerability",
    "body": "Amelia and Alex grappled with the fear of vulnerability, unsure whether reopening old wounds would lead to healing or further pain. The cafe conversations became a delicate dance between past regrets and the potential for a future built on shared vulnerability."
};

const twist31 = {
    "title": "A Love Rediscovered",
    "body": "As Amelia and Alex confronted the ghosts of their past, they found solace in the shared journey of healing. The pier, once a symbol of lost love, now witnessed the rebirth of a romance stronger than ever. Together, they embraced the promise of a love rediscovered."
};

const twist32 = {
    "title": "Embracing the Unknown",
    "body": "This twist is at depth of 2. User must unlock twist1 first."
};
/*** /data ***/

async function main() {
    // Replace with your own API token from https://story3.com/profile
    const token = 'am02NHpKM2JZcG9ZUmVXNTpmOGJmMGJlMTBkM2VkZTljMTU0ZTBiZjgxMTYxODc3YTkwYmU3ODM1M2YyNDY0OTA3OTEzMWQ0ZDgyNTYyNDJl';

    // We should create story first. In order to do that we do POST request with root twist data.
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

    // We are ready to add twists. We do POST request with twist data and specify hashId of the parent.
    const twist1res = await axios.post(
        'https://story3.com/api/v2/twists',
        {
            ...twist1, // copy data from `twist1`
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

    // publish each twist at the 1st level
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

main()
    .catch(e => console.error(e))
