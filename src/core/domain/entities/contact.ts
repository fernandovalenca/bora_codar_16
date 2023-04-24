type ContactProps = {
  name: string;
  phone: string;
  avatar_url: string;
};

export class Contact {
  id: string;
  name: string;
  phone: string;
  avatar_url: string;

  constructor(private readonly props: ContactProps) {
    this.id = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0;
      const v = c === "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
    this.name = props.name;
    this.phone = props.phone;
    this.avatar_url = props.avatar_url;
  }
}
