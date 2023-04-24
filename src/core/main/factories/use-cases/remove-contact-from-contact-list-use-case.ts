import { RemoveContactFromContactListUseCase } from "@/core/application/use-cases";
import { localStorageContactListGateway } from "../gateways";

export const removeContactFromContactListUseCase =
  new RemoveContactFromContactListUseCase(localStorageContactListGateway);
