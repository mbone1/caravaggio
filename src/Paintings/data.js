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
      coords: { x: 14.1, y: -2.15, z: -4.8 },
      maxWidth: 10,
      size: 0.6,
    },

    description: {
      text:
        "Commissioned by Roman nobleman Ciriaco Mattei in 1602, this painting depicts the arrest of Jesus.There are seven figures in the painting: from left to right they are John, Jesus, Judas, three soldiers (the one farthest to the right barely visible in the rear), and a man holding a lantern to the scene. Judas has just kissed Jesus to identify him for the soldiers.  ",
      coords: { x: 14.0, y: -1.5, z: -4.8 },
      maxWidth: 7,
      size: 0.3,
    },
    threeDFile: takingofchristframed,
    points: [
      [
        [4.7, 5, -4.99],
        [6.7, 6.2, -4.1],
        [7.2, 6.2, -4.1],
      ],
      [
        [-3, 4, -4.68],
        [-5, 5.95, -4.1],
        [-6.7, 6.25, -4.1],
      ],
      [
        [0.5, 1.8, -4.99],
        [1.0, 1.4, -4.1],
        [7.2, 1.8, -4.1],
      ],
      [
        [-4, 2.8, -4.68],
        [-5, 3.95, -4.1],
        [-6.39, 4.25, -4.1],
      ],
    ],

    info: [
      {
        coords: { x: -7.9, y: -6.8, z: -4.8 },
        maxWidth: 7,
        text:
          "This figure holding the lantern may be a self portrait of Caravaggio.",
      },
      {
        coords: { x: 10, y: -6.9, z: -4.8 },
        maxWidth: 2.8,
        text:
          "One puzzling detail, the heads of Jesus and St. John seem to visually meld together.",
      },
      {
        coords: { x: -7.8, y: -2.1, z: -4.8 },
        maxWidth: 5.3,
        text:
          "The arresting officer's polished, metal-clad arm is highly detailed. It has been suggested that it was meant by the artist to serve as a mirror, intended to prompt the user to self reflect. In a sense, the artist may be 'inviting his viewers to see themselves reflected in the behaviour of Judas'.",
      },

      {
        coords: { x: 11.5, y: -4.7, z: -4.8 },
        maxWidth: 4.8,
        text:
          "At the far left, St. John the Evangelist is seen fleeing; his arms are raised. The flight of the terrified John contrasts with the entrance of the artists(the man with the lantern).",
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
        coords: { x: 11.5, y: -6, z: -4.8 },
        maxWidth: 3.4,
        text:
          "The model for David in both this and the other version are thought by some to be Cecco, a boy known to have been Caravaggio's servant in Rome in the early 17th century. Although inconclusive the servant Cecco may be the same person as Cecco Del Caravaggio, an artist active in Rome and painting very much in Caravaggio's manner.",
      },
      {
        coords: { x: -7.9, y: -1.5, z: -4.8 },
        maxWidth: 3.8,
        text:
          "In other versions of this scene Caravaggio used himself as a model for the head of Goliath.",
      },
    ],
    analysis: "https://www.kimbellart.org/collection/ap-198706",
  },
  {
    name: {
      text: "Saint Jerome Writing",
      coords: { x: 14.42, y: -2.15, z: -4.8 },
      maxWidth: 7,
      size: 0.6,
    },
    description: {
      text:
        "Generally dated to 1605-06, this painting depicts Saint Jerome, a Doctor of the Church in Roman Catholicism and a popular subject for painting. It has been suggested that Jerome is depicted in the act of producing the Vulgate, a late-4th-century Latin translation of the bible.",
      coords: { x: 14.4, y: -1.5, z: -4.8 },
      maxWidth: 7,
      size: 0.3,
    },
    threeDFile: stjerome,
    points: [
      [
        [-2.8, 3.8, -4.68],
        [-4, 5.0, -4.1],
        [-7.5, 5.45, -4.1],
      ],
      [
        [3.7, 2.8, -4.99],
        [3.8, 3.4, -4.1],
        [7.2, 4.4, -4.1],
      ],
      //   [
      //     [-3, 2.2, -4.68],
      //     [-4, 1.45, -4.1],
      //     [-7.49, 2.55, -4.1],
      //   ],
    ],
    info: [
      {
        coords: { x: 10.8, y: -6, z: -4.8 },
        maxWidth: 2.8,
        text:
          "Saint Jerome is often depicted with skulls, one of his symbols, a reminder of the ineveitability of death and vanity of worldly things.",
      },
      {
        coords: { x: -7.9, y: -4.9, z: -4.8 },
        maxWidth: 3.8,
        text:
          "Caravaggio used the same model for this painting as in his 'Saint Jerome in Meditation', also painted in 1605.",
      },

      //   {
      //     coords: { x: 11.8, y: -2.9, z: -4.8 },
      //     maxWidth: 3.8,
      //     text: "TEXT TEXT TEXT TEXT TEXT text text text text text",
      //   },
    ],
    analysis: "https://www.kimbellart.org/collection/ap-198706",
  },
  {
    name: {
      text: "The Incredulity of Saint Thomas",
      coords: { x: 14, y: -3.75, z: -4.8 },
      maxWidth: 7,
      size: 0.6,
    },
    description: {
      text:
        "Painted in 1601-1602, this painting depicts a specific biblical passage: 'Unless I see the nail marks in his hands and put my finger where the nails were, and put my hand into his side, I will not believe it.' said St Thomas when first told of Jesus’ return beyond the grave. Yet in a week’s time Jesus appeared in front of him and said 'Put your finger here; see my hands. Reach out your hand and put it into my side. Stop doubting and believe.' ",
      coords: { x: 14.0, y: -2.5, z: -4.8 },
      maxWidth: 6,
      size: 0.3,
    },
    threeDFile: stthomas,
    points: [
      [
        [-1.3, 5.5, -4.68],
        [-3, 6.0, -4.1],
        [-7.5, 5.45, -4.1],
      ],
      [
        [.7, 5.6, -4.99],
        [2, 5.4, -4.1],
        [7.2, 4.3, -4.1],
      ],
    //   [
    //     [-3, 2.2, -4.68],
    //     [-4, 1.45, -4.1],
    //     [-7.49, 2.55, -4.1],
    //   ],
    ],
    info: [
      {
        coords: { x: 10.8, y: -6, z: -4.8 },
        maxWidth: 2.8,
        text:
          "Some attribute Christ's lack of a halo to emphasize his new corporeality",
      },
      {
        coords: { x: -7.9, y: -4.7, z: -4.8 },
        maxWidth: 3.8,
        text: "The two other Apostles in the background are Peter(older, bald gentleman) and John, both were present when Christ first re-appeared.",
      },

    //   {
    //     coords: { x: 11.8, y: -2.9, z: -4.8 },
    //     maxWidth: 3.8,
    //     text: "TEXT TEXT TEXT TEXT TEXT text text text text text",
    //   },
    ],
    analysis: "https://www.kimbellart.org/collection/ap-198706",
  },
];

export default data;
