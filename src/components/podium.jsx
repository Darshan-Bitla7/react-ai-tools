import "./styles/podium.css";
import confetti from "https://esm.run/canvas-confetti@1";

export default function Podium() {
  function onClick() {
    confetti({
      particleCount: 250,
      spread: 100,
    });
  }
  return (
    <div className="podium">
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
                  <span>Cheer 🎉</span>
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
