// BlogPost.jsx
import React from "react";
import "./blog-post.css";
import { MetaLogo, XLogo } from "@phosphor-icons/react";
import Transition from "../../components/transition/Transition";
import MagneticButton from "../../components/magneticbutton/MagneticButton";

const BlogPost = ({ post }) => {
  return (
    <div className="sample-blog page">
      <div className="container">
        <div className="s-blog-hero">
          <h2>{post.title}</h2>
        </div>

        <div className="blog-content">
          <div
            className="s-blog-col scroll"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          <div className="s-blog-col sticky">
            <p>
              <span>Explore Further:</span>
            </p>
            <p id="blog-share">
              {post.buttons.map((button) => (
                <div
                  key={button.id}
                  className="share-icon"
                  onClick={() => window.open(button.link, "_blank")}
                >
                  <button.icon {...button.iconProps} />
                </div>
              ))}
            </p>

            <div className="blog-content-img">
              <img src={post.image} alt="" />
            </div>
          </div>
        </div>

        <MagneticButton />
      </div>
    </div>
  );
};

export default Transition(BlogPost);
