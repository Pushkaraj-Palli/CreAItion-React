import React, { useState } from "react";
import "./style.css";
import defaultImag from "../Asserts/homeScreenImg.png";

const api_url = "Enter your Api-Key"; ///// Enter Your Api Key!
const api_key = "sk-Lw73bUlgQay3fOerKKV6VSLe2pPhRTod5O5Y0kPHc67HYjuz";

const ImageGenerator = () => {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("/");

  const generateImage = async () => {
    if (!prompt) return;

    try {
      setLoading(true);
      const response = await fetch(api_url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${api_key}`,
        },
        body: JSON.stringify({
          text_prompts: [
            {
              text: prompt,
            },
          ],
          cfg_scale: 7,
          steps: 30,
          width: 512,
          height: 512,
          samples: 1,
        }),
      });

      const data = await response.text();
      console.log("Raw response:", data);

      try {
        const jsonData = JSON.parse(data);
        console.log("Parsed response:", jsonData);

        if (jsonData.artifacts && jsonData.artifacts[0]) {
          setImageUrl(`data:image/png;base64,${jsonData.artifacts[0].base64}`);
        } else {
          throw new Error("No image data in response");
        }
      } catch (parseError) {
        console.error("Error parsing response:", parseError);
        throw new Error("Invalid response from API");
      }
    } catch (error) {
      console.error("Full error:", error);
      alert(error.message || "Failed to generate image. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="image-generator">
      <div className="header">
        AI Image <span>Generator</span>
      </div>
      <div className="image-loader">
        <div className="image">
          <img
            src={imageUrl === "/" ? defaultImag : imageUrl}
            alt="Generated content"
          />
        </div>
        <div className="search-box">
          <input
            type="text"
            className="search-input"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Enter a description for the image you want to create"
          />
          <button
            className="submit-btn"
            onClick={generateImage}
            disabled={loading || !prompt}
          >
            {loading ? "Generating..." : "Generate"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageGenerator;
