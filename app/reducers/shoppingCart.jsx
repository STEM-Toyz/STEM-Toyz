import axios from 'axios';

const ADD_ITEMS = 'ADD_ITEMS';

export const add = item => ({
  type: ADD_ITEMS, item
})

const REMOVE_ITEMS = "REMOVE_ITEMS";

export const remove = item => ({
  type: REMOVE_ITEMS, item
})


const itemReducer = (state = [], action) => {
  switch(action.type){
    case ADD_ITEMS:
      return action.item;
  }
  return state;
}



