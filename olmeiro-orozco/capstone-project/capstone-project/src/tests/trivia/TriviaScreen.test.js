const { shallow } = require("enzyme");
const { TriviaScreen } = require("../../components/trivia/TriviaScreen");
import '@testing-library/jest-dom';

describe('Tests component <TriviaScreen />', () => {

  test('should render component correctly', () => { 
    const wrapper = shallow(<TriviaScreen />);

    expect(wrapper).toMatchSnapshot();
   })
})