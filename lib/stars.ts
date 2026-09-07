export type Align = 'left' | 'center' | 'right'

export interface StarData {
  id: string
  name: string
  distance: string
  size: number
  top: string
  align: Align
  story: string
}

export const STARS: StarData[] = [
  {
    id: 'proxima-centauri',
    name: 'Proxima Centauri',
    distance: '4.24 Light Years',
    size: 44,
    top: '8%',
    align: 'left',
    story:
      'The nearest star to our Sun, a faint red dwarf drifting quietly in the Alpha Centauri system. Though barely visible to the naked eye, it cradles Proxima b — a rocky world resting within the habitable zone, where liquid water might one day be found.',
  },
  {
    id: 'sirius',
    name: 'Sirius',
    distance: '8.6 Light Years',
    size: 66,
    top: '20%',
    align: 'right',
    story:
      'The brightest star in the night sky, Sirius blazes with a brilliance that guided ancient navigators and marked the flooding of the Nile. It is in truth a binary — a dazzling blue-white giant locked in an eternal waltz with a dense white dwarf companion.',
  },
  {
    id: 'altair',
    name: 'Altair',
    distance: '16.7 Light Years',
    size: 50,
    top: '32%',
    align: 'center',
    story:
      'A swiftly spinning star that rotates so fast it flattens into an oval, Altair completes a single turn in under nine hours. It forms one corner of the Summer Triangle, a beacon of the warm season\u2019s sky.',
  },
  {
    id: 'vega',
    name: 'Vega',
    distance: '25 Light Years',
    size: 58,
    top: '44%',
    align: 'left',
    story:
      'Once the northern pole star and destined to be so again, Vega is ringed by a vast disk of dust — the raw material of worlds yet unborn. Astronomers long used it as the very definition of stellar brightness.',
  },
  {
    id: 'arcturus',
    name: 'Arcturus',
    distance: '36.7 Light Years',
    size: 72,
    top: '56%',
    align: 'right',
    story:
      'An aging orange giant racing through the galaxy at tremendous speed, Arcturus has swollen far beyond the Sun as it nears the end of its life. Its ancient amber light once switched on the lamps of the 1933 World\u2019s Fair.',
  },
  {
    id: 'aldebaran',
    name: 'Aldebaran',
    distance: '65 Light Years',
    size: 64,
    top: '68%',
    align: 'center',
    story:
      'The fiery eye of Taurus the Bull, Aldebaran glows a deep sunset orange. Though it appears to sit among the Hyades cluster, it lies far closer to us — a chance alignment of the cosmic foreground.',
  },
  {
    id: 'antares',
    name: 'Antares',
    distance: '550 Light Years',
    size: 88,
    top: '80%',
    align: 'left',
    story:
      'A colossal red supergiant so vast it would swallow the orbit of Mars, Antares smolders at the heart of Scorpius. Its name means \u201Crival of Mars,\u201D for its ruddy hue mirrors the wandering red planet. One day it will end in a supernova.',
  },
  {
    id: 'betelgeuse',
    name: 'Betelgeuse',
    distance: '642 Light Years',
    size: 96,
    top: '92%',
    align: 'right',
    story:
      'The doomed shoulder of Orion, Betelgeuse is a pulsing red supergiant nearing the violent end of its existence. When it finally collapses and explodes, it will briefly outshine the Moon — a farewell written across four centuries of travelling light.',
  },
]
