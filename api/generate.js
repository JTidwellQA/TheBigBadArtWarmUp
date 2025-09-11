export default function handler(req, res) {
  const prompts = {
    animal: [
      "wolf", "lion", "tiger", "bear", "fox", "owl", "eagle", "panther", "raven", "bat",
      "deer", "shark", "dolphin", "whale", "cat", "dog", "lizard", "gecko", "spider", "jellyfish",
      "crab", "octopus", "kangaroo", "sloth", "elephant", "giraffe", "penguin", "zebra", "skunk", "raccoon",
      "hedgehog", "armadillo", "toucan", "parrot", "vulture", "hyena", "cobra", "python", "rabbit", "boar",
      "snail", "ant", "bee", "stingray", "piranha", "crocodile", "frog", "tortoise", "flamingo", "peacock",
      "beetle", "butterfly", "moth", "mouse", "rat", "ferret", "llama", "yak", "ox", "bull",
      "horse", "donkey", "newt", "salamander", "tiger shark", "leopard", "cheetah", "chameleon", "koala", "porcupine",
      "platypus", "starfish", "swan", "weasel", "badger", "mongoose", "scorpion", "termite", "firefly", "dragonfly",
      "locust", "ibis", "bison", "mole", "jackal", "lynx", "stoat", "geese", "turkey", "macaw"
    ],
    medium: [
      "digital", "ink", "pencil", "charcoal", "watercolor", "acrylic", "oil paint", "vector", "pixel", "marker",
      "chalk", "pastel", "graffiti", "spray paint", "linocut", "woodblock", "collage", "mixed media", "3D model", "papercut",
      "sculpture", "clay", "bronze", "marble", "sand", "snow", "fabric", "embroidery", "needlepoint", "crayon",
      "calligraphy", "tattoo flash", "body paint", "airbrush", "stop motion", "scratchboard", "stained glass", "tempera", "encaustic", "foil",
      "quilling", "origami", "crochet", "knit", "drip paint", "splatter", "hyperrealism", "flat design", "line art", "comic style",
      "manga", "anime", "storybook", "expressionist", "cubist", "impressionist", "realism", "surrealism", "steampunk", "cyberpunk"
    ],
    genre: [
      "fantasy", "sci-fi", "horror", "noir", "surreal", "abstract", "post-apocalyptic", "utopian", "dystopian", "space opera",
      "mecha", "bio-punk", "steampunk", "cyberpunk", "urban fantasy", "high fantasy", "low fantasy", "magical realism", "grimdark", "occult",
      "mythology", "fairy tale", "historical fiction", "kaiju", "dreamcore", "weirdcore", "slice of life", "comedy", "dark comedy", "supernatural",
      "ghost story", "gothic", "zombie apocalypse", "creature feature", "silent film", "spy thriller", "romance", "tragedy", "satire", "mockumentary",
      "wild west", "feudal Japan", "modern day", "futuristic", "ancient world", "court drama", "detective noir", "time travel", "parallel world", "cosmic horror"
    ],
    character: [
      "knight", "wizard", "witch", "robot", "cyborg", "android", "ghost", "vampire", "werewolf", "druid",
      "ranger", "hunter", "assassin", "thief", "bard", "sorcerer", "necromancer", "shapeshifter", "pirate", "samurai",
      "ninja", "cowboy", "gunslinger", "space marine", "alien", "mutant", "superhero", "villain", "healer", "alchemist",
      "scientist", "engineer", "hacker", "spy", "detective", "priest", "monk", "cultist", "prince", "princess",
      "king", "queen", "emperor", "empress", "gladiator", "brawler", "swordsman", "archer", "sniper", "telepath",
      "fire mage", "ice mage", "battle nun", "spirit medium", "dreamwalker", "clone", "lucid dreamer", "android monk", "puppetmaster", "trickster"
    ],
    lighting: [
      "harsh spotlight", "neon glow", "warm sunset", "cool moonlight", "studio lighting", "candlelight", "backlit", "rim light", "top-down", "underlit",
      "silhouetted", "glowing outline", "overexposed", "no lighting", "dramatic contrast", "foggy ambiance", "blinding sunlight", "ambient lighting", "low light", "flickering flame"
    ],
    vibe: [
      "eerie", "peaceful", "chaotic", "dreamy", "surreal", "whimsical", "ominous", "tense", "romantic", "serene",
      "cold", "warm", "nostalgic", "epic", "intimate", "cinematic", "claustrophobic", "open", "spiritual", "punk"
    ],
    emotion: [
      "anger", "joy", "fear", "sadness", "excitement", "boredom", "awe", "confusion", "hope", "despair",
      "rage", "melancholy", "delight", "shock", "panic", "relief", "determination", "peace", "envy", "pride"
    ],
    color: [
      "monochrome", "complementary", "analogous", "neon", "pastel", "vibrant", "earth tones", "grayscale", "primary colors", "cool palette",
      "warm palette", "red dominant", "blue dominant", "green dominant", "purple hues", "orange tones", "black & white", "sepia", "muted colors", "saturated colors"
    ],
    camera: [
      "wide angle", "close-up", "extreme close-up", "low angle", "high angle", "top-down", "over-the-shoulder", "dutch tilt", "zoomed in", "zoomed out",
      "fish-eye", "drone shot", "crane shot", "tracking shot", "first-person view", "third-person", "POV", "static shot", "panning", "slow motion"
    ],
    franchiseCharacter: [
      "Spider-Man", "Miles Morales", "Superman", "Batman", "Wonder Woman", "The Flash", "Black Panther", "Storm", "Static Shock", "Iron Man",
      "Captain America", "Blade", "Green Lantern (John Stewart)", "Cyborg", "Shuri", "Luke Cage", "Misty Knight", "Falcon", "Ironheart",
      "Blue Beetle", "Nova", "Doctor Doom", "Magneto", "Mystique", "Scarlet Witch", "Vision", "Moon Knight", "Daredevil", "Punisher",
      "Deadpool", "Peacemaker", "Harley Quinn", "Poison Ivy", "Joker", "Vixen", "Batwing", "Goku", "Vegeta", "Piccolo", "Spike Spiegel",
      "Kamina", "Simon", "Yoruichi Shihōin", "Afro Samurai", "Ichigo Kurosaki", "Naruto", "Sasuke", "Sailor Moon", "Luffy", "Zoro",
      "Nico Robin", "Eren Yeager", "Levi Ackerman", "Mikasa", "Ryuko Matoi", "Mob", "Tengen Uzui", "Gojo", "Yusuke Urameshi",
      "Killua", "Gon", "Nezuko", "Tanjiro", "America Chavez", "Monica Rambeau", "Riri Williams", "Kamala Khan", "Echo (Maya Lopez)",
      "Warpath", "Forge", "Bishop", "Agent 355", "Amanda Waller", "Okoye", "Nakia", "Zaya the Desert Blade", "Raheem the Chrono-Paladin",
      "Kaori the Flame Whisperer", "Tariq the Dream Hacker", "Selene the Bone Oracle", "Ahsoka", "Darth Vader", "Bo-Katan", "Kylo Ren",
      "Thanos", "Galactus", "Loki", "Hela", "Carnage", "Venom", "Spawn", "Hellboy", "Aang", "Korra", "Toph", "Zuko", "She-Ra", "He-Man",
      "Ben 10", "Invincible", "Omni-Man", "Doctor Fate", "Zatanna", "Rogue", "Gambit", "Wolverine", "Black Canary", "Hawkman"
    ]
  };

  const category = req.query.category;

  if (!category || !prompts[category]) {
    res.status(400).json({ error: "Invalid category" });
    return;
  }

  const rand = prompts[category][Math.floor(Math.random() * prompts[category].length)];
  res.status(200).json({ prompt: rand });
}
