import { useAnimate } from "react-simple-animate";

const NORMAL_SIZE = { width: "370px", height: "370px" },
  SMALL_SIZE = { width: "150px", height: "150px" };

export default function useAnimation() {
  const { play: mainPlay, style: mainStyle } = useAnimate({
    start: {
      transform: "translateX(500px)",
      backgroundColor: "#ff7272",
      fontSize: "1.5rem",
      color: "#FFF",
      borderRadius: "50%",
      ...NORMAL_SIZE
    },
    end: {
      transform: "translateX(0px)",
      borderRadius: "50%",
      backgroundColor: "#ff7272",
      fontSize: "0.5rem",
      color: "#FFF",
			...SMALL_SIZE
    },
    complete: {
      transform: "translateX(500px)",
      backgroundColor: "#ff7272",
      fontSize: "1.5rem",
      color: "#FFF",
      borderRadius: "50%",
			...NORMAL_SIZE
    },
  });

  const { play: nextPlay, style: nextStyle } = useAnimate({
    start: {
      transform: "translateX(500px)",
      width: "0px",
      height: "0px",
      backgroundColor: "#ff7272",
      fontSize: "0rem",
      color: "#FFF",
      borderRadius: '50%',
    },
    end: {
      transform: "translateX(500px)",
      backgroundColor: "#ff7272",
      fontSize: "1.5rem",
      color: "#FFF",
      borderRadius: '50%',
			...NORMAL_SIZE
    },
    complete: {
      transform: "translateX(500px)",
      width: "0px",
      height: "0px",
      backgroundColor: "#ff7272",
      fontSize: "0rem",
      color: "#FFF",
      borderRadius: '50%',
    },
  });

  const { play: prevPlay, style: prevStyle } = useAnimate({
    start: {
      transform: "translateX(0px)",
      borderRadius: "50%",
      backgroundColor: "#9f2424",
      fontSize: "0.5rem",
      color: "#FFF",
			position: "fixed",
			top: "100px",
			zIndex: 99,
			...SMALL_SIZE
    },
    end: {
      transform: "translateX(500px)",
      backgroundColor: "#ff7272",
      fontSize: "1.5rem",
      color: "#FFF",
			...NORMAL_SIZE
    },
    complete: {
      transform: "translateX(0px)",
      borderRadius: "50%",
      backgroundColor: "#9f2424",
      fontSize: "0.5rem",
      color: "#FFF",
			position: "fixed",
			top: "100px",
			zIndex: 99,
			...SMALL_SIZE
    },
  });

	const { play: imagePlay, style: imageStyle } = useAnimate({
    start: {
      // transform: "translateX(0px)",
      // borderRadius: "50%",
      // backgroundColor: "#9f2424",
      // fontSize: "0.5rem",
      // color: "#FFF",
			// position: "fixed",
			// top: "100px",
			// zIndex: 99,
			opacity: 0,
    },
    end: {
      // transform: "translateX(500px)",
      // backgroundColor: "#ff7272",
      // fontSize: "1.5rem",
      // color: "#FFF",
			opacity: 1,
    },
  });

  return {
    mainPlay,
    mainStyle,
    nextPlay,
    nextStyle,
    prevPlay,
    prevStyle,
		imagePlay,
		imageStyle
  };
}
