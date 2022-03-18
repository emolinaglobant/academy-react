import GoDirection from "./GoDirection";
import { useState, useEffect,useRef } from "react";
const Elements = (props) => {
  const [counterDisable, setCounterDisable] = useState(0);
  const [margin, setMargin] = useState(0);
  const objectRef = useRef();

  const handleMove = (direction) => {
    if (direction == "next") {
      setCounterDisable(counterDisable + 1);
      setMargin(margin - 90);
    } else if (direction == "back") {
      setMargin(margin + 90);
      setCounterDisable(counterDisable - 1);
    }
  };
  useEffect(() => {
    objectRef.current.style.marginLeft = String(margin) + "vw";
  }, [margin]);

  return (
    <section className="big-wrapper">
      {counterDisable > 0 && (
        <GoDirection direction="back" onMove={handleMove} />
      )}
      <section className="wrapper">
        <section className="wrapper__items" ref={objectRef}>
         {props.children}
        </section>
      </section>
      {counterDisable < props.total - 1 && (
        <GoDirection direction="next" onMove={handleMove} />
      )}
    </section>
  );
};

export default Elements;
