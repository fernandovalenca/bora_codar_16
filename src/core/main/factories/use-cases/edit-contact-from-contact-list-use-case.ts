import { EditContactFromContactListUseCase } from "@/core/application/use-cases";
import { localStorageContactListGateway } from "../gateways";

export const editContactFromContactListUseCase =
  new EditContactFromContactListUseCase(localStorageContactListGateway);
