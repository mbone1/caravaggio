// import jerome from "./3d Files/stjeromeframed.glb";
import takingofchristframed from "./3d Files/takingofchristframed.glb";
import cardsharps from "./3d Files/cardsharps.glb";
import david from "./3d Files/davidwithheadofgoliath.glb";
import stjerome from "./3d Files/stjeromeframed.glb";
import stthomas from "./3d Files/theincredulityofstthomas.glb";

let data = [
  {
    name: {
      text: "The Taking of Christ",
      coords: { x: 14.5, y: -2.15, z: -4.8 },
      maxWidth: 10,
      size: 0.6,
    },

    description: {
      text:
        "Commissioned by Roman nobleman Ciriaco Mattei in 1602, this painting depicts the arrest of Jesus.There are seven figures in the painting: from left to right they are John, Jesus, Judas, three soldiers (the one farthest to the right barely visible in the rear), and a man holding a lantern to the scene. They are standing, and only the upper three-quarters of their bodies are depicted. Judas has just kissed Jesus to identify him for the soldiers.  ",
      coords: { x: 14.4, y: -1.5, z: -4.8 },
      maxWidth: 7,
      size: 0.3,
    },
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

  {
    name: {
      text: "The Cardsharps",
      coords: { x: -7.1, y: -7, z: -4.8 },
      maxWidth: 6,
      size: 0.6,
    },

    description: {
      text:
        "This work represents an important milestone for Caravaggio. He painted it sometime in 1594 when he was attempting an independent career after leaving the workshop of the Cavaliere Giuseppe Cesari d'Arpino, for whom he had been finishing the details for the Cavaliere's mass-produced output. The terms cardsharp and cardshark are interchangeable, the spelling has varied over time and by region.",
      coords: { x: -7.1, y: -6.3, z: -4.8 },
      maxWidth: 6.6,
      size: 0.3,
    },
    threeDFile: cardsharps,
    points: [
      [
        [-0.4, 4.4, -4.68],
        [-1, 6.25, -4.1],
        [-7.5, 5.45, -4.1],
      ],
      [
        [3.7, 0.8, -4.99],
        [3.8, 1.4, -4.1],
        [7.2, 1.3, -4.1],
      ],
      [
        [-3, 2.2, -4.68],
        [-4, 1.45, -4.1],
        [-7.49, 2.55, -4.1],
      ],
    ],
    info: [
      {
        coords: { x: 10.8, y: -6, z: -4.8 },
        maxWidth: 2.8,
        text:
          "The older cardsharp is signalling his accomplice. Notice how his fingertips are exposed, better for him to feel marked cards.",
      },
      {
        coords: { x: -7.9, y: -1.5, z: -4.8 },
        maxWidth: 3.8,
        text: "Notice the young cheat pulling a hidden card from his breeches.",
      },

      {
        coords: { x: 11.8, y: -2.9, z: -4.8 },
        maxWidth: 3.8,
        text: "The young dupe is unaware of the older cardsharp signalling.",
      },
    ],
    analysis: "https://www.kimbellart.org/collection/ap-198706",
  },

  {
    name: {
      text: "David with the Head of Goliath",
      coords: { x: -7.1, y: -7, z: -4.8 },
      maxWidth: 6,
      size: 0.6,
    },
    description: {
      text:
        "This painting from 1607 appears to depict the exact moment referenced in Samuel 17:57, 'When David came back after killing the Philistine, Abner took him and presented him to Saul with the Philistine's head still in his hand.' Caravaggio painted this scene multiple times. This version is housed at the Kunsthistorischese Museum Gemäldegalerie in Vienna.",
      coords: { x: -7.1, y: -5.7, z: -4.8 },
      maxWidth: 7,
      size: 0.3,
    },
    threeDFile: david,
    points: [
 
      [
        [-1.4, 4.4, -4.68],
        [-3, 5.25, -4.1],
        [-7.5, 5.45, -4.1],
      ],
      [
        [3.7, 0.2, -4.99],
        [4.8, -0.4, -4.1],
        [7.2, 1.3, -4.1],
      ],

    ],
    info: [
      {
        coords: { x: 10.8, y: -6, z: -4.8 },
        maxWidth: 2.8,
        text:
          "The model for David in both this and the other version are thought by some as Cecco, a boy known to have been Caravaggio's servant in Rome in the early 17th century. Cecco may have been identical to Cecco Del Caravaggio, an artist active in Rome and painting very much in Caravaggio's manner.",
      },
      {
        coords: { x: -7.9, y: -1.5, z: -4.8 },
        maxWidth: 3.8,
        text:
          "Although the head here appears to be more of a generic face, in other versions of this scene Caravaggio used himself as a model.",
      },
    ],
    analysis: "https://www.kimbellart.org/collection/ap-198706",
  },
  {
    name: {
      text: "Saint Jerome Writing",
      coords: { x: 14.5, y: -2.15, z: -4.8 },
      maxWidth: 7,
      size: 0.6,
    },
    description: {
      text:
        "Description goes here Description goes hereDescription goes hereDescription goes here",
      coords: { x: 14.4, y: -1.5, z: -4.8 },
      maxWidth: 7,
      size: 0.3,
    },
    threeDFile: stjerome,
    points: [

      [
        [-0.4, 4.4, -4.68],
        [-1, 6.25, -4.1],
        [-7.5, 5.45, -4.1],
      ],
      [
        [3.7, 0.8, -4.99],
        [3.8, 1.4, -4.1],
        [7.2, 1.3, -4.1],
      ],
      [
        [-3, 2.2, -4.68],
        [-4, 1.45, -4.1],
        [-7.49, 2.55, -4.1],
      ],
    ],
    info: [
      {
        coords: { x: 10.8, y: -6, z: -4.8 },
        maxWidth: 2.8,
        text: "TEXT TEXT TEXT TEXT TEXT text text text text text",
      },
      {
        coords: { x: -7.9, y: -1.5, z: -4.8 },
        maxWidth: 3.8,
        text: "TEXT TEXT TEXT TEXT TEXT text text text text text",
      },

      {
        coords: { x: 11.8, y: -2.9, z: -4.8 },
        maxWidth: 3.8,
        text: "TEXT TEXT TEXT TEXT TEXT text text text text text",
      },
    ],
    analysis: "https://www.kimbellart.org/collection/ap-198706",
  },
  {
    name: {
      text: "The Incredulity of Saint Thomas",
      coords: { x: 14.5, y: -3.15, z: -4.8 },
      maxWidth: 7,
      size: 0.6,
    },
    description: {
      text: "Description goes here",
      coords: { x: 14.4, y: -1.9, z: -4.8 },
      maxwidth: 7,
      size: 0.3,
    },
    threeDFile: stthomas,
    points: [
      // [
      //   [4.7, 4.7, -4.99],
      //   [6.7, 6.2, -4.1],
      //   [7.2, 6.2, -4.1],
      // ],
      [
        [-0.4, 4.4, -4.68],
        [-1, 6.25, -4.1],
        [-7.5, 5.45, -4.1],
      ],
      [
        [3.7, 0.8, -4.99],
        [3.8, 1.4, -4.1],
        [7.2, 1.3, -4.1],
      ],
      [
        [-3, 2.2, -4.68],
        [-4, 1.45, -4.1],
        [-7.49, 2.55, -4.1],
      ],
    ],
    info: [
      {
        coords: { x: 10.8, y: -6, z: -4.8 },
        maxWidth: 2.8,
        text: "TEXT TEXT TEXT TEXT TEXT text text text text text",
      },
      {
        coords: { x: -7.9, y: -1.5, z: -4.8 },
        maxWidth: 3.8,
        text: "TEXT TEXT TEXT TEXT TEXT text text text text text",
      },

      {
        coords: { x: 11.8, y: -2.9, z: -4.8 },
        maxWidth: 3.8,
        text: "TEXT TEXT TEXT TEXT TEXT text text text text text",
      },
    ],
    analysis: "https://www.kimbellart.org/collection/ap-198706",
  },
];

export default data;
