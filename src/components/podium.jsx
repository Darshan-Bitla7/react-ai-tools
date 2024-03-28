import "./styles/podium.css";
import { useEffect, useRef } from "react";
import confetti from "https://esm.run/canvas-confetti@1";

export default function Podium() {
  const podiumRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const podium = podiumRef.current;
      if (!podium) return;

      const { top } = podium.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (top < windowHeight * 0.75) {
        podium.classList.add("show");
      } else {
        podium.classList.remove("show");
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  function onClick() {
    confetti({
      particleCount: 250,
      spread: 100,
    });
  }
  return (
    <div className="podium" ref={podiumRef}>
      <table id="podium">
        <tr>
          <td>
            <div className="text-center">2</div>
            <div id="second">
              <div className="text-inside">
                <span className="player">character.ai</span>
              </div>
            </div>
          </td>
          <td>
            <div className="text-center">1👑</div>
            <div id="first">
              <div className="text-inside">
                <span className="player">ChatGPT</span>
                <button className="button" onClick={onClick}>
                  <span>CLICK 🎉</span>
                </button>
              </div>
            </div>
          </td>
          <td>
            <div className="text-center">3</div>
            <div id="third">
              <div className="text-inside">
                <span className="player">QuillBot</span>
              </div>
            </div>
          </td>
        </tr>
      </table>
    </div>
  );
}
