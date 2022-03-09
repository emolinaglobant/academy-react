import React, { useState } from "react";
import "./dropMenu.scss";

function DropMenu({ array, filterData, tilte, setTitle }) {
  const [open, setOpen] = useState(false);
  const onClickHandler = (e, value) => {
    setOpen(false);
    setTitle(value);
    filterData(e);
  };

  return (
    <section
      className="dropMenu"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <h4 onClick={() => setOpen(!open)}>{tilte}</h4>
      {open && (
        <form name="weaknes" id="filterMenu">
          {array.map((i, id) => {
            return (
              <section key={id}>
                <input
                  type="radio"
                  value={i}
                  id={i}
                  name="weaknes"
                  onClick={(e) => onClickHandler(e, i)}
                />
                <label htmlFor={i}>{i.replace("_", " ")}</label>
              </section>
            );
          })}
        </form>
      )}
    </section>
  );
}

export default DropMenu;
