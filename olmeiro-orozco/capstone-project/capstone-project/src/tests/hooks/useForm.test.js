import { useForm } from "../../hooks/useForm"
import { renderHook } from '@testing-library/react-hooks';
import { act } from "react-dom/test-utils";

describe('Test hook useForm', () => {
  const init = {
    name: 'testingHook',
    email: 'test@gmail.com'
  };

  test('Should return a default form', () => { 
    const { result } = renderHook( () => useForm(init));
    const [ formValues, handleInputChange, reset ] = result.current;

      expect( formValues ).toEqual( init );
      expect( typeof handleInputChange ).toBe( 'function' );
      expect( typeof reset ).toBe( 'function' );   
   });

   test('should change value form', () => { 
    const { result } = renderHook( () => useForm(init));
    const [ , handleInputChange ] = result.current;

    act( () => {
      handleInputChange({
        target: {
          name: 'name',
          value: 'testingOne'
        }
      })
    })
    const [ formValues ] = result.current;
    expect(formValues).toEqual({...init, name: 'testingOne'});

  });

  test('should reset form', () => { 
    const { result } = renderHook( () => useForm(init));
    const [ , handleInputChange, reset ] = result.current;

    act( () => {
      handleInputChange({
        target: {
          name: 'name',
          value: 'testingOne'
        }
      });
      reset();
    })
    const [ formValues ] = result.current;
    expect(formValues).toEqual({...init });
   });
})