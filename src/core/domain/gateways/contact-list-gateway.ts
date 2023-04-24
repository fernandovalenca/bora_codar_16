import { ContactList } from "@/core/domain/entities";

export interface ContactListGateway {
  get(): Promise<ContactList>;
  save(contactList: ContactList): Promise<void>;
}
