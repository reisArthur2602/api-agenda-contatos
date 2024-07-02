import { db } from '../database/prisma';
import {
  Contacts,
  ContactsCreate,
  IContactsRepository,
} from '../interfaces/contacts.interface';

class ContactRepositoryPrisma implements IContactsRepository {
  async create(data: ContactsCreate): Promise<Contacts> {
    return await db.contacts.create({ data });
  }

  async update(data: Partial<Omit<Contacts, 'userId'>>): Promise<Contacts> {
    return await db.contacts.update({
      where: { id: data.id },
      data: {
        email: data.email,
        name: data.name,
        phone: data.phone,
      },
    });
  }
}

export { ContactRepositoryPrisma };
