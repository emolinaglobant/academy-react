import React from "react";
import carrousel1 from "../Img/carrousel1.jpg"
import carrousel2 from "../Img/carrousel2.jpg"
import carrousel3 from "../Img/carrousel3.jpg"

import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption,
} from "mdb-react-ui-kit";

export const Carrousel = () => {
  return (
    <MDBCarousel id="carrousel">
      <MDBCarouselInner>
        <MDBCarouselItem className="active">
          <MDBCarouselElement
            src={carrousel1}
            alt="GIGABYTE MOTHERBOARDS"
          />
          <MDBCarouselCaption>
            <h5>GIGABYTE</h5>
            <p>GIGABYTE Ultra Durable™ motherboards bring together a unique combination of features and technologies that offer users the absolute power</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem>
          <MDBCarouselElement
            src={carrousel2}
            alt="RAM"
          />
          <MDBCarouselCaption>
            <h5>RAM</h5>
            <p>Get the best deals on DDR4 SDRAM Computer RAM and find everything you'll need to improve your home office setup.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem>
          <MDBCarouselElement
            src={carrousel3}
            alt="..."
          />
          <MDBCarouselCaption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
  );
};
