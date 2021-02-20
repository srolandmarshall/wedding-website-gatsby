import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Sam + Maggie',
  lang: 'en', // e.g: en, es, fr, jp
  description: 'August 2022', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Sam & Maggie',
  subtitle: 'August 2022',
  cta: "That's cool! Tell me more!",
};

// ABOUT DATA
export const aboutData = {
  title: 'About Sam & Maggie',
  img: 'xmas2019.jpg',
  threesheetsImg: 'threesheets.jpg',
  engagementImg: 'engagement.jpg',
  paragraphOne:
    'On the November 1st, 2016, Maggie DePentu drove from West Hartford to New Haven to go on a date with a complete stranger named Sam Marshall. When asked whether she preferred a nicer, quieter craft beer bar or a divey, noisy gastropub, Maggie responded without hesitation "Dive Bar!" and the two settled upon Three Sheets on Elm St.',
  paragraphTwo:
    "After two rounds of beer, at least one round of Three Sheets' pickle fries, and a mutual admiration of Kid Cudi, The Postal Service and Kanye West (he was still in his post-Pablo, pre-MAGA phase), the two agreed to see eachother again soon. And the rest, as they say, is history.",
  paragraphThree:
    "There's a lot more story to be told, but that's not for here... we have a wedding to plan!",
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'The Venue',
    info: 'Info to come here, once we figure it all out!',
    info2: '',
    url: '',
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'The Registry',
    info: 'Info to come here, once we figure it all out!',
    info2: '',
    url: '',
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'The Sleeping',
    info: 'Info to come here, once we figure it all out!',
    info2: '',
    url: '',
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Have any questions? Reach out to us directly!',
  btn: 'Email Us!',
  email: 'wedding@depentumarshall.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
