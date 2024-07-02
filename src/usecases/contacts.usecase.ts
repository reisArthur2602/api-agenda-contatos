import {
  Contacts,
  ContactsCreate,
  IContactsRepository,
} from '../interfaces/contacts.interface';
import { ContactRepositoryPrisma } from '../repositories/contacts.repositories';

class ContactsUseCase {
  private contactsRepository: IContactsRepository;
  constructor() {
    this.contactsRepository = new ContactRepositoryPrisma();
  }

  async create(data: ContactsCreate): Promise<Contacts> {
    return await this.contactsRepository.create(data);
  }

  async update(data: Partial<Omit<Contacts, 'userId'>>): Promise<Contacts> {
    return await this.contactsRepository.update(data);
  }
}

export { ContactsUseCase };
