import { PieChart } from "@mui/x-charts/PieChart";
import APIContext from "./APIContext.jsx";
import { mangoFusionPalette } from "@mui/x-charts/colorPalettes";
import { useEffect, useState, useContext } from "react";
import "./styles/pie.css";

export default function BasicPie() {
  const { models } = useContext(APIContext);
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
      {/* {console.log("Models:", models)}; */}
      <PieChart
        colors={mangoFusionPalette}
        series={[
          {
            data: [
              ...models.map((model) => ({
                id: model.id,
                value: model.details["market-share"],
                label: model.name,
              })),
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
