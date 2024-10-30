import React from "react";
import AfghanistanCulture from "../../componenets/AfgCulture/AfgCutureComponent";
import bg from "../../asset/img/Badakhshan4.jpg";
import image1 from "../../asset/img/Badakhshan2.jpg";
import image2 from "../../asset/img/Badakhshan1.jpg";
import image3 from "../../asset/img/Badakhshan4.jpg";
import image4 from "../../asset/img/Badakhshan3.jpg";
import image10 from "../../asset/img/Badakhshan2.jpg";
import image11 from "../../asset/img/Badakhshan4.jpg";
import image12 from "../../asset/img/Badakhshan3.jpg";

// Data for the heritage sites
const museumsData = [
  {
    name: "Noristan Province",
    image: image1,
    description:
      "Afghan Books is an initiative aimed at promoting Afghan literature and authors.",
  },
  {
    name: "Ningarhar Valley",
    image: image2,
    description:
      "The Afghan Digital Library is a project aimed at preserving Afghan literature.",
  },
  {
    name: "Wardak SiadAbad",
    image: image3,
    description:
      "Read Afghanistan promotes reading and literacy within Afghanistan.",
  },
  {
    name: "Kohi Mazar",
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

const NaturalAttraction = () => {
  return (
    <AfghanistanCulture
      heroImage={bg}
      heroTitle="List of Natural Attractions of Afghanistan"
      heroSubtitle="Explore the diverse landscapes and natural wonders."
      museums={museumsData}
      textTitle="Natural Attraction Sites of Afghanistan"
      textContent={`Afghanistan is rich in natural beauty, offering a variety of stunning landscapes and attractions. Here are some notable natural attraction sites:

            1. Panjshir Valley
            Known for its breathtaking scenery, lush greenery, and the Panjshir River. It’s surrounded by the Hindu Kush mountains.
            2. Band-e Amir National Park
            Famous for its striking blue lakes and unique limestone formations, this park is Afghanistan's first national park and a great spot for hiking and camping.
            3. Kabul River
            Flowing through Kabul, the river is lined with picturesque hills and offers opportunities for rafting and exploring the surrounding landscapes.
            4. Bamyan Valley
            Home to the ancient Buddhas of Bamiyan and dramatic cliffs, this area is known for its stunning vistas and rich cultural history.
            5. Hindu Kush Mountains
            This mountain range features some of the highest peaks in Afghanistan, providing opportunities for trekking, climbing, and enjoying spectacular views.
            6. Lake Qargha
            A scenic lake near Kabul, ideal for picnics, fishing, and water sports, surrounded by hills and greenery.`}
      imagesData={imagesData}
      sectionTitle="Top Attractions of Afghanistan" // Custom section title
    />
  );
};

export default NaturalAttraction;