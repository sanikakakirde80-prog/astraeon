export interface CatalogStar {
  name: string
  bayer?: string
  dist: number // light years
  mag: number // apparent magnitude
  spectral: string
  note?: string
}

export interface Constellation {
  name: string
  abbr: string
  meaning: string
  hemisphere: "Northern" | "Southern" | "Equatorial"
  desc: string
  stars: CatalogStar[]
}

export interface SelectedStar {
  star: CatalogStar
  constellation: Constellation
}

// The 88 IAU constellations, each with its principal named stars.
// Distances are in light years, magnitudes are apparent visual magnitude.
export const CONSTELLATIONS: Constellation[] = [
  {
    name: "Andromeda",
    abbr: "And",
    meaning: "The Chained Maiden",
    hemisphere: "Northern",
    desc: "Named for the princess of Greek myth, chained to a rock as a sacrifice. It hosts the Andromeda Galaxy, the nearest great spiral to our own.",
    stars: [
      { name: "Alpheratz", bayer: "α", dist: 97, mag: 2.06, spectral: "B8", note: "A blue subgiant once shared with Pegasus, marking the head of the chained maiden and a corner of the Great Square." },
      { name: "Mirach", bayer: "β", dist: 197, mag: 2.05, spectral: "M0", note: "A red giant whose light points the way to the faint Andromeda Galaxy nearby." },
      { name: "Almach", bayer: "γ", dist: 350, mag: 2.10, spectral: "K3", note: "A gorgeous multiple star, its gold and blue components a favorite of small telescopes." },
    ],
  },
  {
    name: "Antlia",
    abbr: "Ant",
    meaning: "The Air Pump",
    hemisphere: "Southern",
    desc: "A dim modern constellation invented in the 18th century to honor the air pump of physics experiments.",
    stars: [
      { name: "Alpha Antliae", bayer: "α", dist: 320, mag: 4.25, spectral: "K4" },
    ],
  },
  {
    name: "Apus",
    abbr: "Aps",
    meaning: "The Bird of Paradise",
    hemisphere: "Southern",
    desc: "A faint southern constellation representing an exotic bird of paradise, charted by explorers of the southern seas.",
    stars: [
      { name: "Alpha Apodis", bayer: "α", dist: 447, mag: 3.83, spectral: "K5" },
    ],
  },
  {
    name: "Aquarius",
    abbr: "Aqr",
    meaning: "The Water Bearer",
    hemisphere: "Equatorial",
    desc: "One of the oldest recorded constellations, a figure pouring an endless stream of water across the zodiac.",
    stars: [
      { name: "Sadalsuud", bayer: "β", dist: 540, mag: 2.87, spectral: "G0", note: "A rare yellow supergiant, tens of thousands of times more luminous than the Sun." },
      { name: "Sadalmelik", bayer: "α", dist: 520, mag: 2.95, spectral: "G2", note: "Its name means 'luck of the king'; a distant yellow supergiant echoing our Sun's color." },
      { name: "Skat", bayer: "δ", dist: 113, mag: 3.27, spectral: "A3" },
    ],
  },
  {
    name: "Aquila",
    abbr: "Aql",
    meaning: "The Eagle",
    hemisphere: "Equatorial",
    desc: "The eagle of Zeus, soaring along the Milky Way, bearer of the god's thunderbolts.",
    stars: [
      { name: "Altair", bayer: "α", dist: 16.7, mag: 0.76, spectral: "A7", note: "A swiftly spinning star that flattens into an oval, turning once in under nine hours. A corner of the Summer Triangle." },
      { name: "Tarazed", bayer: "γ", dist: 395, mag: 2.72, spectral: "K3" },
      { name: "Alshain", bayer: "β", dist: 44.7, mag: 3.71, spectral: "G8" },
    ],
  },
  {
    name: "Ara",
    abbr: "Ara",
    meaning: "The Altar",
    hemisphere: "Southern",
    desc: "The altar upon which the gods swore their alliance before the war against the Titans.",
    stars: [
      { name: "Beta Arae", bayer: "β", dist: 650, mag: 2.84, spectral: "K3" },
      { name: "Alpha Arae", bayer: "α", dist: 270, mag: 2.95, spectral: "B2" },
    ],
  },
  {
    name: "Aries",
    abbr: "Ari",
    meaning: "The Ram",
    hemisphere: "Northern",
    desc: "The golden-fleeced ram of legend, first sign of the zodiac and once herald of the spring equinox.",
    stars: [
      { name: "Hamal", bayer: "α", dist: 65.8, mag: 2.00, spectral: "K2", note: "An orange giant with a known planet, its name meaning simply 'the ram'." },
      { name: "Sheratan", bayer: "β", dist: 59.6, mag: 2.64, spectral: "A5" },
      { name: "Mesarthim", bayer: "γ", dist: 164, mag: 3.86, spectral: "B9" },
    ],
  },
  {
    name: "Auriga",
    abbr: "Aur",
    meaning: "The Charioteer",
    hemisphere: "Northern",
    desc: "A charioteer cradling a goat and her kids, riding high through the winter Milky Way.",
    stars: [
      { name: "Capella", bayer: "α", dist: 42.9, mag: 0.08, spectral: "G3", note: "The sixth-brightest star in the sky, actually two golden giant stars orbiting closely, plus a faint red pair." },
      { name: "Menkalinan", bayer: "β", dist: 81.1, mag: 1.90, spectral: "A2" },
      { name: "Almaaz", bayer: "ε", dist: 1350, mag: 2.99, spectral: "F0", note: "An eclipsing binary dimmed every 27 years by a vast, mysterious dark disk of dust." },
    ],
  },
  {
    name: "Boötes",
    abbr: "Boo",
    meaning: "The Herdsman",
    hemisphere: "Northern",
    desc: "The plowman or herdsman driving the bears around the pole, kite-shaped and bright.",
    stars: [
      { name: "Arcturus", bayer: "α", dist: 36.7, mag: -0.05, spectral: "K0", note: "An aging orange giant racing through the galaxy, its ancient amber light once switched on the lamps of the 1933 World's Fair." },
      { name: "Izar", bayer: "ε", dist: 210, mag: 2.37, spectral: "K0", note: "A stunning double of orange and blue-green, nicknamed 'the beautiful eye'." },
      { name: "Muphrid", bayer: "η", dist: 37, mag: 2.68, spectral: "G0" },
    ],
  },
  {
    name: "Caelum",
    abbr: "Cae",
    meaning: "The Chisel",
    hemisphere: "Southern",
    desc: "One of the faintest constellations, a sculptor's chisel from the 18th-century southern sky.",
    stars: [
      { name: "Alpha Caeli", bayer: "α", dist: 65.7, mag: 4.44, spectral: "F2" },
    ],
  },
  {
    name: "Camelopardalis",
    abbr: "Cam",
    meaning: "The Giraffe",
    hemisphere: "Northern",
    desc: "A large but dim northern figure representing a giraffe, invented in the 17th century.",
    stars: [
      { name: "Beta Camelopardalis", bayer: "β", dist: 870, mag: 4.03, spectral: "G1" },
    ],
  },
  {
    name: "Cancer",
    abbr: "Cnc",
    meaning: "The Crab",
    hemisphere: "Northern",
    desc: "The faint zodiacal crab crushed by Hercules, home to the lovely Beehive Cluster.",
    stars: [
      { name: "Tarf", bayer: "β", dist: 290, mag: 3.53, spectral: "K4" },
      { name: "Asellus Australis", bayer: "δ", dist: 131, mag: 3.94, spectral: "K0" },
      { name: "Acubens", bayer: "α", dist: 174, mag: 4.26, spectral: "A5" },
    ],
  },
  {
    name: "Canes Venatici",
    abbr: "CVn",
    meaning: "The Hunting Dogs",
    hemisphere: "Northern",
    desc: "The hounds of Boötes, chasing the great bear beneath the handle of the Big Dipper.",
    stars: [
      { name: "Cor Caroli", bayer: "α", dist: 115, mag: 2.89, spectral: "A0", note: "'The heart of Charles', named for a king, and the prototype of a class of magnetic variable stars." },
      { name: "Chara", bayer: "β", dist: 27.5, mag: 4.24, spectral: "G0" },
    ],
  },
  {
    name: "Canis Major",
    abbr: "CMa",
    meaning: "The Greater Dog",
    hemisphere: "Southern",
    desc: "The larger hunting dog of Orion, carrying the most brilliant star in all the heavens.",
    stars: [
      { name: "Sirius", bayer: "α", dist: 8.6, mag: -1.46, spectral: "A1", note: "The brightest star in the night sky, guiding ancient navigators. In truth a blue-white giant waltzing with a dense white dwarf." },
      { name: "Adhara", bayer: "ε", dist: 430, mag: 1.50, spectral: "B2", note: "Once the brightest star in the sky as seen from Earth, some five million years ago." },
      { name: "Wezen", bayer: "δ", dist: 1600, mag: 1.83, spectral: "F8", note: "A yellow-white supergiant so vast it would nearly reach Earth if placed at the Sun." },
      { name: "Mirzam", bayer: "β", dist: 500, mag: 1.98, spectral: "B1" },
    ],
  },
  {
    name: "Canis Minor",
    abbr: "CMi",
    meaning: "The Lesser Dog",
    hemisphere: "Equatorial",
    desc: "The smaller of Orion's two dogs, marked by the brilliant Procyon.",
    stars: [
      { name: "Procyon", bayer: "α", dist: 11.5, mag: 0.34, spectral: "F5", note: "The eighth-brightest star, rising just before Sirius. It too hides a faint white dwarf companion." },
      { name: "Gomeisa", bayer: "β", dist: 160, mag: 2.89, spectral: "B8" },
    ],
  },
  {
    name: "Capricornus",
    abbr: "Cap",
    meaning: "The Sea Goat",
    hemisphere: "Southern",
    desc: "The strange goat-fish of the zodiac, tied to the god Pan and the winter solstice.",
    stars: [
      { name: "Deneb Algedi", bayer: "δ", dist: 38.7, mag: 2.85, spectral: "A7" },
      { name: "Dabih", bayer: "β", dist: 328, mag: 3.05, spectral: "K0" },
      { name: "Algedi", bayer: "α", dist: 109, mag: 3.57, spectral: "G3" },
    ],
  },
  {
    name: "Carina",
    abbr: "Car",
    meaning: "The Keel",
    hemisphere: "Southern",
    desc: "The keel of the great ship Argo, carrying the second-brightest star in the sky.",
    stars: [
      { name: "Canopus", bayer: "α", dist: 310, mag: -0.74, spectral: "A9", note: "The second-brightest star in the heavens, a brilliant white supergiant used as a guide by spacecraft navigating the solar system." },
      { name: "Miaplacidus", bayer: "β", dist: 113, mag: 1.68, spectral: "A2" },
      { name: "Avior", bayer: "ε", dist: 610, mag: 1.86, spectral: "K3" },
      { name: "Eta Carinae", bayer: "η", dist: 7500, mag: 4.30, spectral: "LBV", note: "A monstrous unstable pair over a hundred times the Sun's mass, wrapped in the glowing Homunculus Nebula it blasted out in the 1840s." },
    ],
  },
  {
    name: "Cassiopeia",
    abbr: "Cas",
    meaning: "The Queen",
    hemisphere: "Northern",
    desc: "The vain queen bound to her throne, forming an unmistakable W across the northern Milky Way.",
    stars: [
      { name: "Schedar", bayer: "α", dist: 228, mag: 2.24, spectral: "K0", note: "An orange giant marking the queen's breast, the brightest point of the celestial W." },
      { name: "Caph", bayer: "β", dist: 54.7, mag: 2.28, spectral: "F2" },
      { name: "Gamma Cassiopeiae", bayer: "γ", dist: 550, mag: 2.15, spectral: "B0", note: "A wildly variable star spinning so fast it flings off a disk of gas, the prototype of its own class." },
      { name: "Ruchbah", bayer: "δ", dist: 99.4, mag: 2.66, spectral: "A5" },
    ],
  },
  {
    name: "Centaurus",
    abbr: "Cen",
    meaning: "The Centaur",
    hemisphere: "Southern",
    desc: "The wise centaur Chiron, host to the closest star system to our Sun.",
    stars: [
      { name: "Rigil Kentaurus", bayer: "α", dist: 4.37, mag: -0.27, spectral: "G2", note: "Alpha Centauri, the nearest bright star system, a Sun-like pair. Its faint companion Proxima is our closest stellar neighbor." },
      { name: "Hadar", bayer: "β", dist: 390, mag: 0.61, spectral: "B1", note: "A brilliant blue giant triple system, the eleventh-brightest star in the sky." },
      { name: "Menkent", bayer: "θ", dist: 58.8, mag: 2.06, spectral: "K0" },
      { name: "Proxima Centauri", bayer: "α*", dist: 4.24, mag: 11.13, spectral: "M5", note: "The nearest star to the Sun, a faint red dwarf cradling the rocky world Proxima b within its habitable zone." },
    ],
  },
  {
    name: "Cepheus",
    abbr: "Cep",
    meaning: "The King",
    hemisphere: "Northern",
    desc: "The king and husband of Cassiopeia, home to a star that gave astronomers their cosmic yardstick.",
    stars: [
      { name: "Alderamin", bayer: "α", dist: 49, mag: 2.45, spectral: "A7" },
      { name: "Delta Cephei", bayer: "δ", dist: 887, mag: 3.75, spectral: "F5", note: "The prototype Cepheid variable, whose steady pulse lets astronomers measure the distances of galaxies." },
      { name: "Errai", bayer: "γ", dist: 45, mag: 3.21, spectral: "K1" },
      { name: "Herschel's Garnet Star", bayer: "μ", dist: 3000, mag: 4.08, spectral: "M2", note: "One of the largest and reddest stars visible to the eye, a hypergiant of deep garnet hue." },
    ],
  },
  {
    name: "Cetus",
    abbr: "Cet",
    meaning: "The Sea Monster",
    hemisphere: "Equatorial",
    desc: "The sea monster sent to devour Andromeda, and home to the famous pulsing star Mira.",
    stars: [
      { name: "Diphda", bayer: "β", dist: 96.3, mag: 2.02, spectral: "K0" },
      { name: "Menkar", bayer: "α", dist: 249, mag: 2.53, spectral: "M1" },
      { name: "Mira", bayer: "ο", dist: 300, mag: 3.04, spectral: "M7", note: "'The Wonderful', a pulsating red giant that swells and fades over eleven months, trailing a comet-like tail of shed gas light-years long." },
    ],
  },
  {
    name: "Chamaeleon",
    abbr: "Cha",
    meaning: "The Chameleon",
    hemisphere: "Southern",
    desc: "A small, faint constellation near the south pole, named for the color-changing lizard.",
    stars: [
      { name: "Alpha Chamaeleontis", bayer: "α", dist: 63.5, mag: 4.06, spectral: "F5" },
    ],
  },
  {
    name: "Circinus",
    abbr: "Cir",
    meaning: "The Compasses",
    hemisphere: "Southern",
    desc: "A drafting compass drawn beside Alpha Centauri, another 18th-century southern invention.",
    stars: [
      { name: "Alpha Circini", bayer: "α", dist: 54, mag: 3.19, spectral: "A7" },
    ],
  },
  {
    name: "Columba",
    abbr: "Col",
    meaning: "The Dove",
    hemisphere: "Southern",
    desc: "The dove of Noah, or the one sent ahead of the ship Argo, carved from the sky below Orion.",
    stars: [
      { name: "Phact", bayer: "α", dist: 261, mag: 2.65, spectral: "B7" },
      { name: "Wazn", bayer: "β", dist: 87, mag: 3.12, spectral: "K1" },
    ],
  },
  {
    name: "Coma Berenices",
    abbr: "Com",
    meaning: "Berenice's Hair",
    hemisphere: "Northern",
    desc: "The flowing hair of Queen Berenice, offered to the gods, glittering with a nearby star cluster.",
    stars: [
      { name: "Diadem", bayer: "α", dist: 58.1, mag: 4.32, spectral: "F5" },
      { name: "Beta Comae Berenices", bayer: "β", dist: 29.9, mag: 4.26, spectral: "G0" },
    ],
  },
  {
    name: "Corona Australis",
    abbr: "CrA",
    meaning: "The Southern Crown",
    hemisphere: "Southern",
    desc: "A delicate arc of stars forming a crown beneath the feet of Sagittarius.",
    stars: [
      { name: "Meridiana", bayer: "α", dist: 130, mag: 4.10, spectral: "A2" },
    ],
  },
  {
    name: "Corona Borealis",
    abbr: "CrB",
    meaning: "The Northern Crown",
    hemisphere: "Northern",
    desc: "The jeweled crown of Ariadne, a graceful semicircle of stars set in the sky by Dionysus.",
    stars: [
      { name: "Alphecca", bayer: "α", dist: 75, mag: 2.23, spectral: "A0", note: "'The broken one', the brightest jewel of the crown, an eclipsing binary ringed by a dusty disk." },
      { name: "Nusakan", bayer: "β", dist: 112, mag: 3.68, spectral: "F0" },
    ],
  },
  {
    name: "Corvus",
    abbr: "Crv",
    meaning: "The Crow",
    hemisphere: "Southern",
    desc: "The crow of Apollo, cursed for its lies, marked by a small quadrilateral of stars.",
    stars: [
      { name: "Gienah", bayer: "γ", dist: 154, mag: 2.58, spectral: "B8" },
      { name: "Kraz", bayer: "β", dist: 146, mag: 2.65, spectral: "G5" },
      { name: "Algorab", bayer: "δ", dist: 87, mag: 2.94, spectral: "B9" },
    ],
  },
  {
    name: "Crater",
    abbr: "Crt",
    meaning: "The Cup",
    hemisphere: "Southern",
    desc: "The goblet of Apollo, a faint chalice of stars beside the crow and the water snake.",
    stars: [
      { name: "Labrum", bayer: "δ", dist: 163, mag: 3.56, spectral: "K0" },
    ],
  },
  {
    name: "Crux",
    abbr: "Cru",
    meaning: "The Southern Cross",
    hemisphere: "Southern",
    desc: "The smallest constellation, an iconic cross pointing toward the southern celestial pole.",
    stars: [
      { name: "Acrux", bayer: "α", dist: 320, mag: 0.76, spectral: "B0", note: "The brilliant foot of the cross, a multiple system of hot blue stars and the southernmost first-magnitude star." },
      { name: "Mimosa", bayer: "β", dist: 280, mag: 1.25, spectral: "B0", note: "A blue giant pulsating faintly, the second-brightest star of the cross." },
      { name: "Gacrux", bayer: "γ", dist: 88.6, mag: 1.64, spectral: "M3", note: "A red giant at the top of the cross, its ruddy color a striking contrast to its blue companions." },
    ],
  },
  {
    name: "Cygnus",
    abbr: "Cyg",
    meaning: "The Swan",
    hemisphere: "Northern",
    desc: "The swan flying down the Milky Way, also called the Northern Cross, rich with nebulae and dark rifts.",
    stars: [
      { name: "Deneb", bayer: "α", dist: 2615, mag: 1.25, spectral: "A2", note: "A staggeringly luminous white supergiant, one of the most distant stars visible to the naked eye and a vertex of the Summer Triangle." },
      { name: "Sadr", bayer: "γ", dist: 1800, mag: 2.23, spectral: "F8" },
      { name: "Albireo", bayer: "β", dist: 430, mag: 3.18, spectral: "K3", note: "The most beautiful double star in the sky, a golden and sapphire pair at the swan's beak." },
      { name: "Gienah Cygni", bayer: "ε", dist: 72.7, mag: 2.48, spectral: "K0" },
    ],
  },
  {
    name: "Delphinus",
    abbr: "Del",
    meaning: "The Dolphin",
    hemisphere: "Northern",
    desc: "A small, charming diamond of stars leaping from the Milky Way like a dolphin from the sea.",
    stars: [
      { name: "Rotanev", bayer: "β", dist: 97, mag: 3.63, spectral: "F5" },
      { name: "Sualocin", bayer: "α", dist: 254, mag: 3.77, spectral: "B9" },
    ],
  },
  {
    name: "Dorado",
    abbr: "Dor",
    meaning: "The Dolphinfish",
    hemisphere: "Southern",
    desc: "A southern constellation holding most of the Large Magellanic Cloud, a satellite galaxy of the Milky Way.",
    stars: [
      { name: "Alpha Doradus", bayer: "α", dist: 169, mag: 3.27, spectral: "A0" },
    ],
  },
  {
    name: "Draco",
    abbr: "Dra",
    meaning: "The Dragon",
    hemisphere: "Northern",
    desc: "The great dragon coiling around the north pole, guardian of the golden apples.",
    stars: [
      { name: "Eltanin", bayer: "γ", dist: 154, mag: 2.24, spectral: "K5", note: "The dragon's blazing eye, an orange giant slowly approaching us to become a brilliant beacon in the far future." },
      { name: "Aldibain", bayer: "η", dist: 92.1, mag: 2.73, spectral: "G8" },
      { name: "Thuban", bayer: "α", dist: 303, mag: 3.65, spectral: "A0", note: "The pole star of the ancient Egyptians, once aligned with the Great Pyramid's shaft." },
    ],
  },
  {
    name: "Equuleus",
    abbr: "Equ",
    meaning: "The Little Horse",
    hemisphere: "Northern",
    desc: "The second-smallest constellation, a foal's head beside Pegasus.",
    stars: [
      { name: "Kitalpha", bayer: "α", dist: 190, mag: 3.92, spectral: "G0" },
    ],
  },
  {
    name: "Eridanus",
    abbr: "Eri",
    meaning: "The River",
    hemisphere: "Southern",
    desc: "A long, winding celestial river flowing from Orion's foot toward the southern sky.",
    stars: [
      { name: "Achernar", bayer: "α", dist: 139, mag: 0.46, spectral: "B6", note: "'The river's end', the flattest known star, spun into a lens by its ferocious rotation." },
      { name: "Cursa", bayer: "β", dist: 90, mag: 2.79, spectral: "A3" },
      { name: "Zaurak", bayer: "γ", dist: 203, mag: 2.91, spectral: "M0" },
      { name: "Epsilon Eridani", bayer: "ε", dist: 10.5, mag: 3.73, spectral: "K2", note: "One of the nearest Sun-like stars, young and encircled by dusty debris belts and at least one planet." },
    ],
  },
  {
    name: "Fornax",
    abbr: "For",
    meaning: "The Furnace",
    hemisphere: "Southern",
    desc: "A chemical furnace from the Enlightenment sky, its dim reaches hiding distant galaxy clusters.",
    stars: [
      { name: "Dalim", bayer: "α", dist: 46, mag: 3.85, spectral: "F8" },
    ],
  },
  {
    name: "Gemini",
    abbr: "Gem",
    meaning: "The Twins",
    hemisphere: "Northern",
    desc: "The twin brothers Castor and Pollux, immortalized side by side in the winter zodiac.",
    stars: [
      { name: "Pollux", bayer: "β", dist: 33.8, mag: 1.14, spectral: "K0", note: "The nearest giant star to the Sun, an orange giant with a confirmed planet named Thestias." },
      { name: "Castor", bayer: "α", dist: 51, mag: 1.58, spectral: "A1", note: "A remarkable sextuple system of six stars bound together, appearing as one to the eye." },
      { name: "Alhena", bayer: "γ", dist: 109, mag: 1.90, spectral: "A0" },
    ],
  },
  {
    name: "Grus",
    abbr: "Gru",
    meaning: "The Crane",
    hemisphere: "Southern",
    desc: "A southern bird, the crane, wading through the sky beneath the water constellations.",
    stars: [
      { name: "Alnair", bayer: "α", dist: 101, mag: 1.74, spectral: "B6" },
      { name: "Tiaki", bayer: "β", dist: 177, mag: 2.15, spectral: "M5" },
    ],
  },
  {
    name: "Hercules",
    abbr: "Her",
    meaning: "The Hero",
    hemisphere: "Northern",
    desc: "The kneeling hero of a thousand labors, home to the magnificent Great Globular Cluster.",
    stars: [
      { name: "Kornephoros", bayer: "β", dist: 139, mag: 2.78, spectral: "G7" },
      { name: "Rasalgethi", bayer: "α", dist: 360, mag: 3.35, spectral: "M5", note: "'The head of the kneeler', a vast red giant pulsing irregularly, paired with a golden companion." },
      { name: "Sarin", bayer: "δ", dist: 75, mag: 3.12, spectral: "A3" },
    ],
  },
  {
    name: "Horologium",
    abbr: "Hor",
    meaning: "The Pendulum Clock",
    hemisphere: "Southern",
    desc: "A faint winding constellation honoring the pendulum clock, timekeeper of astronomers.",
    stars: [
      { name: "Alpha Horologii", bayer: "α", dist: 115, mag: 3.85, spectral: "K1" },
    ],
  },
  {
    name: "Hydra",
    abbr: "Hya",
    meaning: "The Water Snake",
    hemisphere: "Equatorial",
    desc: "The largest of all constellations, a colossal water snake sprawling a quarter of the way around the sky.",
    stars: [
      { name: "Alphard", bayer: "α", dist: 177, mag: 1.98, spectral: "K3", note: "'The solitary one', a lonely orange giant glowing where no other bright star keeps it company." },
      { name: "Gamma Hydrae", bayer: "γ", dist: 133, mag: 2.99, spectral: "G8" },
    ],
  },
  {
    name: "Hydrus",
    abbr: "Hyi",
    meaning: "The Male Water Snake",
    hemisphere: "Southern",
    desc: "A small southern serpent winding between the two Magellanic Clouds.",
    stars: [
      { name: "Beta Hydri", bayer: "β", dist: 24.3, mag: 2.80, spectral: "G2", note: "The nearest reasonably bright star to the south celestial pole, an aging near-twin of our Sun." },
      { name: "Alpha Hydri", bayer: "α", dist: 71.8, mag: 2.86, spectral: "F0" },
    ],
  },
  {
    name: "Indus",
    abbr: "Ind",
    meaning: "The Indian",
    hemisphere: "Southern",
    desc: "A figure representing a native of distant lands, drawn by the first explorers of the southern sky.",
    stars: [
      { name: "The Persian", bayer: "α", dist: 98.3, mag: 3.11, spectral: "K0" },
      { name: "Epsilon Indi", bayer: "ε", dist: 11.9, mag: 4.69, spectral: "K5", note: "One of the closest stars to the Sun, host to a pair of brown dwarfs and a giant planet." },
    ],
  },
  {
    name: "Lacerta",
    abbr: "Lac",
    meaning: "The Lizard",
    hemisphere: "Northern",
    desc: "A small zigzag of stars threading the Milky Way between Cygnus and Andromeda.",
    stars: [
      { name: "Alpha Lacertae", bayer: "α", dist: 102, mag: 3.76, spectral: "A1" },
    ],
  },
  {
    name: "Leo",
    abbr: "Leo",
    meaning: "The Lion",
    hemisphere: "Northern",
    desc: "The regal lion slain by Hercules, its mane traced by the great Sickle of stars.",
    stars: [
      { name: "Regulus", bayer: "α", dist: 79.3, mag: 1.35, spectral: "B8", note: "'The little king', a fast-spinning blue-white star flattened at its poles, lying almost exactly on the ecliptic." },
      { name: "Denebola", bayer: "β", dist: 35.9, mag: 2.11, spectral: "A3", note: "The lion's tail, a young white star surrounded by a disk of debris." },
      { name: "Algieba", bayer: "γ", dist: 130, mag: 2.08, spectral: "K1", note: "A splendid double of two golden giants, one with a known planet." },
      { name: "Zosma", bayer: "δ", dist: 58.4, mag: 2.56, spectral: "A4" },
    ],
  },
  {
    name: "Leo Minor",
    abbr: "LMi",
    meaning: "The Lesser Lion",
    hemisphere: "Northern",
    desc: "A faint cub of stars tucked between the great lion and the bear.",
    stars: [
      { name: "Praecipua", bayer: "46", dist: 98.6, mag: 3.83, spectral: "K0" },
    ],
  },
  {
    name: "Lepus",
    abbr: "Lep",
    meaning: "The Hare",
    hemisphere: "Southern",
    desc: "A hare crouching beneath Orion's feet, forever fleeing the hunter's dogs.",
    stars: [
      { name: "Arneb", bayer: "α", dist: 2200, mag: 2.58, spectral: "F0", note: "A rare and luminous white supergiant nearing the end of its brief, brilliant life." },
      { name: "Nihal", bayer: "β", dist: 160, mag: 2.81, spectral: "G5" },
    ],
  },
  {
    name: "Libra",
    abbr: "Lib",
    meaning: "The Scales",
    hemisphere: "Southern",
    desc: "The balance of justice, the only zodiac sign representing an object rather than a living thing.",
    stars: [
      { name: "Zubeneschamali", bayer: "β", dist: 185, mag: 2.61, spectral: "B8", note: "The 'northern claw', sometimes reported as the only greenish star visible to the naked eye." },
      { name: "Zubenelgenubi", bayer: "α", dist: 76, mag: 2.74, spectral: "A3" },
    ],
  },
  {
    name: "Lupus",
    abbr: "Lup",
    meaning: "The Wolf",
    hemisphere: "Southern",
    desc: "A wolf impaled on the centaur's spear, set among the rich star fields of the southern Milky Way.",
    stars: [
      { name: "Men", bayer: "α", dist: 460, mag: 2.30, spectral: "B1" },
      { name: "Kekouan", bayer: "β", dist: 380, mag: 2.68, spectral: "B2" },
    ],
  },
  {
    name: "Lynx",
    abbr: "Lyn",
    meaning: "The Lynx",
    hemisphere: "Northern",
    desc: "A faint constellation said to require the eyes of a lynx to see, filling a gap in the northern sky.",
    stars: [
      { name: "Alpha Lyncis", bayer: "α", dist: 203, mag: 3.14, spectral: "K7" },
    ],
  },
  {
    name: "Lyra",
    abbr: "Lyr",
    meaning: "The Lyre",
    hemisphere: "Northern",
    desc: "The harp of Orpheus, small but brilliant, home to the Ring Nebula and the dazzling Vega.",
    stars: [
      { name: "Vega", bayer: "α", dist: 25, mag: 0.03, spectral: "A0", note: "Once and future pole star, ringed by a disk of planet-forming dust, long used as the very definition of stellar brightness." },
      { name: "Sulafat", bayer: "γ", dist: 620, mag: 3.24, spectral: "B9" },
      { name: "Sheliak", bayer: "β", dist: 960, mag: 3.52, spectral: "B7", note: "An eclipsing binary so close its stars are drawn into egg shapes, spilling gas between them." },
    ],
  },
  {
    name: "Mensa",
    abbr: "Men",
    meaning: "The Table Mountain",
    hemisphere: "Southern",
    desc: "The faintest constellation, named for Table Mountain, the only one honoring an earthly place.",
    stars: [
      { name: "Alpha Mensae", bayer: "α", dist: 33.3, mag: 5.09, spectral: "G7" },
    ],
  },
  {
    name: "Microscopium",
    abbr: "Mic",
    meaning: "The Microscope",
    hemisphere: "Southern",
    desc: "A dim tribute to the microscope, tucked below Capricornus in the southern sky.",
    stars: [
      { name: "Gamma Microscopii", bayer: "γ", dist: 223, mag: 4.67, spectral: "G6" },
    ],
  },
  {
    name: "Monoceros",
    abbr: "Mon",
    meaning: "The Unicorn",
    hemisphere: "Equatorial",
    desc: "A faint unicorn galloping through the winter Milky Way, rich with glowing nebulae and clusters.",
    stars: [
      { name: "Alpha Monocerotis", bayer: "α", dist: 148, mag: 3.94, spectral: "K0" },
    ],
  },
  {
    name: "Musca",
    abbr: "Mus",
    meaning: "The Fly",
    hemisphere: "Southern",
    desc: "The only insect among the constellations, a small fly near the Southern Cross.",
    stars: [
      { name: "Alpha Muscae", bayer: "α", dist: 315, mag: 2.69, spectral: "B2" },
    ],
  },
  {
    name: "Norma",
    abbr: "Nor",
    meaning: "The Carpenter's Square",
    hemisphere: "Southern",
    desc: "A set square set among the dense star clouds of the southern Milky Way.",
    stars: [
      { name: "Gamma2 Normae", bayer: "γ²", dist: 129, mag: 4.02, spectral: "G8" },
    ],
  },
  {
    name: "Octans",
    abbr: "Oct",
    meaning: "The Octant",
    hemisphere: "Southern",
    desc: "The constellation containing the south celestial pole, marked only by dim stars.",
    stars: [
      { name: "Polaris Australis", bayer: "σ", dist: 294, mag: 5.47, spectral: "F0", note: "The faint southern pole star, nowhere near as bright or as close to the pole as its northern counterpart." },
    ],
  },
  {
    name: "Ophiuchus",
    abbr: "Oph",
    meaning: "The Serpent Bearer",
    hemisphere: "Equatorial",
    desc: "The healer Asclepius wrestling a serpent, a vast figure often called the thirteenth zodiac sign.",
    stars: [
      { name: "Rasalhague", bayer: "α", dist: 48.6, mag: 2.08, spectral: "A5" },
      { name: "Sabik", bayer: "η", dist: 88, mag: 2.43, spectral: "A1" },
      { name: "Barnard's Star", bayer: "", dist: 5.96, mag: 9.51, spectral: "M4", note: "A dim red dwarf with the fastest apparent motion of any star, racing across the sky and hosting a sub-Earth planet." },
    ],
  },
  {
    name: "Orion",
    abbr: "Ori",
    meaning: "The Hunter",
    hemisphere: "Equatorial",
    desc: "The mighty hunter striding across the celestial equator, the most recognizable figure in the sky.",
    stars: [
      { name: "Rigel", bayer: "β", dist: 860, mag: 0.13, spectral: "B8", note: "A blazing blue supergiant tens of thousands of times brighter than the Sun, marking the hunter's foot." },
      { name: "Betelgeuse", bayer: "α", dist: 642, mag: 0.50, spectral: "M1", note: "The doomed red supergiant shoulder of Orion, so vast it would swallow Jupiter's orbit. One day it will explode as a supernova." },
      { name: "Bellatrix", bayer: "γ", dist: 250, mag: 1.64, spectral: "B2", note: "'The warrior woman', a hot blue-white star marking the hunter's other shoulder." },
      { name: "Alnilam", bayer: "ε", dist: 2000, mag: 1.69, spectral: "B0", note: "The central jewel of Orion's Belt, a luminous blue supergiant wrapped in a faint reflection nebula." },
      { name: "Alnitak", bayer: "ζ", dist: 1260, mag: 1.77, spectral: "O9", note: "The eastern star of the Belt, a fierce triple system lighting the nearby Flame Nebula." },
      { name: "Saiph", bayer: "κ", dist: 650, mag: 2.09, spectral: "B0" },
      { name: "Mintaka", bayer: "δ", dist: 1200, mag: 2.23, spectral: "O9", note: "The western star of the Belt, a complex multiple system almost exactly on the celestial equator." },
    ],
  },
  {
    name: "Pavo",
    abbr: "Pav",
    meaning: "The Peacock",
    hemisphere: "Southern",
    desc: "A peacock spreading across the far southern sky, charted by seafaring navigators.",
    stars: [
      { name: "Peacock", bayer: "α", dist: 179, mag: 1.94, spectral: "B2", note: "A hot blue binary, one of the few stars named for the twentieth-century Royal Air Force star charts." },
    ],
  },
  {
    name: "Pegasus",
    abbr: "Peg",
    meaning: "The Winged Horse",
    hemisphere: "Northern",
    desc: "The winged horse born of Medusa, its body forming the vast autumn Square.",
    stars: [
      { name: "Enif", bayer: "ε", dist: 690, mag: 2.39, spectral: "K2", note: "'The nose', an orange supergiant prone to sudden flares, the brightest star of the winged horse." },
      { name: "Scheat", bayer: "β", dist: 196, mag: 2.42, spectral: "M2" },
      { name: "Markab", bayer: "α", dist: 133, mag: 2.48, spectral: "B9" },
      { name: "Algenib", bayer: "γ", dist: 470, mag: 2.83, spectral: "B2" },
      { name: "51 Pegasi", bayer: "", dist: 50.6, mag: 5.49, spectral: "G2", note: "The first Sun-like star ever found to host a planet, a discovery that opened the age of exoplanets." },
    ],
  },
  {
    name: "Perseus",
    abbr: "Per",
    meaning: "The Hero",
    hemisphere: "Northern",
    desc: "The hero who slew Medusa, holding her severed head, whose winking eye is the star Algol.",
    stars: [
      { name: "Mirfak", bayer: "α", dist: 510, mag: 1.79, spectral: "F5", note: "A radiant yellow supergiant presiding over a scattered cluster of young stars." },
      { name: "Algol", bayer: "β", dist: 90, mag: 2.12, spectral: "B8", note: "'The demon star', the winking eye of Medusa, an eclipsing binary that visibly dims every few days." },
    ],
  },
  {
    name: "Phoenix",
    abbr: "Phe",
    meaning: "The Phoenix",
    hemisphere: "Southern",
    desc: "The immortal firebird rising from its ashes, a southern constellation of the modern age.",
    stars: [
      { name: "Ankaa", bayer: "α", dist: 82, mag: 2.40, spectral: "K0" },
    ],
  },
  {
    name: "Pictor",
    abbr: "Pic",
    meaning: "The Painter's Easel",
    hemisphere: "Southern",
    desc: "A faint easel beside Canopus, famous for a nearby star with a planet-forming disk.",
    stars: [
      { name: "Alpha Pictoris", bayer: "α", dist: 97, mag: 3.27, spectral: "A7" },
      { name: "Beta Pictoris", bayer: "β", dist: 63, mag: 3.86, spectral: "A6", note: "A young star wrapped in a debris disk where planets are forming before our telescopes' eyes." },
    ],
  },
  {
    name: "Pisces",
    abbr: "Psc",
    meaning: "The Fishes",
    hemisphere: "Northern",
    desc: "Two fish tied together by their tails, marking where the Sun crosses the equator in spring.",
    stars: [
      { name: "Alpherg", bayer: "η", dist: 350, mag: 3.62, spectral: "G7" },
      { name: "Alrescha", bayer: "α", dist: 151, mag: 3.82, spectral: "A0", note: "'The cord', the knot binding the two fishes, a close pair of white stars." },
    ],
  },
  {
    name: "Piscis Austrinus",
    abbr: "PsA",
    meaning: "The Southern Fish",
    hemisphere: "Southern",
    desc: "The great southern fish drinking the water poured by Aquarius, crowned by lonely Fomalhaut.",
    stars: [
      { name: "Fomalhaut", bayer: "α", dist: 25.1, mag: 1.16, spectral: "A3", note: "'The mouth of the fish', a young star encircled by a sharp-edged ring of debris and dust, one of the first with a directly imaged planet candidate." },
    ],
  },
  {
    name: "Puppis",
    abbr: "Pup",
    meaning: "The Stern",
    hemisphere: "Southern",
    desc: "The stern of the ship Argo, sailing the southern Milky Way amid dense star clouds.",
    stars: [
      { name: "Naos", bayer: "ζ", dist: 1080, mag: 2.21, spectral: "O4", note: "One of the hottest and most luminous stars visible to the eye, a rare blue supergiant blasting a fierce stellar wind." },
      { name: "Pi Puppis", bayer: "π", dist: 810, mag: 2.71, spectral: "K3" },
    ],
  },
  {
    name: "Pyxis",
    abbr: "Pyx",
    meaning: "The Compass",
    hemisphere: "Southern",
    desc: "The mariner's compass box, a small modern addition among the pieces of the old ship Argo.",
    stars: [
      { name: "Alpha Pyxidis", bayer: "α", dist: 880, mag: 3.68, spectral: "B1" },
    ],
  },
  {
    name: "Reticulum",
    abbr: "Ret",
    meaning: "The Reticle",
    hemisphere: "Southern",
    desc: "A small diamond of stars named for the eyepiece reticle used to measure star positions.",
    stars: [
      { name: "Alpha Reticuli", bayer: "α", dist: 161, mag: 3.33, spectral: "G8" },
    ],
  },
  {
    name: "Sagitta",
    abbr: "Sge",
    meaning: "The Arrow",
    hemisphere: "Northern",
    desc: "The third-smallest constellation, a slender arrow flying through the Milky Way.",
    stars: [
      { name: "Gamma Sagittae", bayer: "γ", dist: 258, mag: 3.47, spectral: "M0" },
    ],
  },
  {
    name: "Sagittarius",
    abbr: "Sgr",
    meaning: "The Archer",
    hemisphere: "Southern",
    desc: "The centaur archer aiming his bow at the heart of the Milky Way, toward the galaxy's very center.",
    stars: [
      { name: "Kaus Australis", bayer: "ε", dist: 143, mag: 1.85, spectral: "B9", note: "The brightest star of the archer, marking the southern part of his bow." },
      { name: "Nunki", bayer: "σ", dist: 228, mag: 2.05, spectral: "B2", note: "A hot blue star bearing an ancient Babylonian name, one of the oldest still in use." },
      { name: "Ascella", bayer: "ζ", dist: 88, mag: 2.60, spectral: "A2" },
      { name: "Kaus Media", bayer: "δ", dist: 348, mag: 2.72, spectral: "K3" },
    ],
  },
  {
    name: "Scorpius",
    abbr: "Sco",
    meaning: "The Scorpion",
    hemisphere: "Southern",
    desc: "The scorpion that slew Orion, its curving tail and red heart set among the brightest reaches of the Milky Way.",
    stars: [
      { name: "Antares", bayer: "α", dist: 550, mag: 1.06, spectral: "M1", note: "'Rival of Mars', a colossal red supergiant so vast it would swallow the orbit of Mars, smoldering at the scorpion's heart. It will one day explode." },
      { name: "Shaula", bayer: "λ", dist: 570, mag: 1.62, spectral: "B1", note: "'The stinger', a hot blue multiple system at the tip of the scorpion's raised tail." },
      { name: "Sargas", bayer: "θ", dist: 300, mag: 1.86, spectral: "F1" },
      { name: "Dschubba", bayer: "δ", dist: 490, mag: 2.29, spectral: "B0" },
    ],
  },
  {
    name: "Sculptor",
    abbr: "Scl",
    meaning: "The Sculptor",
    hemisphere: "Southern",
    desc: "A dim constellation holding the south galactic pole and a nearby group of galaxies.",
    stars: [
      { name: "Alpha Sculptoris", bayer: "α", dist: 780, mag: 4.30, spectral: "B7" },
    ],
  },
  {
    name: "Scutum",
    abbr: "Sct",
    meaning: "The Shield",
    hemisphere: "Southern",
    desc: "A small shield honoring a Polish king, set against one of the richest star clouds of the Milky Way.",
    stars: [
      { name: "Alpha Scuti", bayer: "α", dist: 199, mag: 3.85, spectral: "K3" },
    ],
  },
  {
    name: "Serpens",
    abbr: "Ser",
    meaning: "The Serpent",
    hemisphere: "Equatorial",
    desc: "The only constellation split in two, the serpent held in the hands of Ophiuchus.",
    stars: [
      { name: "Unukalhai", bayer: "α", dist: 74, mag: 2.63, spectral: "K2", note: "'The serpent's neck', an orange giant marking the heart of the serpent." },
    ],
  },
  {
    name: "Sextans",
    abbr: "Sex",
    meaning: "The Sextant",
    hemisphere: "Equatorial",
    desc: "A faint tribute to the sextant, the instrument used to measure the positions of stars.",
    stars: [
      { name: "Alpha Sextantis", bayer: "α", dist: 280, mag: 4.48, spectral: "A0" },
    ],
  },
  {
    name: "Taurus",
    abbr: "Tau",
    meaning: "The Bull",
    hemisphere: "Northern",
    desc: "The charging bull of the zodiac, its face the Hyades cluster and its shoulder the Pleiades.",
    stars: [
      { name: "Aldebaran", bayer: "α", dist: 65, mag: 0.85, spectral: "K5", note: "The fiery orange eye of the bull, glowing a deep sunset hue. It only appears to sit among the Hyades cluster far beyond it." },
      { name: "Elnath", bayer: "β", dist: 134, mag: 1.65, spectral: "B7", note: "The bull's northern horn tip, a star once shared with the charioteer Auriga." },
      { name: "Alcyone", bayer: "η", dist: 440, mag: 2.87, spectral: "B7", note: "The brightest star of the Pleiades, a hot blue giant amid the famous Seven Sisters cluster." },
    ],
  },
  {
    name: "Telescopium",
    abbr: "Tel",
    meaning: "The Telescope",
    hemisphere: "Southern",
    desc: "A faint constellation honoring the telescope, tucked beneath Sagittarius and the Corona Australis.",
    stars: [
      { name: "Alpha Telescopii", bayer: "α", dist: 278, mag: 3.49, spectral: "B3" },
    ],
  },
  {
    name: "Triangulum",
    abbr: "Tri",
    meaning: "The Triangle",
    hemisphere: "Northern",
    desc: "A simple slim triangle of stars, home to the Triangulum Galaxy, the third-largest of our Local Group.",
    stars: [
      { name: "Beta Trianguli", bayer: "β", dist: 127, mag: 3.00, spectral: "A5" },
      { name: "Mothallah", bayer: "α", dist: 63, mag: 3.42, spectral: "F6" },
    ],
  },
  {
    name: "Triangulum Australe",
    abbr: "TrA",
    meaning: "The Southern Triangle",
    hemisphere: "Southern",
    desc: "A bright, near-perfect triangle of the far south, more striking than its northern namesake.",
    stars: [
      { name: "Atria", bayer: "α", dist: 391, mag: 1.91, spectral: "K2", note: "An orange giant many times the Sun's size, the luminous apex of the southern triangle." },
      { name: "Beta Trianguli Australis", bayer: "β", dist: 40.4, mag: 2.83, spectral: "F1" },
    ],
  },
  {
    name: "Tucana",
    abbr: "Tuc",
    meaning: "The Toucan",
    hemisphere: "Southern",
    desc: "A toucan of the southern sky, holding the Small Magellanic Cloud and the grand globular cluster 47 Tucanae.",
    stars: [
      { name: "Alpha Tucanae", bayer: "α", dist: 199, mag: 2.87, spectral: "K3" },
    ],
  },
  {
    name: "Ursa Major",
    abbr: "UMa",
    meaning: "The Great Bear",
    hemisphere: "Northern",
    desc: "The great bear whose hindquarters and tail form the Big Dipper, the most famous star pattern of the north.",
    stars: [
      { name: "Alioth", bayer: "ε", dist: 82.6, mag: 1.77, spectral: "A0", note: "The brightest star of the Big Dipper, a peculiar star with a strangely shifting spectrum." },
      { name: "Dubhe", bayer: "α", dist: 123, mag: 1.79, spectral: "K0", note: "One of the two 'Pointer' stars whose line leads the eye straight to the North Star." },
      { name: "Alkaid", bayer: "η", dist: 104, mag: 1.86, spectral: "B3", note: "The tip of the bear's tail, a hot blue star and the end of the Dipper's handle." },
      { name: "Mizar", bayer: "ζ", dist: 82.9, mag: 2.23, spectral: "A2", note: "A famous double with faint Alcor beside it, an ancient test of keen eyesight; Mizar itself is a system of four stars." },
      { name: "Merak", bayer: "β", dist: 79.7, mag: 2.37, spectral: "A1", note: "The second Pointer star of the Dipper's bowl." },
    ],
  },
  {
    name: "Ursa Minor",
    abbr: "UMi",
    meaning: "The Little Bear",
    hemisphere: "Northern",
    desc: "The little bear whose tail is anchored by Polaris, the steadfast North Star.",
    stars: [
      { name: "Polaris", bayer: "α", dist: 433, mag: 1.98, spectral: "F7", note: "The North Star, sitting almost exactly above Earth's pole so it barely moves. It is also a pulsating Cepheid and a multiple system." },
      { name: "Kochab", bayer: "β", dist: 130, mag: 2.07, spectral: "K4", note: "An orange giant that served as the pole star in the age of ancient Greece." },
      { name: "Pherkad", bayer: "γ", dist: 487, mag: 3.05, spectral: "A3" },
    ],
  },
  {
    name: "Vela",
    abbr: "Vel",
    meaning: "The Sails",
    hemisphere: "Southern",
    desc: "The sails of the ship Argo, billowing across the southern Milky Way above a ghostly supernova remnant.",
    stars: [
      { name: "Regor", bayer: "γ", dist: 1100, mag: 1.83, spectral: "WC8", note: "A rare and brilliant Wolf-Rayet star shedding its outer layers, bound to a hot blue supergiant companion." },
      { name: "Delta Velorum", bayer: "δ", dist: 80.6, mag: 1.93, spectral: "A1" },
      { name: "Lambda Velorum", bayer: "λ", dist: 545, mag: 2.21, spectral: "K4" },
    ],
  },
  {
    name: "Virgo",
    abbr: "Vir",
    meaning: "The Maiden",
    hemisphere: "Equatorial",
    desc: "The second-largest constellation, a maiden holding wheat, home to a vast cluster of galaxies.",
    stars: [
      { name: "Spica", bayer: "α", dist: 250, mag: 1.04, spectral: "B1", note: "'The ear of wheat', a searing blue pair of stars orbiting so closely they distort each other into eggs." },
      { name: "Porrima", bayer: "γ", dist: 38.1, mag: 2.74, spectral: "F0", note: "A celebrated binary of two near-identical stars, their slow orbital dance visible over a human lifetime." },
      { name: "Vindemiatrix", bayer: "ε", dist: 109, mag: 2.83, spectral: "G8" },
    ],
  },
  {
    name: "Volans",
    abbr: "Vol",
    meaning: "The Flying Fish",
    hemisphere: "Southern",
    desc: "A flying fish of the far south, seeming to leap away from the great ship Argo.",
    stars: [
      { name: "Beta Volantis", bayer: "β", dist: 107, mag: 3.75, spectral: "K1" },
    ],
  },
  {
    name: "Vulpecula",
    abbr: "Vul",
    meaning: "The Little Fox",
    hemisphere: "Northern",
    desc: "A faint fox in the summer Milky Way, home to the Dumbbell Nebula and the first pulsar ever found.",
    stars: [
      { name: "Anser", bayer: "α", dist: 291, mag: 4.44, spectral: "M0", note: "'The goose', once drawn in the fox's jaws, the brightest star of this dim constellation." },
    ],
  },
]

const SPECTRAL_COLORS: Record<string, string> = {
  O: "#9db4ff",
  B: "#aabfff",
  A: "#dfe6ff",
  F: "#fff4e8",
  G: "#ffe9a8",
  K: "#ffc074",
  M: "#ff9060",
  W: "#8fd0ff", // Wolf-Rayet
  L: "#ff7a5c", // luminous blue variable, treat as hot/bright
}

const SPECTRAL_NAMES: Record<string, string> = {
  O: "blue",
  B: "blue-white",
  A: "white",
  F: "yellow-white",
  G: "yellow",
  K: "orange",
  M: "red",
  W: "Wolf-Rayet",
  L: "luminous blue variable",
}

export function spectralClass(spectral: string): string {
  return (spectral[0] || "A").toUpperCase()
}

export function spectralColor(spectral: string): string {
  return SPECTRAL_COLORS[spectralClass(spectral)] ?? "#dfe6ff"
}

export function spectralName(spectral: string): string {
  return SPECTRAL_NAMES[spectralClass(spectral)] ?? "white"
}

// A clickable/render size in pixels derived from apparent magnitude.
export function starSize(mag: number): number {
  const size = 30 - mag * 4
  return Math.max(9, Math.min(34, size))
}

// A readable description: the hand-written note when present, otherwise a
// factual line generated from the star's real physical data.
export function starDescription(star: CatalogStar, constellation: string): string {
  if (star.note) return star.note
  const color = spectralName(star.spectral)
  const brightness =
    star.mag < 1.5
      ? "one of the brighter stars of the constellation"
      : star.mag < 3.5
        ? "a naked-eye star"
        : "a faint star best seen under dark skies"
  return `A ${color} star of spectral type ${star.spectral}, lying about ${star.dist.toLocaleString()} light years away in ${constellation}. At magnitude ${star.mag.toFixed(2)} it is ${brightness}.`
}

export const MAX_CATALOG_DISTANCE = CONSTELLATIONS.reduce((max, c) => {
  const local = c.stars.reduce((m, s) => Math.max(m, s.dist), 0)
  return Math.max(max, local)
}, 0)

export const TOTAL_STARS = CONSTELLATIONS.reduce((n, c) => n + c.stars.length, 0)
