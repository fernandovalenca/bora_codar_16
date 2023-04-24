import { StorageContactListGateway } from "@/core/application/gateways/storage-contact-list-gateway";
import { localStorage } from "@/core/main/factories/protocols/storage";

export const localStorageContactListGateway = new StorageContactListGateway(
  localStorage
);
