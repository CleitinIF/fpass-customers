//Lib para manter o estado imutável
import produce from 'immer';
import { CustomerActionsType, ADD_CUSTOMER, REMOVE_CUSTOMER, ALTER_CUSTOMER, SHOW_CUSTOMERS } from './types';
import Customer from '../../../types/Customer';

const INITIAL_STATE = {
  total: [] as Customer[],
  show: [] as Customer[],
  page: 1
};

export default function customers(state = INITIAL_STATE, action: CustomerActionsType) {
  return produce(state, (draft) => {
    switch (action.type) {
      case ADD_CUSTOMER: {
        draft.total.unshift(
          action.payload,
        );
        break;
      }
      case REMOVE_CUSTOMER: {
        const newArrayOfCustomers = draft.total.filter(
          (customer: Customer) => customer.id !== action.payload
        )
        draft.total = newArrayOfCustomers;
        break;
      }
      case ALTER_CUSTOMER: {
        const customerIndex = draft.total.findIndex(
          (customer: Customer) => customer.id === action.payload.id
        )
        draft.total[customerIndex] = {
          ...action.payload
        }
        break;
      }
      case SHOW_CUSTOMERS: {
        const page = action.payload?.page || state.page;
        const items = (page * 5);

        draft.show = draft.total.slice(items-5, items || 5);
        draft.page = page;
        break;
      }
    }
  })
}