type Person = {
  name: string;
  phone: string;
  avatar_url: string;
};

export const generateRandomPeople = (): Person => {
  const names = [
    "Alice",
    "Bob",
    "Charlie",
    "Dave",
    "Eve",
    "Frank",
    "Grace",
    "Hank",
    "Ivy",
    "Jack",
  ];

  const surnames = [
    "Smith",
    "Johnson",
    "Williams",
    "Jones",
    "Brown",
    "Garcia",
    "Miller",
    "Davis",
    "Rodriguez",
    "Martinez",
  ];

  const phones = [
    "+55 (99) 92346-7890",
    "+55 (99) 92346-7890",
    "+55 (99) 92346-7890",
    "+55 (99) 92346-7890",
    "+55 (99) 92346-7890",
  ];

  const avatarUrls = [
    "https://example.com/avatar1.png",
    "https://example.com/avatar2.png",
    "https://example.com/avatar3.png",
    "https://example.com/avatar4.png",
    "https://example.com/avatar5.png",
  ];

  let randomPeople: Person;

  const randomName = names[Math.floor(Math.random() * names.length)];
  const randomSurname = surnames[Math.floor(Math.random() * surnames.length)];
  const randomPhone = phones[Math.floor(Math.random() * phones.length)];
  const randomAvatarUrl =
    avatarUrls[Math.floor(Math.random() * avatarUrls.length)];

  const person: Person = {
    name: `${randomName} ${randomSurname}`,
    phone: randomPhone,
    avatar_url: randomAvatarUrl,
  };

  randomPeople = person;

  return randomPeople;
};
