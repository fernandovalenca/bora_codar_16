import { GetContactListUseCase } from "@/core/application/use-cases";
import { localStorageContactListGateway } from "../gateways";

export const getContactListUseCase = new GetContactListUseCase(
  localStorageContactListGateway
);