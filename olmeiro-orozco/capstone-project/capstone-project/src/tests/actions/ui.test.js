import { finishLoading, removeError, setError, startLoading } from "../../actions/ui";
import { types } from "../../types/types";

describe('Tests on ui actinos', () => {

  test('All actions should be created', () => { 

    const action = setError('Error application');

    expect( action ).toEqual({
      type: types.uiSetError,
      payload: 'Error application'
    });

    const actionRemoveError = removeError();
    const actionStartLoading = startLoading();
    const actionFinishLoading = finishLoading();
    
    expect( actionRemoveError ).toEqual({
      type: types.uiRemoveError
    });

    expect( actionStartLoading ).toEqual({
      type: types.uiStartLoading
    });

    expect( actionFinishLoading ).toEqual({
      type: types.uiFinishLoading
    });
  });
});