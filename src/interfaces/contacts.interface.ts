export interface Contacts {
  id: string;
  name: string;
  email: string;
  phone: string;
  userId: string;
}

export interface ContactsCreate {
  name: string;
  email: string;
  phone: string;
  userId: string;
}






export interface IContactsRepository {
  create(data: ContactsCreate): Promise<Contacts>;
}