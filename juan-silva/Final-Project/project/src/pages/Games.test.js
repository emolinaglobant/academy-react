import React from "react";
import { shallow, configure } from "enzyme";
import Games from "./Games";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
configure({ adapter: new Adapter() });

describe("Games", () => {
 it("renders correctly", () => {
   shallow(<Games />);
 });
 it("should show any pokemon name", () => {
    const wrapper = shallow(<Games />);
    wrapper.find("button").simulate("click");
    const text = wrapper.find('span').text().trim();
    expect(text).not.toBeUndefined()
  });
  it("should show any pokemon image according to name", () => {
    const wrapper = shallow(<Games />);
    wrapper.find("button").simulate("click");
    const picture = wrapper.find('img')
    expect(picture).toBeDefined()
  });
});