// content.jsx
const firstName = "Shubh";
const lastName = "Thorat";
const contactInfo = {
  email: "reapers-arras.0y@icloud.com",
  phone: "+1 416 555 1234",
  address: "789 Town Way, Toronto M1A 2B3",
};

export const details = {
  firstName: firstName,
  lastName: lastName,
  name: `${firstName} ${lastName}`,
  tagline: "Computer Scientist based in Boston.",
};

export const aboutData = {
  marqueeText:
    "Transforming Your Digital Presence with Unforgettable Web Animations.",
  introText: `${details.name} is an innovative Web Interaction Animation Designer, based in the vibrant city of Toronto, specializing in bringing digital experiences to life. With a keen eye for detail and a passion for pushing the boundaries of web animation.`,
  introDetails: {
    startDate: "Est. 1997",
    description: `${details.name} partners with a broad spectrum of clients in Tech, Education, Entertainment, and eCommerce, crafting immersive web animations and interactive designs for brands of all shapes and sizes. With a focus on Branding, User Interface (UI) Design, and Motion Graphics, ${firstName} brings a unique blend of creativity and technical precision to every project.`,
    accomplishment: `Renowned for pioneering in the field of web interaction design, ${firstName} has been nominated for several industry awards, including the prestigious Webby Awards for innovative web animation.`,
  },
  contactInfo: [
    {
      type: "email",
      value: "hello@curafuturi.com",
      display: "Email",
      url: `mailto:hello@curafuturi.com`,
    },
    {
      type: "phone",
      value: "+1 416 555 1234",
      display: "Phone",
      url: `tel:+14165551234`,
    },
    {
      type: "address",
      value: "7 Speare Pl, Boston, MA 02115",
      display: "Address",
      url: "https://maps.app.goo.gl/RFBEJXUrQ2VsSKyR9",
    },
    {
      type: "linkedin",
      value: "Visit my LinkedIn",
      display: "LinkedIn",
      url: "https://www.linkedin.com/in/shubhthorat/",
    },
  ],
  faqData: {
    title: "",
    rows: [
      {
        title: "What type of works do you take on?",
        content:
          "I specialize in web interaction and animation design, focusing on creating engaging and dynamic user experiences for websites and web applications. My work encompasses a range of projects, including but not limited to interactive web animations, UI/UX design, motion graphics for online platforms, and custom animations for brand storytelling. I am passionate about bringing brands to life through immersive digital experiences and work with clients across Tech, Education, Entertainment, and eCommerce industries.",
      },
      {
        title: "How do you charge for projects?",
        content:
          "My project pricing is tailored to the specific needs and scope of each project. I typically offer a project-based fee after a thorough discussion about the project's requirements, timelines, and expected deliverables. This approach allows for a clear understanding of the project costs upfront. For larger or more complex projects, I may also work with a phased payment schedule, ensuring transparency and alignment with project milestones.",
      },
      {
        title: "What is your hourly rate?",
        content:
          "While I primarily work with project-based pricing, I understand that some projects may require an hourly or day rate, especially during the initial phases or for ongoing support. My hourly rate is $XXX, reflecting my expertise and the value I bring to each project. For long-term engagements or larger projects, I am open to discussing a customized rate or retainer model that aligns with the client's needs and project goals.",
      },
    ],
  },
  awardsData: [
    {
      year: "2024",
      awardName: "Best Interactive Design",
      awardEvent: "Webby Awards",
      project: "Dynamic Narratives Platform",
      url: "https://www.webbyawards.com/winners/2024/interactive-design/dynamic-narratives-platform",
    },
    {
      year: "2023",
      awardName: "Innovative UI/UX Design",
      awardEvent: "UX Design Awards",
      project: "Immersive E-commerce Experience",
      url: "https://www.uxdesignawards.com/2023/immersive-ecommerce-experience",
    },
    {
      year: "2022",
      awardName: "Outstanding Animation",
      awardEvent: "AIGA Design Competition",
      project: "Cultural Events Platform",
      url: "https://www.aiga.org/design-competition-2022/outstanding-animation-cultural-events",
    },
    {
      year: "2021",
      awardName: "Interactive Designer",
      awardEvent: "Communication Arts",
      project: "Visual Storytelling Project",
      url: "https://www.commarts.com/interactive-designer-2021/visual-storytelling",
    },
    {
      year: "2020",
      awardName: "Creative Innovator",
      awardEvent: "Design Intelligence Awards",
      project: "Interactive Learning Module",
      url: "https://www.designintelligenceawards.com/2020/creative-innovator-interactive-learning",
    },
  ],
  pressData: [
    {
      year: "2023",
      event: "Interview Article",
      source: "Khoury News - Madelaine Millar",
      details:
        "Meet Edith, the AI-powered schedule assistant designed to reduce your stress",
      url: "https://www.khoury.northeastern.edu/meet-edith-the-ai-powered-schedule-assistant-designed-to-reduce-your-stress/",
    },
  ],
};
