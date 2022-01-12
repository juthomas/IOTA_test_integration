import Level from '../activity/Level';
import MysteryComponent from '../activity/MysteryComponent';
import CarouselDragAndDrop from '../../IotaComponents/Carousel/CarouselDragAndDrop';

/** assets */
import Bashkirtseff from '../assets/Ressources/Bashkirtseff_-_The_Meeting.jpg';
import Berthe from '../assets/Ressources/Berthe_Morisot_-_La_Lecture_(1873).jpg';
import Maria from '../assets/Ressources/María_Blanchard_MNCARS_Madrid.jpg';
import Shoen from '../assets/Ressources/Shoen_Uemura_-_Firefly.jpg';

import { checkItemIsSolo, checkInputFilled } from '../../IotaComponents/Carousel/check-images';

const ImageArray = [
  {
    id: 0,
    title: 'La Réunion',
    author: 'Marie Bashkirtseff',
    img: Bashkirtseff,
  },
  {
    id: 1,
    title: 'La Lecture',
    author: 'Berthe Morisot',
    img: Berthe,
  },
  {
    id: 2,
    title: 'MNCARS Madrid',
    img: Maria,
    author: 'María Blanchard',
  },
];

const level = {
  title: 'Level test',
  component: Level,
  data: {
    steps: [
      {
        instruction:
          "Tu dois associer les titres aux oeuvres d'art correspondantes",
        stop: true,
        content: [
          {
            component: CarouselDragAndDrop,
            content: {
              fields: [{ key: 'title', placeHolder: "Titre de l'oeuvre" }],
              itemArray: ImageArray,
              stepperDots: false,
              shuffle: true,
              check: checkItemIsSolo,
            },
            actions: ['SAVE_PROGRESS', 'NEXT_STEP'],
          },
        ],
      },
      {
        instruction:
          "Avec l'aide d'internet, tu dois associer les auteurs aux oeuvres d'art correspondantes",
        stop: true,
        content: [
          {
            component: CarouselDragAndDrop,
            content: {
              fields: [{ key: 'author', placeHolder: "Nom de l'auteur" }],
              stepperDots: false,
              itemArray: ImageArray,
              check: checkItemIsSolo,
            },
            actions: ['SAVE_PROGRESS', 'NEXT_STEP'],
          },
        ],
      },
      {
        instruction:
          "Des étiquettes ont totalement disparu ! C'est à toi de les créer en t'aidant de la recherche inversée.",
          content: [
            {
              component: CarouselDragAndDrop,
              content: {
                fields: [
                  { key: 'author', placeHolder: "Nom de l'auteur" },
                  { key: 'title', placeHolder: "Titre de l'oeuvre" },
                ],
                stepperDots: false,
                download: true,
                itemArray: ImageArray,
                check: checkInputFilled,
              },
              actions: ['SAVE_PROGRESS', 'NEXT_STEP'],
            },
          ],
      },
    ],
  },
};

export default level;
