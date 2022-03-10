import { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const Sign = () =>{
    const [showSign, setShowSign] = useState("in");
  const toggleSign = (type) => {
    setShowSign(type);
  };
    return(
        <article className="home__login">
          <section className="home__options">
            <button
              className={showSign == "in" ? "option active" : "option"}
              onClick={() => {
                toggleSign("in");
              }}
            >
              Sign in
            </button>
            <button
              className={showSign == "up" ? "option active" : "option"}
              onClick={() => {
                toggleSign("up");
              }}
            >
              Sign up
            </button>
          </section>
          {showSign == "in" ? <SignIn /> : <SignUp />}
        </article>
    );
};
export default Sign;