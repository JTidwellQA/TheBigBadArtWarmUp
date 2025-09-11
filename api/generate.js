// api/generate.js

export default function handler(req, res) {
  const { category } = req.query;

  const categories = {
    animal: [
      "Tiger", "Lion", "Elephant", "Leopard", "Panther", "Cheetah", "Wolf", "Jaguar", "Hyena", "Giraffe",
      "Deer", "Zebra", "Gorilla", "Monkey", "Chimpanzee", "Bear", "Hippo", "Kangaroo", "Rhinoceros", "Crocodile",
      "Panda", "Squirrel", "Otter", "Hedgehog", "Koala", "Wombat", "Meerkat", "Raccoon", "Jackal", "Hare",
      "Mole", "Rabbit", "Alligator", "Lemur", "Sloth", "Fox", "Weasel", "Tarsier", "Ocelot", "Bison",
      "Camel", "Antelope", "Aardvark", "Armadillo", "Baboon", "Badger", "Bat", "Beaver", "Ibex", "Yak",
      "Peacock", "Penguin", "Flamingo", "Ostrich", "Falcon", "Eagle", "Hawk", "Parrot", "Crow", "Raven",
      "Swan", "Duck", "Goose", "Toad", "Frog", "Salamander", "Gecko", "Chameleon", "Iguana", "Snake",
      "Lizard", "Turtle", "Tortoise", "Shark", "Dolphin", "Whale", "Octopus", "Squid", "Crab", "Lobster",
      "Seal", "Walrus", "Manatee", "Narwhal", "Starfish", "Jellyfish", "Coral", "Manta Ray", "Seahorse", "Newt"
    ],

    medium: [
      "Pencil", "Colored Pencil", "Charcoal", "Graphite", "Ink", "Pen", "Ballpoint Pen", "Marker", "Watercolor",
      "Acrylic", "Oil", "Tempera", "Gouache", "Pastel", "Chalk", "Crayon", "Spray Paint", "Airbrush", "Digital",
      "Pixel Art", "Vector Art", "3D Modeling", "Clay", "Sculpture", "Collage", "Mixed Media", "Etching",
      "Screen Printing", "Linocut", "Woodcut", "Mosaic", "Embroidery", "Textile Art", "Glass", "Metalwork",
      "Ceramic", "Resin", "Enamel", "Food Art", "Sand Art", "Paper Cutting", "Origami", "Stop Motion",
      "Photography", "Film", "Installation", "Light Art", "Graffiti", "Tape Art", "Body Paint", "Makeup Art"
    ],

    genre: [
      "Fantasy", "Sci-Fi", "Noir", "Horror", "Mystery", "Romance", "Action", "Adventure", "Cyberpunk", "Steampunk",
      "Post-Apocalyptic", "Gothic", "Abstract", "Surrealism", "Minimalism", "Pop Art", "Street Art", "Realism",
      "Impressionism", "Expressionism", "Cubism", "Futurism", "Concept Art", "Fan Art", "Cartoon", "Anime",
      "Manga", "Comic Book", "Superhero", "Mythology", "Historical", "Modern", "Urban", "Nature", "Military",
      "Space", "Time Travel", "Detective", "Western", "Slapstick", "Thriller", "Psychological", "Political",
      "Dark Fantasy", "Fairy Tale", "Children’s Art", "Symbolism", "Narrative Art"
    ],

    character: [
      "Spider-Man", "Batman", "Superman", "Iron Man", "Captain America", "Wonder Woman", "Flash", "Green Lantern",
      "Darth Vader", "Luke Skywalker", "Princess Leia", "Yoda", "Obi-Wan Kenobi", "Anakin Skywalker", "Rey",
      "Harry Potter", "Hermione", "Ron Weasley", "Dumbledore", "Voldemort", "Frodo", "Gandalf", "Legolas",
      "Aragorn", "Gollum", "Elsa", "Anna", "Olaf", "Simba", "Mufasa", "Nala", "Scar", "Stitch", "Lilo", "Buzz Lightyear",
      "Woody", "Lightning McQueen", "Mater", "Hulk", "Thor", "Black Widow", "Hawkeye", "Loki", "Thanos", "Deadpool",
      "Venom", "Carnage", "Shrek", "Donkey", "Fiona", "Po", "Tigress", "Toothless", "Hiccup", "Ash Ketchum",
      "Pikachu", "Charizard", "Goku", "Vegeta", "Naruto", "Sasuke", "Sakura", "Itachi", "Luffy", "Zoro",
      "Ichigo", "Tanjiro", "Nezuko", "Deku", "Bakugo", "All Might", "Korra", "Aang", "Zuko", "SpongeBob",
      "Patrick", "Sandy", "Mario", "Luigi", "Peach", "Bowser", "Yoshi", "Donkey Kong", "Samus", "Kirby"
    ]
  };

  const options = categories[category];

  if (!options || options.length === 0) {
    res.status(200).json({ prompt: result }); // ✅ match what frontend expects
    return;
  }

  const random = options[Math.floor(Math.random() * options.length)];
  res.status(200).json({ result: random });
}

