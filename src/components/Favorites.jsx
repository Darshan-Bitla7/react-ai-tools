import APIContext from "./APIContext";
import empty_heart from "./images/empty-heart.webp";
import filled_heart from "./images/filled-heart.webp";
import { Link } from "react-router-dom";
import { useContext } from "react";
import "./styles/Fav.css";
import robo from "./images/robo.webp";

export default function Favorites() {
  const { models, toggleFavorite } = useContext(APIContext);
  const favorites = models.filter((model) => model.favorite);
  const handleFavoriteClick = (id) => {
    toggleFavorite(id);
  };
  if (favorites.length === 0) {
    return (
      <div className="nofav">
        <h1>You do not have any Favorites yet!</h1>
        <img src={robo} alt="robot image" />
        <Link to="/">
          <button className="explore-button">EXPLORE MODELS</button>
        </Link>
      </div>
    );
  } else {
    return (
      <main id="explore">
        {favorites.map((model) => (
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
    );
  }
}
