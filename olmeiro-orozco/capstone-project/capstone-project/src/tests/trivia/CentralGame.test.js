import { shallow } from "enzyme"
import { CentralGame } from "../../components/trivia/CentralGame"

describe('Test component CentralGame', () => {
  test('should render component correctly', () => { 
    const wrapper = shallow(<CentralGame />);
    expect(wrapper).toMatchSnapshot();
   })
})