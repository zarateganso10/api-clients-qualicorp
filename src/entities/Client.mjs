import { uuid } from "uuidv4";

export class Client {
  constructor({name, email, phone, cpf}) {
    this.id = uuid();
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.cpf = cpf;
  }
}