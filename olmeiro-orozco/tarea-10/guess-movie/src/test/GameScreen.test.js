import React from "react";
import '@testing-library/jest-dom'

import { shallow } from "enzyme";
import { GameScreen } from '../GameScreen';

describe('Tests component GameScreen', () => { 

 const lives= 3;
 const points= 0;
 const numberQuestion= 0;


  test("should render component correctly", () => {
    const wrapper = shallow(
      <GameScreen lives={lives} points={points} question={numberQuestion} />
    );
    expect(wrapper).toMatchSnapshot();
  });
 })
