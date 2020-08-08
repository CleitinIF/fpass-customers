import Customer from "../../../types/Customer";

export const REQUEST_CUSTOMERS = '@customers/request_customers';
export interface RequestCustomersPayload {
  page: number;
  filter?: string;
}
export interface RequestCustomers {
  type: typeof REQUEST_CUSTOMERS;
  payload: RequestCustomersPayload
}

export const ADD_CUSTOMER = '@customers/add_customer';
export interface AddCustomer {
  type: typeof ADD_CUSTOMER;
  payload: Customer;
}

export const ALTER_CUSTOMER = '@customers/alter_customer';
export interface AlterCustomer {
  type: typeof ALTER_CUSTOMER;
  payload: Customer;
}

export const REMOVE_CUSTOMER = '@customers/remove_customer';
export interface RemoveCustomer {
  type: typeof REMOVE_CUSTOMER;
  payload: string;
}

export type SchedulingActionsType = 
  RequestCustomers | 
  AddCustomer | 
  AlterCustomer | 
  RemoveCustomer