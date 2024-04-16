// blogEdithAI.jsx
import edithAIImage from "../../assets/images/blogs/edith-dashboard.png";
import { FilePdf, GithubLogo } from "@phosphor-icons/react";

export const blog = {
  id: 3,
  slug: "edith-ai-driven-wellness",
  link: "/blog/edith-ai-driven-wellness",
  title: "Artificial Intelligence Class Project inspired by HackHarvard!",
  date: "DECEMBER 15, 2023",
  content: `
    <p>
      <span>Advanced AI Development • DECEMBER 15, 2023</span>
    </p>

    <br />
    <h4>
      From HackHarvard to CS4100: My Journey with Edith, an AI-Driven Wellness Enhancer
    </h4>
    <br />
    <br />
    <p>
      Fresh off our success at HackHarvard, where our project "Edith" clinched the Terra API Prize, I was inspired to dive deeper into the potential of artificial intelligence in personal wellness. This inspiration led me to enroll in CS4100: Artificial Intelligence at Khoury College, where I further developed Edith to utilize physiological data from wearables like Apple Watches and Fitbits for advanced emotion recognition.
    </p>
    <br />
    <br />
    <h3>
      Bridging Emotion with Technology
    </h3>
    <p>
      The core of Edith is its ability to enhance user experience and well-being by interpreting human emotions through physiological data. This leap in technology meant not just tracking health metrics but understanding them in the context of emotional states, a crucial aspect of managing daily stress and productivity.
    </p>
    <br />
    <br />
    <p>
      During my course, I refined the algorithms and integrated more nuanced data interpretation techniques to improve Edith's precision. The experience was transformative, not just in technical learning but in seeing the real-world application of these theories.
    </p>
    <br />
    <br />
    <p>
      As part of my project submission, I authored a paper titled "Edith: Revolutionizing Personal Wellness and Productivity with AI." This paper discusses the challenges of blending emotional intelligence with artificial systems, our solutions, and the potential future enhancements for Edith.
    </p>
    <br />
    <br />
    <p>
      The road ahead for Edith includes expanding its integration with other lifestyle aspects like fitness tracking and meal planning. I'm excited about the future and the difference Edith can make in enhancing our daily lives through intelligent technology.
    </p>
    <br />
    <br />
    <p>
      I'm keen to continue this journey and am open to collaborations and insights that can further this project. Feel free to reach out if you are interested in contributing to or learning more about Edith.
    </p>
    <br />
    <br />
    `,
  image: edithAIImage, // Path to the image used in the blog
  category: "Tech & Innovation",
  buttons: [
    {
      id: 1,
      icon: FilePdf,
      link: "https://drive.google.com/file/d/1itFukhWEn5DTPpNbw-OLsEtJN5uTv1HJ/view",
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
  ],
};
