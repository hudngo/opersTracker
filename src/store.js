import tennismainImg from "./Components/Layouts/Images/tennis_mainImg.png";
import wellnessmainImg from "./Components/Layouts/Images/wellness_mainImg.png";
import activmainImg from "./Components/Layouts/Images/activity_mainImg.png";
import dancemainImg from "./Components/Layouts/Images/dance_mainImg.png";
import gymmainImg from "./Components/Layouts/Images/gym_mainImg.png";
import martialmainImg from "./Components/Layouts/Images/martial_mainImg.png";
import basketmainImg from "./Components/Layouts/Images/basket_mainImg.png";
import poolmainImg from "./Components/Layouts/Images/pool_mainImg.png";

export const areasBuildings = [
  "open",
  "east gym",
  "sports areas",
  "opers admin"
];

export const exercises = [
  {
    id: "activities-room",
    img: activmainImg,
    // img: "https://uploads.codesandbox.io/uploads/user/21e62c85-25b9-4ac0-a30e-e3170524188d/wzSU-opersTracker_Logo.png",
    title: "Activity Room",
    description: "Delts exercise...",
    areasBuildings: "east gym"
  },
  {
    id: "dance-studio",
    img: dancemainImg,
    title: "Dance Studio",
    description: "Delts exercise...",
    areasBuildings: "east gym"
  },
  {
    id: "gym-room",
    img: gymmainImg,
    title: "Gymasium",
    description: "Delts exercise...",
    areasBuildings: "east gym"
  },
  {
    id: "martialarts-room",
    img: martialmainImg,
    title: "Martial Arts Room",
    description: "Delts exercise...",
    areasBuildings: "east gym"
  },
  {
    id: "basketball-courts",
    img: basketmainImg,
    title: "Basketball Courts",
    description: "Triceps exercise...",
    areasBuildings: "sports areas"
  },
  {
    id: "swimming-pool",
    img: poolmainImg,
    title: "Swimming Pool",
    description: "Biceps exercise...",
    areasBuildings: "sports areas"
  },
  {
    id: "tennis-courts",
    img: tennismainImg,
    title: "Tennis Courts",
    description: "Biceps exercise...",
    areasBuildings: "sports areas"
  },
  {
    id: "front-desk",
    img: tennismainImg,
    title: "Front Desk",
    description: "Chest exercise...",
    areasBuildings: "opers admin"
  },
  {
    id: "locker-room",
    img: tennismainImg,
    title: "Locker Room",
    description: "Chest exercise...",
    areasBuildings: "opers admin"
  },
  {
    id: "wellness-center",
    img: wellnessmainImg,
    title: "Wellness Center",
    description: "Back and leg exercise...",
    areasBuildings: "wellness center"
  },
  {
    id: "multi-purpose-room",
    img: tennismainImg,
    title: "Multi-Purpose Room",
    description: "Back and biceps exercise...",
    areasBuildings: "multi-purpose room"
  }
];

export const atheltics = [
  {
    id: 0,
    name: "Multi-Purpose Room",
    areasBuildings: "multi-purpose room"
  },
  {
    id: 1,
    name: "robin"
  }
];
