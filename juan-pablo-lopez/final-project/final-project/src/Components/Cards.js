import React from "react";
import Card from "./Card";
import { NavBar } from './NavBar'
import {Carrousel} from './Carrousel'
import { FooterPage } from "./FooterPage";
import image1 from '../Img/graphic.gif'
import image2 from '../Img/keyboard1.gif'
import image3 from '../Img/case.gif'
import image4 from '../Img/monitor.gif'
import image5 from '../Img/motherboard.gif'
import image6 from '../Img/laptop.gif'
import image7 from '../Img/storage.gif'
import image8 from '../Img/ram.gif'
import image9 from '../Img/fontpower.gif'


const cards = [
  {
    id: 1,
    title: "Graphics Cards",
    image: image1,
    url: "categories",
  },
  {
    id: 2,
    title: "Keyboards",
    image: image2,
    url: "categories",
  },
  {
    id: 3,
    title: "Computer Cases",
    image: image3,
    url: "categories",
  },
  {
    id: 4,
    title: "Monitors",
    image: image4,
    url: "categories",
  },
  {
    id: 5,
    title: "Motherboards",
    image: image5,
    url: "categories",
  },
  {
    id: 6,
    title: "Laptops",
    image: image6,
    url: "categories",
  },
  {
    id: 7,
    title: "Storage Units",
    image: image7,
    url: "categories",
  },
  {
    id: 8,
    title: "RAM",
    image: image8,
    url: "categories",
  },
  {
    id: 9,
    title: "Font Power",
    image: image9,
    url: "categories",
  },
];

export const Cards = () => {
  return (
    <>
    <NavBar ></NavBar>
    <Carrousel></Carrousel>
    <br></br>
    <main>
    <section className="container d-flex justify-content-center align-items-center h-100">
      <section className="row">
        {cards.map(({ title, image, url, id }) => (
          <section className="col-md-4" key={id} id="cards">
            <Card imageSource={image} title={title} url="/categories" /><br></br>
          </section>
        ))}
      </section>
    </section>
    </main>
    <FooterPage></FooterPage>
    </>
  );
  
}

export default Cards;