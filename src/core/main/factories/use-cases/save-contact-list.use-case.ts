import { SaveContactListUseCase } from "@/core/application/use-cases";
import { localStorageContactListGateway } from "../gateways";

export const saveContactListUseCase = new SaveContactListUseCase(
  localStorageContactListGateway
);