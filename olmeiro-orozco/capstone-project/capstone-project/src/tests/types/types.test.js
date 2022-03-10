import { types } from "../../types/types"

describe('Testing on types', () => {

  test('should have this types', () => { 
    expect( types ).toEqual(
      {
        login: '[Auth] Login',
        logout: '[Auth] Logout',
      
        uiSetError: '[UI] Set Error',
        uiRemoveError: '[UI] Remove Error',
        uiStartLoading: '[UI] Start loading',
        uiFinishLoading: '[UI] Finish loading',
      
        startRound: '[Game] Start Round',
        gameStoreQuestions: '[Game] Store Questions',
        gameIncreasePrize: '[Game] Increase Prize',
        gameAddRound: '[Game] Add Round',
        gameChangeRound: '[Game] Change Round',
        gameReset: '[Game] Reset',
      }
    )
   });
})