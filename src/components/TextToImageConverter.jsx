import { useState, useEffect } from "react";
import "./styles/try.css";
import { Blocks } from "react-loader-spinner";

// import fetch from "node-fetch"; // Make sure to install 'node-fetch' package
// Import stylesheets and other necessary imports

const API_HOST = "https://api.stability.ai";
const API_KEY = "sk-GKGW7iHzZRm70NnfTGrVMcrhB7D1SZ9BsmDPYe94zZsAMVHS";

const TextToImageConverter = () => {
  const [textInput, setTextInput] = useState("");
  const [imageData, setImageData] = useState("");
  const [remainingCredits, setRemainingCredits] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCredits = async () => {
      try {
        const response = await fetch(`${API_HOST}/v1/user/balance`, {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
          },
        });

        if (!response.ok) {
          throw new Error(`Non-200 response: ${await response.text()}`);
        }

        const responseData = await response.json();
        // console.log(responseData);
        setRemainingCredits(responseData.credits);
      } catch (error) {
        console.error("Error fetching remaining credits:", error);
      }
    };

    fetchCredits();
  }, [imageData]);

  const handleGenerateImage = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `${API_HOST}/v1/generation/stable-diffusion-xl-1024-v1-0/text-to-image`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${API_KEY}`,
          },
          body: JSON.stringify({
            text_prompts: [{ text: textInput }],
            cfg_scale: 7,
            height: 1024,
            width: 1024,
            steps: 30,
            samples: 1,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`Non-200 response: ${await response.text()}`);
      }

      const responseData = await response.json();
      const imageBase64 = responseData.artifacts[0].base64;
      setImageData(`data:image/png;base64,${imageBase64}`);
    } catch (error) {
      console.error("Error generating image:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="try-title">
        <h1>
          <b>Stable-Diffusion-XL-base-1.0</b>
        </h1>
        <h3>
          <b>Developed by:</b> Stability AI
        </h3>
        <h3>
          <b>Model type:</b> Diffusion-based text-to-image generative model
        </h3>
      </div>
      <div className="text2image">
        <div>
          Remaining Credits:{" "}
          {remainingCredits !== null ? remainingCredits : "Loading..."}
        </div>
        <input
          type="text"
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          placeholder="Enter text..."
        />
        <button className="explore-button" onClick={handleGenerateImage}>
          Generate Image
        </button>
        {isLoading && <Blocks className="loader" />}
        {imageData && (
          <div>
            <img src={imageData} alt="Generated Image" />
          </div>
        )}
      </div>
    </>
  );
};

export default TextToImageConverter;
