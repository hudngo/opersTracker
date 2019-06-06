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
    link:
      "https://campusrec.ucsc.edu/Facility/GetSchedule?facilityId=f0b846c9-23ba-445c-b04f-6238f7d4ad31",
    description:
      "Square Foot: 1145 \n Room Capacity: Varies by Activity Includes: Hardwood Floors & Mirrors Activities: Pilates, Yoga, Dance, Meditation, Self-Defense, Massage & Acupressure",
    areasBuildings: "east gym"
  },
  {
    id: "dance-studio",
    img: dancemainImg,
    title: "Dance Studio",
    link:
      "https://campusrec.ucsc.edu/Facility/GetSchedule?facilityId=ec7c38a4-d9f9-4927-921e-d8ea535d65e1",
    description:
      "Square Foot: 3200 \n Room Capacity: 45 \n Includes: Hardwood Floors, Mirrors, Balance Bar and Piano",
    areasBuildings: "east gym"
  },
  {
    id: "gym-room",
    img: gymmainImg,
    title: "Gymasium",
    link:
      "https://campusrec.ucsc.edu/Facility/GetSchedule?facilityId=bd6cf7a0-9924-4821-84d7-5a995cc63081",
    description:
      "Square Foot: 6185 \n Room Capacity: Varies by Activity\n Includes: Hardwood Floor, Court Lines, Adjustable Basketball Hoops, Volleyball Uprights, Volleyball Nets, Wall padding, Indoor Soccer Goals\n Activities: Basketball, Volleyball, Badminton, Futsal, Indoor Hockey and Fencing",
    areasBuildings: "east gym"
  },
  {
    id: "martialarts-room",
    img: martialmainImg,
    title: "Martial Arts Room",
    link:
      "https://campusrec.ucsc.edu/Facility/GetSchedule?facilityId=103db41b-752c-48d9-8b1e-37ca68533896",
    description:
      "Square Foot: 1460 \n Room Capacity: Varies by Activity \n Includes: Padded Floors, Mirrors, and Bench \n Activities: Yoga, Aikido, Tae Kwon Do, Brazilian Jiu-Jitsu, Seibukan JuJutsu, Quantum Jujitsu and Ninjustsu",
    areasBuildings: "east gym"
  },
  {
    id: "basketball-courts",
    img: basketmainImg,
    title: "Basketball Courts",
    link:
      "https://campusrec.ucsc.edu/Facility/GetSchedule?facilityId=ec7c38a4-d9f9-4927-921e-d8ea535d65e1",
    description: "Triceps exercise...",
    areasBuildings: "sports areas"
  },
  {
    id: "swimming-pool",
    img: poolmainImg,
    title: "Swimming Pool",
    link:
      "https://campusrec.ucsc.edu/Facility/GetSchedule?facilityId=6b74539d-7ad2-4aa5-92c5-471f9fcccdea",
    description:
      "Long Course Lanes: 8 \n Short Course Lanes: 17 \n Capacity: 632 people for entire pool complex \n Includes: Lane lines, Bulk Head, Lifeguard Stands, Shade Tent, Lawn Area, Bleachers, Pool Covers, Colorado Timing System upon request, Diving Blocks, 1-M Diving and 3-M Diving Boards \n Activities: Swimming, Diving, Scuba, and Recreational Lap ",
    areasBuildings: "sports areas"
  },
  {
    id: "tennis-courts",
    img: tennismainImg,
    title: "Tennis Courts",
    link:
      "https://campusrec.ucsc.edu/Facility/GetSchedule?facilityId=dfb62bb2-fa44-43f7-886d-9ba4f958d695",
    description:
      "Court Dimensions: 6 Standard Courts, size 75' x 35' \n Capacity: 4 Players per court \n Includes: Tennis Court lines, Nets, Benches, Lights and Official Stands \n Activities: Tennis",
    areasBuildings: "sports areas"
  },
  {
    id: "front-desk",
    img: tennismainImg,
    title: "Front Desk",
    link:
      "https://campusrec.ucsc.edu/Facility/GetSchedule?facilityId=ec7c38a4-d9f9-4927-921e-d8ea535d65e1",
    description: "OPERS Front Desk",
    areasBuildings: "opers admin"
  },
  {
    id: "locker-room",
    img: tennismainImg,
    title: "Locker Room",
    link: "https://opers.ucsc.edu/facilities/equipment-locker.html",
    description: "OPERS Lockers",
    areasBuildings: "opers admin"
  },
  {
    id: "wellness-center",
    img: wellnessmainImg,
    title: "Wellness Center",
    link:
      "https://campusrec.ucsc.edu/Facility/GetSchedule?facilityId=1799266f-57d9-4cb2-9f43-f5fd88b241db",
    description:
      "6,500 square foot of workout space \n Olympic Weight Lifting Platforms \n Over 50 pieces of Cardio Equipment \n  Weight Racks \n 2 TRX Training Zones \n Excellent views of the Monterey Bay \n Built in 2000",
    areasBuildings: "wellness center"
  },
  {
    id: "multi-purpose-room",
    img: tennismainImg,
    title: "Multi-Purpose Room",
    link:
      "https://campusrec.ucsc.edu/Facility/GetSchedule?facilityId=6b4acca4-485d-44f9-93c7-391a7526e3fc",
    description:
      "Square Foot: 1920 \n Room Capacity: Varies by Activity \nIncludes: Multipurpose Flooring, Mirrors, Kick Boxing Free Standing Bags, and Sliding Garage Door. \nActivities: Total Body Conditioning, Zumba, Cardio-Kickboxing, Dance, Capeoria, Express Workout, class room setting, presentations, and meetings.",
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
