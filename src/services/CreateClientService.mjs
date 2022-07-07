import { Client } from "../entities/Client.mjs";
import { ClientRepository } from "../repositories/ClientRepository.mjs";

export class CreateClientService {
  async execute({name, email, phone, cpf}) {
    const clientsRepository = new ClientRepository();
    const client = new Client({name, email, phone, cpf})
    return await clientsRepository.create(client)
  }
}