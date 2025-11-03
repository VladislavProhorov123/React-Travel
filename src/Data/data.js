import plate from "/src/assets/plate.png";
import plane from "/src/assets/plane.png";
import sing from "/src/assets/mirco.png";
import power from "/src/assets/power.png";
import europe from "/src/assets/Europe.jpg";
import london from "/src/assets/London.jpg";
import rome from "/src/assets/Rome.jpg";
import list1 from "/src/assets/list1.svg";
import list2 from "/src/assets/list2.svg";
import list3 from "/src/assets/list3.svg";
import greece from "/src/assets/greece.jpg";
import miniRome from "/src/assets/miniRome.jpg";

export const SERVICES = [
  {
    id: 1,
    img: plate,
    category: "Calculated Weather",
    info: "Built Wicket longer admire do barton vanity itself do in it.",
  },
  {
    id: 2,
    img: plane,
    category: "Best Flights",
    info: "Engrossed listening. Park gate sell they west hard for the.",
  },
  {
    id: 3,
    img: sing,
    category: "Local Events",
    info: "Barton vanity itself do in it. Preferd to men it engrossed listening. ",
  },
  {
    id: 4,
    img: power,
    category: "Customization",
    info: "We deliver outsourced aviation services for military customers",
  },
];

export const TOP_SELLING = [
  {
    id: 5,
    img: rome,
    name: "Rome, Italy",
    price: "$5,42k",
    trip: "10 Days Trip",
  },
  {
    id: 6,
    img: london,
    name: "London, UK",
    price: "$4,2k",
    trip: "12 Days Trip",
  },
  {
    id: 7,
    img: europe,
    name: "Full Europe",
    price: "$15k",
    trip: "28 Days Trip",
  },
];

export const STEP_LIST = [
  {
    img: list1,
    text: "Choose Destination",
    subtext:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
  },
  {
    img: list2,
    text: "Make Payment",
    subtext:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. ",
  },
  {
    img: list3,
    text: "Reach Airport on Selected Date",
    subtext:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
  },
];

export const STEP_CARD = [
  {
    img: greece,
    text: "Trip To Greece",
    data: "14-29 June | by Robbin joseph",
    info: ["ri-tree-line", "ri-map-pin-line", "ri-hotel-bed-line"],
    people: "24 people going",
  },
];

export const MINI_CARD = [
  {
    img: miniRome,
    subtext: "Ongoing",
    text: "Trip to rome",
    completed: "40%",
  },
];
