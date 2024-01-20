import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();
/*** data ***/

//                    twist0                        //
//          _________/  |  \_________               //
//     twist1    twist2   twist3                    //
//              /        |                          //
//       twist11         twist21                     //
//       / | \            /   \                      //
// twist111...twist113 twist212 twist213              //
/*** /data ***/

// title should be from 1 to 80 chars
// body should be from 40 to 1200 chars

const twist0 = {
    "title": "Spiky's and Meteor Madness",
    "body": "Spiky was chilling in his forest camp when suddenly a small meteor crashed near him. The night sky lit up with an otherworldly glow as the impact echoed through the dense foliage. Startled, Spiky leaped to his feet, adrenaline coursing through his spines. He cautiously approached the crash site, intrigued by the mysterious celestial visitor."
};

const twist1 = {
    "title": "The Unusual Meteor",
    "body": "Examining the meteor, Spiky noticed it wasn't like any ordinary space rock. Its surface shimmered with an ethereal glow, and peculiar symbols seemed to dance across its exterior. As he reached out to touch it, a strange energy surged through him, creating an unexpected connection between Spiky and the cosmic intruder."
};

const twist2 = {
    "title": "Energizing Spiky",
    "body": "The mysterious meteor infused Spiky with a surge of energy, granting him extraordinary abilities. His spines glowed with an otherworldly light, and he felt a newfound strength coursing through his veins. Curious about the extent of his new powers, Spiky decided to test them in the heart of the forest, unaware of the challenges that lay ahead."
};

const twist3 = {
    "title": "Forest Creatures React",
    "body": "The forest inhabitants sensed the cosmic disturbance caused by the meteor crash. Intrigued and, in some cases, alarmed, creatures from all corners of the woods gathered to witness Spiky's transformation. The once calm forest now hummed with anticipation as alliances and rivalries formed among the denizens, each responding to the unusual event in their own way."
};

const twist11 = {
    "title": "Unlocking Hidden Memories",
    "body": "As Spiky embraced his newfound abilities, memories long dormant began to resurface. Visions of ancient prophecies, forgotten civilizations, and the celestial origins of his species flooded his mind. The meteor, it seemed, was a key unlocking the hidden chapters of Spiky's own history, setting him on a path intertwined with the fate of the entire forest."
};

const twist111 = {
    "title": "Vision of Celestial Guardians",
    "body": "In a trance-like state, Spiky witnessed the majestic Celestial Guardians, cosmic beings tasked with maintaining the balance of the universe. They spoke to him in a language beyond words, revealing that the meteor was a fragment of their celestial realm. Spiky's destiny was entwined with the cosmic forces, and he bore the responsibility of protecting the forest from the impending darkness."
};

const twist112 = {
    "title": "Echoes of Prophecy",
    "body": "The meteor echoed ancient prophecies foretelling a time when a chosen guardian, marked by the stars, would rise to face an unimaginable threat. Spiky, now marked by the celestial energies, realized that his journey was not just about self-discovery but a quest to fulfill the prophecy and safeguard the delicate balance between the earthly and celestial realms."
};

const twist113 = {
    "title": "Embracing the Celestial Bond",
    "body": "With newfound purpose, Spiky embraced the celestial bond forged by the meteor. He felt a deep connection with the Celestial Guardians, and the forest pulsated with their harmonious energy. As Spiky ventured forth, he understood that his path would be challenging, but the cosmic forces had chosen him for a reason."
};

const twist21 = {
    "title": "Trials of the Forest",
    "body": "As Spiky ventured deeper into the forest, he encountered various challenges that tested his newfound abilities. From swift river crossings to dense thicket navigation, each trial revealed a layer of his enhanced capabilities. The forest itself seemed to respond to Spiky's presence, presenting him with obstacles and puzzles designed to unlock the full extent of his cosmic powers."
};

const twist212 = {
    "title": "Guardians' Guidance",
    "body": "During the trials, Spiky received subtle guidance from the Celestial Guardians. Their ethereal presence manifested through whispers in the wind and shimmering lights that illuminated the correct path. It became clear that Spiky was not alone in his journey; the guardians watched over him, offering assistance when needed and silently urging him to press forward."
};

const twist213 = {
    "title": "Encounter with Enchanted Beings",
    "body": "Amidst the trials, Spiky encountered enchanted beings inhabiting the heart of the forest. These mystical creatures, attuned to the cosmic energies, recognized Spiky as the chosen guardian. They shared ancient wisdom, providing him with insights into the delicate balance between nature and the celestial realm. Their guidance became a crucial ally as Spiky continued his quest."
};

const twist41 = {
    "title": "The Shadow's Approach",
    "body": "As Spiky delved deeper into the forest, unaware of the looming threat, the malevolent presence stirred in the shadows. The dark forces, drawn by the celestial energies within Spiky, began to subtly influence the minds of creatures, turning some against the chosen guardian. A sinister plan unfolded, threatening to shroud the forest in an eternal night."
};

const twist411 = {
    "title": "Whispers of Betrayal",
    "body": "Whispers of betrayal echoed through the forest as some creatures, succumbing to the dark influence, turned against Spiky. Unseen eyes watched his every move, and ominous schemes unfolded in the hidden corners of the woods. Spiky, still focused on his quest, remained oblivious to the growing shadow that threatened to engulf the entire forest."
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

    const twist111res = await axios.post(
        'https://story3.com/api/v2/twists',
        {
            ...twist111,
            "hashParentId": twist11res.data.hashId
        },
        {
            headers: {
                'x-auth-token': token
            }
        }
    );

    const twist112res = await axios.post(
        'https://story3.com/api/v2/twists',
        {
            ...twist112,
            "hashParentId": twist11res.data.hashId
        },
        {
            headers: {
                'x-auth-token': token
            }
        }
    );

    const twist113res = await axios.post(
        'https://story3.com/api/v2/twists',
        {
            ...twist113,
            "hashParentId": twist11res.data.hashId
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

    const twist212res = await axios.post(
        'https://story3.com/api/v2/twists',
        {
            ...twist212,
            "hashParentId": twist21res.data.hashId
        },
        {
            headers: {
                'x-auth-token': token
            }
        }
    );

    const twist213res = await axios.post(
        'https://story3.com/api/v2/twists',
        {
            ...twist213,
            "hashParentId": twist21res.data.hashId
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

    // publish each twist at the 1st level
    for (const res of [twist0res, twist1res, twist2res, twist3res, twist11res, twist111res, twist112res, twist113res, twist21res, twist212res, twist213res]) {
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
    .catch(e => console.error(e));
