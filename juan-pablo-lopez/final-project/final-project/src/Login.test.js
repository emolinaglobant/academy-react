import React from 'react';
import { shallow } from 'enzyme';
import { Login } from './Components/Login'
import { signInWithEmailAndPassword } from './Context/AuthContext'
import {isAuthenticated} from "firebase/app";
import { Home } from './Components/Home'

// it('should render span content', () => {
//     const wrapper = shallow(<Login/>);
//     const span = wrapper.find('span');
//     const result = span.text();

//     expect(result).toBe("Don't have an account? Signup");
// });

// test('signInWithEmailAndPassword should throw error with wrong credential', async () => {
//     let error = '';
//     try {
//         await signInWithEmailAndPassword('unit-testing@testing.com', "a");
    
//     } catch(err) {
//         error = err.toString();
//     }

//     expect(error).toEquals(
//         'Error: the password is invalid or the user does not have a password'
//     );
// });

// test('signOutFirebase should work', async () => {
//     await signInWithEmailAndPassword('admin@gmail.com', 'admin123');
//     expect(isAuthenticated()).toBe(true);

// });
it('should render correctly with no props', () => {
    const component = shallow(<Home/>);
    
    expect(component).toMatchSnapshot();
  });