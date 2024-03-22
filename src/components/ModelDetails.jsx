import "./styles/ModelDetails.css";
// import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./styles/ModelDetails.css";
import provider from "./images/provider.webp";
import description from "./images/descr.webp";
import uses from "./images/uses.webp";
import pros from "./images/pro.webp";
import cons from "./images/con.webp";
import arrow from "./images/arrow.webp";
import { Blocks } from "react-loader-spinner";

export default function ModelDetails() {
  const { id } = useParams();
  const [model, setModel] = useState(null);

  useEffect(() => {
    fetch(
      `https://my-json-server.typicode.com/Darshan-Bitla7/mockapi/Models/${id}`
    )
      .then((response) => response.json())
      .then((data) => {
        setModel(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);

  if (!model) {
    return (
      <div className="loader">
        <Blocks
          height="100"
          width="100"
          color="#f01061"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          visible={true}
        />
      </div>
    );
  }
  return (
    <div className="top">
      <div className="ModelDetails">
        <div className="Model--img">
          <img
            src={model.photo}
            alt={model.name}
            className="ModelDetails--image"
          />
        </div>
        <div className="ModelDetails--info">
          <h2 className="ModelDetails--name">{model.name}</h2>
          <table>
            <tr>
              <th>
                <img src={provider} alt="provider icon" />
                <span>Provider</span>
              </th>
              <td>{model.details.provider}</td>
            </tr>
            <tr>
              <th>
                <img src={description} alt="description icon" />
                <span>Description</span>
              </th>
              <td>{model.details.description}</td>
            </tr>
            <tr>
              <th>
                <img src={uses} alt="uses icon" />
                <span>Uses</span>
              </th>
              <td>{model.details["use-cases"]}</td>
            </tr>
            <tr className="pro">
              <th>
                <img src={pros} alt="pros icon" />
                <span>Pros</span>
              </th>
              <td>{model.details["pros"]}</td>
            </tr>
            <tr className="con">
              <th>
                <img src={cons} alt="cons icon" />
                <span>Cons</span>
              </th>
              <td>{model.details["cons"]}</td>
            </tr>
          </table>
        </div>
      </div>
      <div className="button-container">
        <a target="_blank" href={model.details["link"]}>
          <button id="visit" className="explore-button">
            Visit
            <img src={arrow} alt="Arrow" className="arrow-icon" />
          </button>
        </a>
      </div>
    </div>
  );
}

// ModelDetails.propTypes = {
//   model: PropTypes.node.isRequired,
// };
