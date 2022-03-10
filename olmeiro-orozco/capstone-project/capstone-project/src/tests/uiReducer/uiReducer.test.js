import { uiReducer } from "../../reducers/uiReducers";
import { types } from "../../types/types";

describe('Tests on uiReducer', () => {

  test('Should set ui Error', ()=> {
    const initialState = {
      loading: false,
      msgError: null
    }

    const err= 'error app';

    const action = {
      type: types.uiSetError,
      payload: err,
    };

    const state = uiReducer(initialState, action);
    expect( state ).toEqual(
      {
        loading: false,
        msgError: 'error app'
      }
    )
  });
 
  test('Should remove ui Error', ()=> {
    const initialState = {
      loading: false,
      msgError: null
    }

    const err= 'error app';

    const action = {
      type: types.uiRemoveError
    };

    const state = uiReducer(initialState, action);
    expect( state ).toEqual(
      {
        loading: false,
        msgError: null
      }
    )
  });


  test('Should start loading', ()=> {
      const initialState = {
        loading: false,
        msgError: null
      }

      const err= 'error app';

      const action = {
        type: types.uiStartLoading
      };

      const state = uiReducer(initialState, action);
      expect( state ).toEqual(
        {
          loading: true,
          msgError: null
        }
      )
    });
 
    test('Should finish loading', ()=> {
      const initialState = {
        loading: false,
        msgError: null
      }

      const err= 'error app';

      const action = {
        type: types.uiFinishLoading
      };

      const state = uiReducer(initialState, action);
      expect( state ).toEqual(
        {
          loading: false,
          msgError: null
        }
      )
    });
    
    test('Should return default state', ()=> {
      const initialState = {
        loading: false,
        msgError: null
      }

      const err= 'error app';

      const action = {
        type: types.uiActionWeird
      };

      const state = uiReducer(initialState, action);
      expect( state ).toEqual(initialState);
    });
})
