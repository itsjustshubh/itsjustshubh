import React from "react";
import Transition from "../../components/transition/Transition";
import { Link } from "react-router-dom";
import { ArrowRight } from "@phosphor-icons/react";
import { details } from "../../content/content";
import { blogPosts } from "../../content/blogContent";
import MagneticButton from "../../components/magneticbutton/MagneticButton";
import "./blog.css";

const Blog = () => {
  const parseDate = (dateStr) => {
    // Example date format: "SEPTEMBER 9, 2021"
    const [month, day, year] = dateStr.split(" ");
    return new Date(`${month} ${day.replace(",", "")}, ${year}`);
  };

  const sortedPosts = blogPosts.sort(
    (a, b) => parseDate(b.date) - parseDate(a.date)
  );

  const chunkPosts = (posts, size) =>
    posts.reduce((acc, val, i) => {
      let idx = Math.floor(i / size);
      let page = acc[idx] || (acc[idx] = []);
      page.push(val);
      return acc;
    }, []);

  const rows = chunkPosts(sortedPosts, 2);

  return (
    <div className="blog page">
      <div className="container">
        <div className="blog-hero">
          <h1>
            Journal <span>on my Experiences.</span>
          </h1>
        </div>

        <section className="blogs">
          {rows.map((row, rowIndex) => (
            <div className="blog-row" key={rowIndex}>
              {row.map((post, index) => (
                <div className="blog-col" key={index}>
                  <Link to={post.link}>
                    <div className="blog-item">
                      <div className="blog-divider">
                        <div className="b-div-1"></div>
                        <div className="b-div-2"></div>
                      </div>

                      <div className="blog-title-wrapper">
                        <div className="blog-title">
                          <h3>{post.title}</h3>
                          <p>
                            <span>{post.category}</span>
                          </p>
                        </div>

                        <div className="blog-arrow">
                          <ArrowRight size={32} weight="light" color="#fff" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          ))}
        </section>

        <section className="about-contact">
          <div className="about-contact-copy">
            <h2>Powered by Your Creativity</h2>
            <p>
              <span>
                For a CV, portfolio, or inquiries, please reach out to{" "}
                {details.email}
              </span>
            </p>

            <br />
            <p>
              <span>{details.phone}</span>
            </p>
          </div>
        </section>
        <MagneticButton />
      </div>
    </div>
  );
};

export default Transition(Blog);
