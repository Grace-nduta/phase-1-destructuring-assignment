const farmAnimals = 'cow horse sheep pig chicken';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// Array: Declaring five animal sounds
const animalSounds = ["cow", "horse", "sheep", "pig", "chicken"];
const [moo, neigh, baa, oink, cluck] = animalSounds;

// Array: Declaring four traditional animal names
const animalNames = ["cow", "sheep", "pig", "chicken"];
const [bessie, dolly, babe, little] = animalNames;

// Array: Declaring three traditional animal colors
const animalColors = ["cow", "sheep", "pig"];
const [blackAndWhite, black, pink] = animalColors;

// Array: Declaring seven traditional rainbow color variables
const rainbowColors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
const [red, orange, yellow, green, blue, indigo, violet] = rainbowColors;

// Array: Declaring six rainbow color variables using initials
const [r, o, y, g, b, , v] = rainbowColors; // Skipping "indigo" with a comma

// Array: Specifically declaring indigo using indg
const [, , , , , indg] = rainbowColors;

// Object: Assigning all appropriate variables using the keys as variable names
const muppetInfo = {
  muppetName: "Miss Piggy",
  color: "pink",
  song: "Never Before, Never Again",
  job: "Cast member of The Muppet Show",
  partner: "Kermit",
};
const { muppetName, color, song, job, partner } = muppetInfo;

// Object: Assigning songs 2 and 4, and Kermit's job and partner
const nestedMuppets = {
  songs: [
    "The Rainbow Connection",
    "Moving Right Along",
    "Can You Picture That?",
    "I Hope That Something Better Comes Along",
  ],
  job: "Host of The Muppet Show",
  partner: "Miss Piggy",
};
const { songs: [, song2, , song4], job: nestedJob, partner: nestedPartner } = nestedMuppets;

// Logging results to confirm correctness (optional)
/*console.log({ moo, neigh, baa, oink, cluck });
console.log({ bessie, dolly, babe, little });
console.log({ blackAndWhite, black, pink });
console.log({ red, orange, yellow, green, blue, indigo, violet });
console.log({ r, o, y, g, b, v });
console.log({ indg });
console.log({ muppetName, color, song, job, partner });*/
  



