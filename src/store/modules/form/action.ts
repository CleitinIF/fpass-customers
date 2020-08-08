import Customer from "../../../types/Customer";
import { SetCustomer, SET_CUSTOMER } from "./types";

export function setCustomer(payload: Customer): SetCustomer {
  return {
    type: SET_CUSTOMER,
    payload
  }
}
