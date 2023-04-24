import Avatar from "./avatar";

type ContactProps = {
  name: string;
  avatar_url: string;
  phone: string;
};

export default function Contact({ name, avatar_url, phone }: ContactProps) {
  return (
    <div className="flex gap-x-4">
      <Avatar src={avatar_url} />
      <div className="min-w-0 flex-auto">
        <p className="text-sm font-semibold leading-6 text-white">{name}</p>
        <p className="mt-1 truncate text-xs leading-5 text-gray-500">{phone}</p>
      </div>
    </div>
  );
}
