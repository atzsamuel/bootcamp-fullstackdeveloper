import { combineReducers, createStore } from "redux";

// constants
const CHANGE_USER_EMAIL = "CHANGE_USER_EMAIL";
const ADD_PRODUCT = "ADD_PRODUCT";

// action creators for the user and cart reducers 
const changeUserEmail = (email) => ({
  type: CHANGE_USER_EMAIL,
  payload: { email }
});
const addProduct = (product) => ({
  type: ADD_PRODUCT,
  payload: { product }
});

// this is the initial state
const initialState = {
  user: {
    name: "Mark",
    email: "mark@facebook.com"
  },
  cart: {
    products: []
  }
};

// this is the reducer for only the user, 
//it takes in the state and the action and returns the new state based on the action type
const userReducer = (user = initialState.user, action) => {
  if (action.type === CHANGE_USER_EMAIL) {
    return {
      ...user,
      email: action.payload.email
    };
  }
  return user;
};

// this is the reducer for the cart
const cartReducer = (cart = initialState.cart, action) => {
  if (action.type === ADD_PRODUCT) {
    return {
      ...cart,
      products: [...cart.products, action.payload.product]
    };
  }
  return cart;
};

// For joining the reducers together 
//we use the combineReducers function from redux library
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer
});

// this is the store that we will use to store the state of the application

const store = createStore(rootReducer);
/* 
When you use the method createStore, it returns an object 
1. *getState* this method is used for to get the state of your application
2. *subscribe* this method is used for to subsbribing to the changes on our store for example store.subscribe(() => console.log("State changed!"))
3. *dispatch* this method is used for to dispatch the action to the reducer
4. *replaceReducer* this method is used for to replace the current root reducer function reference for example store.replaceReducer(newRootReducer);
*/


console.log(store.getState());
// { user: { name: 'Mark', email: 'mark@facebook.com' }, cart: { products: [] } }

// When you want to subscribe to the store, you need to pass a callback function to the subscribe function
store.dispatch(changeUserEmail("mark@instagram.com"));

console.log(store.getState());
// { user: { name: 'Mark', email: 'mark@instagram.com' }, cart: { products: [] } }