import { RequestCustomersPayload, RequestCustomers, REQUEST_CUSTOMERS, AddCustomer, ADD_CUSTOMER, RemoveCustomer, REMOVE_CUSTOMER, AlterCustomer, ALTER_CUSTOMER } from "./types";
import Customer from "../../../types/Customer";

export function requestCustomers(
  payload: RequestCustomersPayload
): RequestCustomers {
  return {
    type: REQUEST_CUSTOMERS,
    payload
  }
}

export function addCustomer(payload: Customer): AddCustomer {
  return {
    type: ADD_CUSTOMER,
    payload
  }
}

export function removeCustomer(payload: string): RemoveCustomer {
  return {
    type: REMOVE_CUSTOMER,
    payload
  }
}

export function alterCustomer(payload: Customer): AlterCustomer {
  return {
    type: ALTER_CUSTOMER,
    payload
  }
}