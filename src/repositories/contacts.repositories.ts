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
}

export { ContactRepositoryPrisma };
