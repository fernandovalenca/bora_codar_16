import { ContactList } from "@/core/domain/entities";
import { ContactListGateway } from "@/core/domain/gateways";


export class SaveContactListUseCase {
  constructor(private contactListGateway: ContactListGateway) {}

  async execute(contractList: ContactList): Promise<void> {
    return await this.contactListGateway.save(contractList);
  }
}
