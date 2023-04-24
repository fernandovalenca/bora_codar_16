import ContactListComponent from "@/components/contact-list";
import HeaderComponent from "@/components/header";

export default function Home() {
  return (
    <main className="flex items-center justify-center">
      <div className="w-[430px] h-screen flex flex-col">
        <HeaderComponent />
        <ContactListComponent />
      </div>
    </main>
  );
}
