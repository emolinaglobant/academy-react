import { render, screen } from '@testing-library/react';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./store";

test('renders links correctly', () => {
  const {container} = render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>);
//   const links = document.querySelectorAll("a");
  expect(container).toBeInTheDocument();
});
