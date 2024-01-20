import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();
// Define twists for your comedic story
const twist0 = {
    "title": "The Quest for the Giggle Gem",
    "body": "In a land of laughter, you, the unlikely hero, embark on a quest to retrieve the legendary Giggle Gem. Get ready for a comedy of errors!"
};

const twist1 = {
    "title": "The Silly Forest",
    "body": "Your journey begins in the Silly Forest, where the trees tell jokes and the animals have impeccable comedic timing. Choose your first comical challenge."
};

const twist2 = {
    "title": "The Laughter Caverns",
    "body": "Alternatively, you may venture into the Laughter Caverns, where echoes of laughter bounce off the walls. Each path promises a different punchline."
};

const twist11 = {
    "title": "Tickle the Ticklish Tree",
    "body": "In the Silly Forest, you encounter a Ticklish Tree. Will you seize the opportunity to tickle it and reveal the hidden path?"
};

const twist12 = {
    "title": "Banter with the Laughing Squirrels",
    "body": "While exploring the Silly Forest, you encounter Laughing Squirrels. Engage in a comedic banter with them to gain their assistance."
};

const twist21 = {
    "title": "Navigate the Giggle Grotto",
    "body": "If you chose the Laughter Caverns, you must navigate through the Giggle Grotto. Be wary of puns, pratfalls, and unexpected punchlines."
};

const twist22 = {
    "title": "Joke Duel with the Humor Goblins",
    "body": "Choosing the Laughter Caverns brings you face to face with the Humor Goblins. Engage in a joke duel to prove your comedic prowess."
};

const twist111 = {
    "title": "Rumble in the Chuckle Thicket",
    "body": "Tickling the Ticklish Tree leads you to the Chuckle Thicket. Engage in a friendly rumble with the giggling creatures to proceed."
};

const twist112 = {
    "title": "Join the Squirrel Stand-Up",
    "body": "Bantering with the Laughing Squirrels takes an unexpected turn. They invite you to join their stand-up comedy act. Will you accept the challenge?"
};

const twist221 = {
    "title": "Defeat the Pun-tastic Guardian",
    "body": "Navigating the Giggle Grotto leads to a confrontation with the Pun-tastic Guardian. Defeat it with your own puns to unlock the next stage."
};

const twist222 = {
    "title": "Outwit the Witty Goblins",
    "body": "In the Joke Duel with the Humor Goblins, you must outwit them with your best jokes. Your comedic repertoire will be put to the test."
};

const twist1111 = {
    "title": "Triumph at the Guffaw Arena",
    "body": "Your rumble in the Chuckle Thicket leads to the Guffaw Arena. Triumph over the hilarious challenges to reach the next level of your quest."
};

const twist1121 = {
    "title": "Stand-Up Stardom",
    "body": "Joining the Squirrel Stand-Up propels you to stand-up stardom. Navigate through a sea of laughter and applause to continue your quest."
};

const twist1122 = {
    "title": "Comedy Critic Showdown",
    "body": "Accepting the Squirrel Stand-Up challenge triggers a Comedy Critic Showdown. Impress the tough critics with your humor to proceed."
};

const twist2221 = {
    "title": "Jester's Riddle Bridge",
    "body": "Outwitting the Witty Goblins leads you to the Jester's Riddle Bridge. Solve the riddles with laughter to cross to the other side."
};

const twist2222 = {
    "title": "Giggle Grotto Grand Finale",
    "body": "Overcoming the Humor Goblins sets the stage for the Giggle Grotto Grand Finale. Navigate the final comedic challenges to reach the coveted Giggle Gem."
};

// Modify the main function to use your twists
async function main() {
    // ... (unchanged code for getting the token)
    const token = 'am02NHpKM2JZcG9ZUmVXNTpmOGJmMGJlMTBkM2VkZTljMTU0ZTBiZjgxMTYxODc3YTkwYmU3ODM1M2YyNDY0OTA3OTEzMWQ0ZDgyNTYyNDJl';
    // Use your twists in the POST requests
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

    const twist21res = await axios.post(
        'https://story3.com/api/v2/twists',
        { ...twist21, "hashParentId": twist2res.data.hashId },
        { headers: { 'x-auth-token': token } }
    );

    const twist22res = await axios.post(
        'https://story3.com/api/v2/twists',
        { ...twist22, "hashParentId": twist2res.data.hashId },
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

    const twist221res = await axios.post(
        'https://story3.com/api/v2/twists',
        { ...twist221, "hashParentId": twist22res.data.hashId },
        { headers: { 'x-auth-token': token } }
    );

    const twist222res = await axios.post(
        'https://story3.com/api/v2/twists',
        { ...twist222, "hashParentId": twist22res.data.hashId },
        { headers: { 'x-auth-token': token } }
    );

    const twist1111res = await axios.post(
        'https://story3.com/api/v2/twists',
        { ...twist1111, "hashParentId": twist111res.data.hashId },
        { headers: { 'x-auth-token': token } }
    );

    const twist1121res = await axios.post(
        'https://story3.com/api/v2/twists',
        { ...twist1121, "hashParentId": twist112res.data.hashId },
        { headers: { 'x-auth-token': token } }
    );

    const twist1122res = await axios.post(
        'https://story3.com/api/v2/twists',
        { ...twist1122, "hashParentId": twist112res.data.hashId },
        { headers: { 'x-auth-token': token } }
    );

    const twist2221res = await axios.post(
        'https://story3.com/api/v2/twists',
        { ...twist2221, "hashParentId": twist222res.data.hashId },
        { headers: { 'x-auth-token': token } }
    );

    const twist2222res = await axios.post(
        'https://story3.com/api/v2/twists',
        { ...twist2222, "hashParentId": twist222res.data.hashId },
        { headers: { 'x-auth-token': token } }
    );

    // Publish each twist at the 1st, 2nd, and 3rd level
    for (const res of [twist0res, twist1res, twist2res, twist11res, twist12res, twist21res, twist22res, twist111res, twist112res, twist221res, twist222res, twist1111res, twist1121res, twist1122res, twist2221res, twist2222res]) {
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
