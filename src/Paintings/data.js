// import jerome from "./3d Files/stjeromeframed.glb";
import takingofchristframed from './3d Files/takingofchristframed.glb'

let data = [
  {
    name: "The Taking of Christ",
    description:
      "Commissioned by Roman nobleman Ciriaco Mattei in 1602, this painting depicts the arrest of Jesus.There are seven figures in the painting: from left to right they are John, Jesus, Judas, three soldiers (the one farthest to the right barely visible in the rear), and a man holding a lantern to the scene. They are standing, and only the upper three-quarters of their bodies are depicted. Judas has just kissed Jesus to identify him for the soldiers.  ",
    threeDFile: takingofchristframed,
    points: [
      [
        [4.7, 4.7, -4.99],
        [6.7, 6.2, -4.1],
        [7.2, 6.2, -4.1],
      ],
      [
        [-3, 4, -4.68],
        [-5, 5.45, -4.1],
        [-6.5, 5.45, -4.1],
      ],
      [
        [0.5, 1.8, -4.99],
        [1.0, 1.4, -4.1],
        [7.2, 1.8, -4.1],
      ],
      [
        [-4, 2.7, -4.68],
        [-5, 3.45, -4.1],
        [-6.49, 3.55, -4.1],
      ],
    ],

    info: [
      {
        coords: { x: -7.9, y: -6.8, z: -4.8 },
        maxWidth: 7,
        text:
          "The figure holding the lantern is believed to be a self-portrait of Caravaggio; also, presumably, representing St Peter, who would first betray Jesus by denying him, and then go on to bring 'the light of Christ' to the world.",
      },
      {
        coords: { x: 9.8, y: -6, z: -4.8 },
        maxWidth: 2.8,
        text:
          "One puzzling detail, the heads of Jesus and St. John seem to visually meld together.",
      },
      {
        coords: { x: -7.8, y: -2.1, z: -4.8 },
        maxWidth: 6.8,
        text:
          "In the very centre and foremost plane is the arresting officer's highly polished, metal-clad arm. It has been suggested that it was meant by the artist to serve as a mirror, a mirror of self-reflection and examination of conscience. In a sense, the artist may be 'inviting his viewers to see themselves reflected in the behaviour of Judas' through their own daily acts of betrayal of Jesus, that is, through their sin",
      },

      {
        coords: { x: 11.8, y: -4, z: -4.8 },
        maxWidth: 4.8,
        text:
          "At the far left, St. John is fleeing; his arms are raised, his mouth is open in a gasp, his cloak is flying and being snatched back by a soldier. The flight of the terrified John contrasts with the entrance of the artists: scholars claim that Caravaggio is making the point that even a sinner one thousand years after the resurrection has a better understanding of Christ than does his friend",
      },
    ],
  },
  {},
  {},
  {},
  {},
];

export default data;
