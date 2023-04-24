import { useAppContext } from "@/context/appContext";
import { Contact } from "@/core/domain/entities";
import { generateRandomPeople } from "@/helpers/generateRandomPeople";

export default function Header() {
  const {
    state: { contactList },
  } = useAppContext();

  const addContact = () => {
    const contact = new Contact(generateRandomPeople());
    contactList.add(contact);
  };

  const removeContact = () => {
    const contact = contactList.contacts[0];
    if (contact) {
      contactList.remove(contact);
    }
  };

  const editContact = () => {
    const contact = new Contact(generateRandomPeople());

    if (contactList.contacts[0]) {
      contact.id = contactList.contacts[0].id;
      contactList.edit(contact);
    }
  };

  return (
    <header className="w-full bg-primary p-10 rounded flex flex-col items-center justify-center gap-6">
      <div className="w-full flex items-center justify-between">
        <h1 className="text-white text-xl font-bold">Meus contatos</h1>
        <div className="flex items-center justify-center gap-4">
          <button onClick={addContact} className="group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 fill-white group-hover:fill-purple-500 duration-200"
            >
              <path
                fillRule="evenodd"
                d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          <button onClick={editContact} className="group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 fill-white group-hover:fill-purple-500 duration-200"
            >
              <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
            </svg>
          </button>

          <button onClick={removeContact} className="group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 fill-white group-hover:fill-purple-500 duration-200"
            >
              <path
                fillRule="evenodd"
                d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="w-full flex items-center justify-start py-3 px-6 gap-2 bg-[#24243D] rounded">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5 fill-white"
        >
          <path
            fillRule="evenodd"
            d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
            clipRule="evenodd"
          />
        </svg>

        <input
          type="text"
          className="w-full h-full bg-transparent text-xs text-neutral-200 active:outline-none focus:outline-none"
          placeholder="Busque por nome ou por dados de contato..."
        />
      </div>
    </header>
  );
}
