import { Contact } from "@/core/domain/entities";
import { ContactListGateway } from "@/core/domain/gateways";

export class EditContactFromContactListUseCase {
  constructor(private contactListGateway: ContactListGateway) {}

  async execute(contact: Contact): Promise<void> {
    try {
      const contactList = await this.contactListGateway.get();
      contactList.edit(contact);
      await this.contactListGateway.save(contactList);
    } catch {
      throw new Error("Could not edit contact from contact list");
    }
  }
}
