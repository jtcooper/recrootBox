
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt, FaGitlab } from "react-icons/fa";
// Import image of your self here:
//-- For best display purposes, your image should be sqaure (e.g. 300 X 300 px)
import selfie from "./assets/profilePic.jpg";

//Import images for your portfolio here:
//-- For best display purposes, each of these images should have similar porportions

// import recrootBox from "./assets/recrootBox_site.png";
// import campRank from "./assets/camprank_site.png";
// import blogApp from "./assets/blogapp-site.png";
// import taskyv from "./assets/taskyv_site.png";
// import bookThinks from "./assets/bookThinks.png";

import resume from "./assets/Resume.pdf";

let darkModeSwitch = true;
let darkMode = false;

// Edit person info here
// -- Bio is best kept to around 5 lines
let firstName = "Josh";
let lastName = "Cooper";
let title = "Student / Software Developer";
let bio = `Hey there, I'm currently studying computer science
   at Brigham Young University and working as a programmer at
   the BYU library.
   Feel free to reach out or checkout my code on GitHub or GitLab.`;
// take a look at some things I've built
//    here,
//Edit links to external accounts or items here (e.g. github, linkedIn, leetcode, resume, etc.)
// -- For display purposes, it's best to use between 3 and 5 links, but if you add more or less,
// -- the page will adjust accordingly.

let userIcons = true;

let links = [
  {
    name: "Email",
    link: "mailto:joshcooper537@gmail.com",
    icon: FaEnvelope
  },
  {
    name: "GitHub",
    link: "https://github.com/jtcooper",
    icon: FaGithub
  },
  {
    name: "GitLab",
    link: "https://gitlab.com/jtcooper",
    icon: FaGitlab
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/joshtcooper/",
    icon: FaLinkedin
  },
  {
    name: "Resume",
    link: resume,
    icon: FaFileAlt
  }
];

//Edit portfolio items here by changing title, image title, and link
// -- you can adjust the number of items as needed. For display purposes, it's best to use
// -- multiples of 3.

// let portfolioTitle = "Recent Projects"
let portfolioTitle = ""
let portfolioSectionBackgroundColor = "#003344"
let portfolioItems = [
  // {
  //   imageUrl: taskyv,
  //   title: "Taskyv",
  //   description: "Sleek, sexy task manager",
  //   link: "https://taskyv.herokuapp.com/"
  // },
  // {
  //   imageUrl: bookThinks,
  //   title: "BookThinks",
  //   description: "Book-centric note recorder",
  //   link: "https://bookthinks.herokuapp.com/"
  // },
  // {
  //   imageUrl: recrootBox,
  //   title: "Recroot Box",
  //   description: "Easy to user porfolio-site template",
  //   link: "https://trevorhere.github.io/recrootBox/"
  // },
  // {
  //   imageUrl: campRank,
  //   title: "CampRank",
  //   description: "Post, rank and comment about your favorite campsites",
  //   link: "https://desolate-falls-89173.herokuapp.com/"
  // },
  // {
  //   imageUrl: blogApp,
  //   title: "Blog App",
  //   description: "Easy access blog app.",
  //   link: "https://boiling-harbor-27900.herokuapp.com"
  // }
];


// If you do not want the footer to be displayed (it just has a link to the github repo
// -- for this template ) then you can set showFooter to false and it will go away.
let showFooter = false;

export {
  firstName,
  lastName,
  title,
  bio,
  portfolioTitle,
  portfolioItems,
  portfolioSectionBackgroundColor,
  selfie,
  showFooter,
  links,
  userIcons,
  darkModeSwitch,
  darkMode
};
