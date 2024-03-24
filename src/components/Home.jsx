import "./styles/Hero.css";
import "./styles/Explore.css";
import logo from "./images/ai-logo.webp";
import NET from "vanta/src/vanta.net";
import { useEffect, useRef, useContext, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import APIContext from "./APIContext.jsx";
import empty_heart from "./images/empty-heart.webp";
import filled_heart from "./images/filled-heart.webp";
const BasicPie = lazy(() => import("./pie.jsx"));
const Podium = lazy(() => import("./podium.jsx"));

export default function Home() {
  const titleRef = useRef(null);
  const { models, toggleFavorite } = useContext(APIContext);

  useEffect(() => {
    NET({
      el: "#hero",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      backgroundColor: 0x0,
    });
  }, []);

  useEffect(() => {
    if (titleRef.current) {
      const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let interval = null;
      const titleElement = titleRef.current;

      titleElement.onmouseover = (event) => {
        let iteration = 0;
        clearInterval(interval);
        interval = setInterval(() => {
          event.target.innerText = event.target.innerText
            .split("")
            .map((letter, index) => {
              if (index < iteration) {
                return event.target.dataset.value[index];
              }
              return letters[Math.floor(Math.random() * 26)];
            })
            .join("");
          if (iteration >= event.target.dataset.value.length) {
            clearInterval(interval);
          }
          iteration += 1 / 3;
        }, 10);
      };
    }
  }, [titleRef]);

  const handleExploreClick = () => {
    document
      .getElementById("explore-title")
      .scrollIntoView({ behavior: "smooth" });
  };

  const handleFavoriteClick = (id) => {
    toggleFavorite(id);
  };

  return (
    <>
      <div className="Hero" id="hero">
        <img className="hero-img" src={logo} alt="Logo" />
        <h1 ref={titleRef} className="title" data-value="NEXUSAI">
          NEXUSAI
        </h1>
        <p className="subtitle">Your Gateway to Intelligent Solutions</p>
        <button className="explore-button" onClick={handleExploreClick}>
          EXPLORE
        </button>
      </div>

      <div>
        <h1 id="explore-title" className="explore-title">
          Different Models
        </h1>
      </div>
      <main id="explore">
        {models.map((model) => (
          <article key={model.id} className="card">
            <Link to={`/model/${model.id}`}>
              <img
                src={model.photo}
                alt={model.name}
                className="card--image"
                loading="lazy"
              />
              <div className="card--info">
                <h2 className="card--name">{model.name}</h2>
                <p className="card--contact">
                  Provider: {model.details.provider}
                </p>
              </div>
            </Link>
            <img
              src={model.favorite ? filled_heart : empty_heart}
              className="fav"
              alt=""
              onClick={() => handleFavoriteClick(model.id)}
            />
          </article>
        ))}
      </main>
      <Suspense fallback={<div>Loading...</div>}>
        <BasicPie />
        <Podium />
      </Suspense>
    </>
  );
}
