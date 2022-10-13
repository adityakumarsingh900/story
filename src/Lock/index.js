import { useRef, useState } from "react";
import logo from "./logo.svg";
import './style.css'

export default function Lock({ onEnter, error }) {
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);
	const errorRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password === "riaaditya") {
      onEnter();
    } else {
      setIsError(true);
				errorRef.current.classList.toggle("jiggle");
				setTimeout(() => {
				errorRef.current.classList.toggle("jiggle");
			}, 1000);
    }
  };

  return (
    <div className="lock">
			<div className="logo"><img src={logo} alt="logo" /></div>
      <form onSubmit={handleSubmit} className="form">
        <h1>Password ?</h1>
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
					style={{ width: "90%", padding: "10px", fontSize: "1.5rem", color: "#27253f" }}
        />
        {isError && <p ref={errorRef} className="error">Wrong Password</p>}
      </form>
    </div>
  );
}
