import { Contact, ContactList, Observer } from "@/core/domain/entities";
import {
  addContactIntoContactListUseCase,
  editContactFromContactListUseCase,
  getContactListUseCase,
  removeContactFromContactListUseCase,
} from "@/core/main/factories/use-cases";
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type SetStateProps = {
  contactList: ContactList;
};

type ContactListContextStateProps = {
  state: {
    contactList: ContactList;
  };
};

const INITIAL_STATE: ContactListContextStateProps = {
  state: {
    contactList: new ContactList({ contacts: [] }),
  },
};

export const ContactListContext = createContext(INITIAL_STATE);

const ContactListProvider = ({ children }: PropsWithChildren) => {
  const [state, setContext] = useState<SetStateProps>(INITIAL_STATE.state);

  const registerObservers = async () => {
    const contactList = await getContactListUseCase.execute();

    contactList.register(
      new Observer("add-contact", async (contact: Contact) => {
        await addContactIntoContactListUseCase.execute(contact);

        setContext((prevState) => ({
          ...prevState,
          contactList: contactList,
        }));
      })
    );

    contactList.register(
      new Observer("remove-contact", async (contact: Contact) => {
        await removeContactFromContactListUseCase.execute(contact);

        setContext((prevState) => ({
          ...prevState,
          contactList: contactList,
        }));
      })
    );

    contactList.register(
      new Observer("edit-contact", async (contact: Contact) => {
        await editContactFromContactListUseCase.execute(contact);

        setContext((prevState) => ({
          ...prevState,
          contactList: contactList,
        }));
      })
    );

    setContext({ contactList });
  };

  useEffect(() => {
    registerObservers();
  }, []);

  return (
    <ContactListContext.Provider value={{ state }}>
      {children}
    </ContactListContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(ContactListContext);

  if (!context) throw new Error("You have to use CartContext in your App");

  return context;
};

export default ContactListProvider;
