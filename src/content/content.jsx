// content.jsx
const firstName = "Shubh";
const lastName = "Thorat";
const contactInfo = [
  {
    type: "email",
    value: "reapers-arras.0y@icloud.com",
    display: "Email",
    url: "mailto:reapers-arras.0y@icloud.com",
  },
  {
    type: "address",
    value: "Boston, Massachusetts",
    display: "Address",
    url: "https://maps.google.com", // Placeholder link, update as necessary
  },
  {
    type: "linkedin",
    value: "Visit my LinkedIn",
    display: "LinkedIn",
    url: "https://www.linkedin.com/in/shubhthorat/",
  },
  {
    type: "github",
    value: "Visit my GitHub",
    display: "GitHub",
    url: "https://github.com/itsjustshubh",
  },
];

export const socialMedia = [
  {
    type: `${contactInfo[2].display}`,
    url: `${contactInfo[2].url}`,
  },
  {
    type: `${contactInfo[3].display}`,
    url: `${contactInfo[3].url}`,
  },
];

export const details = {
  firstName: `${firstName}`,
  lastName: `${lastName}`,
  name: `${firstName} ${lastName}`,
  email: `${contactInfo[0].value}`,
  // phone: `${contactInfo[1].value}`,
  tagline: "Exploring Technology to Empower and Connect",
};

export const aboutData = {
  marqueeText: "Making a Difference Through Innovation. ",
  introText: `My name is ${details.name}, and I founded Social Cloud with a vision to harness technology for social good. Based in Boston, I focus on using my skills in coding and data science to help NGOs and charities increase their impact.`,
  introDetails: {
    startDate: "SINCE 2021",
    description: `I'm driven by the belief that technology can transform lives and communities for the better. At Social Cloud, we're working to make fundraising more efficient and far-reaching, bridging the gap between nonprofits and the digital age.`,
    accomplishment: `Through collaborative projects like those at HackHarvard, I've been fortunate to learn from peers and mentors alike, continually seeking new ways to apply technology creatively and effectively.`,
  },
  contactInfo: contactInfo,
  // faqData: {
  //   title: "",
  //   rows: [
  //     {
  //       title: "What drives your innovations at Social Cloud?",
  //       content:
  //         "At Social Cloud, we are driven by the potential to make a significant impact in the social sector by leveraging big data and advanced marketing techniques. Our goal is to maximize the reach and efficiency of fundraising campaigns, making philanthropy accessible and effective in the digital age.",
  //     },
  //     {
  //       title:
  //         "How do you balance technology with user needs in your projects?",
  //       content:
  //         "I prioritize user-centric design and robust backend solutions to ensure our technology not only meets but anticipates user needs. This balance is achieved through continuous research, development, and user feedback to refine our platforms.",
  //     },
  //   ],
  // },
  awardsData: [
    {
      year: "2023",
      awardName: "Terra API Prize",
      awardEvent: "HackHarvard",
      project:
        "We won the Terra API Prize for our project 'Edith', an AI-powered assistant designed to streamline daily schedules and reduce stress.",
      url: "https://devpost.com/software/edith-brshpa", // Ensure this URL is correct or update accordingly
    },
  ],
  pressData: [
    {
      year: "2023",
      event: "Feature Article",
      source: "Khoury News - Madelaine Millar",
      details:
        "Discussing 'Edith', our AI-powered assistant aimed at easing daily schedules",
      url: "https://www.khoury.northeastern.edu/meet-edith-the-ai-powered-schedule-assistant-designed-to-reduce-your-stress/",
    },
  ],
};
