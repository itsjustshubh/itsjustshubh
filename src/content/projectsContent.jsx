// projectContent.js
import ProjectImg1 from "../assets/images/projects/project-1.jpg";
import ProjectImg2 from "../assets/images/projects/project-2.jpg";
import ProjectImg3 from "../assets/images/projects/project-3.jpg";
import ProjectImg4 from "../assets/images/projects/project-4.jpg";
import ProjectImg5 from "../assets/images/projects/project-5.jpg";

import { MetaLogo, XLogo, Article } from "@phosphor-icons/react";

export const projects = [
  {
    id: 1,
    slug: "edith-ai",
    title: "Edith - AI Calendar",
    subtitle: "AI/ML • App Development",
    image: ProjectImg2,
    link: "/projects/edith-ai",
    content: {
      title:
        "An intuitive AI-driven calendar app blending health tracking, academic integration, and personalized insights.",
      year: 2023,
      credits: [
        { role: "Developer", name: "Shubh Thorat" },
        { role: "AI/ML Specialist", name: "Shubh Thorat" },
      ],
      goals: [
        "Develop an AI model to predict user emotions from wearable data.",
        "Integrate diverse APIs for a seamless user experience.",
      ],
      description: `
        <p>I developed Edith, an AI-powered calendar app that assists users in managing their daily schedules by integrating health data from wearables, academic information, and personalized insights like horoscopes and music synchronization.</p>
        <br />
        <p>The app features an AI model that accurately interprets emotional states, enhancing user interaction and engagement. The app successfully integrates technologies from several platforms, including Spotify and OpenAI, to provide a comprehensive and intuitive user experience.</p>
      `,
      buttons: [
        {
          id: 1,
          icon: Article,
          link: "https://www.khoury.northeastern.edu/meet-edith-the-ai-powered-schedule-assistant-designed-to-reduce-your-stress/",
          iconProps: {
            size: 18,
            weight: "light",
            color: "#fff",
          },
        },
        {
          id: 2,
          icon: XLogo,
          link: "https://www.example.com/",
          iconProps: {
            size: 18,
            weight: "light",
            color: "#fff",
          },
        },
      ],
      images: [ProjectImg1, ProjectImg2, ProjectImg3],
    },
  },
  {
    id: 2,
    slug: "social-cloud",
    title: "Social Cloud",
    subtitle: "Data Science • Social Marketing",
    image: ProjectImg1,
    link: "/projects/social-cloud",
    content: {
      title:
        "Revolutionizing NGO fundraising through advanced data analytics and targeted social marketing.",
      year: 2021,
      credits: [
        { role: "Founder and CEO", name: "Shubh Thorat" },
        { role: "Data Analytics", name: "Shubh Thorat" },
        { role: "Marketing Strategy", name: "Shubh Thorat" },
      ],
      goals: [
        "Utilize big data to maximize fundraising impact.",
        "Implement innovative social marketing strategies.",
      ],
      description: `
        <p>As the founder of Social Cloud, I spearheaded the development of a platform that transforms how NGOs connect with donors. By leveraging big data, Social Cloud targets customized online audiences, maximizing the effectiveness of fundraising campaigns.</p>
        <br />
        <p>The platform integrates cutting-edge data analytics to optimize donor engagement and enhance the fundraising process, thereby establishing a new standard in digital social marketing for NGOs.</p>
      `,
      buttons: [
        {
          id: 1,
          icon: MetaLogo,
          link: "https://www.facebook.com/",
          iconProps: {
            size: 18,
            weight: "light",
            color: "#fff",
          },
        },
        {
          id: 2,
          icon: XLogo,
          link: "https://www.example.com/",
          iconProps: {
            size: 18,
            weight: "light",
            color: "#fff",
          },
        },
      ],
      images: [ProjectImg1, ProjectImg2, ProjectImg3, ProjectImg4, ProjectImg5],
    },
  },
];
