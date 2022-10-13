import useAnimation from "./useAnimation";
import "./styles.css";
import { useEffect, useState } from "react";
import us from './us2.png';
import song from './suno.mp3'

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

var audio = new Audio(song);

export default function Story() {
  const [current, setCurrent] = useState(0);
	const [toggleMusic, setToggleMusic] = useState(false);
	const [isDesktop, setIsDesktop] = useState(false);
  const { mainPlay, mainStyle, nextPlay, nextStyle, prevPlay, prevStyle, imagePlay, imageStyle } =
    useAnimation(setCurrent);

	useEffect(() => {
		if (toggleMusic) {
			audio.play();
		} else
			audio.pause();
	}, [toggleMusic])

	useEffect(() => {
		var mobile = (/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));
    if (mobile) {
			setIsDesktop(false);
    } else {
			setIsDesktop(true);
    }
	}, [])

	if (!isDesktop) {
		return (
			<div className="mobile">
				<h1>Sorry, this story is not available on mobile devices.</h1>
			</div>
		)
	}
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
							setToggleMusic(true);
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
				<div className="card" style={imageStyle} onClick={() => setToggleMusic(o => !o)}>
					<img src={us} className="fade-in-image" alt="our_story" />
					<p>Dont worry, will remove this site today.</p>
			</div>
			)}
        </div>
  );
}
