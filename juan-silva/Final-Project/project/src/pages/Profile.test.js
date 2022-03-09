import { shallow, configure } from "enzyme";
import Profile from "./Profile";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
configure({ adapter: new Adapter() });

describe("Profile Test", () => {
 it("renders correctly", () => {
   shallow(<Profile />);
 });

 it("includes 5 input", () => {
    const wrapper = shallow(<Profile />);
    expect(wrapper.find("input").length).toEqual(5);
  });
});