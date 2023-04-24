import { AddContactIntoContactListUseCase } from "@/core/application/use-cases";
import { localStorageContactListGateway } from "../gateways";

export const addContactIntoContactListUseCase =
  new AddContactIntoContactListUseCase(localStorageContactListGateway);
