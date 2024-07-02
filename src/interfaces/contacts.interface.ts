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
  update(data: Partial<Omit<Contacts, 'userId'>>): Promise<Contacts>;
  delete(data: Pick<Contacts, 'id'>): Promise<Contacts>;
  getAll(data: Pick<Contacts, 'userId'>): Promise<Contacts[] | []>;
}
