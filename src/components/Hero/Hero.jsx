import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Hero() {
  const handleScrollToProjects = () => {
    const section = document.getElementById("projects");
    if (section) {
      section.scrollIntoView({ behavior: "auto" }); // بدون سكرول مرئي
    }
  };

  return (
    <section className="hero">
      <div className="content">
        <h1>
          Hi, I'm <span>Yumna Mahmoud</span>
        </h1>
        <h2>UI/UX Designer</h2>
        <p>
          I design intuitive and engaging digital experiences that combine
          creativity with functionality.
        </p>
        <div className="buttons">
          <button className="btn-outline" onClick={handleScrollToProjects}>
            View Projects
          </button>
        </div>
      </div>

      <div className="image">
        <DotLottieReact
          src="https://lottie.host/8bff49c4-ee82-4b7c-bd53-8c09cfbec2fc/HXFO47Np4Q.lottie"
          loop
          autoplay
          style={{ width: "100%", maxWidth: 400, height: "auto", margin: "0 auto" }}
        />
      </div>
    </section>
  );
}
