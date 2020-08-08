import produce from "immer";

import Customer from "../../../types/Customer";
import { FormActionsType, SET_CUSTOMER } from "./types";

const INITIAL_STATE: Customer = {
  address: '',
  birthday: '',
  cellphone: '',
  document: '',
  email: '',
  name: '',
  id: '',
  observation: ''
};

export default function form(state = INITIAL_STATE, action: FormActionsType) {
  return produce(state, (draft) => {
    switch (action.type) {
      case SET_CUSTOMER: {
        if(!action.payload) {
          draft.address = '';
          draft.birthday = '';
          draft.cellphone = '';
          draft.document = '';
          draft.email = '';
          draft.id = '';
          draft.name = '';
          draft.observation = '';
        } else {
          draft.address = action.payload.address;
          draft.birthday = action.payload.birthday;
          draft.cellphone = action.payload.cellphone;
          draft.document = action.payload.document;
          draft.email = action.payload.email;
          draft.id = action.payload.id;
          draft.name = action.payload.name;
          draft.observation = action.payload.observation;
        }
        break;
      }
    }
  })
}