import useAnimation from "./useAnimation";
import "./styles.css";
import { useState } from "react";
import us from './us2.png';

import kahani from "./kahani";

const colors = [
	'#f0deff',
	'#f5deff',
	'#f9deff',
	'#fadeff',
	'#fbdeff',
	'#fcdeff',
	'#fddeff',
	'#fedeff',
	'#ffcfff',
	'#ffcaff',
]

export default function Story() {
  const [current, setCurrent] = useState(0);
  const { mainPlay, mainStyle, nextPlay, nextStyle, prevPlay, prevStyle, imagePlay, imageStyle } =
    useAnimation(setCurrent);

  return (
    <div className="Story" style={{
			backgroundColor: colors[current - 26] || colors[0],
		}}>
      {current > 0 && (
        <div
          className="card"
          style={prevStyle}
          onClick={() => {
            prevPlay(true);
            setCurrent(current - 1);
          }}
        >
          <p>{kahani[current - 1]}</p>
        </div>
      )}
      {kahani[current] && (
        <div
          className="card"
          style={mainStyle}
          onClick={() => {
            mainPlay(true);
            nextPlay(true);
            setCurrent(current + 1);
						if (current === (kahani.length - 1)) {
							imagePlay(true);
						}
          }}
        >
          <p>{kahani[current]}</p>
        </div>
      )}
      {kahani[current + 1] && (
      <div className="card" style={nextStyle}>
        <p>{kahani[current + 1]}</p>
      </div>
      )}
			{!kahani[current] && (
				<div className="card" style={imageStyle}>
					<img src={us} className="fade-in-image" alt="our_story" />
					<p>Dont worry, will remove this site today.</p>
			</div>
			)}
        </div>
  );
}
