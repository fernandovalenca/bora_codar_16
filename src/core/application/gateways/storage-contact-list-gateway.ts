import { ContactListGateway } from "@/core/domain/gateways";
import { Storage } from "../protocols/storage";
import { ContactList } from "@/core/domain/entities";

export class StorageContactListGateway implements ContactListGateway {
  private readonly KEY_CONTACT_LIST_STORAGE = "next-bora-codar/contact-list";

  constructor(private storage: Storage) {}

  async get(): Promise<ContactList> {
    try {
      const { contactsList } = await this.storage.get<ContactList>(
        this.KEY_CONTACT_LIST_STORAGE
      );

      if (!contactsList) {
        return new ContactList({ contacts: [] });
      }

      return new ContactList({ contacts: contactsList });
    } catch {
      throw new Error("Could not get contact list");
    }
  }
  async save(contactList: ContactList): Promise<void> {
    try {
      await this.storage.set<ContactList>(
        this.KEY_CONTACT_LIST_STORAGE,
        contactList
      );
    } catch {
      throw new Error("Could not save contact list");
    }
  }
}
