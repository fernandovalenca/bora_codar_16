import { Contact } from "@/core/domain/entities";
import { ContactListGateway } from "@/core/domain/gateways";

export class AddContactIntoContactListUseCase {
  constructor(private contactListGateway: ContactListGateway) {}

  async execute(contact: Contact): Promise<void> {
    try {
      const contactList = await this.contactListGateway.get();
      contactList.add(contact);
      await this.contactListGateway.save(contactList);
    } catch {
      throw new Error("Could not add contact from contact list");
    }
  }
}
