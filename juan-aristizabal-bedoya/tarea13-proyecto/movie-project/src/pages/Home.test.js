import Home from './Home';
import React from 'react';
import { screen, render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';



const render = component => rtlRender(

    <Provider store={store}>
            {component}
    </Provider>
)

describe('Search',()=>{
    test('should render component Home', () => {
        render (<Home/>)
        expect(screen.getByPlaceholderText('batman')).toBeInTheDocument();

     })
})