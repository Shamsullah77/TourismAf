import React from "react";
import AfghanistanCulture from "../../componenets/AfgCulture/AfgCutureComponent";
import bg from "../../asset/img/HeratMasq.jpg";
import image1 from "../../asset/img/Kondos1.jpg";
import image2 from "../../asset/img/PaktiaMasque.JPG";
import image3 from "../../asset/img/HeratMasq.jpg";
import image4 from "../../asset/img/BalkhRowzaShirf.jpg";
import image10 from "../../asset/img/Takhar1.jpg";
import image11 from "../../asset/img/HeratMasq.jpg";
import image12 from "../../asset/img/LaghmanZiartMehterlmBaba1.jpg";

// Data for the heritage sites
const museumsData = [
  {
    name: "Kondos Imam saheb",
    image: image1,
    description:
      "Afghan Books is an initiative aimed at promoting Afghan literature and authors.",
  },
  {
    name: "Paktia Masque.",
    image: image2,
    description:
      "The Afghan Digital Library is a project aimed at preserving Afghan literature.",
  },
  {
    name: "Herat",
    image: image3,
    description:
      "Read Afghanistan promotes reading and literacy within Afghanistan.",
  },
  {
    name: "Balkh Rouzah Mobarak",
    image: image4,
    description:
      "The Open Library of Afghanistan provides free access to educational resources.",
  },
];

// Data for the image list
const imagesData = [
  { img: image1, title: "Kondoz" },
  { img: image10, title: "Road" },
  { img: image11, title: "Herat" },
  { img: image12, title: "Laghman" },
  { img: image2, title: "Paktia" },
  { img: image10, title: "Road" },
  { img: image11, title: "Herat" },
  { img: image12, title: "Laghman Zirat Mehterlam" },
];

const ReligousAttraction = () => {
  return (
    <AfghanistanCulture
      heroImage={bg}
      heroTitle="List of Religous Attractions of Afghanistan"
      heroSubtitle="Afghanistan holds significant religious importance, primarily due to its historical and cultural context."
      museums={museumsData}
      textTitle="Islamic Religous Attraction  of Afghanistan"
      textContent={`Islamic Heritage
            Mosques and Shrines: Afghanistan is home to many historic mosques and shrines, such as the Blue Mosque in Mazar-i-Sharif and the Great Mosque of Herat. These sites attract pilgrims and tourists interested in Islamic architecture and history.
            Sufi Traditions: The country has a rich tradition of Sufism, with various mausoleums dedicated to revered Sufi saints, drawing those interested in mystical practices.
            2. Buddhist Sites
            Buddhist Ruins: Before the spread of Islam, Afghanistan was a significant center for Buddhism. The Buddhas of Bamiyan, though destroyed in 2001, remain a symbol of the region's Buddhist heritage.
            Bamiyan Valley: This area features numerous ancient stupas and monasteries, attracting visitors interested in Buddhist history.
            3. Cultural Syncretism
            Religious Diversity: While Islam is the dominant religion, Afghanistan has a history of cultural and religious syncretism, with influences from Zoroastrianism and Buddhism, which can be explored in various historical sites.
            4. Pilgrimage Routes
            Hajj and Other Pilgrimages: Many Afghans undertake pilgrimages to holy sites within Afghanistan and beyond, contributing to the country's spiritual landscape`}
      imagesData={imagesData}
      sectionTitle="Top Mosque of Afghanistan" // Custom section title
    />
  );
};

export default ReligousAttraction;