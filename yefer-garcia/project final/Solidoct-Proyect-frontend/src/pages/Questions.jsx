import React from "react";
import { dinamicTitle } from "../utils/dinamicTitle";

const Questions = () => {
  dinamicTitle("Solidoct | F & Q");
  return (
    <main className="container-question">
      <section className="frecuent-questions">
        <h2>Frequent questions</h2>

        <div
          className="accordion accordion-flush acordion-width"
          id="accordionFlushExample"
        >
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                How long does it take to make the technical visit?
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the .accordion-flush className. This is the first
                item's accordion body.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                What kind of materials do you work with?
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the .accordion-flush className. This is the second
                item's accordion body. Let's imagine this being filled with some
                actual content.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                How long does your warranty cover?
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the .accordion-flush className. This is the third
                item's accordion body. Nothing more exciting happening here in
                terms of content, but just filling up the space to make it look,
                at least at first glance, a bit more representative of how this
                would look in a real-world application.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingfourth">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapsefourth"
                aria-expanded="false"
                aria-controls="flush-collapsefourth"
              >
                What are the payment systems?
              </button>
            </h2>
            <div
              id="flush-collapsefourth"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingfourth"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the .accordion-flush className. This is the third
                item's accordion body. Nothing more exciting happening here in
                terms of content, but just filling up the space to make it look,
                at least at first glance, a bit more representative of how this
                would look in a real-world application.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingfifth">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapsefifth"
                aria-expanded="false"
                aria-controls="flush-collapsefifth"
              >
                Do you do corporate work?
              </button>
            </h2>
            <div
              id="flush-collapsefifth"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingfifth"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the .accordion-flush class. This is the third item's
                accordion body. Nothing more exciting happening here in terms of
                content, but just filling up the space to make it look, at least
                at first glance, a bit more representative of how this would
                look in a real-world application.
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Questions;
