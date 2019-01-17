import * as actionTypes from "../actions/actionTypes";
import { updatedObject } from "../utility";

const initialState = {
  orders: [],
  loading: false,
  purchased: false
};

const purchaseInit = (state, action) => {
  return updatedObject(state, { purchased: false });
};

const purchaseBurgerStart = (state, action) => {
  return updatedObject(state, { loading: true });
};

const purchseBurgerSuccess = (state, action) => {
  const newOrder = {
    ...action.orderData,

    id: action.orderId
  };

  return updatedObject(state, {
    loading: false,
    purchased: true,
    orders: state.orders.concat(newOrder)
  });
};

const purchaseBurgerFail = (state, action) => {
  return updatedObject(state, { loading: false });
};

const fetchOrdersStart = (state, action) => {
  return updatedObject(state, { loading: true });
};

const fetchOrdersSuccess = (state, action) => {
  return updatedObject(state, { orders: action.orders, loading: false });
};

const fetchOrdersFail = (state, action) => {
  return updatedObject(state, { loading: false });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PURCHASE_INIT:
      return purchaseInit(state, action);
    case actionTypes.PURCHASE_BURGER_START:
      return purchaseBurgerStart(state, action);
    case actionTypes.PURCHASE_BURGER_SUCCESS:
      return purchseBurgerSuccess(state, action);
    case actionTypes.PURCHASE_BURGER_FAIL:
      return purchaseBurgerFail(state, action);
    case actionTypes.FETCH_ORDERS_START:
      return fetchOrdersStart(state, action);
    case actionTypes.FETCH_ORDERS_SUCCESS:
      return fetchOrdersSuccess(state, action);
    case actionTypes.FETCH_ORDERS_FAIL:
      return fetchOrdersFail(state, action);
    default:
      return state;
  }
};

export default reducer;
