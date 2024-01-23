export const addItemHandler = (item) => {
  // console.log(item)
  // return (dispatch) => {
  //   dispatch({
  return  { type: "ADD_ITEM",
      payload: {
        item: item
      }}
  //   });
  // };
};

export const RemoveItemHandler = (id) => {
  // console.log(id)
  // return (dispatch) => {
  //   dispatch({
   return {   type: "REMOVE_ITEM",
      payload: {
        id: id,
      }
    }
  //   });
  // };
};

export const clearCartHandler = () => {
  return (dispatch) => {
    dispatch({
        type:'CLEAR_CART'
    })
  };
};
