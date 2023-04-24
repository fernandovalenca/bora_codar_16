import { useAppContext } from "@/context/appContext";
import Badge from "./badge";
import Contact from "./contact";
import { useEffect, useRef } from "react";

export default function ContactListComponent() {
  const {
    state: { contactList },
  } = useAppContext();

  return (
    <div className="flex overflow-hidden px-10 pt-12 pb-5 bg-[#1A1924] h-screen">
      <div className="w-full gap-8 flex flex-col items-start justify-start overflow-y-scroll">
        {contactList.contacts.map((contact, index) => (
          <label
            key={contact.id}
            className="w-[99%] flex p-2 items-start border-2 border-transparent hover:border-violet-900 rounded-md justify-start gap-[52px]"
          >
            <Badge
              keyLetter={contact.name.slice(0, 1)}
              visible={
                contactList.contacts[index - 1]?.name.slice(0, 1) ===
                contact.name.slice(0, 1)
                  ? false
                  : true
              }
            />
            <Contact
              name={contact.name}
              phone={contact.phone}
              avatar_url={contact.avatar_url}
            />
          </label>
        ))}
      </div>
    </div>
  );
}
