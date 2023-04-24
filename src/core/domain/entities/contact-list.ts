import { Contact } from "./contact";
import { Observable } from "./observable";

type ContactListProps = {
  contacts: Contact[];
};

export class ContactList extends Observable {
  contactsList: Contact[] = [];

  constructor(private readonly props: ContactListProps) {
    super();
    this.contactsList = props.contacts;
  }

  add(contact: Contact): void {
    this.contactsList.push(contact);
    this.notify("add-contact", contact);
  }

  edit(contact: Contact): void {
    const index = this.contactsList.findIndex((c) => c.id === contact.id);

    if (index !== -1 && this.contactsList[index] !== contact) {
      this.contactsList[index] = contact;
      this.notify("edit-contact", contact);
    }
  }

  remove(contact: Contact): void {
    const index = this.contactsList.findIndex((c) => c.id === contact.id);

    if (index !== -1) {
      this.contactsList.splice(index, 1);
      this.notify("remove-contact", contact);
    }
  }

  public get contacts(): Contact[] {
    return this.contactsList.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();

      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
  }
}
