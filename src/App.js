import { useState } from "react";
import "./App.css";
import fg from "./images/fg.jpg";

function App() {
  const [state, setState] = useState(true);
  const handleclick = (e) => {
    e.preventDefault();
    setState(!state);
  };
  return (
    <div className="App">
      <form>
        <h3>{state ? "Login" : "Sign-up"} Here</h3>

        <label for="username">Username</label>
        <input type="text" placeholder="Email or Phone" id="username" />

        <label for="password">Password</label>
        <input type="password" placeholder="Password" id="password" />

        {state ? (
          <></>
        ) : (
          <>
            <label for="password">Re-enter Password</label>
            <input type="password" placeholder="Password" id="password" />
          </>
        )}

        <button>{state ? "login" : "signup"}</button>
        <div class="social">
          <p>
            {state
              ? "do not have an acoount ? "
              : " Already have an account ? "}
            <span onClick={handleclick}>
              <u>{state ? "Sign-up" : "Log-in"}</u>
            </span>
          </p>
        </div>
      </form>
    </div>
  );
}

export default App;
