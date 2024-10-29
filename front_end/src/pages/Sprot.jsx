import React from "react";
import AfghanistanCulture from "../componenets/AfgCulture/AfgCutureComponent";
import bg from "../asset/img/بزکشی.jpg";
import image1 from "../asset/img/بزکشی۱.jpg";
import image2 from "../asset/img/cricket.jpeg";
import image3 from "../asset/img/footbal.jpeg";
import image4 from "../asset/img/بزکشی.jpg";
import image10 from "../asset/img/بزکشی۱.jpg";
import image11 from "../asset/img/cricket.jpeg";
import image12 from "../asset/img/footbal.jpeg";

// Data for the heritage sites
const museumsData = [
  {
    name: "Cricket",
    image: image1,
    description:
      "Afghan Books is an initiative aimed at promoting Afghan literature and authors.",
  },
  {
    name: "Valliball",
    image: image2,
    description:
      "The Afghan Digital Library is a project aimed at preserving Afghan literature.",
  },
  {
    name: "Football",
    image: image3,
    description:
      "Read Afghanistan promotes reading and literacy within Afghanistan.",
  },
  {
    name: "Clab",
    image: image4,
    description:
      "The Open Library of Afghanistan provides free access to educational resources.",
  },
];

// Data for the image list
const imagesData = [
  { img: image1, title: "Villay" },
  { img: image10, title: "Road" },
  { img: image11, title: "Watter" },
  { img: image12, title: "Live" },
  { img: image2, title: "Shopping" },
  { img: image10, title: "Attendence" },
  { img: image11, title: "Afghnistan" },
  { img: image12, title: "City" },
];

const Sports = () => {
  return (
    <AfghanistanCulture
      heroImage={bg}
      heroTitle=" Sports in Afghanistan"
      heroSubtitle="Sports play an important role in Afghan culture and society, serving as a means of recreation, community building."
      museums={museumsData}
      textTitle="List of Sports in Afghanistan"
      textContent={` Cricket
            Popularity: Cricket has rapidly gained popularity in recent years, becoming the most followed sport in the country.
            National Team: Afghanistan's national cricket team has achieved international recognition, particularly after qualifying for the ICC Cricket World Cup.
            Grassroots Programs: Various initiatives are in place to promote cricket among the youth, reflecting its growing importance.
            2. Football (Soccer)
            Widespread Interest: Football is widely played and followed, with many local clubs and national competitions.
            National Team: The Afghan national football team, known as the "Shaheen," has participated in various international tournaments, fostering national pride.
            3. Buzkashi
            Traditional Sport: Buzkashi is considered the national sport of Afghanistan. It is a horseback game similar to polo, where players compete to grab and carry a goat carcass.
            Cultural Significance: The sport is deeply rooted in Afghan culture and often features prominently during festivals and celebrations.`}
      imagesData={imagesData}
      sectionTitle="Top Sports of Afghanistan" // Custom section title
    />
  );
};

export default Sports;