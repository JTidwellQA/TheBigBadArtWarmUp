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
      "locust", "ibis", "bison", "mole", "jackal", "lynx", "stoat", "geese", "turkey", "macaw",
      "caracal", "wolverine", "capybara", "dugong", "narwhal", "manatee", "civet", "quokka", "pangolin", "cassowary",
      "gibbon", "tapir", "okapi", "aye-aye", "tarsier", "bandicoot", "echidna", "sifaka", "margay", "genet",
      "serval", "binturong", "saola", "markhor", "kinkajou", "coati", "agouti", "guenon", "dhole", "bushbaby",
      "zorilla", "fossa", "jerboa", "paca", "dik-dik", "springbok", "eland", "duiker", "hartebeest", "grison",
      "takin", "nilgai", "kudu", "galago", "klipspringer", "goral", "ibex", "muskox", "vicuna", "guanaco",
      "maned wolf", "andrew's beaked whale", "frilled lizard", "leaf-tailed gecko", "glaucus atlanticus", "nudibranch", "basket star", "sea cucumber", "blobfish", "gulper eel",
      "vampire squid", "glass frog", "axolotl", "hellbender", "olm", "caecilian", "thorny devil", "gila monster", "komodo dragon", "marine iguana",
      "tuatara", "sawfish", "goblin shark", "wobbegong", "cookiecutter shark", "anglerfish", "hatchetfish", "flashlight fish", "lanternfish", "viperfish",
      "barreleye", "tripod fish", "oarfish", "giant isopod", "mimic octopus", "blue ringed octopus", "nautilus", "cone snail", "pistol shrimp", "mantis shrimp",
      "stonefish", "lionfish", "sea dragon", "leafy sea dragon", "seahorse", "coral grouper", "moray eel", "fire coral", "brain coral", "staghorn coral",
      "box jellyfish", "Portuguese man o' war", "moon jellyfish", "sea nettle", "sea anemone", "nudibranch", "cuttlefish", "pearlfish", "remora", "pilot fish",
      "humboldt squid", "bobtail squid", "giant clam", "triton snail", "cowfish", "pufferfish", "triggerfish", "filefish", "porcupinefish", "parrotfish",
      "wrasse", "goby", "blenny", "jawfish", "eel catfish", "catshark", "bamboo shark", "nurse shark", "thresher shark", "mako shark",
      "hammerhead shark", "reef shark", "tigerfish", "goliath tigerfish", "arapaima", "electric eel", "pacu", "oscar", "discus", "clown loach",
      "koi", "goldfish", "betta", "guppy", "platy", "swordtail", "angelfish", "tetra", "danio", "barb",
      "corydoras", "pleco", "hillstream loach", "mudskipper", "lungfish", "bichir", "knifefish", "glass catfish", "rainbowfish", "butterfly fish"
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
      "fire mage", "ice mage", "battle nun", "spirit medium", "dreamwalker", "clone", "lucid dreamer", "android monk", "puppetmaster", "trickster",
      "time traveler", "beast tamer", "blood mage", "plague doctor", "rune carver", "bone collector", "demon slayer", "soul reaper", "revolutionary", "oracle",
      "stormcaller", "chrono-mancer", "memory thief", "mirror walker", "dimension hopper", "cyber priest", "data ghost", "astral knight", "starborn child", "void walker",
      "junkyard mechanic", "hologram assassin", "mutant prophet", "feral child", "dreamsmith", "sand mage", "cursed poet", "street magician", "vampire hunter", "zombie warlord",
      "wasteland king", "gravity shifter", "nanite swarmlord", "plasma sniper", "energy bender", "cosmic monk", "neon drifter", "symbiote host", "ancient automaton", "arcane engineer",
      "crystal golem", "eldritch scholar", "fog dancer", "phantom thief", "insect queen", "corpse puppeteer", "witch hunter", "ghoul", "sandwalker", "sky pirate",
      "flesh crafter", "shadow forger", "bounty priest", "alien diplomat", "biohacker", "solar paladin", "moon priestess", "toxin alchemist", "storm shaman", "relic hunter"
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
      "Ben 10", "Invincible", "Omni-Man", "Doctor Fate", "Zatanna", "Rogue", "Gambit", "Wolverine", "Black Canary", "Hawkman",
      "Shang-Chi", "Jessica Jones", "Kate Bishop", "Echo", "White Tiger", "Namor", "Namora", "Cassandra Cain", "Stephanie Brown", "Red Hood",
      "Nightwing", "Beast Boy", "Raven", "Starfire", "Cyborg Superman", "Terra", "Blue Marvel", "Hercules (Marvel)", "Wonder Man", "Moon Girl",
      "Devil Dinosaur", "Big Hero 6", "Baymax", "Hiro Hamada", "Wasabi", "Honey Lemon", "Fredzilla", "Silk", "Cloak", "Dagger",
      "X-23", "Laura Kinney", "Armor", "Marrow", "Boom-Boom", "Jubilee", "Pixie", "Dust", "Elixir", "Prodigy",
      "Quicksilver", "Polaris", "Northstar", "Aurora", "Havok", "Banshee", "Siryn", "Multiple Man", "Forge", "Strong Guy",
      "Domino", "Cable", "Warpath", "Feral", "Shatterstar", "Rictor", "Blindfold", "Legion", "Moira MacTaggert", "Omega Red",
      "Sabretooth", "Mystique", "Destiny", "Madelyne Pryor", "Hope Summers", "Franklin Richards", "Valeria Richards", "Molecule Man", "Uatu the Watcher", "Silver Surfer",
      "Black Bolt", "Medusa", "Karnak", "Crystal", "Lockjaw", "Maximus", "Beta Ray Bill", "Nova (Richard Rider)", "Star-Lord", "Gamora",
      "Drax", "Rocket Raccoon", "Groot", "Mantis", "Yondu", "Nebula", "The Collector", "Grandmaster", "Adam Warlock", "High Evolutionary",
      "Ghost Rider (Johnny Blaze)", "Ghost Rider (Robbie Reyes)", "Morbius", "Man-Thing", "Werewolf by Night", "Elsa Bloodstone", "Howard the Duck", "Moon-Boy", "Devil Dinosaur",
      "Saitama", "Genos", "Tatsumaki", "King", "Fubuki", "Speed-o'-Sound Sonic", "Mumen Rider", "Garou", "Bang", "Atomic Samurai",
      "Kenshin Himura", "Sanosuke Sagara", "Misao Makimachi", "Shishio Makoto", "Yukishiro Enishi", "Edward Elric", "Alphonse Elric", "Roy Mustang", "Riza Hawkeye", "Scar",
      "Gintoki Sakata", "Kagura", "Shinpachi Shimura", "Hijikata Toshiro", "Okita Sougo", "Lelouch Lamperouge", "Suzaku Kururugi", "C.C.", "Kallen Stadtfeld", "Jeremiah Gottwald"
      "Joel Miller", "Ellie Williams", "Abby Anderson", "Tommy Miller", "Dina", "Lev", "Jesse", "Marlene", "Tess", "Sarah Miller",
      "Kratos", "Atreus", "Zeus (God of War)", "Baldur", "Freya", "Thor (God of War)", "Odin (God of War)", "Heimdall", "Faye", "Sigrun",
      "Link", "Zelda", "Ganondorf", "Midna", "Impa", "Tingle", "Skull Kid", "Revali", "Daruk", "Mipha",
      "Cloud Strife", "Tifa Lockhart", "Aerith Gainsborough", "Barret Wallace", "Red XIII", "Sephiroth", "Vincent Valentine", "Yuffie Kisaragi", "Zack Fair", "Reno",
      "Squall Leonhart", "Rinoa Heartilly", "Laguna Loire", "Seifer Almasy", "Quistis Trepe", "Selphie Tilmitt", "Irvine Kinneas", "Ultimecia", "Edea Kramer", "Zell Dincht",
      "Tidus", "Yuna", "Auron", "Lulu", "Wakka", "Kimahri", "Rikku", "Seymour Guado", "Jecht", "Braska",
      "Sora", "Riku", "Kairi", "Roxas", "Axel", "Xion", "Ventus", "Terra", "Aqua", "Master Xehanort",
      "Kirby", "Meta Knight", "King Dedede", "Waddle Dee", "Bandana Dee", "Marx", "Magolor", "Gooey", "Dark Meta Knight", "Galacta Knight",
      "Samus Aran", "Ridley", "Dark Samus", "Mother Brain", "Kraid", "Adam Malkovich", "Sylux", "Rundas", "Gandrayda", "Dark Samus (Phazon)",
      "Donkey Kong", "Diddy Kong", "Dixie Kong", "Funky Kong", "Cranky Kong", "King K. Rool", "Tiny Kong", "Lanky Kong", "Chunky Kong", "Wrinkly Kong",
      "Fox McCloud", "Falco Lombardi", "Peppy Hare", "Slippy Toad", "Wolf O'Donnell", "Krystal", "Leon Powalski", "Andrew Oikonny", "Pigma Dengar", "James McCloud",
      "Sam Fisher", "Lara Croft", "Nathan Drake", "Chloe Frazer", "Victor Sullivan", "Elena Fisher", "Rafe Adler", "Nadine Ross", "Cassandra Morgan", "Harry Flynn",
      "Ezio Auditore", "Altair Ibn-La'Ahad", "Connor Kenway", "Edward Kenway", "Bayek of Siwa", "Kassandra", "Eivor Varinsdottir", "Desmond Miles", "Layla Hassan", "Basim",
      "Geralt of Rivia", "Yennefer of Vengerberg", "Ciri", "Triss Merigold", "Dandelion", "Vesemir", "Lambert", "Eskel", "Emhyr var Emreis", "Gaunter O'Dimm",
      "Harry Potter", "Hermione Granger", "Ron Weasley", "Albus Dumbledore", "Severus Snape", "Draco Malfoy", "Voldemort", "Sirius Black", "Remus Lupin", "Bellatrix Lestrange",
      "Bilbo Baggins", "Frodo Baggins", "Samwise Gamgee", "Gandalf", "Aragorn", "Legolas", "Gimli", "Boromir", "Galadriel", "Sauron",
      "Percy Jackson", "Annabeth Chase", "Grover Underwood", "Luke Castellan", "Thalia Grace", "Nico di Angelo", "Clarisse La Rue", "Tyson", "Chiron", "Hades",
      "Katniss Everdeen", "Peeta Mellark", "Gale Hawthorne", "Effie Trinket", "Haymitch Abernathy", "President Snow", "Finnick Odair", "Johanna Mason", "Rue", "Primrose Everdeen",
      "Ender Wiggin", "Valentine Wiggin", "Peter Wiggin", "Bean", "Petra Arkanian", "Mazer Rackham", "Alai", "Bonzo Madrid", "Colonel Graff", "Dink Meeker",
      "Light Yagami", "L", "Ryuk", "Misa Amane", "Near", "Mello", "Watari", "Soichiro Yagami", "Rem", "Teru Mikami",
      "Kaneki Ken", "Touka Kirishima", "Rize Kamishiro", "Amon Koutarou", "Juuzou Suzuya", "Shuu Tsukiyama", "Uta", "Yoshimura", "Hinami Fueguchi", "Arima Kishou",
      "Shinichi Izumi", "Migi", "Kana Kimishima", "Satomi Murano", "Hirokawa", "Gotou", "Tamura Reiko", "Urano", "Yamagishi", "Kurumada",
      "Yuji Itadori", "Megumi Fushiguro", "Nobara Kugisaki", "Satoru Gojo", "Suguru Geto", "Toji Fushiguro", "Kento Nanami", "Mahito", "Choso", "Maki Zenin"
      "Samurai Jack", "Aku", "Dexter", "Dee Dee", "Johnny Bravo", "Courage the Cowardly Dog", "Eustace", "Muriel", "Ed", "Edd",
      "Eddy", "Blossom", "Bubbles", "Buttercup", "Professor Utonium", "Mojo Jojo", "Ben Tennyson", "Gwen Tennyson", "Kevin Levin", "Vilgax",
      "Raven", "Robin", "Beast Boy", "Cyborg", "Starfire", "Slade", "Aqualad", "Terra", "Jinx", "Kid Flash",
      "Steven Universe", "Garnet", "Amethyst", "Pearl", "Connie", "Lapis Lazuli", "Peridot", "Spinel", "Greg Universe", "Lion",
      "Finn the Human", "Jake the Dog", "Princess Bubblegum", "Marceline the Vampire Queen", "Ice King", "BMO", "Lemongrab", "Flame Princess", "Lady Rainicorn", "Peppermint Butler",
      "Rick Sanchez", "Morty Smith", "Summer Smith", "Beth Smith", "Jerry Smith", "Birdperson", "Mr. Meeseeks", "Evil Morty", "Unity", "Squanchy",
      "Asta", "Yuno", "Noelle Silva", "Mimosa Vermillion", "Luck Voltia", "Magna Swing", "Yami Sukehiro", "Julius Novachrono", "Nacht Faust", "Vanessa Enoteca",
      "Shoyo Hinata", "Tobio Kageyama", "Daichi Sawamura", "Koshi Sugawara", "Asahi Azumane", "Yuu Nishinoya", "Ryunosuke Tanaka", "Kei Tsukishima", "Tadashi Yamaguchi", "Kenma Kozume",
      "Levius Cromwell", "Narumi Katō", "Alice Arisugawa", "Dazai Osamu", "Atsushi Nakajima", "Chuuya Nakahara", "Ranpo Edogawa", "Akutagawa Ryunosuke", "Kunikida Doppo", "Kyoka Izumi",
      "Mob", "Reigen Arataka", "Ritsu Kageyama", "Teruki Hanazawa", "Dimple", "Toichiro Suzuki", "Sho Suzuki", "Serizawa", "Shigeo Kageyama", "Ekubo",
      "Tomie", "Uzumaki Kirie", "Souichi", "Amigara Fault Victim", "Enigma Boy", "Fuchi", "Kanzaki", "Hideo", "Maruyama", "Miss Fuchi",
      "Endeavor", "Hawks", "Shigaraki", "Dabi", "Toga", "Twice", "Mr. Compress", "Spinner", "Overhaul", "Gentle Criminal",
      "Monkey D. Dragon", "Boa Hancock", "Crocodile", "Donquixote Doflamingo", "Big Mom", "Kaido", "Shanks", "Blackbeard", "Kuzan", "Fujitora",
      "Edward Newgate", "Gol D. Roger", "Silvers Rayleigh", "Buggy the Clown", "Enel", "Bartholomew Kuma", "Sabo", "Koala", "Vivi Nefertari", "Hiyori Kozuki",
      "Usagi Tsukino", "Mamoru Chiba", "Rei Hino", "Ami Mizuno", "Makoto Kino", "Minako Aino", "Setsuna Meioh", "Haruka Tenoh", "Michiru Kaioh", "Hotaru Tomoe",
      "Sasuke Uchiha", "Itachi Uchiha", "Madara Uchiha", "Kakashi Hatake", "Minato Namikaze", "Tsunade", "Jiraiya", "Orochimaru", "Rock Lee", "Might Guy",
      "Gaara", "Temari", "Kankuro", "Hinata Hyuga", "Neji Hyuga", "Shikamaru Nara", "Ino Yamanaka", "Choji Akimichi", "Kiba Inuzuka", "Shino Aburame",
      "Boruto Uzumaki", "Sarada Uchiha", "Mitsuki", "Kawaki", "Sumire Kakei", "Metal Lee", "Denki Kaminarimon", "Iwabe Yuino", "Himawari Uzumaki", "Moegi Kazamatsuri",
      "Edward Cullen", "Bella Swan", "Jacob Black", "Carlisle Cullen", "Alice Cullen", "Jasper Hale", "Rosalie Hale", "Emmett Cullen", "Esme Cullen", "Victoria",
      "Elena Gilbert", "Damon Salvatore", "Stefan Salvatore", "Bonnie Bennett", "Caroline Forbes", "Klaus Mikaelson", "Rebekah Mikaelson", "Elijah Mikaelson", "Alaric Saltzman", "Jeremy Gilbert",
      "Buffy Summers", "Willow Rosenberg", "Xander Harris", "Spike", "Angel", "Giles", "Cordelia Chase", "Faith Lehane", "Tara Maclay", "Anya Jenkins",
      "Twilight Sparkle", "Rainbow Dash", "Fluttershy", "Rarity", "Pinkie Pie", "Applejack", "Spike (MLP)", "Starlight Glimmer", "Sunset Shimmer", "Princess Celestia",
      "Optimus Prime", "Megatron", "Bumblebee", "Starscream", "Soundwave", "Ironhide", "Ratchet", "Shockwave", "Grimlock", "Arcee",
      "Master Chief", "Cortana", "The Arbiter", "Sergeant Johnson", "Captain Keyes", "The Didact", "Atriox", "Escharum", "Lasky", "Blue Team"
      "Light Yagami", "L Lawliet", "Near", "Mello", "Ryuk", "Rem", "Ichigo Momomiya", "Mint Aizawa", "Lettuce Midorikawa", "Pudding Fong",
      "Zakuro Fujiwara", "Ash Ketchum", "Misty", "Brock", "Pikachu", "Team Rocket", "James", "Jessie", "Meowth", "Goh", "Serena",
      "Red (Pokémon)", "Blue (Pokémon)", "Green (Pokémon)", "Silver", "Gold", "Crystal", "May", "Max", "Dawn", "Chloe",
      "Yugi Muto", "Yami Yugi", "Seto Kaiba", "Joey Wheeler", "Tea Gardner", "Tristan Taylor", "Bakura", "Marik", "Dark Magician", "Blue-Eyes White Dragon",
      "Conan Edogawa", "Ran Mouri", "Kogoro Mouri", "Ai Haibara", "Kaito Kid", "Shinichi Kudo", "Emma", "Ray", "Norman", "Isabella",
      "Meliodas", "Elizabeth Liones", "Ban", "Diane", "King", "Gowther", "Merlin", "Escanor", "Zeldris", "Estarossa",
      "Natsu Dragneel", "Lucy Heartfilia", "Gray Fullbuster", "Erza Scarlet", "Happy", "Wendy Marvell", "Jellal Fernandes", "Laxus Dreyar", "Gajeel Redfox", "Mirajane Strauss",
      "Rin Okumura", "Yukio Okumura", "Shura Kirigakure", "Shiemi Moriyama", "Mephisto Pheles", "Amaimon", "Kamado Tanjiro", "Kamado Nezuko", "Zenitsu Agatsuma", "Inosuke Hashibira",
      "Kanao Tsuyuri", "Shinobu Kocho", "Muichiro Tokito", "Sanemi Shinazugawa", "Obanai Iguro", "Gyomei Himejima", "Akaza", "Doma", "Kokushibo", "Muzan Kibutsuji",
      "Annabeth Chase", "Percy Jackson", "Grover Underwood", "Thalia Grace", "Nico di Angelo", "Clarisse La Rue", "Tyson", "Rachel Elizabeth Dare", "Luke Castellan", "Chiron",
      "Katniss Everdeen", "Peeta Mellark", "Gale Hawthorne", "Effie Trinket", "Haymitch Abernathy", "President Snow", "Primrose Everdeen", "Finnick Odair", "Johanna Mason", "Cinna",
      "Harry Potter", "Hermione Granger", "Ron Weasley", "Draco Malfoy", "Severus Snape", "Albus Dumbledore", "Voldemort", "Sirius Black", "Luna Lovegood", "Neville Longbottom",
      "Frodo Baggins", "Samwise Gamgee", "Gandalf", "Aragorn", "Legolas", "Gimli", "Boromir", "Galadriel", "Elrond", "Gollum",
      "Snow White", "Cinderella", "Sleeping Beauty", "Rapunzel", "Little Red Riding Hood", "Goldilocks", "The Big Bad Wolf",
      "The Huntsman", "The Evil Queen", "Prince Charming", "Rumpelstiltskin", "The Frog Prince", "The Little Mermaid",
      "Ursula", "King Triton", "Peter Pan", "Tinker Bell", "Captain Hook", "Wendy Darling", "The Lost Boys", "The Blue Fairy",
      "Pinocchio", "Geppetto", "Jiminy Cricket", "Fairy Godmother", "The Ugly Duckling", "The Emperor (New Clothes)",
      "The Snow Queen", "Gerda", "The Brave Tin Soldier", "Thumbelina", "The Red Shoes Girl", "The Steadfast Tin Soldier",
      "The Pied Piper", "Hansel", "Gretel", "The Wicked Witch", "The Gingerbread Man", "The Three Little Pigs",
      "The Big Bad Wolf (3 Pigs)", "Jack (Beanstalk)", "The Giant (Beanstalk)", "The Golden Goose", "Mother Goose",
      "The Miller's Daughter", "Puss in Boots", "Beauty", "The Beast", "Gaston", "Maurice", "The Fairy of the Forest",
      "The Twelve Dancing Princesses", "The Princess and the Pea", "The Swan Princess", "The Boy Who Cried Wolf",
      "The Tortoise", "The Hare", "The Ant", "The Grasshopper", "The Lion", "The Mouse", "The Fox", "The Crow",
      "The Donkey (Bremen)", "The Cat (Bremen)", "The Rooster", "The Dog", "Ali Baba", "Aladdin", "Genie", "Sinbad",
      "Scheherazade", "King Midas", "The Golden Touch", "Robin Hood", "Maid Marian", "Friar Tuck", "Little John",
      "Merlin", "King Arthur", "Morgana Le Fay", "Guinevere", "The Lady of the Lake"

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
