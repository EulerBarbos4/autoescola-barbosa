import React from "react";
import Hero from "../components/Hero";
import BgHighmayImage from "./assets/porsche.jpg";
import BgCarImage from "./assets/cars.jpg";

export default {
  title: "Hero",
  component: Hero,
};

export const usage = () => (
  <Hero title={"Ganhe sua liberade de ir e vir"} image={BgHighmayImage}>
    <p>Auto escola lider em aprovação</p>
  </Hero>
);

export const withList = () => (
  <Hero title={"Ganhe sua liberade de ir e vir"} image={BgCarImage}>
    <ul>
      <li>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry
      </li>
      <li>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry
      </li>
      <li>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry
      </li>
    </ul>
  </Hero>
);
