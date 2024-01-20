import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

/*** data ***/

//          twist0        //
//         /   |   \      //
//  twist1 twist2 twist3  //
//         / | \ | \       //
//  twist11 ... twist32    //

// title should be from 1 to 80 chars
// body should be from 40 to 1200 chars

const twist0 = {
    "title": "Kinshuk's Turmoil: A Tale of Betrayal and Agony",
    "body": "Kinshuk had mixed emotions of betrayal, anger, and agony. He was enraged but couldn't do anything to change the course of events that led to this turmoil."
};

const twist1 = {
    "title": "Seeking Answers",
    "body": "Unable to contain his emotions, Kinshuk decided to confront the person who had betrayed him. He sought answers, hoping to understand the motives behind the actions that shattered his trust."
};

const twist2 = {
    "title": "Isolating Himself",
    "body": "Overwhelmed by the weight of betrayal, Kinshuk chose to isolate himself from those around him. The pain of deception lingered, and he grappled with the solitude of his thoughts, contemplating his next move."
};

const twist3 = {
    "title": "Plotting Revenge",
    "body": "Fuelled by anger and a desire for retribution, Kinshuk began to plot his revenge. Every moment of agony fueled his determination to make those who betrayed him pay for their actions."
};

const twist11 = {
    "title": "Confrontation Turns Violent",
    "body": "The confrontation escalates into a violent clash, leaving Kinshuk with even deeper wounds. The lines between right and wrong blur as the situation spirals out of control."
};

const twist12 = {
    "title": "Heartfelt Explanation",
    "body": "The person Kinshuk confronts provides a heartfelt explanation, revealing unexpected circumstances that led to the betrayal. Kinshuk is torn between anger and empathy, unsure of how to proceed."
};

const twist13 = {
    "title": "Unveiling a Conspiracy",
    "body": "As Kinshuk delves deeper, he uncovers a larger conspiracy involving multiple parties. The betrayal was a mere pawn move in a larger game of deceit and manipulation."
};

const twist21 = {
    "title": "Embracing Solitude",
    "body": "Isolation becomes Kinshuk's refuge, allowing him to reflect and find strength within. The quiet moments reveal hidden aspects of himself, leading to a path of self-discovery."
};

const twist22 = {
    "title": "Seeking Comfort in Friends",
    "body": "Kinshuk decides to lean on his friends for support during this difficult time. Their camaraderie provides a sense of belonging, offering solace amidst the storm of emotions."
};

const twist23 = {
    "title": "Reclusive Planning",
    "body": "In isolation, Kinshuk begins meticulously planning his next steps. The solitude gives him the clarity needed to devise a strategic and calculated approach to address the betrayal."
};

const twist31 = {
    "title": "Vengeful Actions",
    "body": "Kinshuk's thirst for revenge consumes him, leading to impulsive and vengeful actions. The consequences of his choices set off a chain reaction that threatens to further unravel his world."
};

const twist32 = {
    "title": "Forging a New Path",
    "body": "Instead of revenge, Kinshuk decides to forge a new path, channeling his energy into positive endeavors. The journey towards redemption becomes his focus, as he strives to overcome the pain of betrayal."
};

const twist33 = {
    "title": "Confrontation with Authorities",
    "body": "Kinshuk takes the matter to the authorities, seeking justice through legal means. The investigation uncovers hidden layers, and the pursuit of truth becomes a battle fought within the confines of the law."
};

/*** /data ***/

async function main() {
    // Get api token on https://story3.com/profile
    // please DO NOT COMMIT your token, keep it safe
    // if token was leaked you can refresh it using API endpoint `/api/v2/users/me/api_key`
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

    const twist13res = await axios.post(
        'https://story3.com/api/v2/twists',
        {
            ...twist13,
            "hashParentId": twist1res.data.hashId
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

    const twist23res = await axios.post(
        'https://story3.com/api/v2/twists',
        {
            ...twist23,
            "hashParentId": twist2res.data.hashId
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

    const twist33res = await axios.post(
        'https://story3.com/api/v2/twists',
        {
            ...twist33,
            "hashParentId": twist3res.data.hashId
        },
        {
            headers: {
                'x-auth-token': token
            }
        }
    );

    // publish each twist at the 1st level
    for (const res of [twist0res, twist1res, twist2res, twist3res, twist11res, twist12res, twist13res, twist21res, twist22res, twist23res, twist31res, twist32res, twist33res]) {
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
