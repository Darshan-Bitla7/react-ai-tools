import { PieChart } from "@mui/x-charts/PieChart";
import { mangoFusionPalette } from "@mui/x-charts/colorPalettes";
import { useEffect, useState } from "react";
import "./styles/pie.css";

export default function BasicPie() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="pie">
      <h2>Market Share of AI Tools</h2>
      <PieChart
        colors={mangoFusionPalette}
        series={[
          {
            data: [
              { id: 0, value: 60.2, label: "ChatGPT" },
              { id: 1, value: 15.8, label: "character.ai" },
              { id: 2, value: 4.7, label: "QuillBot" },
              { id: 3, value: 2.1, label: "Midjourney" },
              { id: 4, value: 1.3, label: "Hugging Face" },
              { id: 5, value: 1, label: "Gemini" },
              { id: 6, value: 1, label: "Novel AI" },
              { id: 7, value: 0.8, label: "CapCUT" },
              { id: 8, value: 0.8, label: "JanitorAI" },
              { id: 9, value: 0.7, label: "CivitAI" },
            ],
            highlightScope: { faded: "global", highlighted: "item" },
            faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
          },
        ]}
        width={windowSize.width / 1.25}
        height={windowSize.height / 2}
      />
    </div>
  );
}
