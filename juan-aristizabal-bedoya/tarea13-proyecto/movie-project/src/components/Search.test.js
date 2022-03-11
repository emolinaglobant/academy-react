import Search from './Search';
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
    test('should render component Search', () => {
        render (<Search/>)
        expect(screen.getByPlaceholderText('batman')).toBeInTheDocument();

     })
})




