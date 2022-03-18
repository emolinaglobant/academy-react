import React from "react";
import { simulate,mount,shallow, configure } from "enzyme";
import Home from "./Home";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
configure({ adapter: new Adapter() });

describe("Home Test", () => {
 it("renders correctly", () => {
   shallow(<Home />);
 });

 it("includes 3 li", () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find("li").length).toEqual(3);
  });
  it("should update state on click", () => {
    const setPokemon = jest.fn();
    const wrapper = mount(<Home setPokemon={setPokemon}/>);
    const handleClick = jest.spyOn(React, "useState");
    handleClick.mockImplementation(pokemon => [pokemon, setPokemon]);
    wrapper.find("a").at(0).simulate("click");
    const text = wrapper.find('#last').text().trim();
    expect(text).toBe('Your adventure starts with:');
  });
  it("should update state name in h2", () => {
    const wrapper = shallow(<Home name ={'juan'}/>);
    const text = wrapper.find('h2').text().trim();
    expect(text).toBe('Hello juan');
  });
  it("should update state name in span 1", () => {
    const wrapper = shallow(<Home name ={'juan'}/>);
    const text = wrapper.find('span').at(0).text().trim();
    expect(text).toBe('Now, juan, which Pokémon do you want?');
  });
  it("should update state name in span 2", () => {
    const wrapper = shallow(<Home pokemon ={'Bulbasur'}/>);
    const text = wrapper.find('span').at(1).text().trim();
    expect(text).toBe('Your adventure starts with: Bulbasur');
  });

});