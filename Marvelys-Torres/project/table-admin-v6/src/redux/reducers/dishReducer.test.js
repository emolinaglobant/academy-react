import { getTotalAction, removeSelectedDishAction, resetAllAction, saveAtOrdersAction, selectWaiterAction, setDishesAction } from "../actions/dishActions";
import { dishReducer } from "./dishReducer";

describe('testing redux',()=>{
    const initialState = {
        dishes: [],
        selectedDishes: [],
        selectedWaiter: null,
        total: 0,
        allOrders: []
      }
    test('should render correct redux operation', () => {
        
        const waiterName = 'Marvelys'
        
        expect(dishReducer(initialState, selectWaiterAction(waiterName))).toEqual({
            ...initialState,
            selectedWaiter: waiterName,
        })
    });

    test('should set the correct dishes options', () => {
        
        const dishesobj = [
            {id:1, name:'Lomo', price: 49},
            {id:2, name:'Seco', price: 28},
        ]
        
        expect(dishReducer(initialState, setDishesAction(dishesobj))).toEqual({
            ...initialState,
            dishes: dishesobj,
        })
        const newState = dishReducer(initialState, setDishesAction(dishesobj))
        expect(newState.dishes).toHaveLength(2)
    });

    test('should reset the state correctly', () => {

        const initialState = {
            dishes: [{id:1, name:'Pollo a brasa', price: 25}],
            selectedDishes: [],
            selectedWaiter: 'Pablo',
            total: 1000,
            allOrders: []
          }   
       const newState = dishReducer(initialState, resetAllAction())
        expect(newState.selectedWaiter).toBe(null)
        expect(newState.total).toBe(0)
    });

    test('should save orders correctly', () => {

        const initialState = {
            dishes: [],
            selectedDishes: [],
            selectedWaiter: 'Pablo',
            total: 1000,
            allOrders: []
          }   

       const newState = dishReducer(initialState, saveAtOrdersAction({
           id:1, total:200, selectedWaiter:'Marve'
       }))
        expect(newState.allOrders).toEqual([{
            id:1, total:200, selectedWaiter:'Marve'
        }])
        expect(newState.allOrders).toHaveLength(1)
    });

    test('should get the correct total', () => {

        const initialState = {
            dishes: [],
            selectedDishes: [{id:1, price:5, quantity:1},{id:2, price: 10, quantity:2}],
            selectedWaiter: 'Pablo',
            total: 0,
            allOrders: []
          }   
       const newState = dishReducer(initialState, getTotalAction())
        expect(newState.total).toBe(25)
    });

    test('should remove a dish correctly', () => {

        const initialState = {
            dishes: [],
            selectedDishes: [{id:1, price:5, quantity:1},{id:2, price: 10, quantity:2}],
            selectedWaiter: 'Pablo',
            total: 0,
            allOrders: []
          }   
       const newState = dishReducer(initialState, removeSelectedDishAction({id:1, price:5, quantity:1}))
        expect(newState.selectedDishes).toEqual([{id:2, price: 10, quantity:2}])
        expect(newState.selectedDishes).toHaveLength(1)
    });

    test('should get the default state when passing random action', () => {
       const newState = dishReducer(initialState, {type: 'FUCK_MARVELYS'})
        expect(newState).toBe(initialState)
    });
    
})