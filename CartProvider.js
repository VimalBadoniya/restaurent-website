import React, { useReducer } from "react";
import CartContext from "./cart-context";

const initialState = {
  items: [],
  totalAmount: 0,
  quantity: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const priceNumber = +action.item.price;

    const updatedTotalAmount =
      state.totalAmount + priceNumber * action.item.quantity;
    const quantityNumber = +action.item.quantity;
    const updatedQuantity = state.quantity + quantityNumber;

    const existingItemIndex = state.items.findIndex((item) => {
      return item.id === action.item.id;
    });
    const existingItem = state.items[existingItemIndex];

    if (existingItem) {
      //console.log(typeof(existingItem.quantity))
      const updatedItem = {
        ...existingItem,
        quantity: +existingItem.quantity + quantityNumber,
      };
      const updatedAllItems = [...state.items];
      updatedAllItems[existingItemIndex] = updatedItem;

      return {
        items: updatedAllItems,
        totalAmount: updatedTotalAmount,
        quantity: updatedQuantity,
      };
    }

    const updatedItems = state.items.concat(action.item);

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
      quantity: updatedQuantity,
    };
  }
  if (action.type === "REMOVE") {
    const existingItemIndex = state.items.findIndex((item) => {
      return item.id === action.id;
    });
    const existingItem = state.items[existingItemIndex];

    const updatedTotalAmount = state.totalAmount - existingItem.price;
    const updatedQuantity = state.quantity - 1;
    let updatedAllItems;
    if (+existingItem.quantity === 1) {
     // console.log("1");
      updatedAllItems = state.items.filter((item) => {
        return item.id !== action.id;
      });
    } else {
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity - 1,
      };
      updatedAllItems = [...state.items];
      updatedAllItems[existingItemIndex] = updatedItem;
    }

    return {
      items: updatedAllItems,
      totalAmount: updatedTotalAmount,
      quantity: updatedQuantity,
    };
  }

  if (action.type === "ONE") {
    const existingItemIndex = state.items.findIndex((item)=>{return item.id===action.item.id});
    const existingItem = state.items[existingItemIndex];
    const updatedItem = {...existingItem , quantity : existingItem.quantity + 1};
    const updatedAllItems = [...state.items]
    updatedAllItems[existingItemIndex] = updatedItem ; 
    const updatedQuantity = state.quantity + 1 ;
    const updatedTotalAmount = state.totalAmount + +action.item.price

    return {
      items : updatedAllItems ,
      quantity : updatedQuantity ,
      totalAmount : updatedTotalAmount
    }

  }
  return initialState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, initialState);

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const addOneItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ONE", item: item });
  };

  const contextData = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    quantity: cartState.quantity,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    addOneItem: addOneItemToCartHandler,
  };
  return (
    <CartContext.Provider value={contextData}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
