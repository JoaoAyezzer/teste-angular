import { Contact } from './contact';

export interface Person {
  id: string;
  name: string;
  cpf: string;
  dateBirth: Date;
  contacts: Contact[];
}
