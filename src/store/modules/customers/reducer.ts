//Lib para manter o estado imutável
import produce from 'immer';
import { SchedulingActionsType, ADD_CUSTOMER, REMOVE_CUSTOMER, ALTER_CUSTOMER } from './types';
import Customer from '../../../types/Customer';

const INITIAL_STATE: Customer[] = [];

export default function customers(state = INITIAL_STATE, action: SchedulingActionsType) {
  return produce(state, (draft) => {
    switch (action.type) {
      case ADD_CUSTOMER: {
        draft.push(action.payload);
        break;
      }
      case REMOVE_CUSTOMER: {
        const newArrayOfCustomers = draft.filter(
          (customer: Customer) => customer.id !== action.payload
        )
        draft = newArrayOfCustomers;
        break;
      }
      case ALTER_CUSTOMER: {
        const customerIndex = draft.findIndex(
          (customer: Customer) => customer.id === action.payload.id
        )
        draft[customerIndex] = {
          ...action.payload
        }
      }
    }
  })
}