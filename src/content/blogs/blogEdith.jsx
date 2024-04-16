// blogEdith.jsx
import edithImage from "../../assets/images/blogs/edith-project.jpg";
import { Newspaper, GithubLogo, ProjectorScreen } from "@phosphor-icons/react";

export const blog = {
  slug: "meet-edith",
  link: "/blog/meet-edith",
  title:
    "My First Hackathon Win: Meet Edith, the AI-Powered Schedule Assistant!",
  date: "OCTOBER 22, 2023",
  content: `
    <p>
      <span>Personal Triumph at HackHarvard • OCTOBER 22, 2023</span>
    </p>
    <br />
    <h4>
      I'm thrilled to share that our team's project, "Edith", won the Terra API Prize at the prestigious HackHarvard event!
    </h4>
    <br />
    <br />
    <p>
      Being a Computer Science student at Khoury College, I've always been passionate about finding technological solutions to everyday problems. The creation of "Edith" has been one of my most challenging yet rewarding projects. It's an intelligent calendar app designed not just to manage tasks but to truly enhance your daily life.
    </p>
    <br />
    <br />
    <h3>
      Why Edith?
    </h3>
    <p>
      The inspiration for Edith came from my own life’s complexities. Balancing academics, personal projects, and health has always been a juggle. Watching friends and colleagues struggle similarly, I knew there had to be a better way to manage our daily tasks while keeping our wellness in check.
    </p>
    <br />
    <br />
    <p>
      Edith uses real-time data from wearables to adjust your schedule based on your current stress levels and health metrics. It integrates your academic deadlines, personal preferences like music, and even astrological insights to not just plan your day but optimize it.
    </p>
    <br />
    <br />
    <p>
      The journey to create Edith wasn’t easy. Integrating multiple APIs to work seamlessly while maintaining a simple, intuitive user interface was a massive challenge. However, seeing it all come together during HackHarvard was incredibly fulfilling.
    </p>
    <br />
    <br />
    <p>
      I am excited about the future of Edith. We are looking to expand its capabilities even further, incorporating features like fitness tracking and meal planning. I believe Edith has the potential to transform how we interact with our daily schedules.
    </p>
    <br />
    <br />
    <p>
      Join me on this journey with Edith. Let's redefine productivity and wellness together. Swipe to see snapshots from our proud moment at HackHarvard and a peek into Edith's capabilities!
    </p>
    <br />
    <br />
    <h4>
      Here's to the future of innovation, making every day easier with smart technology. Cheers to more breakthroughs!
    </h4>
    <br />
    <br />
    `,
  image: edithImage, // Path to the image used in the blog
  category: "Personal Reflections",
  buttons: [
    {
      id: 1,
      icon: Newspaper,
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
      link: "https://github.com/TJun-Jie/edithGPT",
      iconProps: {
        size: 18,
        weight: "light",
        color: "#fff",
      },
    },
    {
      id: 3,
      icon: ProjectorScreen,
      link: "https://devpost.com/software/edith-brshpa",
      iconProps: {
        size: 18,
        weight: "light",
        color: "#fff",
      },
    },
  ],
};
