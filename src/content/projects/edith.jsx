// edith.jsx
import groupPhoto from "../../assets/images/blogs/edith-project.jpg";
import dashboard from "../../assets/images/blogs/edith-dashboard.png";
import promo from "../../assets/videos/projects/edith-promo.mp4";

import { Article, GithubLogo, FilePdf } from "@phosphor-icons/react";

export const project = {
  id: 1,
  slug: "edith-ai",
  title: "Edith - AI Calendar",
  subtitle: "AI/ML • App Development",
  image: dashboard,
  link: "/projects/edith-ai",
  content: {
    title:
      "An intuitive AI-driven calendar app blending health tracking, academic integration, and personalized insights.",
    year: 2023,
    credits: [
      { role: "Developer", name: "Shubh Thorat" },
      { role: "AI/ML Specialist", name: "Shubh Thorat" },
    ],
    previousCredits: [
      { role: "Fronend Engineer", name: "Tai Jun Jie" },
      { role: "API Configurator", name: "Siddhartha Pullannagari" },
    ],
    goals: [
      "Launching it as an App on the App Store.",
      "Integrate it to use a real time watch data.",
      "Implement a real time API for the app.",
      "Creating a backend service for faster online analysis.",
    ],
    description: `
    <p>
    Edith represents a transformative step in personal productivity tools, designed to intuitively manage your daily schedule by seamlessly integrating health data from wearable technologies, academic schedules, and personal preferences into a unified platform. This project leverages advanced artificial intelligence to not only organize but also predict and adapt to the user's lifestyle, promoting a balanced life.</p>
    <br />
    <p>
    At its core, Edith employs a sophisticated AI model that processes real-time data from wearables such as Apple Watches and Fitbits to predict emotional states and suggest schedule adjustments accordingly. This AI capability allows Edith to offer personalized day planning that dynamically responds to the user's physical and emotional needs.</p>
    <br />
    <p>
    Beyond health tracking, Edith integrates with multiple third-party services to enhance its functionality. This includes academic platforms like Canvas for managing assignments and class schedules, Spotify for musical preferences that reflect the user's mood, and OpenAI's GPT technology for natural language processing, enabling users to interact with Edith as if they were conversing with a human assistant.</p>
    <br />
    <p>
    The user interface of Edith is designed to be as intuitive and user-friendly as possible, ensuring that even users with minimal technical expertise can benefit from its advanced features. The app's design emphasizes accessibility and ease of use, with a clean, minimalistic layout that prioritizes user engagement and simplicity.</p>
    <br />
    <p>
    Looking forward, the project aims to expand its feature set by incorporating additional APIs and exploring new areas such as dietary recommendations based on emotional states and physical activity levels, further customizing the user experience.</p>
    <br />
    <p>
    Edith is not just a tool; it's a lifestyle enhancer that brings a new level of intelligence to personal organization. By integrating cutting-edge AI with practical applications, Edith is set to redefine how we manage our time and health in the digital age.</p>
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
        icon: GithubLogo,
        link: "https://github.com/itsjustshubh/Edith-AI-Phase-One",
        iconProps: {
          size: 18,
          weight: "light",
          color: "#fff",
        },
      },
      {
        id: 3,
        icon: FilePdf,
        link: "https://drive.google.com/file/d/1itFukhWEn5DTPpNbw-OLsEtJN5uTv1HJ/view",
        iconProps: {
          size: 18,
          weight: "light",
          color: "#fff",
        },
      },
    ],
    images: [dashboard, groupPhoto],
  },
};
