import { ActionTypes } from "../constants/actionTypes";

const initialState = {
  dishes: [],
  selectedDishes: [],
  selectedWaiter: null,
  total: 0,
  allOrders: []
};

export const dishReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_DISHES:
      return { ...state, dishes: payload };
    case ActionTypes.SAVE_AT_ORDERS:
      return { ...state, allOrders: [...state.allOrders, payload] }
    case ActionTypes.SELECT_DISH:
      return {
        ...state,
        selectedDishes: !state.selectedDishes.find(
          (dish) => dish.id === payload.id
        )
          ? [...state.selectedDishes, payload]
          : state.selectedDishes,
      };
    case ActionTypes.REMOVE_SELECTED_DISH:
      return {
        ...state,
        selectedDishes: state.selectedDishes.filter(
          (dish) => dish.id !== payload.id
        ),
      };
    case ActionTypes.INCREMENT_DISH_BY_ONE:
      return {
        ...state,
        selectedDishes: state.selectedDishes.map((dish) => {
          if (dish.id === payload) {
            return { ...dish, quantity: dish.quantity + 1 };
          }
          return dish;
        }),
      };
    case ActionTypes.DECREMENT_DISH_BY_ONE:
      return {
        ...state,
        selectedDishes: state.selectedDishes.map((dish) => {
          if (dish.id === payload) {
            return { ...dish, quantity: dish.quantity - 1 };
          }
          return dish;
        }),
      };
    case ActionTypes.SELECT_WAITER:
      return { ...state, selectedWaiter: payload };
    case ActionTypes.RESET_ALL:
      return {
        ...state,
        dishes: [
          {
            id: 0,
            name: "papa con huevo",
            price: 9.75,
          },
          {
            id: 1,
            name: "arroz con pollo",
            price: 10.75,
          },
          {
            id: 2,
            name: "ensalada",
            price: 11.75,
          },
          {
            id: 3,
            name: "sopa",
            price: 9.75,
          },
          {
            id: 4,
            name: "entradita",
            price: 9.75,
          },
        ],
        selectedDishes: [],
        selectedWaiter: null,
        total: 0,
      };
    case ActionTypes.GET_TOTAL:
      return {
        ...state,
        total: state.selectedDishes.reduce(
          (acumulator, dish) => acumulator + dish.price * dish.quantity,
          0
        ),
      };
    default:
      return state;
  }
};
