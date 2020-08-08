import Customer from "../../../types/Customer";

export const SET_CUSTOMER = '@form/set_customer';
export interface SetCustomer {
  type: typeof SET_CUSTOMER;
  payload: Customer | null
}

export type FormActionsType = SetCustomer