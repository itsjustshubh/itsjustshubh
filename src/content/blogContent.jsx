// blogContent.js
import blogImageOne from "../assets/images/projects/project-1.jpg";

import { MetaLogo, XLogo } from "@phosphor-icons/react";

export const blogPosts = [
  {
    id: 1,
    slug: "color-theory-crafted",
    link: "/blog/color-theory-crafted",
    title: "Color Theory, Crafted: A Designer's Spectrum",
    date: "SEPTEMBER 9, 2021",
    content: `
    <p>
    <span>Exhibitions • SEPTEMBER 9, 2021</span>
  </p>

  <br />
  <h4>
    Beyond theory, from brand identities that resonate with audiences
    on a level to user interfaces that improve usability and
    accessibility—color is a tool that, when mastered, can change the
    game.
  </h4>
  <br />
  <br />
  <p>
    At the heart of every memorable design lies the strategic use of
    color. It's not just about aesthetics; it's about conveying the
    right message, setting the mood, and even influencing
    decision-making. This understanding forms the core of our
    exploration into color theory—a tool as vital to a designer as a
    compass to a navigator.
  </p>
  <br />
  <br />
  <h3>
    Delve into the principles of color theory, from the color wheel
    and color harmony.
  </h3>
  <p>
    Color theory isn't just a fundamental aspect of design; it's a
    language spoken in hues and shades. It's about creating harmony,
    evoking emotions, and enhancing the user experience. Whether
    you're a seasoned designer, a marketer, or someone keen on
    understanding the nuances of visual storytelling, color theory
    offers invaluable insights into the hows and whys of color
    selection and its impact on design and branding.
  </p>
  <br />
  <br />
  <p>
    Through this blog, we delve into the principles of color theory,
    from the color wheel and color harmony to the psychological
    effects of colors. We'll explore how colors can be used to grab
    attention, evoke moods, and even influence behavior. This journey
    is not just for designers but for anyone eager to apply the power
    of color in their projects or brands.
  </p>
  <br />
  <br />
  <p>
    The application of color theory extends beyond the canvas of
    digital design; it's present in interior design, fashion, and
    branding. Understanding the dynamics of color can transform the
    ordinary into the extraordinary, turning simple designs into
    memorable experiences. Join us as we uncover the secrets of color
    theory and how you can leverage its power to elevate your work.
  </p>
  <br />
  <br />
  <p>
    Beyond theory, we will showcase practical examples of how color
    theory has been effectively applied in various design projects.
    From brand identities that resonate with audiences on a
    psychological level to user interfaces that improve usability and
    accessibility—color is a tool that, when mastered, can change the
    game.
  </p>
  <br />
  <br />
  <p>
    Dive into the world of color with us, and discover how to harness
    its potential in your next design project. Whether you're building
    a brand, designing a website, or creating a marketing campaign,
    understanding color theory can elevate your work and help you
    communicate more effectively with your audience.
  </p>
  <br />
  <br />
      `,
    image: blogImageOne, // Path to the image used in the blog
    category: "Design Insights",
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
      {
        id: 3,
        icon: XLogo,
        link: "https://www.example.com/",
        iconProps: {
          size: 18,
          weight: "light",
          color: "#fff",
        },
      },
    ],
  },
];
