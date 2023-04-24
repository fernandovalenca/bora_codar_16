import { ContactList } from "@/core/domain/entities";
import { ContactListGateway } from "@/core/domain/gateways";

export class GetContactListUseCase {
  constructor(private contactListGateway: ContactListGateway) {}

  async execute(): Promise<ContactList> {
    return await this.contactListGateway.get();
  }
}
