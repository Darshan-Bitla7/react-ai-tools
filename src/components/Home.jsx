import "./styles/Hero.css";
import "./styles/Explore.css";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "./images/ai-logo.webp";
import NET from "vanta/src/vanta.net";
import empty_heart from "./images/empty-heart.webp";
import filled_heart from "./images/filled-heart.webp";
import BasicPie from "./pie.jsx";
import Podium from "./podium.jsx";

export default function Home() {
  const [models, setModels] = useState([]);
  const titleRef = useRef(null);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/Darshan-Bitla7/mockapi/Models")
      .then((response) => response.json())
      .then((data) => {
        setModels(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

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

  const toggleFavorite = (id) => {
    setModels((prevModels) =>
      prevModels.map((model) =>
        model.id === id ? { ...model, favorite: !model.favorite } : model
      )
    );
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
              cursor="pointer"
              onClick={() => toggleFavorite(model.id)}
            />
          </article>
        ))}
      </main>
      <BasicPie />
      <Podium />
    </>
  );
}
