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
    "title": "Rogno's Resolute March: A Tale of Unyielding Valor",
    "body": "Rogno's hand dangled at an unnatural angle, the jagged wound gushing blood, staining the ground beneath him. Despite the severity of the injury, he pressed on, his face contorted in pain but determination burning in his eyes. The chaotic battle around him seemed to fade into the background as he focused solely on his mission, oblivious to the concerned shouts and gasps from his comrades."
};

const twist1 = {
    "title": "Medic offers aid.",
    "body": "Despite the severity of the injury, Rogno pressed on, his face contorted in pain. As he advanced, a medic from his own ranks rushed forward, urging him to take a moment to address his wound. However..."
};

const twist2 = {
    "title": "Rogno's comrades rally around him.",
    "body": "Rogno's fellow warriors, witnessing his relentless determination, rallied around him, forming a protective shield as they fought towards their shared goal. The sight of Rogno's sacrifice inspired a renewed vigor among his comrades, turning the tide of the battle."
};

const twist3 = {
    "title": "Hidden ally provides a remedy.",
    "body": "As Rogno pushed forward, the pain in his hand became almost unbearable, but he stumbled upon a hidden ally who offered a makeshift remedy for his wound. Though hesitant at first, Rogno agreed to a brief pause, allowing the ally to provide a hasty but crucial treatment. Renewed and resolute, he rejoined the battle with newfound strength. "
};

const twist11 = {
    "title": "Medic's brief aid",
    "body": "Reluctantly accepting the medic's assistance, Rogno takes a brief moment to address his wound. Rejuvenated, he returns to the battle with increased resilience, becoming a beacon of inspiration for his fellow warriors."
};

const twist12 = {
    "title": "Refusal, risking collapse",
    "body": "Rejecting the medic's help, Rogno's determination blinds him to the severity of his injury. As the battle intensifies, the pain becomes overwhelming, and Rogno faces the risk of collapsing in the midst of the fight."
};

const twist21 = {
    "title": "Allies Strengthen Resolve",
    "body": "Emboldened by Rogno's leadership, his comrades intensify their efforts. Together, they break through enemy lines, their unity proving stronger than any individual sacrifice."
};

const twist22 = {
    "title": "Strategic Retreat",
    "body": "Realizing the critical nature of Rogno's mission, the warriors strategically retreat, regrouping to launch a more calculated and powerful assault. The temporary withdrawal sets the stage for a triumphant return."
};

const twist31 = {
    "title": "Unveiling the Hidden Ally",
    "body": "The hidden ally is revealed to be a mysterious figure with a profound connection to Rogno's past. As the ally's identity unfolds, so does a deeper layer of the unfolding narrative, intertwining destinies in unexpected ways."
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

    // publish each twist at the 1st level
    for (const res of [twist0res, twist1res, twist2res, twist3res, twist31res, twist11res, twist12res, twist21res, twist22res]) {
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
