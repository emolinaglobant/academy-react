import React from "react";
import { shallow, configure } from "enzyme";
import Pokemon from "./Pokemon";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
configure({ adapter: new Adapter() });

describe("Pokemon Test", () => {
 it("renders correctly", () => {
   shallow(<Pokemon />);
 });

 it("should contain state name in title", () => {
    const wrapper = shallow(<Pokemon name ={'felipe'}/>);
    const text = wrapper.find('h1').at(0).text().trim();
    expect(text).toBe('felipe, in this adventure you can find these pokemons');
  });
});