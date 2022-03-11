import Home from './Home';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const store = mockStore({
  search: 'Residente',
  currentTrack: {
    album: {
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/ab67616d0000b273bf3d37f1fd6a7e2cb5fd1487',
          width: 640,
        },
      ],
    },
    uri: 'spotify:track:1q8NdCAQ9QUjpYiqzdd3mv',
  },
});

const wrapper = mount(
  <Provider store={store}>
    <Home />
  </Provider>
);

describe('Home component test', () => {
  test('Component matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
